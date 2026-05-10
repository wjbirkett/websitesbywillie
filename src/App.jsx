import React, { useState, useEffect, useRef } from 'react'
import knicksImg from './assets/knickshub.png'
import escapadesImg from './assets/escapades.png'
import statcastEdgeImg from './assets/statcastedge.png'
import saltlineImg from './assets/saltline.png'
import coolbreezeImg from './assets/coolbreeze.png'
import leadtrackerImg from './assets/leadtracker.png'
import './App.css'

/* ─── NAV ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#hero" className="nav__logo" aria-label="Websites by Willie Home">W<span>.</span></a>
      <ul className="nav__links">
        <li><a href="#services">Services</a></li>
        <li><a href="#ai-assistance">AI Assistance</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="https://calendar.app.google/8TG6m9saBoppoQpVA" target="_blank" rel="noopener noreferrer" className="nav__cta">Book a call</a></li>
      </ul>
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
          No monthly platform fees. No lock-in. Just a clean, fast website
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
          Built with React + Vercel — meaning sites load fast, stay up, and cost nothing to host.
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
      title: 'Multi-page sites',
      desc: 'A full website with dedicated pages for services, about, blog, and contact. Built for businesses ready to grow their online presence and rank in local search.',
      tags: ['Business site', 'Restaurant', 'Service co.'],
    },
    {
      num: '03',
      title: 'Advanced projects',
      desc: 'Custom tools built for specific business needs — client portals, booking systems, lead trackers, internal dashboards. Scoped and quoted per project.',
      tags: ['Custom tool', 'Portal', 'Booking system'],
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
              <strong>Zero monthly fees.</strong> Sites are hosted on Vercel's
              free tier — that's a saving of roughly <strong>$1,800 over 3 years</strong> compared
              to typical managed WordPress hosting. The domain (~$12/yr) is registered
              in your name and paid directly by you.
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
                <span><strong>One-time build. $0/mo hosting.</strong></span>
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

        <div className="ai-assistance__note">
          <p>
            <strong>Pricing depends on the project.</strong> Every business works differently, so AI assistance is quoted based on your goals, tools, and level of setup needed.
          </p>
        </div>

        <div className="section-cta">
          <a href="https://calendly.com/willie-websitesbywillie/15min" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
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
      type: 'Business Website',
      desc: 'A polished marketing site for a premium event management and luxury travel company with 30+ years of excellence. Clean, conversion-focused, and brand-true.',
      img: escapadesImg,
      tags: ['Landing Page', 'Events', 'Travel'],
      theme: 'light',
      url: 'https://escapadestogether.com/',
    },
    {
      title: 'StatcastEdge',
      type: 'Analytics Platform',
      desc: 'A dark, data-heavy MLB forecasting platform with model context, simulation-driven dashboards, subscription access, and a polished product experience built for serious baseball research.',
      img: statcastEdgeImg,
      tags: ['Analytics', 'MLB', 'Dashboard'],
      theme: 'dark',
      url: 'https://www.statcastedge.com/',
    },
    {
      title: 'CoolBreeze HVAC',
      type: 'Multi-Page Service Site',
      desc: 'A full multi-page site for a local HVAC company. Dedicated pages for services, maintenance plans, about, and contact — built to generate calls and rank in local search.',
      img: coolbreezeImg,
      tags: ['Multi-page', 'HVAC', 'Local Service'],
      theme: 'neutral',
      url: 'https://coolbreeze-hvac-green.vercel.app/',
    },
    {
      title: 'Saltline Kitchen',
      type: 'One-Page Restaurant Site',
      desc: 'A single-page coastal restaurant site with interactive menu tabs, reservation form, photo gallery, private dining section, and hours — all in one smooth scrolling experience.',
      img: saltlineImg,
      tags: ['One-page', 'Restaurant', 'Reservations'],
      theme: 'light',
      url: 'https://saltline-kitchen.vercel.app/',
    },
    {
      title: 'KnicksHub',
      type: 'Web App & Dashboard',
      desc: 'AI-powered Knicks betting predictions, best bets, and player props. ML model trained on 5,000+ games with 65% win accuracy. Full pick grading and accountability.',
      img: knicksImg,
      tags: ['React', 'AI/ML', 'Sports Betting'],
      theme: 'dark',
      url: 'https://knickshub.com',
    },
    {
      title: 'Lead Tracker App',
      type: 'Internal Tool / Dashboard',
      desc: 'A custom lead management dashboard to track prospects, pipeline stages, follow-up dates, and conversion rates. No monthly SaaS fees — you own it.',
      img: leadtrackerImg,
      tags: ['React', 'Dashboard', 'Internal Tool'],
      theme: 'neutral',
      url: 'https://lead-tracker-3562.vercel.app/',
    },
  ]

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Recent work</h2>
        </div>
        <div className="portfolio__grid">
          {projects.map((p) => (
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
      name: 'One-page site',
      price: 'From $400',
      desc: 'Perfect for service businesses, portfolios, and anyone who needs a clean, fast online presence.',
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
      name: '4–5 page site',
      price: 'From $800',
      desc: 'A full website for businesses ready to grow their online presence and rank in local search.',
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
      name: 'Web app / custom',
      price: 'By quote',
      desc: 'Dashboards, client portals, booking tools — anything that needs custom logic and real functionality.',
      features: [
        'Custom page count',
        'React app development',
        'API integrations',
        'Revisions scoped per project',
        'Ongoing support available',
        'Timeline by scope',
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
              <a href="#contact" className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'}`}>
                Book a free call
              </a>
            </div>
          ))}
        </div>

        <p className="plans__payment-note">
          50% to start · 50% before launch · Stripe, ACH, Zelle, or check
        </p>
        <p className="plans__addons-note">
          Add-ons available: copywriting, logo design, extra revision rounds — quoted per project.
        </p>
        <p className="plans__maintenance-note">
          Prefer a hands-off experience? Ask about the <strong>maintenance retainer</strong> — $50/mo covers minor updates, text changes, and priority support so you never have to touch the code.
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
      a: 'DIY builders are great if you want to build the site yourself. Most business owners try them first and realize the design still looks DIY, SEO setup is confusing, and the monthly fees add up fast. I build the site for you so it looks professional from day one — and you own everything with no ongoing platform fees.',
    },
    {
      q: 'How long does it take?',
      a: 'A one-page site is usually done in about 5 days once I have your content and the deposit has cleared. A 4–5 page site takes around 2 weeks. Timeline starts once you send logo, copy, and any photos — that\'s the most common delay, not the build itself.',
    },
    {
      q: 'Do I need to buy my own domain?',
      a: 'You can, or I can walk you through it. Either way, the domain needs to be registered in your name and on your card — you should own it, not me. I\'ll handle pointing it to your site.',
    },
    {
      q: 'What do I need to provide?',
      a: 'At minimum: your logo (or I can help create something simple), the text for each page, and any photos. If you don\'t have photos, I\'ll use high-quality stock. If you\'re not sure what to write, I can help with copy for an additional fee.',
    },
    {
      q: 'What if I need changes after launch?',
      a: 'Minor bug fixes and small tweaks are on me for 30 days after launch — no charge. After that, I offer support at $75/hr with no retainer required. If you\'d prefer a completely hands-off experience, ask about the maintenance retainer: $50/mo covers minor updates and priority support. Either way, the code is yours and you can take it to any developer at any time.',
    },
    {
      q: 'Can you help with copy and photos?',
      a: 'Copywriting and sourcing/editing photos can be added to any project. Just mention it on the call and I\'ll include it in the quote.',
    },
    {
      q: 'How does payment work?',
      a: '50% upfront to start, 50% before launch. I accept Stripe (credit/debit card), ACH bank transfer, Zelle, or business check. The deposit locks in your spot and covers the build. Final payment is due before the domain goes live.',
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
                    <option value="Multi-page website">Multi-page website</option>
                    <option value="Web app / custom tool">Web app / custom tool</option>
                    <option value="AI Assistance / Workflow Automation">AI Assistance / Workflow Automation</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">What do you need?</label>
                  <textarea
                    id="message" name="message" rows="5" required
                    placeholder="Tell me about your business and what you're looking for..."
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
        <IncludedAndWho />
        <Portfolio />
        <Pricing />
        <AIAssistance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
