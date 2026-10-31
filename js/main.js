/**
 * Portfolio Interactive Controller & Dynamic Content Engine
 * Muhammad Moiz Latif — Cyber-Inspired Corporate Dark Theme
 * Powered by vanilla JavaScript & Decap CMS (data/content.json)
 */

document.addEventListener('DOMContentLoaded', async () => {
  initStickyHeader();
  initMobileNavigation();
  initActiveNavLinkScroll();
  initEmailCopy();
  initScrollAnimations();

  // Load and render dynamic content from data/content.json
  await loadAndRenderContent();

  // Initialize components that depend on rendered content
  initFaqAccordion();
  initPricingPackageSelection();
  initConceptDemoModal();
  initContactForm();
});

/**
 * Global fallback content in case fetch is blocked by local file:// protocol
 */
const DEFAULT_CONTENT = {
  hero: {
    badge: "Available for New Projects",
    headlinePrefix: "I Build ",
    headlineHighlight: "Fast, Secure & Modern",
    headlineSuffix: " Websites for Businesses Worldwide",
    subheadline: "I'm Muhammad Moiz Latif, a web developer and Cyber Security student based in Taxila, Pakistan. I create clean, mobile-friendly websites that help businesses look professional, build trust, and turn visitors into customers — with security in mind from day one.",
    primaryButtonText: "Start a Project",
    secondaryButtonText: "View Pricing",
    trustLine: ["Honest pricing", "Clear communication", "On-time delivery"]
  },
  about: {
    tag: "Background",
    title: "About Me",
    subtitle: "Web development fortified with cyber security fundamentals, focused on dependable, secure websites.",
    terminal: {
      name: "Muhammad Moiz Latif",
      role: "Web Developer & Cyber Security Student",
      location: "Taxila, Pakistan",
      email: "moizlateef.dev@gmail.com",
      education: "Cyber Security (1st Semester)",
      background: "Certified Web Development Course",
      focus: "Business websites for international clients",
      languages: ["English", "Urdu"],
      status: "Available for New Projects",
      philosophy: "Security, speed, and clean code in mind — from day one."
    },
    paragraphs: [
      "I'm Muhammad Moiz Latif, a web developer based in Taxila, Pakistan, currently in my first semester of a Cyber Security degree. Alongside my studies, I completed a web development course and build modern, responsive websites for businesses and individuals around the world.",
      "I chose web development partly because strong programming skills are essential in cyber security — building real websites keeps my coding sharp and lets me practice creating useful web tools. This background means I build every website with security, speed, and clean code in mind, not just good looks."
    ],
    infoList: [
      { label: "Location:", value: "Taxila, Pakistan" },
      { label: "Education:", value: "Cyber Security (1st Semester)" },
      { label: "Background:", value: "Certified Web Development Course" },
      { label: "Focus:", value: "Business websites for international clients" },
      { label: "Languages:", value: "English, Urdu" }
    ]
  },
  services: [
    {
      id: "business",
      icon: "business",
      title: "Business Websites",
      description: "Professional multi-page websites for companies and local brands.",
      deliverables: [
        "Custom brand-aligned corporate design",
        "Structured multi-page company layout",
        "Inquiry forms & Google Maps integration"
      ]
    },
    {
      id: "landing",
      icon: "landing",
      title: "Landing Pages",
      description: "High-converting single pages for products, services, and campaigns.",
      deliverables: [
        "Conversion-focused visual hierarchy",
        "Ultra-fast lightweight performance",
        "Prominent calls-to-action & lead capture"
      ]
    },
    {
      id: "wordpress",
      icon: "wordpress",
      title: "WordPress Websites",
      description: "Easy-to-manage WordPress sites the client can update themselves.",
      deliverables: [
        "Intuitive, user-friendly CMS dashboard",
        "Custom block & page setup without bloat",
        "Client handover walkthrough & simple edits"
      ]
    },
    {
      id: "ecommerce",
      icon: "ecommerce",
      title: "E-Commerce Websites",
      description: "Online stores with product pages, cart, and checkout flow.",
      deliverables: [
        "Clean product showcase & category pages",
        "Smooth cart & friction-free checkout flow",
        "Secure payment gateway setup guidance"
      ]
    },
    {
      id: "portfolio",
      icon: "portfolio",
      title: "Portfolio & Personal Brand",
      description: "Clean showcase sites for professionals and creators.",
      deliverables: [
        "Modern personal branding presentation",
        "Interactive work & case study showcases",
        "Direct contact & resume download setup"
      ]
    },
    {
      id: "redesign",
      icon: "redesign",
      title: "Website Redesign & Maintenance",
      description: "Modernising old websites and keeping them updated and secure.",
      deliverables: [
        "Contemporary visual overhaul & mobile fix",
        "Speed tuning & fundamental security audits",
        "Regular software patches & site backups"
      ]
    }
  ],
  skills: {
    core: [
      { name: "HTML5", level: "Primary Stack" },
      { name: "CSS3", level: "Primary Stack" },
      { name: "WordPress", level: "Primary Stack" },
      { name: "C#", level: "Primary Stack" },
      { name: "Python", level: "Primary Stack" }
    ],
    working: [
      { name: "Java", level: "Working Knowledge" },
      { name: "Node.js", level: "Working Knowledge" },
      { name: "React", level: "Basic Level" }
    ],
    badges: [
      "Responsive Design",
      "Basic SEO Setup",
      "Web Security Fundamentals",
      "Git & GitHub"
    ]
  },
  whyMe: [
    {
      icon: "shield",
      title: "Security-Minded Development",
      description: "A cyber security background means secure practices from day one."
    },
    {
      icon: "check",
      title: "Honest & Transparent",
      description: "Clear pricing, no fake promises, regular progress updates."
    },
    {
      icon: "devices",
      title: "Modern, Mobile-First Design",
      description: "Every site looks perfect on phones, tablets, and desktops."
    },
    {
      icon: "support",
      title: "Support After Launch",
      description: "I don't disappear after delivery; support is included in every package."
    }
  ],
  projects: [
    {
      id: "dental-clinic",
      title: "Dental Clinic Website",
      subtitle: "ApexDental Care",
      badge: "Concept Project",
      description: "Clean healthcare portal featuring online appointment booking, categorized clinic services, and specialized doctor profiles.",
      tags: ["HTML5", "CSS3", "Responsive Design", "JavaScript"],
      demoUrl: "https://sitedemo09.netlify.app",
      browserUrl: "demo.dentalclinic.preview",
      mockupType: "dental"
    },
    {
      id: "restaurant",
      title: "Restaurant Website",
      subtitle: "Artisan Bistro",
      badge: "Concept Project",
      description: "Hospitality platform presenting curated menus, culinary image gallery, table reservation forms, and live timings with location mapping.",
      tags: ["HTML5", "CSS3", "UI/UX", "Responsive"],
      demoUrl: "",
      browserUrl: "demo.restaurant.preview",
      mockupType: "restaurant"
    },
    {
      id: "saas",
      title: "SaaS Landing Page",
      subtitle: "CloudFlow.io",
      badge: "Concept Project",
      description: "High-conversion product landing page featuring interactive feature cards, transparent pricing comparison, and streamlined sign-up flow.",
      tags: ["HTML5", "CSS3", "Modern Web", "Cyber Cyan UI"],
      demoUrl: "",
      browserUrl: "demo.cloudflow-saas.preview",
      mockupType: "saas"
    }
  ],
  pricing: {
    plans: [
      {
        id: "starter",
        name: "STARTER",
        price: "149",
        currency: "$",
        period: "one-time",
        popular: false,
        purpose: "Ideal for targeted campaigns, personal launches, and high-impact single pages.",
        features: [
          "1-page website / landing page",
          "Mobile-responsive modern design",
          "Contact form + WhatsApp button",
          "Basic SEO setup",
          "2 revision rounds",
          "Delivery in 5 days",
          "14 days of free post-launch support"
        ],
        buttonText: "Choose Starter"
      },
      {
        id: "business",
        name: "BUSINESS",
        price: "349",
        currency: "$",
        period: "one-time",
        popular: true,
        purpose: "Complete professional digital footprint for established companies and growing businesses.",
        features: [
          "Up to 5 pages (Home, About, Services, Gallery, Contact)",
          "Custom code or WordPress (client's choice)",
          "Contact forms, Google Maps, social media links",
          "Basic SEO setup + Google-friendly structure",
          "3 revision rounds",
          "Delivery in 10–14 days",
          "30 days of free post-launch support"
        ],
        buttonText: "Choose Business"
      },
      {
        id: "ecommerce",
        name: "E-COMMERCE / CUSTOM",
        prefix: "Starting at",
        price: "649",
        currency: "$",
        period: "",
        popular: false,
        purpose: "Advanced stores and custom platforms with dedicated e-commerce workflows.",
        features: [
          "Online store or custom website (up to 10 pages)",
          "Product pages, cart, and checkout flow (or booking / custom features)",
          "Payment gateway setup guidance",
          "Advanced on-page SEO structure",
          "3 revision rounds",
          "Delivery time confirmed before the project starts",
          "30 days of priority post-launch support"
        ],
        buttonText: "Choose Custom"
      }
    ],
    customNote: "Need something different? Every business is unique — message me for a free custom quote. No hidden charges, ever."
  },
  process: [
    {
      step: "01",
      title: "1. Discover",
      description: "We discuss your business, goals, and requirements on WhatsApp or a call."
    },
    {
      step: "02",
      title: "2. Design",
      description: "I share a design direction and we confirm it before building."
    },
    {
      step: "03",
      title: "3. Build",
      description: "I develop your website and keep you updated at every stage."
    },
    {
      step: "04",
      title: "4. Launch & Support",
      description: "Your site goes live, and free support is included as per your package."
    }
  ],
  faq: [
    {
      question: "How long does a website take?",
      answer: "A landing page takes about 5 days; a business website 10–14 days. Timelines are always confirmed before we start."
    },
    {
      question: "Do I need to provide the text and images?",
      answer: "You can provide them, or I can help you prepare content for your pages."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, redesign and modernisation is one of my services."
    },
    {
      question: "How do payments work?",
      answer: "Project terms, including payment schedule, are agreed clearly in writing before any work begins."
    },
    {
      question: "Do you work with clients outside Pakistan?",
      answer: "Yes, most of my focus is on international clients. I communicate in English and work across time zones."
    },
    {
      question: "What if I need changes after launch?",
      answer: "Every package includes free post-launch support, and affordable maintenance is available after that."
    }
  ],
  contact: {
    heading: "Have a Project in Mind?",
    text: "Tell me about your project and I'll reply with honest advice and a free quote — no pressure, no obligation.",
    whatsappNumber: "+92 324 1924672",
    whatsappRaw: "923241924672",
    email: "moizlateef.dev@gmail.com",
    location: "Taxila, Pakistan · Working Worldwide"
  },
  footer: {
    bio: "Creating clean, high-performance, and secure web solutions for forward-thinking clients worldwide from Taxila, Pakistan.",
    copyright: "© 2026 Muhammad Moiz Latif — Web Developer & Cyber Security Student, Taxila, Pakistan."
  }
};

