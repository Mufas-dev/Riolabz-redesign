import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Menu,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Mobile App Development", text: "Scalable iOS and Android apps aligned with business goals." },
  { icon: BriefcaseBusiness, title: "Custom Software", text: "Reliable, scalable software built around your business." },
  { icon: Cloud, title: "Web Design & Development", text: "High-performing websites and digital platforms." },
  { icon: BarChart3, title: "SEO & Digital Marketing", text: "Search and digital strategies that create measurable growth." },
  { icon: Cloud, title: "Hosting & Server Management", text: "Secure, process-driven infrastructure and ongoing support." },
  { icon: Code2, title: "Video Creation", text: "Purposeful video content for modern brands and campaigns." },
];

const reasons = [
  { icon: UsersRound, title: "Custom Solutions", text: "Digital products designed around real business needs." },
  { icon: BarChart3, title: "Performance Optimized", text: "Scalable, reliable systems designed to grow with you." },
  { icon: ShieldCheck, title: "SEO Ready & Supported", text: "Search-ready builds with ongoing support and maintenance." },
];

const projects = [
  { name: "Sabine Hospital", type: "Custom Dynamic Website", image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=80" },
  { name: "Vehiclemall Auction", type: "Custom Dynamic Website", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80" },
  { name: "Autochek", type: "Mobile Application", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80" },
];

const caseStudies = [
  ["Sabine Hospital", "Custom Dynamic Website", "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=80"],
  ["Smita Memorial Hospital", "Custom Dynamic Website", "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80"],
  ["Vehiclemall Auction", "Custom Dynamic Website", "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80"],
  ["Autochek", "Mobile Application", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"],
  ["Vivifi Pharma", "Custom Dynamic Website", "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=80"],
  ["Fantasy Park", "Entertainment Website", "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80"],
  ["Eventoq", "Event Management System", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80"],
  ["Jerucap", "Financial Services Platform", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"],
  ["Paars", "Ecommerce Website", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"],
];

function InnerHeader() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="container nav"><a className="brand" href="/" aria-label="Riolabz home"><img src="https://www.riolabz.com/images/logo-2.svg" alt="Riolabz" /></a><nav className={open ? "nav-links open" : "nav-links"}><a href="/">Home</a><a href="/services">Services</a><a href="/portfolio">Portfolio</a><a href="/#contact">Contact</a></nav><a className="quote-button" href="/#contact">Get a Quote <ArrowRight size={15} /></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div></header>;
}

function ServicesPage() {
  return <><InnerHeader /><main className="inner-page"><section className="inner-hero"><div className="container"><p className="overline blue">Riolabz services</p><h1>Technology that moves<br /><span>your business forward.</span></h1><p>From first idea to long-term growth, we combine strategy, design and engineering to create digital products that work.</p></div></section><section className="section"><div className="container"><div className="service-detail-grid">{services.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon /><h2>{title}</h2><p>{text}</p><a href="/#contact">Talk to our team <ArrowRight size={15} /></a></article>)}</div></div></section><section className="process-strip"><div className="container"><p className="overline">How we work</p><div>{[["01", "Discovery & Planning"], ["02", "Design & Prototype"], ["03", "Development & Testing"], ["04", "Launch & Support"]].map(([number, label]) => <article key={label}><span>{number}</span><h3>{label}</h3></article>)}</div></div></section></main><footer><div className="container footer"><a className="brand brand-footer" href="/"><img src="https://www.riolabz.com/images/logo-2.svg" alt="Riolabz" /></a><p>© 2026 Riolabz Technologies. All rights reserved.</p></div></footer></>;
}

function PortfolioPage() {
  return <><InnerHeader /><main className="inner-page"><section className="inner-hero portfolio-hero"><div className="container"><p className="overline blue">Selected portfolio</p><h1>Digital work made<br /><span>to deliver results.</span></h1><p>Explore a cross-section of Riolabz websites, web platforms and mobile applications.</p></div></section><section className="section"><div className="container"><div className="portfolio-grid">{caseStudies.map(([name, type, image]) => <article className="portfolio-item" key={name}><img src={image} alt="" /><div><p>{type}</p><h2>{name}</h2><ArrowRight size={18} /></div></article>)}</div></div></section><section className="portfolio-cta"><div className="container"><h2>Have a project in mind?</h2><a href="/#contact">Let’s build it together <ArrowRight /></a></div></section></main><footer><div className="container footer"><a className="brand brand-footer" href="/"><img src="https://www.riolabz.com/images/logo-2.svg" alt="Riolabz" /></a><p>© 2026 Riolabz Technologies. All rights reserved.</p></div></footer></>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/services") return <ServicesPage />;
  if (path === "/portfolio") return <PortfolioPage />;
  return <div className="site-shell">
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#home" aria-label="Riolabz home"><img src="https://www.riolabz.com/images/logo-2.svg" alt="Riolabz" /></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="quote-button" href="#contact">Get a Quote <ArrowRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-glow" /><div className="hero-dots" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="overline">Global web design & development company</p>
            <h1>Scalable Mobile App<br /><span>Development</span></h1>
            <p className="hero-text">We build scalable iOS and Android apps aligned with business goals, alongside reliable websites, software and digital platforms.</p>
            <div className="hero-actions"><a className="primary-button" href="#contact">Build a Mobile App <ArrowRight size={17} /></a><a className="watch-link" href="#services">Explore services <ArrowRight size={16} /></a></div>
            <div className="hero-stats"><div><strong>12+</strong><span>Years of excellence</span></div><div><strong>500+</strong><span>Projects delivered</span></div><div><strong>300+</strong><span>Happy clients</span></div><div><strong>100%</strong><span>Client satisfaction</span></div></div>
          </div>
          <div className="hero-image-wrap"><div className="image-backdrop" /><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85" alt="Business team collaborating" /><div className="float-card"><span className="float-icon"><ShieldCheck size={20} /></span><div><b>Trusted partner</b><small>For your next big move</small></div></div></div>
        </div>
      </section>

      <section id="services" className="section services-section"><div className="container">
        <div className="section-heading"><div><p className="overline blue">What we offer</p><h2>Our Services</h2><p>Driving your success forward</p></div><a href="#contact">See all solutions <ArrowRight size={16} /></a></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><span className="service-icon"><Icon /></span><h3>{title}</h3><p>{text}</p><ArrowRight className="card-arrow" size={18} /></article>)}</div>
      </div></section>

      <section id="about" className="section why-section"><div className="container why-layout">
        <div><p className="overline blue">About Riolabz</p><h2>Web design & development<br /><span>that scales businesses.</span></h2><p className="why-copy">Riolabz delivers custom websites, scalable software and digital platforms for businesses across Kerala, the UK and the USA—with speed and cost efficiency through our offshore delivery model.</p><a className="outline-button" href="https://www.riolabz.com/who-we-are" target="_blank" rel="noreferrer">Discover our story <ArrowRight size={16} /></a></div>
        <div className="reason-list">{reasons.map(({icon: Icon, title, text}, index) => <article className="reason" key={title}><span>{`0${index + 1}`}</span><div className="reason-icon"><Icon /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div></section>

      <section id="portfolio" className="section portfolio-section"><div className="container"><div className="section-heading"><div><p className="overline blue">Selected work</p><h2>Digital solutions that drive growth.</h2><p>A selection of projects delivered by Riolabz.</p></div><a href="https://www.riolabz.com/portfolios" target="_blank" rel="noreferrer">View portfolio <ArrowRight size={16} /></a></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.name}><img src={project.image} alt="" /><div className="project-overlay"><p>{project.type}</p><h3>{project.name}</h3><a href="https://www.riolabz.com/portfolios" target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><ArrowRight size={18} /></a></div></article>)}</div></div></section>

      <section className="trust"><div className="container"><p>Trusted web design & development partner</p><div className="company-list"><b>Sabine <i>Hospitals</i></b><b>Vehicle<span>mall</span></b><b>Vivi<span>pharma</span></b><b>Jeru<span>cap</span></b></div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-layout"><div><p className="overline">Let’s build together</p><h2>Ready to move<br /><span>forward?</span></h2></div><div><p>From startups to enterprises, Riolabz is your long-term technology partner for web, software and mobile projects.</p><a className="primary-button white-button" href="https://www.riolabz.com/contact" target="_blank" rel="noreferrer">Contact Riolabz <ArrowRight size={17} /></a></div></div></section>
      <section className="locations"><div className="container"><p className="overline blue">Contact info</p><div className="location-grid"><article><h3>Kerala</h3><p>Second Floor Malikayal Towers, N.H. Bypass, AKG Vayanashala Rd, Chakkaraparambu, Ernakulam District, Vennala</p><a href="tel:+917034448855">+91 70344 48855</a><a href="tel:+919746754664">+91 97467 54664</a></article><article><h3>USA</h3><p>340 S Lemon Ave #7160, Walnut, CA 91789, United States</p><a href="tel:+19252391299">+1 925 239 1299</a></article><article><h3>UK</h3><p>P.O. Box 316, Ashton-Under-Lyne, Manchester, UK – OL6 0GR</p><a href="tel:+447475939216">+44 7475 939216</a></article></div></div></section>
    </main>
    <footer><div className="container footer"><a className="brand brand-footer" href="#home" aria-label="Riolabz home"><img src="https://www.riolabz.com/images/logo-2.svg" alt="Riolabz" /></a><p>© 2026 Riolabz Technologies. All rights reserved.</p><div><a href="https://www.linkedin.com/company/riolabz" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/riolabz4u/" target="_blank" rel="noreferrer">Instagram</a></div></div></footer>
  </div>;
}

export default App;
