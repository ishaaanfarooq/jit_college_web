export type Department = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  about: string;
  established: string;
  intake: string;
  accreditation: string;
  img: string;
  color: string;
  faculty: { name: string; designation: string; qualification: string; specialization: string; img: string }[];
  achievements: { year: string; title: string; desc: string }[];
  events: { date: string; title: string; desc: string }[];
  labs: { name: string; desc: string }[];
  careers: string[];
};

const departments: Department[] = [
  {
    slug: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    tagline: 'Building the Software of Tomorrow',
    about: 'The Department of Computer Science & Engineering at JIT offers a rigorous B.E. programme focused on algorithms, software engineering, AI/ML, and full-stack development. Our graduates are equipped to solve real-world problems through cutting-edge technology.',
    established: '2007',
    intake: '120 seats',
    accreditation: 'NBA Accredited',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&h=600&fit=crop',
    color: 'from-blue-900',
    faculty: [
      { name: 'Dr. Rajesh Kumar', designation: 'HOD & Professor', qualification: 'Ph.D — IISc Bengaluru', specialization: 'Machine Learning & AI', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Sneha Patil', designation: 'Associate Professor', qualification: 'M.Tech — NIT Surathkal', specialization: 'Data Structures & Algorithms', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
      { name: 'Dr. Arun Shetty', designation: 'Assistant Professor', qualification: 'Ph.D — VTU', specialization: 'Cloud Computing & DevOps', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Divya Nair', designation: 'Assistant Professor', qualification: 'M.Tech — BITS Pilani', specialization: 'Cybersecurity & Networks', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    ],
    achievements: [
      { year: '2025', title: 'Smart India Hackathon Winners', desc: 'Team of 4 CSE students won 1st place and ₹1 lakh prize for AI-powered disaster management solution.' },
      { year: '2024', title: 'Google Summer of Code', desc: '3 students selected for GSoC 2024, contributing to open-source projects under Google mentorship.' },
      { year: '2024', title: 'ACM ICPC Regionals', desc: 'JIT CSE team qualified for ACM ICPC Asia Regional round for the second consecutive year.' },
      { year: '2023', title: 'Microsoft Imagine Cup', desc: 'Student project "FarmAI" reached national finals of Microsoft Imagine Cup 2023.' },
    ],
    events: [
      { date: 'Apr 20, 2026', title: 'CodeFest 2026', desc: '24-hour competitive programming contest open to all departments.' },
      { date: 'May 10, 2026', title: 'AI/ML Workshop', desc: 'Hands-on workshop on deep learning with TensorFlow by industry experts from Google.' },
      { date: 'Jun 5, 2026', title: 'Industry Tech Talk', desc: 'Senior engineers from Infosys discuss real-world software architecture challenges.' },
    ],
    labs: [
      { name: 'AI & Machine Learning Lab', desc: '50 GPU-enabled workstations with NVIDIA RTX 4080, TensorFlow, PyTorch, and CUDA toolkit.' },
      { name: 'Software Engineering Lab', desc: 'Industry-standard IDE environments, Git workflows, CI/CD pipelines, and Agile project tools.' },
      { name: 'Networking & Security Lab', desc: 'Cisco routers, Wireshark, Kali Linux setups for ethical hacking and network protocol study.' },
      { name: 'Data Science Lab', desc: 'R Studio, Jupyter Notebooks, Hadoop cluster, and Tableau for big data analytics.' },
    ],
    careers: ['Software Engineer', 'Data Scientist', 'Cloud Architect', 'Cybersecurity Analyst', 'AI/ML Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Product Manager'],
  },
  {
    slug: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    tagline: 'Connecting the World Through Technology',
    about: 'The ECE Department offers a comprehensive programme covering VLSI design, embedded systems, IoT, signal processing, and wireless communications. Students work on hands-on projects bridging hardware and software.',
    established: '2007',
    intake: '60 seats',
    accreditation: 'NBA Accredited',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=600&fit=crop',
    color: 'from-green-900',
    faculty: [
      { name: 'Dr. Prakash Rao', designation: 'HOD & Professor', qualification: 'Ph.D — IIT Madras', specialization: 'VLSI Design & Embedded Systems', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Anitha Krishnan', designation: 'Associate Professor', qualification: 'M.Tech — NIT Warangal', specialization: 'Signal Processing & DSP', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
      { name: 'Dr. Suresh Babu', designation: 'Assistant Professor', qualification: 'Ph.D — VTU', specialization: 'IoT & Wireless Networks', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Meena Iyer', designation: 'Assistant Professor', qualification: 'M.Tech — NITK', specialization: 'RF & Antenna Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    ],
    achievements: [
      { year: '2025', title: 'ISRO Student Satellite Programme', desc: 'Two ECE students selected for ISRO\'s Student Satellite Development Programme.' },
      { year: '2024', title: 'Texas Instruments Innovation Challenge', desc: 'Smart irrigation system project won regional round of TI Innovation Challenge.' },
      { year: '2024', title: 'Best Paper — IEEE Conference', desc: 'Faculty and student paper on IoT-based health monitoring won best paper at IEEE ICECS 2024.' },
      { year: '2023', title: 'Intel IoT Challenge', desc: 'Team "SmartGrid" reached finals of Intel IoT Student Challenge with smart energy meter project.' },
    ],
    events: [
      { date: 'Apr 25, 2026', title: 'VLSI Design Workshop', desc: 'Two-day workshop on Cadence tools and chip design flow by ISRO engineers.' },
      { date: 'May 15, 2026', title: 'IoT Hackathon', desc: 'Build IoT solutions using Raspberry Pi and Arduino kits provided on-site.' },
      { date: 'Jun 12, 2026', title: 'Industry Visit — Texas Instruments', desc: 'Campus visit to Texas Instruments Bengaluru for final year ECE students.' },
    ],
    labs: [
      { name: 'VLSI Design Lab', desc: 'Cadence Virtuoso, Xilinx FPGA boards, and Modelsim for chip design and simulation.' },
      { name: 'Embedded Systems Lab', desc: 'Arduino, Raspberry Pi, STM32 microcontrollers, and industry-grade oscilloscopes.' },
      { name: 'IoT & Wireless Lab', desc: 'LoRa, Zigbee, Wi-Fi modules, and cloud integration platforms for IoT prototyping.' },
      { name: 'Signal Processing Lab', desc: 'MATLAB, Simulink, DSP kits, and spectrum analyzers for signal analysis experiments.' },
    ],
    careers: ['VLSI Design Engineer', 'Embedded Systems Engineer', 'IoT Developer', 'RF Engineer', 'Telecom Engineer', 'Signal Processing Engineer', 'Hardware Engineer', 'Network Engineer'],
  },
  {
    slug: 'me',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    tagline: 'Designing the Machines That Move the World',
    about: 'The Mechanical Engineering Department offers deep expertise in design, manufacturing, thermodynamics, and robotics. Students gain hands-on exposure through well-equipped workshops and industry internships.',
    established: '2007',
    intake: '60 seats',
    accreditation: 'AICTE Approved',
    img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1400&h=600&fit=crop',
    color: 'from-orange-900',
    faculty: [
      { name: 'Dr. Venkat Reddy', designation: 'HOD & Professor', qualification: 'Ph.D — IIT Bombay', specialization: 'Manufacturing & CNC Machining', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Asha Menon', designation: 'Associate Professor', qualification: 'M.Tech — NIT Calicut', specialization: 'Thermodynamics & Heat Transfer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
      { name: 'Dr. Ravi Shankar', designation: 'Assistant Professor', qualification: 'Ph.D — VTU', specialization: 'CAD/CAM & Robotics', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Kiran Joshi', designation: 'Assistant Professor', qualification: 'M.Tech — UVCE Bengaluru', specialization: 'Fluid Mechanics & Hydraulics', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
    ],
    achievements: [
      { year: '2025', title: 'SAE BAJA India', desc: 'JIT ME team built and raced an all-terrain vehicle at SAE BAJA India 2025, finishing in top 20.' },
      { year: '2024', title: 'DRDO Project Grant', desc: 'Faculty received ₹8 lakh research grant from DRDO for lightweight composite materials project.' },
      { year: '2024', title: 'National Robotics Championship', desc: 'Student robot "TitanArm" won 2nd place at National Robotics Championship, Pune.' },
      { year: '2023', title: 'Best Innovation — L&T EduTech', desc: 'Smart conveyor belt design won Best Innovation award at L&T EduTech competition.' },
    ],
    events: [
      { date: 'Apr 18, 2026', title: 'CAD Design Competition', desc: 'Solidworks and AutoCAD design challenge for ME students with prizes from L&T.' },
      { date: 'May 8, 2026', title: '3D Printing Workshop', desc: 'Hands-on FDM and SLA printing workshop covering product prototyping.' },
      { date: 'Jun 20, 2026', title: 'Industry Visit — Toyota Kirloskar', desc: 'Plant visit to Toyota Kirloskar Motors for final year ME students.' },
    ],
    labs: [
      { name: 'CNC & Manufacturing Lab', desc: 'CNC lathe, milling machines, and advanced manufacturing equipment from DMG MORI.' },
      { name: 'CAD/CAM Lab', desc: 'Solidworks, CATIA, AutoCAD, and ANSYS for design and simulation.' },
      { name: 'Thermal Engineering Lab', desc: 'Heat exchangers, IC engines, and refrigeration test rigs for thermodynamics experiments.' },
      { name: '3D Printing & Prototyping Lab', desc: 'FDM, SLA printers, and laser cutting machines for rapid prototyping.' },
    ],
    careers: ['Design Engineer', 'Manufacturing Engineer', 'Robotics Engineer', 'Automotive Engineer', 'HVAC Engineer', 'Aerospace Engineer', 'Quality Engineer', 'R&D Engineer'],
  },
  {
    slug: 'ce',
    name: 'Civil Engineering',
    shortName: 'Civil',
    tagline: 'Building Infrastructure for a Better Tomorrow',
    about: 'Civil Engineering at JIT prepares students for careers in structural design, construction management, environmental engineering, and urban planning. We emphasise sustainable and resilient infrastructure development.',
    established: '2007',
    intake: '60 seats',
    accreditation: 'AICTE Approved',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=600&fit=crop',
    color: 'from-yellow-900',
    faculty: [
      { name: 'Dr. Mohan Das', designation: 'HOD & Professor', qualification: 'Ph.D — IIT Delhi', specialization: 'Structural Engineering & RCC Design', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Rekha Srinivas', designation: 'Associate Professor', qualification: 'M.Tech — NIT Mysore', specialization: 'Geotechnical & Foundation Engineering', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
      { name: 'Dr. Ashok Kulkarni', designation: 'Assistant Professor', qualification: 'Ph.D — VTU', specialization: 'Environmental & Water Engineering', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Priya Hegde', designation: 'Assistant Professor', qualification: 'M.Tech — BIT Bengaluru', specialization: 'Transportation & Highway Engineering', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
    ],
    achievements: [
      { year: '2025', title: 'CREDAI Student Design Award', desc: 'Sustainable housing design by JIT Civil students won CREDAI Student Award 2025.' },
      { year: '2024', title: 'BBMP Infrastructure Project', desc: 'Students assisted BBMP in storm water drain design under a live project internship.' },
      { year: '2024', title: 'ICI Student Quiz Winners', desc: 'JIT team won the Indian Concrete Institute regional student quiz competition.' },
      { year: '2023', title: 'Best Research Paper — ASCE', desc: 'Faculty paper on green concrete won best paper at ASCE India annual conference.' },
    ],
    events: [
      { date: 'Apr 22, 2026', title: 'Structures Design Competition', desc: 'Build and test model bridges using provided materials — judged on load capacity.' },
      { date: 'May 20, 2026', title: 'AutoCAD & STAAD Pro Workshop', desc: 'Structural analysis and drafting workshop using industry-standard tools.' },
      { date: 'Jun 15, 2026', title: 'Site Visit — Metro Rail Project', desc: 'Guided visit to Bengaluru Metro Phase 3 construction site.' },
    ],
    labs: [
      { name: 'Structural Analysis Lab', desc: 'Universal Testing Machine, concrete cube testing, and reinforcement testing equipment.' },
      { name: 'Soil Mechanics Lab', desc: 'Triaxial shear, consolidation, and compaction test equipment for geotechnical studies.' },
      { name: 'Fluid Mechanics Lab', desc: 'Flow channels, hydraulic bench, and pipe network apparatus.' },
      { name: 'Survey & GIS Lab', desc: 'Total stations, GPS equipment, QGIS and AutoCAD Civil 3D software.' },
    ],
    careers: ['Structural Engineer', 'Site Engineer', 'Urban Planner', 'Environmental Engineer', 'Project Manager', 'Geotechnical Engineer', 'Highway Engineer', 'Construction Manager'],
  },
  {
    slug: 'ise',
    name: 'Information Science & Engineering',
    shortName: 'ISE',
    tagline: 'Turning Data into Decisions',
    about: 'The ISE Department focuses on information systems, data science, cloud computing, and software development. Students are trained in both theoretical foundations and practical industry tools.',
    established: '2012',
    intake: '60 seats',
    accreditation: 'AICTE Approved',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=600&fit=crop',
    color: 'from-purple-900',
    faculty: [
      { name: 'Dr. Kavitha Rao', designation: 'HOD & Professor', qualification: 'Ph.D — Bangalore University', specialization: 'Data Mining & Big Data', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Nikhil Bhat', designation: 'Associate Professor', qualification: 'M.Tech — RV College', specialization: 'Cloud Computing & AWS', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
      { name: 'Dr. Suma Hegde', designation: 'Assistant Professor', qualification: 'Ph.D — VTU', specialization: 'Information Security & Cryptography', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Rohan Patel', designation: 'Assistant Professor', qualification: 'M.Tech — PESIT', specialization: 'Web Technologies & Full Stack', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
    ],
    achievements: [
      { year: '2025', title: 'AWS DeepRacer Student League', desc: 'ISE student team ranked 3rd nationally in AWS DeepRacer autonomous racing competition.' },
      { year: '2024', title: 'Flipkart Grid Challenge', desc: 'Team qualified for Flipkart Grid 5.0 Software Challenge among 100,000+ participants.' },
      { year: '2024', title: 'GitHub Campus Expert', desc: 'ISE student selected as GitHub Campus Expert, one of only 50 from India.' },
      { year: '2023', title: 'Best Project — Infosys InStep', desc: 'ISE intern project on predictive analytics won Best Project at Infosys InStep 2023.' },
    ],
    events: [
      { date: 'Apr 28, 2026', title: 'Cloud Computing Bootcamp', desc: 'Two-day AWS cloud practitioner certification prep bootcamp.' },
      { date: 'May 18, 2026', title: 'Data Science Hackathon', desc: 'Solve real-world datasets using Python, Pandas, and machine learning models.' },
      { date: 'Jun 8, 2026', title: 'Web Dev Sprint', desc: '12-hour web development challenge — build a full-stack app from scratch.' },
    ],
    labs: [
      { name: 'Cloud & DevOps Lab', desc: 'AWS, Azure, Docker, Kubernetes environments for cloud-native development.' },
      { name: 'Data Analytics Lab', desc: 'Python, R, Tableau, Power BI, and Hadoop for data analysis and visualization.' },
      { name: 'Information Security Lab', desc: 'Penetration testing tools, firewall configurations, and SIEM systems.' },
      { name: 'Web & Mobile Dev Lab', desc: 'React, Node.js, Flutter, and Firebase for full-stack and mobile development.' },
    ],
    careers: ['Data Analyst', 'Cloud Engineer', 'Full Stack Developer', 'Database Administrator', 'Information Security Analyst', 'Business Intelligence Developer', 'Systems Analyst', 'API Developer'],
  },
  {
    slug: 'mba',
    name: 'Master of Business Administration',
    shortName: 'MBA',
    tagline: 'Leading Business with Vision and Purpose',
    about: 'The MBA programme at JIT is designed to develop business leaders with analytical thinking, strategic vision, and ethical values. With specializations in Finance, Marketing, HR, and Operations, our graduates lead in diverse industries.',
    established: '2012',
    intake: '60 seats',
    accreditation: 'AICTE & UGC Approved',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&h=600&fit=crop',
    color: 'from-red-900',
    faculty: [
      { name: 'Prof. Lakshmi Sharma', designation: 'HOD & Professor', qualification: 'MBA — IIM Ahmedabad', specialization: 'Marketing Strategy & Brand Management', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
      { name: 'Dr. Arjun Mehta', designation: 'Associate Professor', qualification: 'Ph.D — Symbiosis, Pune', specialization: 'Financial Management & Investment', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
      { name: 'Prof. Geetha Krishnamurthy', designation: 'Assistant Professor', qualification: 'MBA — XLRI Jamshedpur', specialization: 'Human Resource Management & OB', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
      { name: 'Dr. Sanjay Verma', designation: 'Assistant Professor', qualification: 'Ph.D — IIM Bangalore', specialization: 'Operations & Supply Chain Management', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
    ],
    achievements: [
      { year: '2025', title: 'IIM-B Case Study Competition', desc: 'JIT MBA team won 2nd place at IIM Bangalore National Case Study Competition 2025.' },
      { year: '2024', title: 'CII Young Leader Award', desc: 'MBA student selected for CII Young Leaders programme, one of 20 from Karnataka.' },
      { year: '2024', title: 'Best B-Plan — Nasscom', desc: 'Startup idea "EduReach" won Best Business Plan at Nasscom Emerge 50 student event.' },
      { year: '2023', title: 'Summer Internship Excellence', desc: '85% of MBA batch completed internships at Fortune 500 companies including TCS, HUL, and HDFC.' },
    ],
    events: [
      { date: 'Apr 30, 2026', title: 'Annual B-Plan Competition', desc: 'Present your startup idea to a panel of VCs and industry leaders. Prize pool: ₹50,000.' },
      { date: 'May 25, 2026', title: 'Finance & Investment Summit', desc: 'Industry experts discuss stock markets, financial modelling, and investment strategies.' },
      { date: 'Jun 18, 2026', title: 'Leadership Conclave 2026', desc: 'Panel discussion with CEOs and senior leaders from top FMCG and IT companies.' },
    ],
    labs: [
      { name: 'Business Analytics Lab', desc: 'SAP ERP, Tableau, Excel advanced analytics, and Bloomberg terminal access.' },
      { name: 'Digital Marketing Lab', desc: 'Google Ads, Meta Ads Manager, SEO tools, and social media analytics platforms.' },
      { name: 'Finance Simulation Lab', desc: 'Stock market simulators, financial modelling tools, and real-time market data feeds.' },
      { name: 'Conference & Case Study Room', desc: 'Harvard Business Review case study library and collaborative discussion spaces.' },
    ],
    careers: ['Marketing Manager', 'Financial Analyst', 'HR Business Partner', 'Business Development Manager', 'Operations Manager', 'Consultant', 'Product Manager', 'Entrepreneur'],
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find(d => d.slug === slug);
}

export function getAllDepartmentSlugs(): string[] {
  return departments.map(d => d.slug);
}

export default departments;
