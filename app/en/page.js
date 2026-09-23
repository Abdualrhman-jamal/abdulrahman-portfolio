const expertise = ["Organizational Development","Organizational Design","Job Analysis & Architecture","Workforce Planning","Learning & Development","Training Needs Analysis","Talent Acquisition","HR Analytics & Reporting"];

export default function EnglishPage(){
  return <main dir="ltr">
    <header className="nav">
      <div className="brand">Abdulrahman Bajunaied</div>
      <nav>
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        <a className="lang" href="/">العربية</a>
      </nav>
    </header>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">ORGANIZATIONAL DEVELOPMENT</span>
        <h1>Abdulrahman Jamal Bajunaied</h1>
        <h2>Organizational Development Specialist</h2>
        <p>Building better organizations through thoughtful structure, talent development, and data-driven HR solutions.</p>
        <div className="actions"><a className="primary" href="#projects">View my work</a><a className="secondary" href="#contact">Contact me</a></div>
      </div>
      <div className="portrait-card"><img src="/profile.jpg" alt="Abdulrahman Bajunaied"/></div>
    </section>
    <section id="about" className="section two-col">
      <div><span className="section-kicker">ABOUT</span><h3>I turn HR and organizational needs into practical systems, tools, and decisions.</h3></div>
      <div className="body-copy"><p>Organizational Development professional with hands-on experience in organizational design, job architecture, workforce planning, learning and development, and talent acquisition.</p><p>I focus on practical, measurable solutions that improve clarity, capability, and organizational effectiveness.</p></div>
    </section>
    <section className="section"><span className="section-kicker">EXPERTISE</span><div className="chips">{expertise.map(x=><span key={x}>{x}</span>)}</div></section>
    <section id="experience" className="section">
      <span className="section-kicker">EXPERIENCE</span>
      <div className="timeline">
        <article className="timeline-item"><div className="time">Jun 2026 — Present</div><div><h4>Organizational Development Specialist</h4><strong>Alwedad</strong><ul><li>Delivered end-to-end training cycles from needs analysis through implementation and impact evaluation.</li><li>Translated competency and development gaps into targeted initiatives.</li><li>Supported recruitment and integrated HR/OD priorities.</li></ul></div></article>
        <article className="timeline-item"><div className="time">Nov 2025 — Jun 2026</div><div><h4>Organizational Development Specialist</h4><strong>Rafeed</strong><ul><li>Developed internal work organization frameworks and clarified roles and procedures.</li><li>Built and updated job descriptions aligned with the organizational structure.</li><li>Improved HR data structure and compliance tracking.</li></ul></div></article>
        <article className="timeline-item"><div className="time">Jul 2022 — Oct 2025</div><div><h4>Organizational Development & Recruitment Specialist</h4><strong>Naqleen Co.</strong><ul><li>Reduced time-to-hire by 20% through recruitment and onboarding improvements.</li><li>Supported workforce planning with department heads.</li><li>Introduced data-driven recruitment and workforce tracking tools.</li></ul></div></article>
      </div>
    </section>
    <section id="projects" className="section"><span className="section-kicker">PROJECTS & CASE STUDIES</span><div className="grid">
      <article className="project"><span>01</span><h4>Recruitment Governance</h4><p>Improving the recruitment journey from job advertising to selection, documentation, and practical HR tools.</p></article>
      <article className="project"><span>02</span><h4>Training Needs Analysis</h4><p>Translating workforce gaps into measurable learning priorities connected to performance and capability.</p></article>
      <article className="project"><span>03</span><h4>Job Architecture</h4><p>Improving role clarity and building job descriptions aligned with organizational structures and operating needs.</p></article>
    </div></section>
    <section id="contact" className="contact"><span className="section-kicker">CONTACT</span><h3>Interested in building more effective HR systems and organizational practices?</h3><div className="actions"><a className="primary" href="mailto:ab.9jamal@gmail.com">ab.9jamal@gmail.com</a><a className="secondary" href="https://www.linkedin.com/in/abdualrhman-bajunaied/" target="_blank">LinkedIn</a></div></section>
  </main>
}