let activeContent = DEFAULT_CONTENT;

/**
 * Fetch data/content.json and render sections dynamically
 */
async function loadAndRenderContent() {
  try {
    const res = await fetch('data/content.json?v=' + Date.now());
    if (res.ok) {
      activeContent = await res.json();
    }
  } catch (err) {
    console.info('Using default content dataset (fetch unavailable or local file protocol):', err);
  }

  renderHero(activeContent.hero);
  renderAbout(activeContent.about);
  renderServices(activeContent.services);
  renderSkills(activeContent.skills);
  renderWhyMe(activeContent.whyMe);
  renderProjects(activeContent.projects);
  renderPricing(activeContent.pricing);
  renderProcess(activeContent.process);
  renderFaq(activeContent.faq);
  renderContact(activeContent.contact);
  renderFooter(activeContent.footer, activeContent.contact);
}

/**
 * Render Hero Section
 */
function renderHero(hero) {
  if (!hero) return;

  const badgeEl = document.getElementById('heroBadgeText');
  if (badgeEl) badgeEl.textContent = hero.badge || 'Available for New Projects';

  const headlineEl = document.getElementById('heroHeadline');
  if (headlineEl) {
    const prefix = hero.headlinePrefix || 'I Build ';
    const highlight = hero.headlineHighlight || 'Fast, Secure & Modern';
    const suffix = hero.headlineSuffix || ' Websites for Businesses Worldwide';
    headlineEl.innerHTML = `${escapeHtml(prefix)}<span class="cyan-gradient-text">${escapeHtml(highlight)}</span>${escapeHtml(suffix)}`;
  }

  const subheadlineEl = document.getElementById('heroSubheadline');
  if (subheadlineEl) {
    subheadlineEl.innerHTML = `I'm <strong>Muhammad Moiz Latif</strong>, a web developer and Cyber Security student based in <strong>Taxila, Pakistan</strong>. I create clean, mobile-friendly websites that help businesses look professional, build trust, and turn visitors into customers — with security in mind from day one.`;
    if (hero.subheadline) {
      // If user edited subheadline in CMS, display it cleanly
      subheadlineEl.textContent = hero.subheadline;
    }
  }

  const primaryBtn = document.getElementById('heroPrimaryBtnText');
  if (primaryBtn && hero.primaryButtonText) primaryBtn.textContent = hero.primaryButtonText;

  const secondaryBtn = document.getElementById('heroSecondaryBtnText');
  if (secondaryBtn && hero.secondaryButtonText) secondaryBtn.textContent = hero.secondaryButtonText;

  const trustLineEl = document.getElementById('heroTrustLine');
  if (trustLineEl && Array.isArray(hero.trustLine)) {
    trustLineEl.innerHTML = hero.trustLine.map((item, idx) => {
      const pill = `<span class="trust-pill">${escapeHtml(item)}</span>`;
      return idx < hero.trustLine.length - 1 ? `${pill}<span class="trust-sep">·</span>` : pill;
    }).join('');
  }
}

