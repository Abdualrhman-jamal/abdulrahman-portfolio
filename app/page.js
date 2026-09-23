const expertise = [
  "التطوير التنظيمي",
  "التصميم التنظيمي",
  "تحليل وتصميم الوظائف",
  "تخطيط القوى العاملة",
  "التعلم والتطوير",
  "تحليل الاحتياج التدريبي",
  "الاستقطاب والتوظيف",
  "تحليلات وتقارير الموارد البشرية",
];

const experience = [
  {
    role: "أخصائي تطوير تنظيمي",
    company: "جمعية الوداد",
    period: "يونيو 2026 - حتى الآن",
    points: [
      "إدارة دورة التدريب من تحليل الاحتياج إلى التنفيذ وقياس الأثر.",
      "تحويل فجوات الجدارات والتطوير إلى مبادرات تدريبية عملية.",
      "دعم الاستقطاب والاختيار وربط مخرجات التوظيف والتطوير بفاعلية المنظمة."
    ],
  },
  {
    role: "أخصائي تطوير تنظيمي",
    company: "رافد",
    period: "نوفمبر 2025 - يونيو 2026",
    points: [
      "تطوير إطار لتنظيم العمل وتوضيح الأدوار والمسؤوليات والإجراءات.",
      "بناء وتحديث الأوصاف الوظيفية بما يتوافق مع الهيكل التنظيمي.",
      "رفع جودة بيانات الموارد البشرية ودعم الامتثال والتسجيل في منصة قوى."
    ],
  },
  {
    role: "أخصائي تطوير تنظيمي واستقطاب",
    company: "Naqleen Co.",
    period: "يوليو 2022 - أكتوبر 2025",
    points: [
      "خفض مدة التوظيف بنسبة 20% عبر تحسين مسار الاستقطاب والانضمام.",
      "دعم تخطيط القوى العاملة بالتعاون مع مديري الإدارات.",
      "بناء أدوات تتبع للبيانات ومؤشرات الاستقطاب والقوى العاملة."
    ],
  },
];

const projects = [
  {
    title: "حوكمة إجراءات التوظيف",
    text: "تطوير رحلة توظيف أكثر وضوحًا من الإعلان إلى الاختيار والتوثيق، مع نماذج وأدوات عملية قابلة للتطبيق."
  },
  {
    title: "تحليل الاحتياج التدريبي",
    text: "تحويل الاحتياجات والفجوات إلى أولويات تدريبية قابلة للقياس وربطها بأداء الموظفين والجهات."
  },
  {
    title: "الهيكلة والوصف الوظيفي",
    text: "تحسين وضوح الأدوار وبناء أوصاف وظيفية متسقة مع الهيكل التنظيمي ومتطلبات العمل."
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">عبدالرحمن باجنيد</div>
        <nav>
          <a href="#about">نبذة</a>
          <a href="#experience">الخبرات</a>
          <a href="#projects">المشاريع</a>
          <a href="#contact">تواصل</a>
          <a className="lang" href="/en">English</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">ORGANIZATIONAL DEVELOPMENT</span>
          <h1>عبدالرحمن جمال باجنيد</h1>
          <h2>أخصائي تطوير تنظيمي</h2>
          <p>
            أعمل على تطوير المنظمات من خلال بناء الهياكل والوظائف، تطوير المواهب،
            وتحويل احتياجات الموارد البشرية إلى حلول عملية قابلة للقياس.
          </p>
          <div className="actions">
            <a className="primary" href="#projects">استعرض أعمالي</a>
            <a className="secondary" href="#contact">تواصل معي</a>
          </div>
        </div>
        <div className="portrait-card">
          <img src="/profile.jpg" alt="عبدالرحمن جمال باجنيد" />
        </div>
      </section>

      <section id="about" className="section two-col">
        <div>
          <span className="section-kicker">نبذة عني</span>
          <h3>أبني حلول موارد بشرية تساعد المنظمة على العمل بشكل أوضح وأفضل.</h3>
        </div>
        <div className="body-copy">
          <p>
            متخصص في التطوير التنظيمي بخبرة عملية في التصميم التنظيمي، بناء الوظائف،
            تخطيط القوى العاملة، التعلم والتطوير، والاستقطاب.
          </p>
          <p>
            أركز على تحويل الاحتياجات والمشكلات التشغيلية إلى نماذج وإجراءات وأدوات
            عملية تدعم اتخاذ القرار ورفع فاعلية المنظمة.
          </p>
        </div>
      </section>

      <section className="section">
        <span className="section-kicker">مجالات الخبرة</span>
        <div className="chips">
          {expertise.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="experience" className="section">
        <span className="section-kicker">الخبرات المهنية</span>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="time">{item.period}</div>
              <div>
                <h4>{item.role}</h4>
                <strong>{item.company}</strong>
                <ul>
                  {item.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <span className="section-kicker">المشاريع ودراسات الحالة</span>
        <div className="grid">
          {projects.map((project, i) => (
            <article className="project" key={project.title}>
              <span>0{i + 1}</span>
              <h4>{project.title}</h4>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials">
        <div>
          <span className="section-kicker">التعليم</span>
          <h4>بكالوريوس الإدارة العامة</h4>
          <p>جامعة الملك عبدالعزيز — تخصص التنظيم والتطوير الإداري</p>
          <p>المعدل 4.64 / 5</p>
        </div>
        <div>
          <span className="section-kicker">شهادات مختارة</span>
          <p>aPHRI — HRCI</p>
          <p>Hiring Certification — The Predictive Index</p>
          <p>Talent Optimization Consultant — The Predictive Index</p>
          <p>Training of Trainers (TOT)</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <span className="section-kicker">تواصل معي</span>
        <h3>مهتم ببناء أنظمة وعمليات موارد بشرية أكثر فاعلية؟</h3>
        <div className="actions">
          <a className="primary" href="mailto:ab.9jamal@gmail.com">ab.9jamal@gmail.com</a>
          <a className="secondary" href="https://www.linkedin.com/in/abdualrhman-bajunaied/" target="_blank">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
