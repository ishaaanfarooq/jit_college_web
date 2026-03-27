import OpenAI from 'openai';
import { JIT_SYSTEM_PROMPT } from '@/lib/chatbot-data';

const client = new OpenAI({
  apiKey: process.env.FIREWORKS_API_KEY,
  baseURL: 'https://api.fireworks.ai/inference/v1',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid request body', { status: 400 });
    }

    const formattedMessages = messages
      .filter((m: { role: string; content: string }) => m.role === 'user' || m.role === 'assistant')
      .map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      }));

    if (formattedMessages.length === 0) {
      return new Response('No messages provided', { status: 400 });
    }

    const stream = await client.chat.completions.create({
      model: 'accounts/fireworks/models/qwen3-8b',
      max_tokens: 1024,
      messages: [
        { role: 'system', content: JIT_SYSTEM_PROMPT },
        ...formattedMessages,
      ],
      stream: true,
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          let insideThink = false;
          let buffer = '';

          for await (const chunk of stream) {
            const raw = chunk.choices[0]?.delta?.content ?? '';
            if (!raw) continue;

            buffer += raw;

            // Strip <think>...</think> blocks (Qwen3 reasoning tokens)
            let output = '';
            let i = 0;
            while (i < buffer.length) {
              if (!insideThink) {
                const start = buffer.indexOf('<think>', i);
                if (start === -1) {
                  output += buffer.slice(i);
                  buffer = '';
                  break;
                } else {
                  output += buffer.slice(i, start);
                  insideThink = true;
                  i = start + 7;
                }
              } else {
                const end = buffer.indexOf('</think>', i);
                if (end === -1) {
                  // Still inside think block, keep buffering
                  buffer = buffer.slice(i);
                  i = buffer.length;
                  break;
                } else {
                  insideThink = false;
                  i = end + 8;
                  if (i >= buffer.length) { buffer = ''; break; }
                }
              }
            }

            if (output) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: output })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