/**
 * Render About Section
 */
function renderAbout(about) {
  if (!about) return;

  const tagEl = document.getElementById('aboutTag');
  if (tagEl && about.tag) tagEl.textContent = about.tag;

  const titleEl = document.getElementById('aboutTitle');
  if (titleEl && about.title) titleEl.textContent = about.title;

  const subtitleEl = document.getElementById('aboutSubtitle');
  if (subtitleEl && about.subtitle) subtitleEl.textContent = about.subtitle;

  // Terminal profile card
  if (about.terminal) {
    const term = about.terminal;
    const termSyntax = document.getElementById('terminalSyntax');
    if (termSyntax) {
      const langs = Array.isArray(term.languages) ? term.languages.map(l => `"${escapeHtml(l)}"`).join(', ') : '"English", "Urdu"';
      termSyntax.innerHTML = `
        <span class="code-bracket">{</span>
        <div class="code-indent">
          <span class="code-key">"name"</span>: <span class="code-val">"${escapeHtml(term.name || 'Muhammad Moiz Latif')}"</span>,<br />
          <span class="code-key">"role"</span>: <span class="code-val">"${escapeHtml(term.role || 'Web Developer & Cyber Security Student')}"</span>,<br />
          <span class="code-key">"location"</span>: <span class="code-val">"${escapeHtml(term.location || 'Taxila, Pakistan')}"</span>,<br />
          <span class="code-key">"email"</span>: <span class="code-val">"${escapeHtml(term.email || 'moizlateef.dev@gmail.com')}"</span>,<br />
          <span class="code-key">"education"</span>: <span class="code-val">"${escapeHtml(term.education || 'Cyber Security (1st Semester)')}"</span>,<br />
          <span class="code-key">"background"</span>: <span class="code-val">"${escapeHtml(term.background || 'Certified Web Development Course')}"</span>,<br />
          <span class="code-key">"focus"</span>: <span class="code-val">"${escapeHtml(term.focus || 'Business websites for international clients')}"</span>,<br />
          <span class="code-key">"languages"</span>: <span class="code-bracket">[</span><span class="code-val">${langs}</span><span class="code-bracket">]</span>,<br />
          <span class="code-key">"status"</span>: <span class="code-accent">"${escapeHtml(term.status || 'Available for New Projects')}"</span>
        </div>
        <span class="code-bracket">}</span>
      `;
    }

    const termPhil = document.getElementById('terminalPhilosophy');
    if (termPhil && term.philosophy) {
      termPhil.textContent = `"${term.philosophy}"`;
    }
  }

  // Narrative Paragraphs
  const narrativeBox = document.getElementById('aboutParagraphs');
  if (narrativeBox && Array.isArray(about.paragraphs)) {
    narrativeBox.innerHTML = about.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  }

  // Info List
  const infoListEl = document.getElementById('aboutInfoList');
  if (infoListEl && Array.isArray(about.infoList)) {
    infoListEl.innerHTML = about.infoList.map(item => `
      <div class="info-row">
        <span class="info-label">${escapeHtml(item.label)}</span>
        <span class="info-value">${escapeHtml(item.value)}</span>
      </div>
    `).join('');
  }
}

