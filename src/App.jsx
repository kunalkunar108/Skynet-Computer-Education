import { useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BookOpen, BriefcaseBusiness,
  CheckCircle2, ChevronDown, Clock3, Code2, Computer, GraduationCap, Instagram,
  Laptop, Mail, MapPin, Menu, Monitor, Phone, Send, ShieldCheck, Sparkles,
  Users, Wifi, X, Zap
} from 'lucide-react';

const PHONE = '917739574670';
const courses = [
  { slug:'adca', name:'ADCA', full:'Advanced Diploma in Computer Application', category:'Diploma programmes', icon:Monitor, desc:'Build a broad foundation in everyday computer applications and practical digital skills.', learn:['Computer fundamentals','Office productivity tools','Internet and digital work','Practical computer assignments'], tag:'Popular choice' },
  { slug:'dca', name:'DCA', full:'Diploma in Computer Application', category:'Diploma programmes', icon:Computer, desc:'Develop confidence with computers, essential applications and common digital tasks.', learn:['Computer fundamentals','Office applications','File and data management','Internet essentials'] },
  { slug:'pgdca', name:'PGDCA', full:'Post Graduate Diploma in Computer Application', category:'Diploma programmes', icon:GraduationCap, desc:'Explore a broader computer applications curriculum. Ask the institute for eligibility and syllabus details.', learn:['Computer application concepts','Productivity tools','Practical learning','Course-specific modules'] },
  { slug:'dctt', name:'DCTT', full:'DCTT', category:'Diploma programmes', icon:BookOpen, desc:'Ask the institute for the expanded course name, eligibility and current curriculum.', learn:['Course outline shared on enquiry','Practical learning details','Assessment information'] },
  { slug:'cfa', name:'CFA', full:'CFA', category:'Professional courses', icon:BriefcaseBusiness, desc:'Get the current course outline and eligibility information directly from the institute.', learn:['Course-specific fundamentals','Practical sessions','Assessment details'] },
  { slug:'tally-gst', name:'Tally with GST', full:'Tally Accounting with GST', category:'Professional courses', icon:BriefcaseBusiness, desc:'Learn the fundamentals of computerized accounting and GST workflows.', learn:['Accounting fundamentals','Company and ledger concepts','Voucher entry','GST concepts and reports'] },
  { slug:'dtp', name:'DTP', full:'Desktop Publishing', category:'Professional courses', icon:Sparkles, desc:'Explore the basics of page layout and document design for print and digital use.', learn:['Page layout fundamentals','Typography basics','Document design','Practical design exercises'] },
  { slug:'ms-office', name:'MS Office', full:'Microsoft Office', category:'Short-term skills', icon:Monitor, desc:'Build practical skills for documents, spreadsheets and presentations.', learn:['Word processing','Spreadsheets','Presentations','File management'] },
  { slug:'internet', name:'Internet', full:'Internet & Digital Skills', category:'Short-term skills', icon:Wifi, desc:'Understand useful internet tools, online communication and safe browsing basics.', learn:['Web browsing','Email essentials','Online forms','Digital safety basics'] },
  { slug:'c-cpp', name:'C & C++', full:'C and C++ Programming', category:'Programming', icon:Code2, desc:'Get introduced to programming logic, problem solving and foundational coding concepts.', learn:['Programming fundamentals','Variables and data types','Conditions and loops','Functions and problem solving'] },
  { slug:'hindi-typing', name:'Hindi Typing', full:'Hindi Computer Typing', category:'Typing', icon:BookOpen, desc:'Practise Hindi typing with structured exercises and regular speed-building practice.', learn:['Keyboard familiarity','Accuracy practice','Speed-building exercises'] },
  { slug:'english-typing', name:'English Typing', full:'English Computer Typing', category:'Typing', icon:BookOpen, desc:'Improve typing accuracy and speed through guided computer practice.', learn:['Keyboard familiarity','Touch-typing basics','Accuracy practice','Speed-building exercises'] }
];

const wa = (message='Hello, I would like to know more about courses and admissions at Skynet Computer Education.') => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
const image = {
  hero:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=85',
  lab:'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85',
  study:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85',
  classroom:'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85',
  coding:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85',
  desk:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85'
};

