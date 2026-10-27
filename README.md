# Muhammad Moiz Latif — Professional Portfolio Website

A fast, secure, modern single-page portfolio website crafted for **Muhammad Moiz Latif**, Web Developer & Cyber Security Student based in Taxila, Pakistan.

---

## 🚀 Key Highlights & Specifications

- **Person & Positioning**:
  - **Name**: Muhammad Moiz Latif
  - **Title**: Web Developer & Cyber Security Student
  - **Location**: Taxila, Pakistan — working with clients worldwide (main focus: international clients)
  - **Status Badge**: Available for New Projects
  - **Languages**: English, Urdu
  - **Avatar / Identity**: Stylish "ML" monogram badge & cyber emblem (strictly no unverified profile photos)
- **Aesthetics & Theme**:
  - Dark Theme: Background `#0A0E17`, Cards/Surface `#111827`, Primary Cyber Cyan `#22D3EE`, Secondary Violet `#8B5CF6`, Main Text `#E5E7EB`, Muted Text `#9CA3AF`.
  - Typography: **Space Grotesk** (headings) & **Inter** (body text).
  - Subtle background grid pattern, soft cyan glows, glassmorphism cards, and smooth scroll animations.
  - **Fast Performance**: Optimized, lightweight vanilla HTML5, CSS3, and modern JavaScript — zero heavy 3D canvases or unnecessary external dependencies.
- **Sections Included**:
  1. **Sticky Header**: Brand monogram logo `ML.`, smooth-scrolling navigation links, mobile hamburger drawer, and highlighted "Start a Project" CTA.
  2. **Hero Section**: Live availability pulse badge, headline, sub-headline with security focus, CTAs, trust line, and stylized ML terminal emblem card.
  3. **Services (6 Cards)**: Business Websites, Landing Pages, WordPress Websites, E-Commerce Websites, Portfolio & Personal Brand Websites, Website Redesign & Maintenance.
  4. **Skills ("My Tech Stack")**: Core Skills (HTML5, CSS3, WordPress, C#, Python), Working Knowledge (Java, Node.js, React - basic level), and Applied Badges (Responsive Design, Basic SEO Setup, Web Security Fundamentals, Git & GitHub).
  5. **Selected Work ("Concept Projects")**: Dental Clinic Website, Restaurant Website, and SaaS Landing Page — each clearly badged as Concept Projects with interactive SVG/CSS browser UI previews and demo info modals.
  6. **About Me**: Creative terminal/code-style card (`developer_info.json`), structured background info list, and career narrative connecting cyber security with web development.
  7. **Why Work With Me (4 Pillars)**: Security-Minded Development, Honest & Transparent, Modern Mobile-First Design, Support After Launch.
  8. **Pricing ("Simple, Honest Pricing")**: Starter ($149), Business ($349, Most Popular), and E-Commerce / Custom ($649+), with automated package pre-selection into the inquiry form.
  9. **Process ("How It Works")**: 4 simple steps: Discover, Design, Build, Launch & Support.
  10. **FAQ (Accordion)**: 6 straightforward Q&As with smooth expandable answers.
  11. **Contact ("Let's Build Your Website")**: Direct WhatsApp button (`+92 324 1924672`), email card with copy button, location badge, and complete project inquiry form with dropdowns and WhatsApp prefilled handshake.
  12. **Footer**: Monogram logo, copyright line, quick links, and social channel buttons.
  13. **Floating WhatsApp Button**: Accessible fixed bottom-right quick-chat button on all screen sizes.

---

## 📂 Project Directory Structure

```
D:\moiz-latif-portfolio\
├── index.html            # Main semantic single-page document with SEO, OG tags & Netlify Identity
├── README.md             # Project documentation & CMS guide
├── admin\
│   ├── index.html        # Decap CMS Admin Dashboard & Netlify Identity widget
│   └── config.yml        # CMS Schema configuration for data/content.json
├── data\
│   └── content.json      # Single source of truth containing all editable website content
├── assets\
│   ├── logo.png          # Official cyber monogram ML logo (1024x1024)
│   ├── favicon.png       # Browser tab favicon icon
│   ├── og-image.png      # High-resolution social media sharing banner
│   └── uploads\          # Media uploads folder for CMS (.gitkeep)
├── css\
│   └── style.css         # Complete cyber-dark design system & responsive layout
└── js\
    └── main.js           # Dynamic content renderer, form handler, FAQ & modal controller
```

---

## 🛠️ Decap CMS & Content Management

All website content is managed from a single data file: `data/content.json`. You can edit it manually in any code/text editor or via the visual **Decap CMS Dashboard**.

### 1. Visual Admin Dashboard
When deployed to **Netlify**:
1. Enable **Identity** in your Netlify site settings (**Site configuration > Identity**).
2. Under **Registration preferences**, choose *Invite only* (recommended so only you can access the admin panel).
3. Under **Services > Git Gateway**, click **Enable Git Gateway**.
4. Invite your email address from the **Identity** tab in Netlify. You will receive an invitation email to set your password.
5. Open your live site URL followed by `/admin/` (e.g. `https://your-domain.netlify.app/admin/`) to log in and manage your site content through friendly forms.
6. When you click **Save** in Decap CMS, it commits changes directly to `data/content.json` on your GitHub repository, and Netlify automatically deploys the updated site!

### 2. Live Demo vs. Concept Demo Modal
- **Dental Clinic Website (BrightSmile)**: Its `demoUrl` is set to `https://sitedemo09.netlify.app`. Clicking **Live Demo** opens this live preview directly in a new browser tab.
- **Restaurant & SaaS Projects**: Their `demoUrl` values are empty for now (`""`), triggering the interactive Concept Demo informational modal. Adding a URL in CMS automatically switches their button to a direct live link.

### 3. Contact Form to WhatsApp Flow
- Submitting the form validates all required fields, builds a pre-formatted message with the user's name, email, website type, budget, and project details, and opens `https://wa.me/923241924672` directly in a new tab without any confirmation dialogs.
- If a browser popup blocker intercepts the tab, an on-screen toast provides a direct tappable "Open WhatsApp" link fallback.

---

## 💻 How to Preview / Run Locally

### Option 1: Direct File Launch
Double-click `index.html` in Windows Explorer or open it in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Option 2: Using Python HTTP Server
Run the following in PowerShell inside `D:\moiz-latif-portfolio`:
```powershell
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Option 3: VS Code Live Server
Open the folder `D:\moiz-latif-portfolio` in Visual Studio Code and click **"Go Live"** from the status bar.

---

## ✉️ Direct Contact Channels

- **WhatsApp**: `+92 324 1924672` ([https://wa.me/923241924672](https://wa.me/923241924672))
- **Email**: `moizlateef.dev@gmail.com` ([mailto:moizlateef.dev@gmail.com](mailto:moizlateef.dev@gmail.com))
- **Location**: Taxila, Pakistan · Working Worldwide

---

## 🌐 Deploying to the Web

The website is ready for 1-click deployment on static hosts:

### GitHub Pages:
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Push to GitHub and enable **GitHub Pages** from the repository **Settings > Pages** (Deploy from branch: `main`).

### Netlify / Vercel:
Drag and drop the `D:\moiz-latif-portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop) or import the GitHub repository in [Vercel](https://vercel.com).

---

© 2026 Muhammad Moiz Latif — Web Developer & Cyber Security Student, Taxila, Pakistan.