/**
 * Service SVG Icons dictionary
 */
const SERVICE_ICONS = {
  business: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  landing: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  wordpress: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
  ecommerce: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
  portfolio: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  redesign: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`
};

/**
 * Render Services (6 Cards)
 */
function renderServices(services) {
  const grid = document.getElementById('servicesGrid');
  if (!grid || !Array.isArray(services)) return;

  grid.innerHTML = services.map(s => {
    const iconSvg = SERVICE_ICONS[s.icon] || SERVICE_ICONS.business;
    const deliverablesHtml = Array.isArray(s.deliverables)
      ? s.deliverables.map(d => `
          <li>
            <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${escapeHtml(d)}</span>
          </li>
        `).join('')
      : '';

    return `
      <div class="service-card" data-service-id="${escapeHtml(s.id)}">
        <div class="service-icon-box">
          ${iconSvg}
        </div>
        <h3 class="service-title">${escapeHtml(s.title)}</h3>
        <p class="service-desc">${escapeHtml(s.description)}</p>
        <ul class="service-deliverables">
          ${deliverablesHtml}
        </ul>
      </div>
    `;
  }).join('');
}

/**
 * Render Skills Section
 */
function renderSkills(skills) {
  if (!skills) return;

  const coreContainer = document.getElementById('skillsCore');
  if (coreContainer && Array.isArray(skills.core)) {
    coreContainer.innerHTML = skills.core.map(s => `
      <div class="skill-item">
        <span class="skill-icon-bullet"></span>
        <span class="skill-name">${escapeHtml(s.name)}</span>
      </div>
    `).join('');
  }

  const workingContainer = document.getElementById('skillsWorking');
  if (workingContainer && Array.isArray(skills.working)) {
    workingContainer.innerHTML = skills.working.map(s => `
      <div class="skill-item skill-item-working">
        <span class="skill-icon-bullet violet-bullet"></span>
        <span class="skill-name">${escapeHtml(s.name)}</span>
        <span class="skill-level-note">(${escapeHtml(s.level || 'Working Knowledge')})</span>
      </div>
    `).join('');
  }

  const badgesContainer = document.getElementById('skillsBadges');
  if (badgesContainer && Array.isArray(skills.badges)) {
    const badgeIcons = [
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>`
    ];

    badgesContainer.innerHTML = skills.badges.map((b, i) => `
      <div class="feature-badge">
        ${badgeIcons[i % badgeIcons.length]}
        <span>${escapeHtml(b)}</span>
      </div>
    `).join('');
  }
}

