import React, { useState, useEffect } from 'react'
import knicksImg from './assets/knickshub.png'
import escapadesImg from './assets/escapades.png'
import statcastEdgeImg from './assets/statcastedge.png'
import saltlineImg from './assets/saltline.png'
import opskitVaultImg from './assets/opskit-vault.png'
import leadtrackerImg from './assets/leadtracker.png'
import './App.css'

/* ─── NAV ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const bookingLink = 'https://calendar.app.google/8TG6m9saBoppoQpVA'
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#ai-assistance', label: 'AI Assistance' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setDrawerOpen(false)
    }
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [drawerOpen])

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#hero" className="nav__logo" aria-label="Websites by Willie Home">W<span>.</span></a>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
        <li><a href={bookingLink} target="_blank" rel="noopener noreferrer" className="nav__cta">Book a call</a></li>
      </ul>
      <button
        type="button"
        className={`nav__hamburger ${drawerOpen ? 'nav__hamburger--open' : ''}`}
        aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={drawerOpen}
        aria-controls="mobile-navigation"
        onClick={() => setDrawerOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      {drawerOpen && (
        <button
          type="button"
          className="nav__overlay"
          aria-label="Close navigation menu"
          onClick={closeDrawer}
        />
      )}
      <div className={`nav__drawer ${drawerOpen ? 'nav__drawer--open' : ''}`} id="mobile-navigation" aria-hidden={!drawerOpen}>
        <ul className="nav__drawer-links">
          {links.map((link) => (
            <li key={link.href}><a href={link.href} onClick={closeDrawer}>{link.label}</a></li>
          ))}
          <li>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="nav__drawer-cta" onClick={closeDrawer}>
              Book a call
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow animate-up delay-1">
          Willie · Connecticut & Florida
        </p>
        <h1 className="hero__headline animate-up delay-2">
          Fast, modern websites<br />
          for local service<br />
          <span className="hero__headline--italic">businesses.</span>
        </h1>
        <p className="hero__sub animate-up delay-3">
          No required monthly website-builder fees. No lock-in. Just a clean, fast website
          your customers can find — built with modern tools and handed off
          with full ownership. From first call to launch, usually in a week.
        </p>
        <div className="hero__trust animate-up delay-4">
          <span>✓ Fast turnaround</span>
          <span>✓ You own the code</span>
          <span>✓ No platform lock-in</span>
        </div>
        <div className="hero__actions animate-up delay-4">
          <a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Book a free 15-minute call
          </a>
          <a href="#portfolio" className="btn btn--ghost">
            See the work ↓
          </a>
        </div>
        <p className="hero__tech animate-up delay-5">
          Built with modern code and reliable hosting — meaning your site is fast, portable, and not trapped inside a drag-and-drop builder.
        </p>
      </div>
      <div className="hero__rule" aria-hidden="true" />
    </section>
  )
}

/* ─── PAIN POINTS ─── */
function PainPoints() {
  const pains = [
    'Your website looks outdated — and you\'re embarrassed to share it.',
    'You\'re losing customers to competitors with better-looking sites.',
    'You\'re tired of paying monthly fees for a site that constantly breaks.',
    'You just want a simple, professional presence that works on every device.',
  ]
  return (
    <section className="painpoints">
      <div className="container">
        <div className="painpoints__inner">
          <div className="painpoints__left">
            <p className="painpoints__q">Does this sound familiar?</p>
            <p className="painpoints__answer">That's exactly what I fix.</p>
          </div>
          <ul className="painpoints__list">
            {pains.map((p, i) => (
              <li key={i} className="painpoints__item">
                <span className="painpoints__dot" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES ─── */
function Services() {
  const cards = [
    {
      num: '01',
      title: 'One-page sites',
      desc: 'Tight, persuasive, lightning-fast. Perfect for local service businesses, consultants, and personal brands who need a polished online presence without the bloat.',
      tags: ['Landing page', 'Portfolio', 'Link-in-bio'],
    },
    {
      num: '02',
      title: 'Multi-page business sites',
      desc: 'A full website with dedicated pages for services, about, blog, and contact. Built for businesses ready to grow their online presence and rank in local search.',
      tags: ['Business site', 'Restaurant', 'Service co.'],
    },
    {
      num: '03',
      title: 'Custom tools, AI workflows & automations',
      desc: 'Dashboards, lead trackers, booking tools, AI-assisted workflows, and business automations built around how your company actually works. Scoped and quoted per project.',
      tags: ['Custom tool', 'AI workflow', 'Automation'],
    },
  ]

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I do</span>
          <h2 className="section-title">Three ways I can help</h2>
        </div>
        <div className="services__grid">
          {cards.map((card) => (
            <div className="service-card" key={card.num}>
              <span className="service-card__num">{card.num}</span>
              <h3 className="service-card__title">{card.title}</h3>
              <p className="service-card__desc">{card.desc}</p>
              <div className="service-card__tags">
                {card.tags.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI blurb - toned down */}
        <div className="ai-blurb">
          <p>
            <strong>Faster turnaround, more value.</strong>{' '}
            I combine modern tools with hands-on custom work — so you get
            premium quality without the premium price tag.
          </p>
        </div>

        <div className="section-cta">
          <a href="#pricing" className="btn btn--outline">See pricing & packages →</a>
        </div>
      </div>
    </section>
  )
}

/* ─── INCLUDED & WHO ─── */
function IncludedAndWho() {
  const included = [
    { label: 'Mobile-friendly design',      benefit: 'looks great on phones and tablets' },
    { label: 'Fast-loading pages',          benefit: 'Google favors faster sites in search' },
    { label: 'Contact form',               benefit: 'customers can message you instantly' },
    { label: 'Basic SEO setup',            benefit: 'so people can find you on Google' },
    { label: 'Secure HTTPS / SSL',         benefit: 'protects visitors and builds trust' },
    { label: 'Google indexing setup',      benefit: 'gets your site into search results faster' },
    { label: 'Domain connection',          benefit: 'your domain, pointed and ready' },
    { label: 'Simple launch handoff notes', benefit: 'so you know where everything is and what to do after launch' },
  ]

  const niches = [
    'Local service businesses',
    'Contractors & trades',
    'Restaurants & cafés',
    'Coaches & consultants',
    'New businesses needing their first site',
    'Anyone tired of overpaying for an outdated site',
  ]

  return (
    <section className="included section">
      <div className="container">
        <div className="included__grid">

          {/* What's included */}
          <div className="included__col">
            <span className="section-label">Every project includes</span>
            <h2 className="section-title">What you get</h2>
            <ul className="included__list">
              {included.map(({ label, benefit }) => (
                <li key={label} className="included__item">
                  <span className="included__check">✓</span>
                  <span>
                    <strong>{label}</strong>
                    <em> — {benefit}</em>
                  </span>
                </li>
              ))}
            </ul>

            {/* Hosting savings callout */}
            <div className="hosting-callout">
              <strong>No required website-builder subscription.</strong> Your site is custom-coded and can be hosted on a modern platform you control — without being locked into Wix, Squarespace, or a proprietary agency setup. I’ll recommend the right hosting option based on your project.
            </div>

            {/* Cost comparison table */}
            <div className="cost-table">
              <div className="cost-table__row cost-table__header">
                <span>Option</span>
                <span>Monthly cost</span>
              </div>
              <div className="cost-table__row">
                <span>DIY builder (Wix/Squarespace)</span>
                <span>$30–$60/mo forever</span>
              </div>
              <div className="cost-table__row">
                <span>WordPress agency</span>
                <span>$100–$300/mo</span>
              </div>
              <div className="cost-table__row cost-table__highlight">
                <span><strong>Websites by Willie</strong></span>
                <span><strong>Custom-coded. No builder lock-in.</strong></span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="guarantee">
              <span className="guarantee__icon">✓</span>
              <p><strong>My guarantee:</strong> You won't pay the final invoice until you're completely happy with the design.</p>
            </div>

            <div className="guarantee">
              <span className="guarantee__icon">✓</span>
              <p><strong>Launch-ready handoff:</strong> Every project includes simple handoff notes so you understand what was delivered, where the project files are, and what to do after launch.</p>
            </div>

            <div className="section-cta" style={{marginTop: 'var(--space-lg)'}}>
              <a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book a free 15-minute call →</a>
            </div>
          </div>

          {/* Who this is for */}
          <div className="included__col">
            <span className="section-label">Who this is for</span>
            <h2 className="section-title">Is this a fit?</h2>
            <ul className="who__list">
              {niches.map((n) => (
                <li key={n} className="who__item">
                  <span className="who__dot" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="who__note">
              If you run a local business and need a professional website without agency pricing, this is for you.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── PORTFOLIO ─── */
function AIAssistance() {
  const features = [
    {
      title: 'AI Tool Guidance',
      desc: 'Learn how to use tools like ChatGPT and other AI platforms for your specific business needs.',
    },
    {
      title: 'Workflow Automation',
      desc: 'Automate repetitive tasks such as lead follow-ups, form submissions, reminders, reports, and email drafts.',
    },
    {
      title: 'Business Process Review',
      desc: 'Identify where your team is losing time and where AI or automation could make the biggest difference.',
    },
    {
      title: 'Custom AI Solutions',
      desc: 'Build simple AI-powered tools, assistants, dashboards, or automations based on your workflow.',
    },
  ]
  const examples = [
    'New lead comes in → automatic email reply → follow-up task created',
    'Contact form submitted → customer info saved → reminder scheduled',
    'Weekly report generated from forms, spreadsheets, or CRM data',
    'Draft emails, job descriptions, FAQs, social posts, or proposals with AI',
    'Internal checklist or dashboard for tracking leads, jobs, or requests',
  ]

  return (
    <section className="ai-assistance section" id="ai-assistance" aria-labelledby="ai-assistance-title">
      <div className="container">
        <div className="ai-assistance__intro">
          <span className="section-label">AI Assistance</span>
          <h2 className="section-title" id="ai-assistance-title">AI Assistance & Workflow Automation</h2>
          <p className="ai-assistance__sub">
            Use AI to save time in your business — without overcomplicating it.
          </p>
          <div className="ai-assistance__body">
            <p>
              AI can help your business, but only if it is set up around the way you actually work. I help small businesses figure out where AI makes sense, how to use it day-to-day, and how to automate repetitive tasks like follow-ups, intake forms, emails, reports, content drafts, scheduling, and internal processes.
            </p>
            <p>
              Whether you need help learning how to use AI tools, building a custom workflow, or connecting apps so your business runs smoother, we can map out a solution that fits your company.
            </p>
          </div>
        </div>

        <div className="ai-assistance__grid">
          {features.map((feature, index) => (
            <div className="ai-feature-card" key={feature.title}>
              <span className="ai-feature-card__num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="ai-feature-card__title">{feature.title}</h3>
              <p className="ai-feature-card__desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="ai-examples">
          <h3>Examples of what we can automate</h3>
          <ul>
            {examples.map((example) => (
              <li key={example}>
                <span className="included__check">✓</span>
                {example}
              </li>
            ))}
          </ul>
        </div>

        <div className="ai-assistance__note">
          <p>
            <strong>AI assistance starts with a $300 workflow audit.</strong> Automation setup starts at $750. Custom AI tools and larger workflows are quoted based on scope.
          </p>
        </div>

        <div className="section-cta">
          <a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Book a free 15-minute call
          </a>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    {
      title: 'Escapades Together',
      type: 'Local Business Website',
      desc: 'A polished marketing site for a premium event management and luxury travel company with 30+ years of excellence. Clean, conversion-focused, and brand-true.',
      img: escapadesImg,
      tags: ['Landing Page', 'Events', 'Travel'],
      theme: 'light',
      url: 'https://escapadestogether.com/',
    },
    {
      title: 'StatcastEdge',
      type: 'AI / Data Project',
      desc: 'A dark, data-heavy MLB forecasting platform with model context, simulation-driven dashboards, subscription access, and a polished product experience built for serious baseball research.',
      img: statcastEdgeImg,
      tags: ['Analytics', 'MLB', 'Dashboard'],
      theme: 'dark',
      url: 'https://www.statcastedge.com/',
    },
    {
      title: 'OpsKit Vault',
      type: 'Business Template Store',
      desc: 'A practical product site for ready-to-use admin scripts, checklists, spreadsheets, and workflow kits that help busy service companies clean up follow-up without building systems from scratch.',
      img: opskitVaultImg,
      tags: ['Templates', 'Operations', 'Service Business'],
      theme: 'neutral',
      url: 'https://opskit-vault-site.vercel.app/',
    },
    {
      title: 'Saltline Kitchen',
      type: 'Local Business Website',
      desc: 'A single-page coastal restaurant site with interactive menu tabs, reservation form, photo gallery, private dining section, and hours — all in one smooth scrolling experience.',
      img: saltlineImg,
      tags: ['One-page', 'Restaurant', 'Reservations'],
      theme: 'light',
      url: 'https://saltline-kitchen.vercel.app/',
    },
    {
      title: 'KnicksHub',
      type: 'AI / Data Project',
      desc: 'AI-powered Knicks betting predictions, best bets, and player props. ML model trained on 5,000+ games with 65% win accuracy. Full pick grading and accountability.',
      img: knicksImg,
      tags: ['React', 'AI/ML', 'Sports Betting'],
      theme: 'dark',
      url: 'https://knickshub.com',
    },
    {
      title: 'Lead Tracker App',
      type: 'Custom Tool / Dashboard',
      desc: 'A custom lead management dashboard to track prospects, pipeline stages, follow-up dates, and conversion rates. Built as an internal tool instead of another monthly SaaS subscription.',
      img: leadtrackerImg,
      tags: ['React', 'Dashboard', 'Internal Tool'],
      theme: 'neutral',
      url: 'https://lead-tracker-3562.vercel.app/',
    },
  ]
  const projectOrder = [
    'Escapades Together',
    'OpsKit Vault',
    'Saltline Kitchen',
    'Lead Tracker App',
    'StatcastEdge',
    'KnicksHub',
  ]
  const orderedProjects = projectOrder.map((title) => projects.find((project) => project.title === title)).filter(Boolean)

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Recent work</h2>
        </div>
        <div className="portfolio__grid">
          {orderedProjects.map((p) => (
            <div className={`project-card project-card--${p.theme}`} key={p.title}>
              <div className="project-card__img-wrap">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={`${p.title} - ${p.type.toLowerCase()} design by Websites by Willie`}
                    loading="lazy"
                    className="project-card__img"
                  />
                ) : (
                  <div className="project-card__placeholder">
                    <span>{p.placeholder || p.title}</span>
                  </div>
                )}
              </div>
              <div className="project-card__body">
                <span className="project-card__type">{p.type}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    View live site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <a href="#contact" className="btn btn--outline">Want something like this? Let's talk →</a>
        </div>
      </div>
    </section>
  )
}

/* ─── PROCESS & PRICING ─── */
function Proof() {
  const cards = [
    {
      title: 'Clear communication',
      text: 'You get a simple scope, timeline, and checklist before the build starts — so you always know what is needed and what comes next.',
    },
    {
      title: 'Ownership from day one',
      text: 'Your domain, code, and project files are yours. No proprietary website builder lock-in.',
    },
    {
      title: 'Launch-ready handoff',
      text: 'Every project includes simple handoff notes so you understand what was delivered, where the project files are, and what to do after launch.',
    },
  ]

  return (
    <section className="proof section">
      <div className="container">
        <div className="proof__intro">
          <span className="section-label">Proof</span>
          <h2 className="section-title">Built for real businesses and practical results</h2>
          <p>
            A good website should make your business easier to understand, easier to contact, and easier to trust. I focus on clean design, fast performance, simple ownership, and clear handoff so you are not stuck relying on a platform or agency forever.
          </p>
        </div>
        <div className="proof__grid">
          {cards.map((card) => (
            <div className="proof-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const steps = [
    {
      num: '1',
      title: 'Quick intro call',
      desc: 'We chat for 15 minutes to understand your business and what the site needs to do. No pitch, just clarity.',
    },
    {
      num: '2',
      title: 'Simple proposal',
      desc: 'Within 24 hours you get a clear scope, flat-rate price, and timeline. No mystery quotes, no hidden fees.',
    },
    {
      num: '3',
      title: 'Content & kickoff',
      desc: 'You send logo, text, and photos — or I help. I\'ll give you a clear checklist so you know exactly what to prepare.',
    },
    {
      num: '4',
      title: 'Build & review',
      desc: 'I build the site and share a live preview link. Revisions happen here — not after launch.',
    },
    {
      num: '5',
      title: 'Launch & handoff',
      desc: 'Your site goes live on your domain. You get simple handoff notes and the project files/code. Built with industry-standard code — not proprietary builders.',
    },
  ]

  const plans = [
    {
      name: 'One-page Starter Site',
      price: 'From $600',
      desc: 'Perfect for service businesses, portfolios, and personal brands that need a clean, professional online presence without extra complexity.',
      features: [
        'Single-page scrolling site',
        'Mobile-friendly design',
        'Contact form',
        'Basic SEO setup',
        'Domain + hosting setup guidance',
        '1 round of revisions',
        'Simple launch handoff notes',
        'Delivered in about 5 business days once content is ready',
      ],
    },
    {
      name: '4–5 Page Business Site',
      price: 'From $1,200',
      desc: 'A full website for local businesses ready to look more professional, explain their services clearly, and improve local search visibility.',
      features: [
        '4–5 custom pages',
        'Everything in the one-page package',
        'Basic SEO setup',
        'Google indexing setup',
        '2 rounds of revisions',
        'Simple launch handoff notes',
        'Delivered in about 2 weeks once content is ready',
      ],
      featured: true,
    },
    {
      name: 'Custom Web App / Internal Tool',
      price: 'By quote',
      desc: 'Dashboards, lead trackers, portals, booking tools, and custom business systems built around how your company actually works.',
      features: [
        'Custom page count and functionality',
        'React app development',
        'API integrations where needed',
        'Internal dashboards or client portals',
        'Revisions scoped per project',
        'Ongoing support available',
        'Timeline based on scope',
      ],
    },
  ]

  const aiPlans = [
    {
      name: 'AI Workflow Audit',
      price: 'From $300',
      desc: 'A focused review of your business processes to identify where AI or automation can save time, reduce repetitive work, and improve follow-up.',
      features: [
        '60–90 minute workflow review',
        'Identify repetitive tasks and bottlenecks',
        'AI/tool recommendations',
        'Simple automation roadmap',
        'Prioritized next steps',
      ],
    },
    {
      name: 'Automation Setup',
      price: 'From $750',
      desc: 'I build and test one practical workflow, connect the tools where needed, and show you how to use it.',
      features: [
        'Lead follow-up automations',
        'Form-to-email or form-to-spreadsheet workflows',
        'Reminder systems',
        'Report or email draft workflows',
        'Testing and handoff notes included',
      ],
      featured: true,
    },
    {
      name: 'Custom AI Tool / Workflow',
      price: 'By quote',
      desc: 'For businesses that need a custom AI assistant, internal tool, dashboard, or multi-step automation.',
      features: [
        'Custom AI-powered workflow',
        'Business-specific prompts or assistants',
        'App/tool integrations where needed',
        'Internal dashboard or simple interface if needed',
        'Timeline and price based on scope',
      ],
    },
  ]

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Process & Pricing</span>
          <h2 className="section-title">How it works</h2>
        </div>

        {/* Steps */}
        <div className="process__steps">
          {steps.map((step, i) => (
            <div className="process__step" key={step.num}>
              <div className="process__step-num">{step.num}</div>
              {i < steps.length - 1 && <div className="process__connector" aria-hidden="true" />}
              <div className="process__step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="process__note">
          Behind the scenes, I follow a detailed checklist covering everything from domain setup to a 30-day follow-up — so nothing gets missed.
        </p>

        {/* Plans */}
        <h3 className="plans__group-title">Website packages</h3>
        <div className="plans__grid">
          {plans.map((plan) => (
            <div className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="plan-card__badge">Most popular</span>}
              <div className="plan-card__top">
                <h3 className="plan-card__name">{plan.name}</h3>
                <div className="plan-card__price">{plan.price}</div>
                <p className="plan-card__desc">{plan.desc}</p>
              </div>
              <ul className="plan-card__features">
                {plan.features.map(f => (
                  <li key={f}>
                    <span className="plan-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'}`}>
                Book a free call
              </a>
            </div>
          ))}
        </div>

        <h3 className="plans__group-title plans__group-title--spaced">AI & automation services</h3>
        <div className="plans__grid">
          {aiPlans.map((plan) => (
            <div className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="plan-card__badge">Most common</span>}
              <div className="plan-card__top">
                <h3 className="plan-card__name">{plan.name}</h3>
                <div className="plan-card__price">{plan.price}</div>
                <p className="plan-card__desc">{plan.desc}</p>
              </div>
              <ul className="plan-card__features">
                {plan.features.map(f => (
                  <li key={f}>
                    <span className="plan-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'}`}>
                Book a free call
              </a>
            </div>
          ))}
        </div>

        <p className="plans__payment-note">
          50% to start · 50% before launch. Stripe, ACH, Zelle, or check accepted.
        </p>
        <p className="plans__addons-note">
          Add-ons available: copywriting, logo design, extra revision rounds, advanced SEO, automations, and AI workflow setup — quoted per project.
        </p>
        <p className="plans__maintenance-note">
          Prefer a hands-off experience? The <strong>maintenance retainer</strong> is $75/mo and includes up to 30 minutes/month of minor updates and priority support.
        </p>
        <div className="section-cta" style={{marginTop: 'var(--space-lg)'}}>
          <a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Book a free 15-minute call →</a>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      q: 'Why not just use Wix or Squarespace?',
      a: 'DIY builders are fine if you want to build and maintain the site yourself. Most business owners try them first and realize the design still looks DIY, SEO setup is confusing, and the monthly website-builder fees add up. I build the site for you so it looks professional from day one, and you own the code and project files.',
    },
    {
      q: 'How long does it take?',
      a: 'A one-page site is usually done in about 5 business days once I have your content and the deposit has cleared. A 4–5 page site takes around 2 weeks. Timeline starts once you send logo, copy, and any photos — that is the most common delay, not the build itself.',
    },
    {
      q: 'Do I have to pay monthly website-builder fees?',
      a: 'No required website-builder subscription is needed. Your site is custom-coded and can be hosted on a modern platform you control. Depending on the project, there may be domain, hosting, email, or third-party tool costs, but I will explain those clearly before anything launches.',
    },
    {
      q: 'Can you help my business use AI?',
      a: 'Yes. I can help you figure out where AI makes sense, train you or your team on practical tools, and build automations for repetitive tasks like lead follow-ups, forms, reminders, reports, email drafts, and internal workflows. AI workflow audits start at $300, and automation setup starts at $750.',
    },
    {
      q: 'Do I need to buy my own domain?',
      a: 'You can, or I can give you simple setup notes. Either way, the domain needs to be registered in your name and on your card — you should own it, not me. I will handle pointing it to your site.',
    },
    {
      q: 'What do I need to provide?',
      a: 'At minimum: your logo, the text for each page, and any photos. If you do not have photos, I can use high-quality stock. If you are not sure what to write, I can help with copy for an additional fee.',
    },
    {
      q: 'What if I need changes after launch?',
      a: 'Minor bug fixes and small tweaks are included for 30 days after launch. After that, support is $95/hr. Optional maintenance is $75/mo and includes up to 30 minutes/month of minor updates and priority support. Either way, the code is yours and you can take it to another developer at any time.',
    },
    {
      q: 'Can you help with copy and photos?',
      a: 'Copywriting and sourcing/editing photos can be added to any project. Just mention it on the call and I will include it in the quote.',
    },
    {
      q: 'How does payment work?',
      a: '50% upfront to start, 50% before launch. I accept Stripe, ACH bank transfer, Zelle, or business check. The deposit locks in your spot and covers the build. Final payment is due before the domain goes live.',
    },
  ]

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__inner">
          <div className="faq__left">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common questions</h2>
            <p className="faq__sub">
              Don't see your question here?<br />
              <a href="#contact">Just ask →</a>
            </p>
          </div>
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div
                className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
                key={i}
              >
                <button
                  className="faq__question"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq__icon">{open === i ? '−' : '+'}</span>
                </button>
                <div className="faq__answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─── */
function Contact() {
  const [form, setForm] = useState({ name: '', business: '', email: '', projectType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/xbdzzjro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setSubmitted(true)
      setForm({ name: '', business: '', email: '', projectType: '', message: '' })
    } catch (err) {
      console.error('Form error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's talk about<br />your project</h2>
            <p className="contact__sub">
              Book a free 15-minute call — the quickest way to get a clear quote and timeline for your project.
            </p>
            <a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{marginBottom: 'var(--space-md)', display: 'inline-flex'}}>
              Book a call
            </a>
            <p className="contact__or">or send a message below — I'll reply within one business day (EST)</p>
            <a href="mailto:willie@websitesbywillie.com" className="contact__email">
              willie@websitesbywillie.com
            </a>
            <p className="contact__scarcity">
              I take on 2–3 projects per month — book a call to check availability.
            </p>
          </div>
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>Message sent!</h3>
                <p>I'll get back to you within one business day (EST).</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Jane Smith"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="business">Business name</label>
                    <input
                      id="business" name="business" type="text"
                      placeholder="Smith & Co."
                      value={form.business} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="jane@example.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="projectType">Project type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="One-page website">One-page website</option>
                    <option value="4–5 page website">4–5 page website</option>
                    <option value="Custom web app / internal tool">Custom web app / internal tool</option>
                    <option value="AI Assistance / Workflow Automation">AI Assistance / Workflow Automation</option>
                    <option value="Maintenance / updates">Maintenance / updates</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">What do you need?</label>
                  <textarea
                    id="message" name="message" rows="5" required
                    placeholder="Tell me about your business and whether you need a website, AI workflow, automation, updates, or a custom tool..."
                    value={form.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__logo">Websites by Willie</p>
        <p className="footer__copy">© {new Date().getFullYear()} websitesbywillie.com — Connecticut & Florida</p>
        <p className="footer__legal">
          Clients are responsible for ensuring they have the rights to all photos, images, logos, and content submitted for use in their website. Websites by Willie is not responsible for verifying copyright or permissions on client-supplied materials.
        </p>
      </div>
    </footer>
  )
}

/* ─── APP ─── */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <AIAssistance />
        <IncludedAndWho />
        <Portfolio />
        <Proof />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
