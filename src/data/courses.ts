export type CourseCategory =
  | 'basic' | 'excel' | 'web' | 'programming'
  | 'data' | 'tally' | 'design' | 'skill'
  | 'ai' | 'finance' | 'digital-marketing' | 'animation';

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  category: CourseCategory;
  duration: string;
  level: 'basic' | 'intermediate' | 'advanced' | 'all-levels';
  price: number;
  originalPrice: number;
  badge?: string;
  eligibility: string;
  careers: string[];
  icon: string;
  featured?: boolean;
  isNew?: boolean;
  rating?: number;
  students?: number;
  mode: 'online' | 'offline' | 'hybrid';
  syllabus?: string[];
  certification?: string;
}

export const allCourses: Course[] = [
  // BASIC
  { id:'bcc', slug:'bcc_course', title:'Basic Computer Course (BCC)', description:'Computer fundamentals, MS Office, Internet & email for absolute beginners.', category:'basic', duration:'3 Months', level:'basic', price:3500, originalPrice:5000, badge:'Popular', eligibility:'8th Pass', careers:['Data Entry Operator','Office Assistant'], icon:'💻', featured:true, rating:4.5, students:1800, mode:'offline', syllabus:['Computer Basics','MS Word','MS Excel','MS PowerPoint','Internet & Email'], certification:'ANITIO BCC Certificate' },
  { id:'dca', slug:'dca', title:'DCA – Diploma in Computer Applications', description:'One-year diploma covering MS Office, Tally, internet, and programming basics.', category:'basic', duration:'6 Months', level:'basic', price:7500, originalPrice:10000, badge:'Bestseller', eligibility:'10th Pass', careers:['Computer Operator','Data Entry'], icon:'🎓', featured:true, rating:4.6, students:2100, mode:'hybrid', syllabus:['MS Office Suite','Tally Basics','Internet','C Programming Intro'], certification:'ANITIO DCA Diploma' },
  { id:'adca', slug:'adca_course', title:'ADCA – Advanced Diploma in Computer Applications', description:'Advanced diploma with programming, accounting software, and office tools.', category:'basic', duration:'12 Months', level:'intermediate', price:12000, originalPrice:18000, badge:'Comprehensive', eligibility:'12th Pass', careers:['Office Manager','System Admin'], icon:'🏅', featured:true, rating:4.6, students:900, mode:'offline', certification:'ANITIO ADCA Diploma' },
  { id:'data-entry', slug:'data-entry', title:'Data Entry & Office Operations', description:'Speed typing, MS Excel data entry, office management for immediate employment.', category:'basic', duration:'2 Months', level:'basic', price:3000, originalPrice:4500, eligibility:'10th Pass', careers:['Data Entry Operator','Back Office Executive'], icon:'⌨️', rating:4.3, students:700, mode:'offline' },
  { id:'ms-office', slug:'certificate-in-ms-office', title:'Certificate in MS Office', description:'Complete MS Word, Excel, PowerPoint, Access and Outlook course.', category:'basic', duration:'2 Months', level:'basic', price:4000, originalPrice:6000, eligibility:'10th Pass', careers:['Office Assistant','Executive'], icon:'📄', rating:4.4, students:850, mode:'hybrid' },
  // EXCEL
  { id:'adv-excel', slug:'advanced_excel_mis_reporting_course', title:'Advanced Excel & MIS Reporting', description:'Master Excel, Pivot Tables, VLOOKUP, Power BI & MIS reporting for corporate jobs.', category:'excel', duration:'2 Months', level:'intermediate', price:6000, originalPrice:8500, badge:'Job-Oriented', eligibility:'12th Pass, Basic Excel', careers:['MIS Executive','Data Analyst'], icon:'📊', featured:true, rating:4.7, students:1500, mode:'hybrid', syllabus:['Advanced Formulas','Pivot Tables','VLOOKUP/HLOOKUP','Power BI Intro','Dashboard Design'], certification:'ANITIO Advanced Excel Certificate' },
  { id:'excel-vba', slug:'Excel-VBA', title:'Excel VBA & Macros', description:'Automate Excel with VBA programming — macros, user forms, and automated reports.', category:'excel', duration:'2 Months', level:'advanced', price:7000, originalPrice:10000, eligibility:'Excel Knowledge', careers:['MIS Developer','Automation Analyst'], icon:'🤖', rating:4.5, students:400, mode:'hybrid', isNew:true },
  { id:'excel-powerbi', slug:'Excel_PowerBI', title:'Excel + Power BI Combined', description:'Complete data analytics course covering Excel and Power BI for business intelligence.', category:'excel', duration:'3 Months', level:'intermediate', price:9000, originalPrice:13000, badge:'Hot', eligibility:'12th Pass', careers:['BI Analyst','Data Analyst'], icon:'📈', featured:true, rating:4.7, students:600, mode:'hybrid' },
  // WEB
  { id:'fullstack', slug:'full_stack_web_development', title:'Full Stack Web Development', description:'HTML, CSS, JavaScript, React, Node.js – build real projects for a web dev career.', category:'web', duration:'6 Months', level:'intermediate', price:18000, originalPrice:25000, badge:'Hot', eligibility:'12th Pass', careers:['Frontend Developer','Backend Developer','Full Stack Dev'], icon:'🌐', featured:true, rating:4.8, students:1100, mode:'hybrid', syllabus:['HTML5/CSS3','JavaScript ES6+','React.js','Node.js & Express','MongoDB','Git & GitHub'], certification:'ANITIO Full Stack Certificate', isNew:true },
  { id:'web-design', slug:'web_design_course', title:'Web Design (HTML, CSS & Bootstrap)', description:'Design beautiful responsive websites using HTML5, CSS3 and Bootstrap 5.', category:'web', duration:'3 Months', level:'basic', price:8000, originalPrice:12000, eligibility:'10th Pass', careers:['Web Designer','UI Developer'], icon:'🎨', rating:4.5, students:700, mode:'offline' },
  // PROGRAMMING
  { id:'python', slug:'python_programming_certification', title:'Python Programming Certification', description:'Master Python from basics to advanced — OOP, data structures & real projects.', category:'programming', duration:'4 Months', level:'intermediate', price:12000, originalPrice:16000, badge:'Trending', eligibility:'12th Pass', careers:['Python Developer','Backend Engineer'], icon:'🐍', featured:true, rating:4.7, students:900, mode:'hybrid', isNew:true },
  { id:'cpp', slug:'c_cpp_programming', title:'C / C++ Programming', description:'Foundation programming with C and object-oriented programming with C++.', category:'programming', duration:'3 Months', level:'basic', price:7000, originalPrice:10000, eligibility:'12th Pass (Math)', careers:['Junior Developer','Software Engineer'], icon:'⚙️', rating:4.4, students:600, mode:'offline' },
  // DATA
  { id:'data-analytics', slug:'data_analytics', title:'Data Analytics (Python + Excel)', description:'End-to-end data analytics with Python, Pandas, NumPy, Matplotlib and Excel.', category:'data', duration:'4 Months', level:'intermediate', price:14000, originalPrice:20000, badge:'High Demand', eligibility:'12th Pass, Basic Excel', careers:['Data Analyst','Business Analyst'], icon:'🔬', featured:true, rating:4.8, students:750, mode:'hybrid', isNew:true },
  { id:'sql', slug:'sql-data-analytics', title:'SQL for Data Analytics', description:'Master SQL queries, joins, stored procedures, and database management.', category:'data', duration:'2 Months', level:'intermediate', price:6000, originalPrice:9000, eligibility:'12th Pass', careers:['Database Analyst','SQL Developer'], icon:'🗄️', rating:4.5, students:500, mode:'hybrid' },
  { id:'power-bi', slug:'power-bi', title:'Power BI & Data Visualization', description:'Build interactive dashboards and reports with Microsoft Power BI.', category:'data', duration:'2 Months', level:'intermediate', price:8000, originalPrice:12000, eligibility:'Excel Knowledge', careers:['BI Developer','Data Analyst'], icon:'📊', rating:4.6, students:450, mode:'hybrid' },
  // TALLY
  { id:'tally', slug:'tally_prime_gst_accounting', title:'Tally Prime + GST Accounting', description:'Complete Tally Prime with GST filing, payroll, TDS & balance sheet.', category:'tally', duration:'3 Months', level:'basic', price:6000, originalPrice:9000, badge:'Job-Ready', eligibility:'12th Pass (Commerce)', careers:['Accountant','Tally Operator'], icon:'🧾', featured:true, rating:4.6, students:1300, mode:'offline' },
  { id:'tally-adv', slug:'tally-erp9-prime', title:'Advanced Tally ERP 9 + Prime', description:'Advanced Tally with inventory, payroll, GST returns, and audit features.', category:'tally', duration:'4 Months', level:'advanced', price:8000, originalPrice:12000, eligibility:'Tally Basic or 12th Commerce', careers:['Senior Accountant','Finance Executive'], icon:'💰', rating:4.5, students:800, mode:'offline' },
  // DESIGN
  { id:'graphic', slug:'graphic_designing', title:'Graphic Designing (CorelDRAW + Photoshop)', description:'Complete graphic design course with Adobe Photoshop, CorelDRAW and Illustrator.', category:'design', duration:'3 Months', level:'basic', price:8000, originalPrice:12000, badge:'Creative', eligibility:'10th Pass', careers:['Graphic Designer','Visual Artist'], icon:'🖌️', featured:true, rating:4.6, students:900, mode:'offline' },
  { id:'video-edit', slug:'video_editing_course', title:'Video Editing (Premiere Pro + After Effects)', description:'Professional video editing with Adobe Premiere Pro and motion graphics with After Effects.', category:'design', duration:'3 Months', level:'intermediate', price:10000, originalPrice:15000, eligibility:'12th Pass', careers:['Video Editor','Content Creator'], icon:'🎬', rating:4.6, students:650, mode:'offline' },
  { id:'animation-2d', slug:'2_d_animation', title:'2D Animation', description:'Create 2D animations for YouTube, social media and digital marketing.', category:'animation', duration:'4 Months', level:'intermediate', price:12000, originalPrice:18000, eligibility:'12th Pass, Creativity', careers:['2D Animator','Motion Designer'], icon:'✏️', rating:4.5, students:300, mode:'offline' },
  { id:'animation-3d', slug:'3_d_animation', title:'3D Animation & Modelling', description:'3D modelling, rigging and animation using Blender and Maya basics.', category:'animation', duration:'6 Months', level:'intermediate', price:15000, originalPrice:22000, eligibility:'12th Pass', careers:['3D Animator','VFX Artist'], icon:'🎭', rating:4.4, students:250, mode:'offline' },
  // DIGITAL MARKETING
  { id:'digital-mkt', slug:'digital_marketing', title:'Digital Marketing Professional', description:'SEO, Google Ads, Meta Ads, Social Media, Email Marketing & Analytics.', category:'digital-marketing', duration:'4 Months', level:'intermediate', price:12000, originalPrice:18000, badge:'Trending', eligibility:'12th Pass', careers:['Digital Marketer','SEO Specialist'], icon:'📱', featured:true, rating:4.7, students:800, mode:'hybrid', isNew:true },
  { id:'seo', slug:'seo-course', title:'SEO & Content Marketing', description:'Master on-page, off-page SEO, keyword research, content strategy and Google Analytics.', category:'digital-marketing', duration:'2 Months', level:'intermediate', price:7000, originalPrice:10000, eligibility:'12th Pass', careers:['SEO Analyst','Content Marketer'], icon:'🔍', rating:4.6, students:500, mode:'hybrid' },
  // AI
  { id:'ai', slug:'artificial-intelligence', title:'Artificial Intelligence & Machine Learning', description:'Intro to AI, ML algorithms, Python ML libraries, and real-world projects.', category:'ai', duration:'4 Months', level:'advanced', price:16000, originalPrice:24000, badge:'Future-Ready', eligibility:'12th Pass + Python Basics', careers:['ML Engineer','AI Analyst'], icon:'🤖', featured:true, rating:4.8, students:400, mode:'hybrid', isNew:true },
  { id:'prompt', slug:'prompt-engineering', title:'Prompt Engineering & AI Tools', description:'Master ChatGPT, Claude, Midjourney, and AI productivity tools for business.', category:'ai', duration:'1 Month', level:'basic', price:4000, originalPrice:6000, badge:'New', eligibility:'Any Graduate', careers:['AI Prompt Engineer','AI Consultant'], icon:'✨', rating:4.7, students:300, mode:'online', isNew:true },
  // FINANCE
  { id:'inv-banking', slug:'investment-banking', title:'Investment Banking & Finance', description:'Financial markets, equity, derivatives, valuation and investment analysis.', category:'finance', duration:'4 Months', level:'intermediate', price:15000, originalPrice:22000, eligibility:'B.Com/BBA/MBA', careers:['Investment Banker','Financial Analyst'], icon:'🏦', rating:4.5, students:350, mode:'hybrid' },
  { id:'stock', slug:'stock-market-trading', title:'Stock Market & Technical Analysis', description:'Learn equity trading, chart patterns, technical indicators and risk management.', category:'finance', duration:'3 Months', level:'intermediate', price:10000, originalPrice:15000, eligibility:'12th Pass', careers:['Stock Trader','Financial Advisor'], icon:'📉', rating:4.6, students:400, mode:'hybrid' },
  // SKILL
  { id:'skill-dev', slug:'skill_development_job_oriented_training', title:'Skill Development & Job Training', description:'Job-oriented training with resume building, mock interviews, and placement support.', category:'skill', duration:'2 Months', level:'all-levels', price:5000, originalPrice:8000, badge:'Placement', eligibility:'Any 12th Pass or Graduate', careers:['Corporate Employee','Entrepreneur'], icon:'🚀', featured:true, rating:4.5, students:1200, mode:'offline' },
];

export const featuredCourses = allCourses.filter(c => c.featured);

export const getCourseBySlug = (slug: string) =>
  allCourses.find(c => c.slug === slug || c.id === slug);

export const getCoursesByCategory = (cat: CourseCategory) =>
  allCourses.filter(c => c.category === cat);

export const CATEGORY_LABELS: Record<string, string> = {
  basic: 'Basic Computer',
  excel: 'Excel & MIS',
  web: 'Web Development',
  programming: 'Programming',
  data: 'Data Analytics',
  tally: 'Tally & Accounting',
  design: 'Design & Creative',
  animation: 'Animation & VFX',
  'digital-marketing': 'Digital Marketing',
  ai: 'AI & Machine Learning',
  finance: 'Finance & Banking',
  skill: 'Skill Development',
};