/**
 * Why Me Icons dictionary
 */
const WHY_ICONS = {
  shield: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  check: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  devices: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  support: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
};

/**
 * Render Why Work With Me Section
 */
function renderWhyMe(whyList) {
  const grid = document.getElementById('whyGrid');
  if (!grid || !Array.isArray(whyList)) return;

  grid.innerHTML = whyList.map(item => {
    const iconSvg = WHY_ICONS[item.icon] || WHY_ICONS.shield;
    return `
      <div class="why-card">
        <div class="why-icon-box">
          ${iconSvg}
        </div>
        <h3 class="why-title">${escapeHtml(item.title)}</h3>
        <p class="why-desc">${escapeHtml(item.description)}</p>
      </div>
    `;
  }).join('');
}

/**
 * Render Projects Section
 * Includes Live Demo direct link support for Dental Clinic (https://sitedemo09.netlify.app)
 * and modal trigger fallback for projects without a demoUrl.
 */
function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !Array.isArray(projects)) return;

  grid.innerHTML = projects.map(p => {
    const mockupClass = `${p.mockupType || 'dental'}-canvas`;
    const browserUrl = p.browserUrl || `demo.${p.id || 'project'}.preview`;

    // Mockup internal UI badges
    let mockupPills = `<div class="ui-card-mini active"><span>Preview</span></div>`;
    if (p.mockupType === 'dental') {
      mockupPills = `
        <div class="ui-card-mini"><span>Dr. Profiles</span></div>
        <div class="ui-card-mini"><span>Services</span></div>
        <div class="ui-card-mini active"><span>Booking Flow</span></div>
      `;
    } else if (p.mockupType === 'restaurant') {
      mockupPills = `
        <div class="ui-card-mini active"><span>Menu Cards</span></div>
        <div class="ui-card-mini"><span>Gallery</span></div>
        <div class="ui-card-mini"><span>Hours & Location</span></div>
      `;
    } else if (p.mockupType === 'saas') {
      mockupPills = `
        <div class="ui-card-mini"><span>Features</span></div>
        <div class="ui-card-mini active"><span>Pricing Tiers</span></div>
        <div class="ui-card-mini"><span>Sign-up Flow</span></div>
      `;
    }

    const tagsHtml = Array.isArray(p.tags)
      ? p.tags.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')
      : '';

    // Direct Link vs Modal Trigger
    const hasDemoUrl = p.demoUrl && p.demoUrl.trim().length > 0;
    const actionBtn = hasDemoUrl
      ? `<a href="${escapeHtml(p.demoUrl.trim())}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-cyan live-demo-direct-link" data-project="${escapeHtml(p.title)}">
          <span>Live Demo</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>`
      : `<a href="#live-demo-modal" class="btn btn-sm btn-outline-cyan live-demo-trigger" data-project="${escapeHtml(p.title)}">
          <span>Live Demo</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>`;

    return `
      <article class="project-card" data-project-id="${escapeHtml(p.id)}">
        <div class="project-preview-frame">
          <div class="preview-browser-bar">
            <span class="dot-sm dot-red"></span>
            <span class="dot-sm dot-yellow"></span>
            <span class="dot-sm dot-green"></span>
            <span class="browser-url">${escapeHtml(browserUrl)}</span>
          </div>
          <div class="project-mockup-canvas ${mockupClass}">
            <div class="mockup-ui-preview">
              <div class="ui-header-sim">
                <span class="ui-brand">${escapeHtml(p.subtitle || p.title)}</span>
                <span class="ui-badge-sim">${hasDemoUrl ? 'Live Preview' : 'Interactive'}</span>
              </div>
              <div class="ui-body-sim">
                <div class="ui-text-bar lg"></div>
                <div class="ui-text-bar md"></div>
                <div class="ui-cards-row">
                  ${mockupPills}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="project-body">
          <div class="project-type-row">
            <span class="concept-badge">${escapeHtml(p.badge || 'Concept Project')}</span>
          </div>
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.description)}</p>
          
          <div class="project-tech-tags">
            ${tagsHtml}
          </div>

          <div class="project-action">
            ${actionBtn}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Render Pricing Section
 */
function renderPricing(pricing) {
  if (!pricing) return;

  const grid = document.getElementById('pricingGrid');
  if (grid && Array.isArray(pricing.plans)) {
    grid.innerHTML = pricing.plans.map(plan => {
      const isPopular = plan.popular === true;
      const cardClass = isPopular ? 'pricing-card popular-card' : 'pricing-card';
      const ribbonHtml = isPopular ? `<div class="popular-ribbon"><span>★ Most Popular</span></div>` : '';
      const nameClass = isPopular ? 'package-name cyan-gradient-text' : 'package-name';
      const btnClass = isPopular ? 'btn btn-cyan btn-glow w-full package-select-btn' : 'btn btn-outline-cyan w-full package-select-btn';

      const prefixHtml = plan.prefix ? `<span class="price-prefix">${escapeHtml(plan.prefix)}</span>` : '';
      const periodHtml = plan.period ? `<span class="price-period">${escapeHtml(plan.period)}</span>` : '';

      const featuresHtml = Array.isArray(plan.features)
        ? plan.features.map(f => `
            <li>
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${escapeHtml(f)}</span>
            </li>
          `).join('')
        : '';

      return `
        <div class="${cardClass}" data-plan-id="${escapeHtml(plan.id)}">
          ${ribbonHtml}
          <div class="pricing-header">
            <span class="${nameClass}">${escapeHtml(plan.name)}</span>
            <div class="price-row">
              ${prefixHtml}
              <span class="price-currency">${escapeHtml(plan.currency || '$')}</span>
              <span class="price-amount">${escapeHtml(plan.price)}</span>
              ${periodHtml}
            </div>
            <p class="package-purpose">${escapeHtml(plan.purpose || '')}</p>
          </div>

          <ul class="pricing-features">
            ${featuresHtml}
          </ul>

          <div class="pricing-footer">
            <a href="#contact" class="${btnClass}" data-package="${escapeHtml(plan.name)} (${escapeHtml(plan.currency || '$')}${escapeHtml(plan.price)})">${escapeHtml(plan.buttonText || 'Select Package')}</a>
          </div>
        </div>
      `;
    }).join('');
  }

  const noteEl = document.getElementById('pricingCustomNote');
  if (noteEl && pricing.customNote) {
    noteEl.innerHTML = `
      <div class="custom-note-card">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <p><strong>Need something different?</strong> ${escapeHtml(pricing.customNote.replace(/^Need something different\?\s*/i, ''))}</p>
      </div>
    `;
  }
}

/**
 * Render Process Steps
 */
function renderProcess(processList) {
  const grid = document.getElementById('processGrid');
  if (!grid || !Array.isArray(processList)) return;

  grid.innerHTML = processList.map(step => `
    <div class="process-card">
      <div class="process-step-badge">${escapeHtml(step.step)}</div>
      <h3 class="process-step-title">${escapeHtml(step.title)}</h3>
      <p class="process-step-desc">${escapeHtml(step.description)}</p>
    </div>
  `).join('');
}

/**
 * Render FAQ Section
 */
function renderFaq(faqList) {
  const accordion = document.getElementById('faqAccordion');
  if (!accordion || !Array.isArray(faqList)) return;

  accordion.innerHTML = faqList.map((item, idx) => `
    <div class="faq-item" data-faq-index="${idx}">
      <button class="faq-question" aria-expanded="false">
        <span class="faq-q-text">${escapeHtml(item.question)}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer">
        <p>${escapeHtml(item.answer)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Render Contact Section
 */
function renderContact(contact) {
  if (!contact) return;

  const headingEl = document.getElementById('contactHeading');
  if (headingEl && contact.heading) headingEl.textContent = contact.heading;

  const textEl = document.getElementById('contactSubtext');
  if (textEl && contact.text) textEl.textContent = contact.text;

  const waRaw = contact.whatsappRaw || '923241924672';
  const waDisplay = contact.whatsappNumber || '+92 324 1924672';
  const waUrl = `https://wa.me/${waRaw}`;

  const contactWaLink = document.getElementById('contactWaLink');
  if (contactWaLink) contactWaLink.href = waUrl;

  const contactWaNumber = document.getElementById('contactWaNumber');
  if (contactWaNumber) contactWaNumber.textContent = waDisplay;

  const emailDisplay = document.getElementById('emailAddressDisplay');
  if (emailDisplay && contact.email) {
    emailDisplay.textContent = contact.email;
    emailDisplay.href = `mailto:${contact.email}`;
  }

  const emailIconLink = document.getElementById('contactEmailIconLink');
  if (emailIconLink && contact.email) {
    emailIconLink.href = `mailto:${contact.email}`;
  }

  const locationEl = document.getElementById('contactLocation');
  if (locationEl && contact.location) locationEl.textContent = contact.location;

  const floatingWa = document.getElementById('floatingWaBtn');
  if (floatingWa) {
    floatingWa.href = waUrl;
    floatingWa.setAttribute('aria-label', `Chat on WhatsApp (${waDisplay})`);
  }
}

/**
 * Render Footer
 */
function renderFooter(footer, contact) {
  if (footer) {
    const bioEl = document.getElementById('footerBio');
    if (bioEl && footer.bio) bioEl.textContent = footer.bio;

    const copyEl = document.getElementById('footerCopyright');
    if (copyEl && footer.copyright) copyEl.textContent = footer.copyright;
  }

  if (contact) {
    const waRaw = contact.whatsappRaw || '923241924672';
    const footerWa = document.getElementById('footerWaLink');
    if (footerWa) footerWa.href = `https://wa.me/${waRaw}`;

    const footerEmail = document.getElementById('footerEmailLink');
    if (footerEmail && contact.email) {
      footerEmail.href = `mailto:${contact.email}`;
      footerEmail.setAttribute('aria-label', `Email (${contact.email})`);
    }
  }
}

/**
 * Sticky Header Elevation on Scroll
 */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const closeBtn = document.getElementById('mobileClose');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');

  if (!toggleBtn || !mobileNav) return;

  const openMenu = () => {
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/**
 * Highlight Active Navigation Link on Scroll
 */
function initActiveNavLinkScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Interactive FAQ Accordion
 */
function initFaqAccordion() {
  document.addEventListener('click', (e) => {
    const questionBtn = e.target.closest('.faq-question');
    if (!questionBtn) return;
    const item = questionBtn.closest('.faq-item');
    if (!item) return;
    const answer = item.querySelector('.faq-answer');
    if (!answer) return;

    const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';
    const allItems = document.querySelectorAll('.faq-item');

    // Close all other open items
    allItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherBtn && otherAnswer) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = null;
        }
      }
    });

    // Toggle current item
    if (isExpanded) {
      questionBtn.setAttribute('aria-expanded', 'false');
      answer.style.maxHeight = null;
    } else {
      questionBtn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}

/**
 * Pricing Package Selection Auto-Populates Contact Form
 */
function initPricingPackageSelection() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.package-select-btn');
    if (!btn) return;

    const packageName = btn.getAttribute('data-package') || '';
    const websiteTypeSelect = document.getElementById('websiteType');
    const budgetSelect = document.getElementById('projectBudget');
    const detailsTextarea = document.getElementById('projectDetails');

    if (!websiteTypeSelect || !budgetSelect) return;

    const pkgKey = packageName.toLowerCase();

    // Auto-filled details sentences: if the box is empty, or still holds a
    // previous package's auto-filled sentence, refresh it for the new pick.
    // Text the visitor typed themselves is never overwritten.
    const PKG_PREFILLS = [
      'Hi Moiz, I am interested in the Starter Package ($149) for a 1-page modern landing page.',
      'Hi Moiz, I am interested in the Business Package ($349) for an up to 5-page company website.',
      'Hi Moiz, I am interested in the E-Commerce / Custom Package (Starting at $649).'
    ];
    const setDetailsFor = (sentence) => {
      if (detailsTextarea && (!detailsTextarea.value.trim() || PKG_PREFILLS.includes(detailsTextarea.value))) {
        detailsTextarea.value = sentence;
      }
    };

    if (pkgKey.includes('starter')) {
      websiteTypeSelect.value = 'Landing Page';
      budgetSelect.value = 'Under $150';
      setDetailsFor(PKG_PREFILLS[0]);
    } else if (pkgKey.includes('business')) {
      websiteTypeSelect.value = 'Business Website';
      budgetSelect.value = '$150–$350';
      setDetailsFor(PKG_PREFILLS[1]);
    } else if (pkgKey.includes('custom') || pkgKey.includes('e-commerce')) {
      websiteTypeSelect.value = 'E-Commerce';
      budgetSelect.value = '$650+';
      setDetailsFor(PKG_PREFILLS[2]);
    }

    updateSelectedPackageBar(packageName);

    showToast(`Selected: ${packageName}. Contact form updated!`, 'info');
  });
}