function Logo(){return <Link to="/" className="brand" aria-label="Skynet Computer Education home"><span className="brand-mark"><Monitor size={23}/><i/></span><span className="brand-copy"><b>SKYNET</b><small>COMPUTER EDUCATION</small></span></Link>}
function Header(){
  const [open,setOpen]=useState(false); const loc=useLocation();
  const close=()=>setOpen(false);
  const nav=[['Home','/'],['About us','/about'],['Courses','/courses'],['Faculty','/faculty'],['Facilities','/facilities'],['Gallery','/gallery'],['Contact','/contact']];
  return <><div className="topline"><div className="container topline-inner"><span><MapPin size={13}/> Rasikpur, Dumka, Jharkhand</span><div><a href="tel:+917739574670"><Phone size={13}/> +91 77395 74670</a><span className="top-hours">Mon – Sat · 6:00 AM – 7:30 PM</span></div></div></div><header className="header"><div className="container nav-wrap"><Logo/><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav-links open':'nav-links'}>{nav.map(([label,path])=><NavLink key={path} to={path} end={path==='/'} onClick={close}>{label}</NavLink>)}<a className="nav-cta" href={wa('Hello, I want to enquire about admission at Skynet Computer Education.')} target="_blank" rel="noreferrer" onClick={close}>Enquire now <ArrowUpRight size={16}/></a></nav></div></header></>
}
function Footer(){return <footer className="footer"><div className="container footer-grid"><div className="footer-about"><Logo/><p>Practical computer education for a more confident digital future. Visit Skynet Computer Education in Rasikpur, Dumka.</p><div className="socials"><a href="https://www.facebook.com/SKYNETCOMPUTERDUMKA/" target="_blank" rel="noreferrer">f</a><a href="https://www.instagram.com/skynet_computer_education/" target="_blank" rel="noreferrer"><Instagram size={17}/></a></div></div><div><h4>Explore</h4><Link to="/about">About the institute</Link><Link to="/courses">All courses</Link><Link to="/faculty">Our faculty</Link><Link to="/facilities">Facilities</Link><Link to="/gallery">Gallery</Link></div><div><h4>Popular courses</h4>{courses.slice(0,5).map(c=><Link key={c.slug} to={`/courses/${c.slug}`}>{c.name}</Link>)}</div><div><h4>Get in touch</h4><a href="tel:+917739574670"><Phone size={15}/> +91 77395 74670</a><a href="mailto:skynetdumka@gmail.com"><Mail size={15}/> skynetdumka@gmail.com</a><p><MapPin size={15}/> S.P. College Road, Rasikpur, Banderjori, Dumka, Jharkhand – 814101</p><span className="footer-hours">Mon – Sat: 6:00 AM – 7:30 PM<br/>Sunday: Closed</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Skynet Computer Education. All rights reserved.</span><span>Learn today. Build tomorrow.</span></div></footer>}
function WhatsAppFloat(){return <a className="whatsapp-float" href={wa()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Send size={21}/><span>Chat with us</span></a>}
function PageIntro({eyebrow,title,desc}){return <section className="page-intro"><div className="container"><div className="eyebrow"><span/> {eyebrow}</div><h1>{title}</h1><p>{desc}</p></div></section>}
function SectionTitle({eyebrow,title,desc,center=false}){return <div className={center?'section-title center':'section-title'}><div className="eyebrow"><span/>{eyebrow}</div><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>}
function CTA({title='Ready to take your next step?',desc='Talk to our team to find a course that fits your learning goals.',button='Enquire on WhatsApp'}){return <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow light"><span/> START LEARNING</div><h2>{title}</h2><p>{desc}</p></div><a className="btn btn-white" href={wa()} target="_blank" rel="noreferrer">{button} <ArrowUpRight size={17}/></a></div></section>}
function CourseCard({course}){const Icon=course.icon;return <article className="course-card"><div className="course-card-top"><span className="course-icon"><Icon size={22}/></span><span className="course-tag">{course.category}</span></div><h3>{course.name}</h3><p className="course-full">{course.full}</p><p>{course.desc}</p><Link className="text-link" to={`/courses/${course.slug}`}>Explore course <ArrowRight size={16}/></Link></article>}
function Home(){
 return <><section className="hero"><div className="hero-bg" style={{backgroundImage:`url(${image.hero})`}}/><div className="hero-shade"/><div className="container hero-content"><div className="hero-copy"><div className="hero-kicker"><Sparkles size={15}/> YOUR LEARNING JOURNEY STARTS HERE</div><h1>Learn skills.<br/><em>Shape your</em> future.</h1><p>Build practical computer skills with supportive guidance at Skynet Computer Education, Dumka.</p><div className="hero-actions"><Link className="btn btn-primary" to="/courses">Explore courses <ArrowRight size={17}/></Link><a className="btn btn-outline-light" href={wa()} target="_blank" rel="noreferrer">Talk to our team <ArrowUpRight size={17}/></a></div><div className="hero-proof"><span><CheckCircle2 size={16}/> Practical learning</span><span><CheckCircle2 size={16}/> Individual computer access</span></div></div><div className="hero-note"><span className="note-icon"><GraduationCap size={21}/></span><div><b>Start with the right skills</b><small>Find a course that matches your goals.</small></div><ArrowUpRight size={18}/></div></div><div className="hero-bottom"><div className="container hero-bottom-inner"><span>COMPUTER EDUCATION · DUMKA</span><span>LEARN WITH PURPOSE <ArrowDownRight size={14}/></span></div></div></section>
 <section className="quick-facts"><div className="container facts-grid"><div><Monitor/><b>Individual systems</b><span>Dedicated computer access during lab sessions</span></div><div><Zap/><b>Learning facilities</b><span>AC classrooms and UPS backup</span></div><div><BookOpen/><b>Study essentials</b><span>Course notes and learning materials</span></div><div><Award/><b>Course certification</b><span>Ask us about certificate details</span></div></div></section>
 <section className="section"><div className="container"><div className="split-heading"><SectionTitle eyebrow="LEARN SOMETHING NEW" title="Courses for your next chapter" desc="From computer fundamentals to accounting, design, programming and typing — explore the learning paths available at Skynet."/><Link className="text-link desktop-link" to="/courses">View all courses <ArrowRight size={16}/></Link></div><div className="course-grid">{courses.slice(0,6).map(c=><CourseCard key={c.slug} course={c}/>)}</div><Link className="btn btn-dark mobile-full" to="/courses">Explore all courses <ArrowRight size={17}/></Link></div></section>
 <section className="section section-soft"><div className="container story-grid"><div className="story-image"><img src={image.lab} alt="Modern computer workspace" loading="lazy"/><div className="image-caption"><span className="caption-dot"/> LEARN BY DOING</div></div><div className="story-copy"><SectionTitle eyebrow="WHY SKYNET" title="A place to practise, learn and grow" desc="Learning computers is more than watching a screen. Build confidence through guided lessons and practical time at the computer."/><ul className="check-list"><li><CheckCircle2/> Individual computer systems during lab sessions</li><li><CheckCircle2/> AC classrooms with UPS power backup</li><li><CheckCircle2/> Study notes and course essentials</li><li><CheckCircle2/> Hindi and English typing practice</li></ul><Link className="text-link" to="/facilities">Explore our facilities <ArrowRight size={16}/></Link></div></div></section>
 <section className="section"><div className="container"><SectionTitle eyebrow="YOUR LEARNING OPTIONS" title="Build skills that stay useful" desc="Choose an area to explore, then speak with our team about the current syllabus and course details." center/><div className="path-grid"><Link to="/courses/adca"><span className="path-number">01</span><Laptop/><h3>Computer applications</h3><p>Build everyday digital and office skills.</p><ArrowUpRight/></Link><Link to="/courses/tally-gst"><span className="path-number">02</span><BriefcaseBusiness/><h3>Accounting skills</h3><p>Explore accounting and GST workflows.</p><ArrowUpRight/></Link><Link to="/courses/c-cpp"><span className="path-number">03</span><Code2/><h3>Programming</h3><p>Start learning logic and coding basics.</p><ArrowUpRight/></Link><Link to="/courses/english-typing"><span className="path-number">04</span><BookOpen/><h3>Typing practice</h3><p>Improve accuracy and typing confidence.</p><ArrowUpRight/></Link></div></div></section>
 <section className="section section-navy"><div className="container faculty-teaser"><div><div className="eyebrow light"><span/> GUIDANCE THAT MATTERS</div><h2>Learn with guidance<br/>from experienced instructors.</h2><p>Meet the teaching team and find the right support for your learning journey.</p><Link className="btn btn-white" to="/faculty">Meet our faculty <ArrowRight size={17}/></Link></div><div className="faculty-names"><div><span>01</span><b>Vivek Sir</b><small>Faculty</small></div><div><span>02</span><b>Nathanial Sir</b><small>Faculty</small></div><div><span>03</span><b>Vidyut Sir</b><small>Faculty</small></div></div></div></section>
 <section className="section"><div className="container contact-strip"><div className="contact-strip-icon"><MapPin size={25}/></div><div><div className="eyebrow">VISIT OUR INSTITUTE</div><h2>Find Skynet in Rasikpur, Dumka</h2><p>S.P. College Road, Near Central Bank, Banderjori, Dumka, Jharkhand – 814101</p></div><Link className="btn btn-dark" to="/contact">Get directions <ArrowUpRight size={17}/></Link></div></section><CTA title="Your next skill starts with one conversation." desc="Ask about available courses, syllabus, timings and admissions." button="Enquire today"/></>
}
function About(){return <><PageIntro eyebrow="ABOUT SKYNET" title="Helping learners build confidence with computers." desc="Skynet Computer Education is a computer training institute based in Rasikpur, Dumka, focused on practical computer learning."/><section className="section"><div className="container story-grid"><div className="story-image tall"><img src={image.study} alt="Students learning together" /></div><div className="story-copy"><SectionTitle eyebrow="WHO WE ARE" title="Practical learning for a digital world" desc="Our aim is to make computer education approachable and useful. Students can explore foundational computer applications, accounting tools, design, programming and typing courses."/><p className="body-copy">Whether you are starting from the basics or looking to build a specific skill, speak with the institute to understand the current course structure and choose a suitable path.</p><a className="btn btn-primary" href={wa()} target="_blank" rel="noreferrer">Talk to the institute <ArrowUpRight size={17}/></a></div></div></section><section className="section section-soft"><div className="container"><SectionTitle eyebrow="WHAT MATTERS HERE" title="A supportive place to learn" center/><div className="values-grid"><div><ShieldCheck/><h3>Clear guidance</h3><p>Get course information directly from the institute before enrolling.</p></div><div><Laptop/><h3>Practical access</h3><p>Individual computer systems are provided during lab sessions.</p></div><div><Users/><h3>Learning support</h3><p>Learn with guidance from the institute's teaching team.</p></div></div></div></section><CTA/></>}
function Courses(){const [filter,setFilter]=useState('All courses');const cats=['All courses','Diploma programmes','Professional courses','Short-term skills','Programming','Typing'];const shown=filter==='All courses'?courses: courses.filter(c=>c.category===filter);return <><PageIntro eyebrow="COURSE CATALOGUE" title="Find the skills you want to build." desc="Explore computer application, accounting, design, programming and typing courses offered by Skynet Computer Education."/><section className="section"><div className="container"><div className="filter-row">{cats.map(x=><button key={x} className={filter===x?'filter-chip active':'filter-chip'} onClick={()=>setFilter(x)}>{x}</button>)}</div><div className="course-grid">{shown.map(c=><CourseCard key={c.slug} course={c}/>)}</div><div className="notice-box"><ShieldCheck/><div><b>Need exact course details?</b><p>Course fees, duration, eligibility and the latest syllabus are confirmed by the institute. Contact the team before enrolling.</p></div></div></div></section><CTA title="Not sure which course to choose?" desc="Tell us what you want to learn. Our team can help you explore the available options."/></>}
function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <PageIntro
        eyebrow="COURSE NOT FOUND"
        title="We couldn't find that course."
        desc="Browse the complete course catalogue to explore available options."
      />
    );
  }

  const Icon = course.icon;

  return (
    <>
      <PageIntro
        eyebrow={course.category.toUpperCase()}
        title={course.name}
        desc={course.full}
      />
      <section className="section">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-main">
              <div className="detail-icon">
                <Icon size={30} />
              </div>
              <div className="eyebrow">ABOUT THIS COURSE</div>
              <h2>{course.full}</h2>
              <p className="body-copy">{course.desc}</p>
              <h3>Learning areas</h3>
              <p className="muted">
                The topics below are indicative learning areas, not a confirmed
                institute syllabus. Ask the institute for the current module list.
              </p>
              <ul className="check-list">
                {course.learn.map((item) => (
                  <li key={item}>
                    <CheckCircle2 />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="notice-box">
                <Clock3 />
                <div>
                  <b>Duration, fees and eligibility</b>
                  <p>
                    Contact the institute for current details. These details
                    have not yet been confirmed for publication.
                  </p>
                </div>
              </div>
            </div>

            <aside className="enquiry-card">
              <span className="course-tag">{course.category}</span>
              <h3>Interested in {course.name}?</h3>
              <p>
                Get the latest syllabus, duration, fees and admission information
                directly from the institute.
              </p>
              <a
                className="btn btn-primary full"
                href={wa(`Hello, I am interested in the ${course.name} course at Skynet Computer Education. Please share the current syllabus, duration, fees and admission details.`)}
                target="_blank"
                rel="noreferrer"
              >
                Enquire about this course <ArrowUpRight size={17} />
              </a>
              <a className="phone-link" href="tel:+917739574670">
                <Phone size={16} /> +91 77395 74670
              </a>
              <Link className="text-link" to="/courses">
                ← Back to all courses
              </Link>
            </aside>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
function Faculty(){return <><PageIntro eyebrow="MEET THE TEAM" title="Guidance for every step of learning." desc="Get to know the instructors at Skynet Computer Education. Faculty profiles and photographs can be expanded with verified information."/><section className="section"><div className="container faculty-grid">{['Vivek Sir','Nathanial Sir','Vidyut Sir'].map((n,i)=><article className="faculty-card" key={n}><div className="faculty-placeholder"><Users size={48}/><span>FACULTY PROFILE</span></div><div className="faculty-card-copy"><span className="eyebrow">INSTRUCTOR · 0{i+1}</span><h3>{n}</h3><p>Computer education faculty at Skynet. Contact the institute for subjects and class schedules.</p></div></article>)}</div><p className="small-note">Faculty photographs, qualifications and subject specializations will be added after confirmation by the institute.</p></section><CTA/></>}
function Facilities(){const items=[['Individual computer systems','Each student is provided an individual computer during lab sessions.',image.lab,Monitor],['AC classrooms','A more comfortable classroom environment for focused learning.',image.classroom,Zap],['UPS power backup','UPS support helps keep practical sessions running during power interruptions.',image.desk,ShieldCheck],['Study material','Free notes and course essentials are provided as described by the institute.',image.study,BookOpen]];return <><PageIntro eyebrow="LEARNING ENVIRONMENT" title="Facilities that support practical learning." desc="Explore the facilities shared by Skynet Computer Education. Actual institute photographs will replace the illustrative images before launch."/><section className="section"><div className="container facility-list">{items.map(([title,desc,img,Icon],i)=><article className={i%2?'facility-row reverse':'facility-row'} key={title}><div className="facility-photo"><img src={img} alt={title}/></div><div className="facility-copy"><span className="facility-index">0{i+1}</span><Icon/><h2>{title}</h2><p>{desc}</p></div></article>)}</div></section><CTA/></>}
function Gallery(){const imgs=[image.lab,image.classroom,image.study,image.coding,image.desk,image.hero];return <><PageIntro eyebrow="CAMPUS GALLERY" title="A glimpse into learning at Skynet." desc="This gallery currently uses illustrative images. The institute's real classrooms, computer lab, events and student photographs will be added after collection and approval."/><section className="section"><div className="container gallery-grid">{imgs.map((src,i)=><div className={i===0||i===5?'gallery-item large':'gallery-item'} key={src}><img src={src} alt={['Computer workspace','Classroom','Students learning','Technology teamwork','Computer workstation','Digital learning'][i]}/><span>{['Computer lab','Classroom','Learning together','Technology','Computer practice','Learning'][i]}</span></div>)}</div><div className="container gallery-note"><Sparkles/><span>Institute photographs coming soon — these sample visuals are placeholders, not photographs of the Skynet campus.</span></div></section><CTA/></>}
function Contact(){const [name,setName]=useState('');const [mobile,setMobile]=useState('');const [selected,setSelected]=useState('ADCA');const [message,setMessage]=useState('');const submit=e=>{e.preventDefault();const text=`Hello Skynet Computer Education, I want to enquire.\nName: ${name}\nMobile: ${mobile}\nCourse: ${selected}\nMessage: ${message||'Please share admission details.'}`;window.open(wa(text),'_blank','noopener,noreferrer')};return <><PageIntro eyebrow="CONTACT & ADMISSIONS" title="Let's talk about your learning goals." desc="Contact Skynet Computer Education for course information, current syllabus, fees, timings and admissions."/><section className="section"><div className="container contact-layout"><div className="contact-details"><div className="contact-detail"><span><Phone/></span><div><small>CALL OR WHATSAPP</small><a href="tel:+917739574670">+91 77395 74670</a></div></div><div className="contact-detail"><span><Mail/></span><div><small>EMAIL</small><a href="mailto:skynetdumka@gmail.com">skynetdumka@gmail.com</a></div></div><div className="contact-detail"><span><MapPin/></span><div><small>VISIT THE INSTITUTE</small><p>S.P. College Road, Rasikpur, Banderjori, Dumka, Jharkhand – 814101<br/><b>Near Central Bank</b></p></div></div><div className="contact-detail"><span><Clock3/></span><div><small>OPENING HOURS</small><p>Monday – Saturday: 6:00 AM – 7:30 PM<br/>Sunday: Closed</p></div></div><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Skynet+Computer+Education+Rasikpur+Dumka+Jharkhand" target="_blank" rel="noreferrer">Open location in Google Maps <ArrowUpRight size={16}/></a><div className="map-frame"><iframe title="Map showing Skynet Computer Education in Rasikpur, Dumka" src="https://www.google.com/maps?q=Skynet%20Computer%20Education%20Rasikpur%20Dumka%20Jharkhand&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div><form className="contact-form" onSubmit={submit}><div className="eyebrow">ADMISSION ENQUIRY</div><h2>How can we help?</h2><p>Fill in your details. We'll open WhatsApp with your enquiry ready to send.</p><label>Your name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your full name"/></label><label>Mobile number<input required type="tel" pattern="[6-9][0-9]{9}" value={mobile} onChange={e=>setMobile(e.target.value)} placeholder="10-digit mobile number"/></label><label>Course you are interested in<select value={selected} onChange={e=>setSelected(e.target.value)}>{courses.map(c=><option key={c.slug} value={c.name}>{c.name}</option>)}</select></label><label>Your message<textarea rows="4" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us what you would like to know..."/></label><button className="btn btn-primary full" type="submit">Continue to WhatsApp <ArrowUpRight size={17}/></button><small className="form-footnote">Your enquiry is sent only when you press Send in WhatsApp.</small></form></div></section></>}
function NotFound(){return <PageIntro eyebrow="404" title="This page isn't here." desc="The page may have moved. Head back to the homepage or explore our courses."/>}
export default function App(){const loc=useLocation();const navigate=useNavigate();useState(()=>{window.scrollTo(0,0)});return <><Header/><main key={loc.pathname}><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/courses" element={<Courses/>}/><Route path="/courses/:slug" element={<CourseDetail/>}/><Route path="/faculty" element={<Faculty/>}/><Route path="/facilities" element={<Facilities/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/><WhatsAppFloat/></>}