/**
 * Selected Package Summary Bar (inside the contact form)
 * Shows the package the visitor picked in the Pricing section, with its
 * delivery line from the pricing data, until they pick another one.
 * Also stores the selection on the form so the WhatsApp message can
 * include an explicit "Selected Package" line.
 */
function updateSelectedPackageBar(packageName) {
  const form = document.getElementById('contactForm');
  if (!form || !packageName) return;

  form.dataset.selectedPackage = packageName;

  let bar = document.getElementById('selectedPackageBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'selectedPackageBar';
    bar.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;border:1px solid rgba(34,211,238,0.35);background:rgba(34,211,238,0.06);border-radius:12px;padding:12px 16px;margin-bottom:20px;font-size:0.95rem;';
    form.insertBefore(bar, form.firstChild);
  }

  let deliveryText = '';
  const plans = (activeContent && activeContent.pricing && activeContent.pricing.plans) || [];
  const key = packageName.toLowerCase();
  const plan = plans.find(p => p && p.name && key.includes(p.name.toLowerCase().split(' ')[0]));
  if (plan && Array.isArray(plan.features)) {
    deliveryText = plan.features.find(f => /^delivery/i.test(f)) || '';
  }

  bar.innerHTML =
    '<span><strong style="color:var(--primary-accent, #22d3ee);">Selected Package:</strong> ' + escapeHtml(packageName) +
    (deliveryText ? ' &middot; ' + escapeHtml(deliveryText) : '') +
    '</span><a href="#pricing" style="color:var(--primary-accent, #22d3ee);font-weight:600;text-decoration:underline;">Change</a>';
  bar.style.display = 'flex';
}

/**
 * Contact Form Validation & Direct WhatsApp Submission
 * DIRECTLY opens WhatsApp without any confirm() dialog.
 * If popup is blocked by browser, provides tappable fallback link in toast.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const typeSelect = document.getElementById('websiteType');
  const budgetSelect = document.getElementById('projectBudget');
  const detailsInput = document.getElementById('projectDetails');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const detailsError = document.getElementById('detailsError');

  form.onsubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (detailsError) detailsError.textContent = '';

    // Validate Name
    if (!nameInput.value.trim()) {
      if (nameError) nameError.textContent = 'Please enter your name.';
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      if (emailError) emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate Details
    if (!detailsInput.value.trim()) {
      if (detailsError) detailsError.textContent = 'Please briefly share your project requirements.';
      isValid = false;
    }

    if (!isValid) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const type = typeSelect.value || 'Not specified';
    const budget = budgetSelect.value || 'Not specified';
    const details = detailsInput.value.trim();

    const waRaw = (activeContent.contact && activeContent.contact.whatsappRaw) || '923241924672';
    const selectedPackage = form.dataset.selectedPackage || '';

    // Construct WhatsApp prefilled message
    const waMessage = encodeURIComponent(
      `Hi Moiz, I'm reaching out from your portfolio website!\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Website Type:* ${type}\n` +
      `*Budget:* ${budget}\n` +
      (selectedPackage ? `*Selected Package:* ${selectedPackage}\n` : '') +
      `\n*Project Details:*\n${details}`
    );

    const waUrl = `https://wa.me/${waRaw}?text=${waMessage}`;

    // DIRECTLY open WhatsApp without any confirm() dialog
    let popup = null;
    try {
      popup = window.open(waUrl, '_blank');
    } catch (popupErr) {
      console.warn('window.open error:', popupErr);
    }

    // Check if popup was blocked by browser
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      showToast(
        `Thank you, ${name}! Popup blocked — <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--primary-accent);text-decoration:underline;font-weight:700;">Click here to Open WhatsApp</a>`,
        'info',
        8000
      );
    } else {
      showToast(`Thank you, ${name}! Your inquiry has been sent to WhatsApp.`, 'success', 5000);
    }

    // Reset form fields
    form.reset();
  };
}

/**
 * Copy Email to Clipboard Helper
 */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailDisplay = document.getElementById('emailAddressDisplay');

  if (!copyBtn || !emailDisplay) return;

  copyBtn.onclick = () => {
    const email = emailDisplay.textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email address copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Copied: ' + email, 'info');
    });
  };
}

/**
 * Concept Project Live Demo Modal
 * Only triggered when demoUrl is empty
 */
function initConceptDemoModal() {
  const modal = document.getElementById('demoModal');
  const modalTitle = document.getElementById('demoModalTitle');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalContactLink = document.querySelector('.modal-contact-link');

  if (!modal) return;

  const openModal = (projectName) => {
    if (modalTitle) modalTitle.textContent = `${projectName} — Concept Demo`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.live-demo-trigger');
    if (btn) {
      e.preventDefault();
      const project = btn.getAttribute('data-project') || 'Concept Project';
      openModal(project);
    }
  });

  if (modalCloseBtn) modalCloseBtn.onclick = closeModal;
  if (modalDismissBtn) modalDismissBtn.onclick = closeModal;
  if (modalContactLink) modalContactLink.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/**
 * Scroll Animations using IntersectionObserver
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Toast Notification Utility
 */
function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg = type === 'success' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * Utility: HTML escape
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str || '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
