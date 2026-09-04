import React, { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, MapPin, Download, ChevronLeft, ChevronRight, X, ZoomIn, ArrowLeft, Shield, Radio, Activity, Zap, Check } from 'lucide-react';
import './styles.css';

function LinkedInIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const works = [
  {
    slug: 'ping-me',
    title: 'PING ME',
    type: 'IoT Safety Application',
    year: '2026',
    description: 'A personal safety ecosystem combining a mobile experience with a smart wearable for faster emergency reporting.',
    image: '/ping_me_work_cover.png'
  },
  {
    slug: 'kain',
    title: 'KAIN',
    type: 'AI Nutrition App',
    year: '2025',
    description: 'An AI-driven nutrition experience designed around healthier food choices and sustainable habits.',
    image: '/kain_work_cover.png'
  },
  {
    slug: 'lustre',
    title: 'LUSTRE',
    type: 'Website Design Concept',
    year: '2024',
    description: 'A front-end UI project built with React focusing on desktop interface screens for a jewelry shopping concept.',
    image: '/Lustre-card.png'
  },
  {
    slug: 'lakbay',
    title: 'LAKBAY',
    type: 'Travel Booking App',
    year: '2024',
    description: 'A travel booking concept that simplifies planning, discovery, and trip organization.',
    image: '/lakbay_work_cover.png'
  },
  {
    slug: 'tripex',
    title: 'TRIPEX',
    type: 'UI/UX Design Internship',
    year: '2026',
    description: 'Development and maintenance of reusable design components, documentation, and handoff processes at COMBTAS Philippines Inc.',
    image: '/tripex-card-pic.png'
  }
];

const projectDetails = {
  'ping-me': {
    title: 'PING ME',
    subtitle: 'IoT Personal Safety Ecosystem',
    tagline: 'Combining smart wearable technology with real-time mobile tracking for ultra-fast emergency reporting.',
    year: '2026',
    category: 'IoT & Mobile Safety App',
    role: 'Lead UI/UX & Product Designer',
    tools: ['Figma', 'React', 'IoT Telemetry', 'Design System'],
    image: '/ping_me.png',
    overview: 'PING ME is an end-to-end safety platform designed to eliminate critical delays during emergency situations. By pairing a physical smart wearable with an intuitive mobile application, PING ME enables users to trigger discreet SOS dispatches, broadcast encrypted live GPS location, and transmit environmental audio snapshots to emergency services and trusted contacts instantly.',
    problem: 'In high-risk personal safety threats or sudden medical distress, unlocking a mobile device, finding an app, or making a manual call takes valuable time or might be impossible. Users need an automated, discreet, and reliable mechanism to broadcast panic alerts immediately.',
    solution: 'PING ME solves this by introducing a dual-action trigger system: a single tactile button on a lightweight smart wristband and an automated gesture shortcut inside the mobile app that instantly alerts pre-selected emergency contacts without attracting unwanted attention.',
    features: [
      {
        icon: Shield,
        title: 'One-Tap Wearable Trigger',
        desc: 'Tactile panic button on the smart wearable that sends immediate distress signals even when the mobile phone is locked.'
      },
      {
        icon: Radio,
        title: 'Encrypted GPS Streaming',
        desc: 'Continuous real-time location vectors broadcasted to emergency circles with sub-meter accuracy.'
      },
      {
        icon: Activity,
        title: 'Ambient Audio Snapshots',
        desc: 'Captures and uploads a 10-second encrypted audio clip to help responders assess immediate threat conditions.'
      },
      {
        icon: Zap,
        title: 'Instant Multi-Channel Dispatch',
        desc: 'Simultaneous automated SMS, voice alerts, and push notifications sent directly to emergency contacts.'
      }
    ]
  },
  'kain': {
    title: 'KAIN',
    subtitle: 'AI-Driven Nutrition & Mindful-Eating Application',
    tagline: 'Promoting healthier food choices and responsible consumption through personalized insights and behavioral guidance.',
    year: '2025',
    category: 'AI Mobile Experience',
    role: 'UI/UX Designer',
    tools: ['Figma', 'SDG 3', 'SDG 12', 'Behavioral Data'],
    image: '/kain.png',
    overview: 'KAIN is an AI-powered nutrition and mindful-eating application designed to promote healthier food choices and responsible consumption. The project aligns with SDG 3 (Good Health and Well-Being) and SDG 12 (Responsible Consumption and Production) by encouraging sustainable eating habits through personalized insights and behavioral guidance.',
    problem: 'How might we design an AI-driven nutrition application that helps users make healthier and more mindful food choices while promoting sustainable consumption, without overwhelming them with complex data or rigid diet rules?',
    solution: 'KAIN personalizes meal suggestions, simplifies food tracking, delivers mindful eating prompts, enables smart meal planning, and features smart portion awareness to reduce food waste.',
    features: [
      {
        icon: Zap,
        title: 'AI-Driven Personalization',
        desc: 'Personalizes meal suggestions and guidance using behavioral data without enforcing rigid diet rules.'
      },
      {
        icon: Activity,
        title: 'Simplified Food Tracking & Insights',
        desc: 'Log or scan food items and view clear nutritional summaries to support informed yet simple food choices.'
      },
      {
        icon: Shield,
        title: 'Mindful Eating & Habit Guidance',
        desc: 'Delivers mindful-eating prompts and habit-building recommendations based on user behavior.'
      }
    ]
  },
  'lustre': {
    title: 'LUSTRE',
    subtitle: 'Website Design Concept',
    tagline: 'Implementing desktop interface screens for a jewelry shopping concept focused on layout and component structure.',
    year: '2024',
    category: 'Website Design Concept',
    role: 'UI Designer and Front-End Developer',
    tools: ['React', 'Figma', 'CSS Architecture'],
    image: '/lustre.png',
    overview: 'LUSTRE is a front-end UI project built with React that focuses on implementing desktop interface screens for a jewelry shopping concept. The project emphasizes visual layout, component structure, and interface clarity without responsive behavior or backend integration.',
    problem: 'Cluttered online store interfaces confuse shoppers and lead to high abandoned cart rates during checkout.',
    solution: 'A simplified storefront architecture featuring instant filter drawer navigation, quick product previews, and a single-page checkout flow.',
    features: [
      {
        icon: Radio,
        title: 'Editorial Layout',
        desc: 'High-contrast editorial typography and photography highlighting product craftsmanship.'
      },
      {
        icon: Zap,
        title: 'Dynamic Product Filters',
        desc: 'Instant client-side sorting and filtering without page reloads.'
      },
      {
        icon: Shield,
        title: 'Frictionless One-Page Checkout',
        desc: 'Streamlined payment experience engineered to maximize conversion rates.'
      }
    ]
  },
  'lakbay': {
    title: 'LAKBAY',
    subtitle: 'Travel Booking Mobile Application',
    tagline: 'Designing seamless user journeys and visually intuitive layouts for reserving hotels, attractions, and activities.',
    year: '2024',
    category: 'Mobile Travel Application',
    role: 'UI Designer',
    tools: ['Figma', 'Wireframing', 'Prototyping'],
    image: '/lakbay.png',
    overview: 'LAKBAY is a mobile travel booking application designed for reserving hotels, attractions, and activities. The project focused on creating seamless user journeys and visually intuitive layouts to support efficient and enjoyable trip planning.',
    problem: 'Travelers often struggle with fragmented tools across multiple booking platforms and complex interfaces when reserving accommodations and activities.',
    solution: 'LAKBAY consolidates hotel, attraction, and activity bookings into a single, intuitive mobile interface designed for effortless trip planning.',
    features: [
      {
        icon: Activity,
        title: 'Collaborative Trip Boards',
        desc: 'Share and organize itinerary schedules in real-time with travel companions.'
      },
      {
        icon: Radio,
        title: 'Curated Local Guides',
        desc: 'Verified recommendations for authentic local dining, eco-tours, and hidden gems.'
      },
      {
        icon: Shield,
        title: 'Offline Digital Passbook',
        desc: 'Store boarding passes, booking codes, and emergency travel contacts offline.'
      }
    ]
  },
  'tripex': {
    title: 'TRIPEX',
    subtitle: 'UI/UX Design Internship at COMBTAS Philippines Inc.',
    tagline: 'Building reusable design components, documentation, and handoff processes using Figma, Storybook, and Chromatic.',
    year: 'Feb - May 2026',
    category: 'UI/UX Design Internship',
    role: 'UI/UX Design Intern',
    tools: ['Figma', 'Storybook', 'Chromatic', 'Design Systems'],
    image: '/tripex.png',
    overview: 'As a UI/UX Design Intern at COMBTAS Philippines Inc., I contributed to the development and maintenance of reusable design components and documentation. Throughout my 486-hour internship, I collaborated with team members to support design consistency, component organization, and design-to-development handoff processes using Figma, Storybook, and Chromatic. This experience enhanced my skills in design systems, user interface design, and cross-functional collaboration.',
    problem: 'How might we maintain consistency across reusable UI components and ensure that both designers and developers work from a shared, well-documented source of truth throughout the product development process?',
    solution: 'To address this challenge, I assisted in documenting and organizing reusable UI components using Storybook while ensuring alignment with Figma design specifications. I collaborated with designers and developers to review component states, maintain consistency across interfaces, and support a smoother design-to-development workflow. Through the use of Chromatic, I contributed to component validation and visual review processes, helping maintain an organized and scalable design system.',
    features: [
      {
        icon: Shield,
        title: 'Design Component Library',
        desc: 'Created and maintained scalable, reusable UI components and design tokens.'
      },
      {
        icon: Radio,
        title: 'Storybook & Chromatic Integration',
        desc: 'Documented components and verified visual regression for smooth handoffs.'
      },
      {
        icon: Activity,
        title: 'Cross-Functional Collaboration',
        desc: 'Collaborated across 486 internship hours to enforce consistent design standards.'
      }
    ]
  }
};

const certifications = [
  {
    title: 'Introduction to Python',
    issuer: 'Sololearn',
    date: 'Issued Sep 2026',
    skills: ['Python (Programming Language)'],
    image: '/Introduction to Python_certificate.jpg'
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Sololearn',
    date: 'Issued Sep 2026',
    skills: ['Prompt Engineering'],
    image: '/Prompt Engineering_certificate.jpg'
  },
  {
    title: 'Agile UX Fundamentals',
    issuer: 'LinkedIn',
    date: 'Issued Sep 2026',
    skills: ['User Experience (UX)', 'User Experience Design (UED)'],
    image: '/Agile UX Fundamentals Certificate.jpg'
  },
  {
    title: 'Using AI for UX Design and Research',
    issuer: 'LinkedIn',
    date: 'Issued Sep 2026',
    skills: ['Artificial Intelligence (AI)', 'Artificial Intelligence for Design'],
    image: '/Using AI for UX Design and Research.jpg'
  }
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function WorksSection({ onSelectProject }) {
  const scrollRef = useRef(null);
  const tickingRef = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleScroll = () => {
    if (!scrollRef.current || tickingRef.current) return;

    tickingRef.current = true;
    requestAnimationFrame(() => {
      tickingRef.current = false;
      const el = scrollRef.current;
      if (!el) return;

      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;

      setScrollProgress((prev) => (Math.abs(prev - progress) > 0.1 ? progress : prev));

      const newCanLeft = scrollLeft > 10;
      const newCanRight = scrollLeft < maxScroll - 10;
      setCanScrollLeft((prev) => (prev !== newCanLeft ? newCanLeft : prev));
      setCanScrollRight((prev) => (prev !== newCanRight ? newCanRight : prev));

      const totalCards = works.length;
      if (maxScroll > 0 && totalCards > 1) {
        const approxIndex = Math.round((scrollLeft / maxScroll) * (totalCards - 1));
        const clampedIndex = Math.max(0, Math.min(totalCards - 1, approxIndex));
        setVisibleIndex((prev) => (prev !== clampedIndex ? clampedIndex : prev));
      }
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const activeIndex = hoveredIndex !== null ? hoveredIndex : visibleIndex;
  const currentCardNum = String(activeIndex + 1).padStart(2, '0');
  const totalCardsNum = String(works.length).padStart(2, '0');

  const progressFillWidth = hoveredIndex !== null
    ? ((hoveredIndex + 1) / works.length) * 100
    : Math.max(25, scrollProgress);

  return (
    <section id="works" className="works section-pad">
      <div className="works-header-row">
        <div className="section-heading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h2>Works<span>.</span></h2>
        </div>
        <div className="works-controls">
          <button
            className="scroll-btn"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="scroll-btn"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="works-scroll-container">
        <div className="works-scroll-track" ref={scrollRef}>
          {works.map((work, index) => (
            <article
              className="work-card"
              key={work.title}
              onClick={() => onSelectProject(work.slug)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              tabIndex={0}
              role="button"
              aria-label={`Open case study for ${work.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(work.slug);
                }
              }}
            >
              <div className="work-card-media">
                <img src={work.image} alt={`${work.title} project preview`} loading="lazy" />
                <div className="work-number-tag">0{index + 1}</div>
              </div>
              <div className="work-card-content">
                <div className="work-card-top">
                  <div className="work-card-meta">
                    <span className="work-category-badge">{work.type}</span>
                    <span className="work-year">{work.year}</span>
                  </div>
                  <div className="work-card-body">
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>
                </div>
                <div className="work-card-footer">
                  <span className="work-link-label">EXPLORE PROJECT</span>
                  <ArrowUpRight className="work-arrow-icon" size={22} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="works-progress">
          <div className="works-progress-bar">
            <div
              className="works-progress-fill"
              style={{ width: `${progressFillWidth}%` }}
            />
          </div>
          <div className="works-progress-text">
            {currentCardNum} / {totalCardsNum}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [toastNotification, setToastNotification] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const showToast = (type, text) => {
    setToastNotification({ type, text });
    setTimeout(() => {
      setToastNotification(null);
    }, 4500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('error', 'PLEASE FILL OUT ALL REQUIRED FIELDS');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/macamarygrace0327@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        showToast('success', 'MESSAGE SENT SUCCESSFULLY!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        showToast('error', 'UNABLE TO SEND MESSAGE. PLEASE TRY AGAIN.');
      }
    } catch (err) {
      showToast('error', 'CONNECTION ERROR. PLEASE TRY AGAIN LATER.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-pad">
      {toastNotification && (
        <div className={`toast-popup ${toastNotification.type}`} role="alert">
          <span>{toastNotification.text}</span>
          <button className="toast-close-btn" onClick={() => setToastNotification(null)} aria-label="Close notification">✕</button>
        </div>
      )}

      <div className="contact-grid">
        <div className="contact-info">
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Have a project<br /><em>in mind?</em></h2>
          <div className="contact-direct">
            <a className="email-link" href="mailto:macamarygrace0327@gmail.com">
              <Mail size={20} /> macamarygrace0327@gmail.com <ArrowUpRight size={18} />
            </a>
            <div className="location">
              <MapPin size={16} /> Manila, Philippines
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name <span className="required-asterisk">*</span></label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="required-asterisk">*</span></label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message <span className="required-asterisk">*</span></label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="certifications section-pad">
      <div className="section-heading">
        <p className="eyebrow">LICENSES & CERTIFICATIONS</p>
        <h2>Certifications<span>.</span></h2>
      </div>

      <div className="cert-list">
        {certifications.map((cert, index) => (
          <article
            className="cert-card"
            key={cert.title}
            onClick={() => setSelectedCert(cert)}
            tabIndex={0}
            role="button"
            aria-label={`View certificate for ${cert.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedCert(cert);
              }
            }}
          >
            <div className="cert-number">0{index + 1}</div>
            <div className="cert-main">
              <div className="cert-top">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <h3>{cert.title}</h3>
              <div className="cert-skills">
                <span className="cert-skills-label">Skills:</span>
                {cert.skills.map((skill) => (
                  <span className="cert-skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="cert-arrow">
              <span className="cert-view-label">View</span>
              <ZoomIn size={20} className="cert-zoom-icon" />
            </div>
          </article>
        ))}
      </div>

      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <button
            className="cert-modal-close"
            onClick={() => setSelectedCert(null)}
            aria-label="Close certificate modal"
          >
            <X size={26} />
          </button>

          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <span className="cert-modal-issuer">{selectedCert.issuer}</span>
              <h3 id="cert-modal-title">{selectedCert.title}</h3>
            </div>

            <div className="cert-modal-body">
              {selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="cert-modal-img"
                />
              ) : (
                <div className="cert-modal-placeholder">
                  <p>Verified Certificate by {selectedCert.issuer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const pingSolutions = [
  {
    num: "1",
    title: "Emergency Alert Activation",
    desc: "Enables users to trigger instant emergency alerts with minimal interaction during high-stress situations.",
    image: "/pingme-1.png"
  },
  {
    num: "2",
    title: "Real-Time Location Tracking",
    desc: "Shares real-time GPS location with registered emergency contacts to ensure swift, accurate assistance.",
    image: "/pingme-2.png"
  },
  {
    num: "3",
    title: "Continuous SMS Notifications",
    desc: "Dispatches continuous SMS alerts at regular intervals to guarantee delivery without an internet connection.",
    image: "/pingme-3.png"
  },
  {
    num: "4",
    title: "Family Monitoring (Shared Rooms)",
    desc: "Allows family members to create private rooms and monitor each other's live locations for enhanced safety.",
    image: "/pingme-4.png"
  },
  {
    num: "5",
    title: "Geofencing for Safe Zones",
    desc: "Automatically notifies trusted guardians whenever a user enters or leaves designated safe zones.",
    image: "/pingme-5.png"
  }
];

function PingMeCaseStudy({ onBack, onContact, onSelectProject }) {
  const nextProject = works.find((w) => w.slug === 'kain') || works[1];
  const [standaloneImage, setStandaloneImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (standaloneImage !== null) {
        if (e.key === 'Escape') {
          setStandaloneImage(null);
        }
      }
    };

    if (standaloneImage !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [standaloneImage]);

  return (
    <div className="ping-case-study">
      <header className="header">
        <button className="logo" onClick={onBack} aria-label="Go to home">
          <img src="/logo.png" alt="Mary Grace Maca Logo" className="logo-img" />
        </button>
        <nav className="nav" aria-label="Project navigation">
          <button onClick={onBack}>
            <ArrowLeft size={16} />
            <span>BACK TO WORKS</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="ping-hero-section section-pad">
          <div className="lakbay-hero-grid">
            <div className="ping-hero-copy">
              <p className="eyebrow">UI/UX CASE STUDY • 2026</p>
              <h1>PING <em>me.</em></h1>
              <p className="ping-capstone-subtitle">
                IoT-Integrated Safety Application for Personal Safety & Emergency Reporting
              </p>
              <p className="intro">
                PING ME is a mobile safety application designed to enable fast and discreet emergency reporting through real-time location tracking, continuous SMS alerts, and family monitoring features, helping users stay protected during high-risk situations.
              </p>
            </div>
            <div className="lakbay-hero-mockup-wrapper">
              <img src="/ping-me-here-section.png" alt="PING ME Mockup Overview" className="lakbay-hero-mockup-img" />
            </div>
          </div>
        </section>

        {/* Metadata Banner Section (Dark Footer Style) */}
        <section className="ping-meta-banner-section">
          <div className="ping-meta-container">
            <div className="ping-meta-item">
              <span className="ping-meta-label">DATE</span>
              <strong className="ping-meta-value">2026</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">ROLE</span>
              <strong className="ping-meta-value">UI/UX Designer</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">TOOLS</span>
              <div className="ping-meta-tags">
                <span className="ping-meta-tag">Figma</span>
                <span className="ping-meta-tag">User Research</span>
                <span className="ping-meta-tag">Wireframing</span>
                <span className="ping-meta-tag">Prototyping</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="ping-challenge-section section-pad">
          <div className="ping-challenge-container">
            <p className="eyebrow">THE PROBLEM</p>
            <div className="challenge-card-wrapper">
              <div className="challenge-card">
                <p className="challenge-quote">
                  How might we design a safety application that allows users to report emergencies quickly and discreetly, even when they are unable to actively use their mobile phones or when internet connectivity is limited, while also ensuring that family members are immediately informed of the situation?
                </p>
              </div>
            </div>

            <div className="ping-challenge-bottom-right">
              <h2 className="ping-cursive-title">Challenge<em>.</em></h2>
            </div>
          </div>
        </section>

        {/* Section 3: Solution */}
        <section className="ping-solution-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">KEY FEATURES & CAPABILITIES</p>
            <h2 className="ping-cursive-title">Solution<em>.</em></h2>
          </div>

          <div className="ping-solutions-showcase">
            {pingSolutions.map((sol) => (
              <article className="ping-solution-fullcard" key={sol.num}>
                <div className="sol-card-top">
                  <div className="sol-number-badge">{sol.num}</div>
                  <div className="sol-info-group">
                    <h3>{sol.title}</h3>
                    <p className="sol-desc">{sol.desc}</p>
                  </div>
                </div>

                <div className="sol-mockup-center">
                  <div className="sol-mockup-frame">
                    <img src={sol.image} alt={sol.title} className="sol-mockup-img" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Design Process */}
        <section className="ping-process-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">METHODOLOGY & WORKFLOW</p>
            <h2 className="ping-cursive-title">Design Process<em>.</em></h2>
          </div>

          <div className="ping-process-showcase">
            {/* Sub-section 1: Mid-Fidelity Designs */}
            <div className="process-block">
              <div className="process-header-bar">
                <h3 className="process-block-title">
                  MID-FIDELITY <em>Designs.</em>
                </h3>
              </div>

              <div className="process-card-offset-wrapper">
                <div className="process-image-frame process-image-frame-large">
                  <img
                    src="/PingMe Mid-fidelity.png"
                    alt="PING ME Mid-Fidelity Wireframes Preview"
                    className="process-img process-img-large"
                  />
                </div>
              </div>
            </div>

            {/* Sub-section 2: High-Fidelity Designs */}
            <div className="process-block">
              <div className="process-header-bar">
                <h3 className="process-block-title">
                  HIGH-FIDELITY <em>Designs.</em>
                </h3>
              </div>

              <div className="process-card-offset-wrapper">
                <div className="process-image-frame process-image-frame-large">
                  <img
                    src="/ping-me-high-fid.png"
                    alt="PING ME High-Fidelity Mobile UI Preview"
                    className="process-img process-img-large"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Footer CTA & Next Project */}
        <section className="ping-footer-cta-section section-pad">
          <div className="project-footer-nav">
            <div className="project-footer-contact">
              <p className="eyebrow">INTERESTED IN THIS CASE STUDY?</p>
              <h3>Let's create something <em>exceptional.</em></h3>
              <button className="action-btn" onClick={onContact}>
                Get In Touch <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="next-project-card" onClick={() => onSelectProject(nextProject.slug)}>
              <div className="next-project-label">NEXT PROJECT</div>
              <div className="next-project-title">
                <span>{nextProject.title}</span>
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>2026, All Rights Reserved to Mary Grace Maca.</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mary-grace-maca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-icon-btn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:macamarygrace0327@gmail.com"
            aria-label="Send Email"
            className="footer-icon-btn"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>

      {standaloneImage && (
        <div
          className="modal-overlay"
          onClick={() => setStandaloneImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="modal-close-btn"
            onClick={() => setStandaloneImage(null)}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="modal-content standalone-modal-content" onClick={(e) => e.stopPropagation()}>
            {standaloneImage.title && (
              <div className="standalone-modal-header">
                <h3>{standaloneImage.title}</h3>
              </div>
            )}
            <div className="standalone-modal-body">
              <img
                src={standaloneImage.src}
                alt={standaloneImage.title || "Maximized Image"}
                className="standalone-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const kainSolutions = [
  {
    num: 1,
    title: 'AI-Driven Personalization',
    desc: 'The application personalizes meal suggestions and guidance using behavioral data without enforcing rigid diet rules.',
    image: '/kain-1.png'
  },
  {
    num: 2,
    title: 'Simplified Food Tracking & Insights',
    desc: 'Users can log or scan food items and view clear nutritional summaries to support informed yet simple food choices.',
    image: '/kain-2.png'
  },
  {
    num: 3,
    title: 'Mindful Eating & Habit Guidance',
    desc: 'KAIN delivers mindful-eating prompts and habit-building recommendations based on user behavior rather than restriction.',
    image: '/kain-3.png'
  },
  {
    num: 4,
    title: 'Smart Meal Planning & Decision Support',
    desc: 'The app enables flexible meal planning and generates personalized shopping lists using available ingredients.',
    image: '/kain-4.png'
  },
  {
    num: 5,
    title: 'Sustainability-Focused Consumption',
    desc: 'Smart storage and portion awareness features promote responsible consumption and reduced food waste aligned with SDGs.',
    image: '/kain-5.png'
  }
];

function KainCaseStudy({ onBack, onContact, onSelectProject }) {
  const nextProject = works.find((w) => w.slug === 'baybayin') || works[2];

  return (
    <div className="ping-case-study">
      <header className="header">
        <button className="logo" onClick={onBack} aria-label="Go to home">
          <img src="/logo.png" alt="Mary Grace Maca Logo" className="logo-img" />
        </button>
        <nav className="nav" aria-label="Project navigation">
          <button onClick={onBack}>
            <ArrowLeft size={16} />
            <span>BACK TO WORKS</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="ping-hero-section section-pad">
          <div className="lakbay-hero-grid">
            <div className="ping-hero-copy">
              <p className="eyebrow">HACKATHON PROJECT • UI/UX CASE STUDY</p>
              <h1>KAIN <em>app.</em></h1>
              <p className="ping-capstone-subtitle">
                AI-Driven Nutrition & Mindful-Eating Application
              </p>
              <p className="intro">
                KAIN is an AI-powered nutrition and mindful-eating application designed to promote healthier food choices and responsible consumption. The project aligns with SDG 3 (Good Health and Well-Being) and SDG 12 (Responsible Consumption and Production) by encouraging sustainable eating habits through personalized insights and behavioral guidance.
              </p>
            </div>
            <div className="lakbay-hero-mockup-wrapper">
              <img src="/kain-section1-pic.png" alt="KAIN Mockup Overview" className="lakbay-hero-mockup-img" />
            </div>
          </div>
        </section>

        {/* Metadata Banner Section (Dark Footer Style) */}
        <section className="ping-meta-banner-section">
          <div className="ping-meta-container">
            <div className="ping-meta-item">
              <span className="ping-meta-label">DATE</span>
              <strong className="ping-meta-value">2025</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">ROLE</span>
              <strong className="ping-meta-value">UI/UX Designer</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">TAGS & SDGS</span>
              <div className="ping-meta-tags">
                <span className="ping-meta-tag">Hackathon Project</span>
                <span className="ping-meta-tag">SDG 3</span>
                <span className="ping-meta-tag">SDG 12</span>
                <span className="ping-meta-tag">Figma</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="ping-challenge-section section-pad">
          <div className="ping-challenge-container">
            <p className="eyebrow">THE PROBLEM</p>
            <div className="challenge-card-wrapper">
              <div className="challenge-card">
                <p className="challenge-quote">
                  How might we design an AI-driven nutrition application that helps users make healthier and more mindful food choices while promoting sustainable consumption, without overwhelming them with complex data or rigid diet rules?
                </p>
              </div>
            </div>

            <div className="ping-challenge-bottom-right">
              <h2 className="ping-cursive-title">Challenge<em>.</em></h2>
            </div>
          </div>
        </section>

        {/* Section 3: Solution */}
        <section className="ping-solution-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">KEY FEATURES & CAPABILITIES</p>
            <h2 className="ping-cursive-title">Solution<em>.</em></h2>
          </div>

          <div className="ping-solutions-showcase">
            {kainSolutions.map((sol) => (
              <article className="ping-solution-fullcard" key={sol.num}>
                <div className="sol-card-top">
                  <div className="sol-number-badge">{sol.num}</div>
                  <div className="sol-info-group">
                    <h3>{sol.title}</h3>
                    <p className="sol-desc">{sol.desc}</p>
                  </div>
                </div>

                <div className="sol-mockup-center">
                  <div className="sol-mockup-frame">
                    <img src={sol.image} alt={sol.title} className="sol-mockup-img" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Design Process */}
        <section className="ping-process-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">METHODOLOGY & WORKFLOW</p>
            <h2 className="ping-cursive-title">Design Process<em>.</em></h2>
          </div>

          <div className="ping-process-showcase">
            {/* Sub-section 1: Mid-Fidelity Designs */}
            <div className="process-block">
              <div className="process-header-bar">
                <h3 className="process-block-title">
                  MID-FIDELITY <em>Designs.</em>
                </h3>
              </div>

              <div className="process-card-offset-wrapper">
                <div className="process-image-frame process-image-frame-large">
                  <img
                    src="/kain-mid-fidelity.png"
                    alt="KAIN Mid-Fidelity Wireframes Preview"
                    className="process-img process-img-large"
                  />
                </div>
              </div>
            </div>

            {/* Sub-section 2: High-Fidelity Designs */}
            <div className="process-block">
              <div className="process-header-bar">
                <h3 className="process-block-title">
                  HIGH-FIDELITY <em>Designs.</em>
                </h3>
              </div>

              <div className="process-card-offset-wrapper">
                <div className="process-image-frame process-image-frame-large">
                  <img
                    src="/kain-high-fidelity.png"
                    alt="KAIN High-Fidelity Mobile UI Preview"
                    className="process-img process-img-large"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Footer CTA & Next Project */}
        <section className="ping-footer-cta-section section-pad">
          <div className="project-footer-nav">
            <div className="project-footer-contact">
              <p className="eyebrow">INTERESTED IN THIS CASE STUDY?</p>
              <h3>Let's create something <em>exceptional.</em></h3>
              <button className="action-btn" onClick={onContact}>
                Get In Touch <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="next-project-card" onClick={() => onSelectProject(nextProject.slug)}>
              <div className="next-project-label">NEXT PROJECT</div>
              <div className="next-project-title">
                <span>{nextProject.title}</span>
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>2026, All Rights Reserved to Mary Grace Maca.</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mary-grace-maca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-icon-btn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:macamarygrace0327@gmail.com"
            aria-label="Send Email"
            className="footer-icon-btn"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

const lustreSolutions = [
  {
    num: 1,
    title: 'Personalized Skin Diagnostic Quiz',
    desc: 'Analyzes skin types and environmental factors to generate customized dermatological routines.',
    image: '/lustre.png'
  },
  {
    num: 2,
    title: 'Ingredient Transparency & Safety Ratings',
    desc: 'Breaks down cosmetic formulations with clear ingredient safety ratings for sensitive skin.',
    image: '/lustre.png'
  },
  {
    num: 3,
    title: 'Virtual Skin Routine Planner',
    desc: 'Organizes morning and evening skincare routines with automated daily reminders and tracking.',
    image: '/lustre.png'
  },
  {
    num: 4,
    title: 'Seamless 1-Tap Luxury Checkout',
    desc: 'Delivers an effortless luxury purchasing flow with instant digital payment and order tracking.',
    image: '/lustre.png'
  },
  {
    num: 5,
    title: 'Dermatologist Consultation Booking',
    desc: 'Connects users directly with certified dermatologists for professional virtual skin assessments.',
    image: '/lustre.png'
  }
];

function LustreCaseStudy({ onBack, onContact, onSelectProject }) {
  const nextProject = works.find((w) => w.slug === 'lakbay') || works[3];

  return (
    <div className="ping-case-study">
      <header className="header">
        <button className="logo" onClick={onBack} aria-label="Go to home">
          <img src="/logo.png" alt="Mary Grace Maca Logo" className="logo-img" />
        </button>
        <nav className="nav" aria-label="Project navigation">
          <button onClick={onBack}>
            <ArrowLeft size={16} />
            <span>BACK TO WORKS</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="ping-hero-section section-pad">
          <div className="lakbay-hero-grid">
            <div className="ping-hero-copy">
              <p className="eyebrow">UI PROJECT</p>
              <h1>LUSTRE<em>.</em></h1>
              <p className="ping-capstone-subtitle">
                Website Design Concept
              </p>
              <p className="intro">
                LUSTRE is a front-end UI project built with React that focuses on implementing desktop interface screens for a jewelry shopping concept. The project emphasizes visual layout, component structure, and interface clarity without responsive behavior or backend integration.
              </p>
            </div>
            <div className="lakbay-hero-mockup-wrapper">
              <img src="/lustre landing page 1.png" alt="Lustre Mockup Overview" className="lakbay-hero-mockup-img" />
            </div>
          </div>
        </section>

        {/* Metadata Banner Section (Dark Footer Style) */}
        <section className="ping-meta-banner-section">
          <div className="ping-meta-container">
            <div className="ping-meta-item">
              <span className="ping-meta-label">DATE</span>
              <strong className="ping-meta-value">2024</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">ROLE</span>
              <strong className="ping-meta-value">UI Designer & Front-End Developer</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">TOOLS</span>
              <div className="ping-meta-tags">
                <span className="ping-meta-tag">React</span>
                <span className="ping-meta-tag">Figma</span>
                <span className="ping-meta-tag">CSS Architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="ping-challenge-section section-pad">
          <div className="ping-challenge-container">
            <p className="eyebrow">THE PROBLEM</p>
            <div className="challenge-card-wrapper">
              <div className="challenge-card">
                <p className="challenge-quote">
                  How might we design an elegant luxury e-commerce experience for a jewelry brand that presents products with visual sophistication, simplifies collection browsing, and delivers an intuitive, high-end shopping interface for desktop users?
                </p>
              </div>
            </div>

            <div className="ping-challenge-bottom-right">
              <h2 className="ping-cursive-title">Challenge<em>.</em></h2>
            </div>
          </div>
        </section>

        {/* Section 3: Key Screens PDF Viewer */}
        <section className="ping-solution-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">KEY SCREENS & DOCUMENTATION</p>
            <h2 className="ping-cursive-title">Key Screens<em>.</em></h2>
          </div>

          <div className="pdf-viewer-container">
            <div className="pdf-viewer-header">
              <span className="pdf-title-tag">LUSTRE KEY SCREENS.pdf</span>
              <a
                href="/LUSTRE KEY SCREENS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-open-link"
              >
                Open Fullscreen <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="pdf-frame-wrapper">
              <iframe
                src="/LUSTRE KEY SCREENS.pdf#toolbar=1&navpanes=0&scrollbar=1"
                title="LUSTRE Key Screens PDF"
                className="pdf-embed-frame"
              />
            </div>
          </div>
        </section>



        {/* Section 5: Footer CTA & Next Project */}
        <section className="ping-footer-cta-section section-pad">
          <div className="project-footer-nav">
            <div className="project-footer-contact">
              <p className="eyebrow">INTERESTED IN THIS CASE STUDY?</p>
              <h3>Let's create something <em>exceptional.</em></h3>
              <button className="action-btn" onClick={onContact}>
                Get In Touch <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="next-project-card" onClick={() => onSelectProject(nextProject.slug)}>
              <div className="next-project-label">NEXT PROJECT</div>
              <div className="next-project-title">
                <span>{nextProject.title}</span>
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>2026, All Rights Reserved to Mary Grace Maca.</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mary-grace-maca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-icon-btn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:macamarygrace0327@gmail.com"
            aria-label="Send Email"
            className="footer-icon-btn"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

const lakbayScreens = [
  { id: 1, label: 'Onboarding Screens', image: '/gallery/Onboarding Screens.png' },
  { id: 2, label: 'Home and Featured Places', image: '/gallery/Home and Featured Places.png' },
  { id: 3, label: 'Featured Places', image: '/gallery/Featured Places.png' },
  { id: 4, label: 'Hotels', image: '/gallery/Hotels.png' },
  { id: 5, label: 'Food and Dining', image: '/gallery/Food and Dining.png' },
  { id: 6, label: 'Outdoor Activities and Transport', image: '/gallery/Outdoor Activities and Transport.png' },
  { id: 7, label: 'Deals', image: '/gallery/Deals.png' },
  { id: 8, label: 'Wishlist', image: '/gallery/Wishlist.png' },
  { id: 9, label: 'Booking Transaction', image: '/gallery/Booking Transaction.png' },
  { id: 10, label: 'Payment Methods', image: '/gallery/Payment Methods.png' }
];

function LakbayCaseStudy({ onBack, onContact, onSelectProject }) {
  const nextProject = works.find((w) => w.slug === 'tripex') || works[0];
  const [previewIndex, setPreviewIndex] = useState(null);
  const [standaloneImage, setStandaloneImage] = useState(null);

  const galleryImages = lakbayScreens.map((s) => ({ src: s.image, title: s.label }));

  const handlePrev = () => {
    setPreviewIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : galleryImages.length - 1) : null));
  };

  const handleNext = () => {
    setPreviewIndex((prev) => (prev !== null ? (prev < galleryImages.length - 1 ? prev + 1 : 0) : null));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (previewIndex !== null) {
        if (e.key === 'Escape') {
          setPreviewIndex(null);
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      } else if (standaloneImage !== null) {
        if (e.key === 'Escape') {
          setStandaloneImage(null);
        }
      }
    };

    if (previewIndex !== null || standaloneImage !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewIndex, standaloneImage]);

  return (
    <div className="ping-case-study">
      <header className="header">
        <button className="logo" onClick={onBack} aria-label="Go to home">
          <img src="/logo.png" alt="Mary Grace Maca Logo" className="logo-img" />
        </button>
        <nav className="nav" aria-label="Project navigation">
          <button onClick={onBack}>
            <ArrowLeft size={16} />
            <span>BACK TO WORKS</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="ping-hero-section section-pad">
          <div className="lakbay-hero-grid">
            <div className="ping-hero-copy">
              <p className="eyebrow">UI CASE STUDY</p>
              <h1>LAKBAY<em>.</em></h1>
              <p className="ping-capstone-subtitle">
                Travel Booking Mobile Application
              </p>
              <p className="intro">
                LAKBAY is a mobile travel booking application designed for reserving hotels, attractions, and activities. The project focused on creating seamless user journeys and visually intuitive layouts to support efficient and enjoyable trip planning.
              </p>
            </div>
            <div className="lakbay-hero-mockup-wrapper">
              <img src="/lakbay_picture.png" alt="LAKBAY Mockup Overview" className="lakbay-hero-mockup-img" />
            </div>
          </div>
        </section>

        {/* Metadata Banner Section (Dark Footer Style) */}
        <section className="ping-meta-banner-section">
          <div className="ping-meta-container">
            <div className="ping-meta-item">
              <span className="ping-meta-label">DATE</span>
              <strong className="ping-meta-value">2024</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">ROLE</span>
              <strong className="ping-meta-value">UI Designer</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">TOOLS</span>
              <div className="ping-meta-tags">
                <span className="ping-meta-tag">Figma</span>
                <span className="ping-meta-tag">Wireframing</span>
                <span className="ping-meta-tag">Prototyping</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="ping-challenge-section section-pad">
          <div className="ping-challenge-container">
            <p className="eyebrow">THE PROBLEM</p>
            <div className="challenge-card-wrapper">
              <div className="challenge-card">
                <p className="challenge-quote">
                  How might we design an immersive digital travel platform that encourages sustainable eco-tourism, connects travelers with authentic local heritage experiences, and supports small regional communities while preserving cultural landmarks?
                </p>
              </div>
            </div>

            <div className="ping-challenge-bottom-right">
              <h2 className="ping-cursive-title">Challenge<em>.</em></h2>
            </div>
          </div>
        </section>

        {/* Section 3: Key Screens Gallery */}
        <section className="ping-solution-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">MOBILE UI SHOWCASE</p>
            <h2 className="ping-cursive-title">Key Screens<em>.</em></h2>
          </div>

          <div className="lakbay-screens-gallery">
            <div className="lakbay-gallery-grid">
              {lakbayScreens.map((screen, idx) => (
                <div
                  className="lakbay-gallery-card clickable-image-card"
                  key={screen.id}
                  onClick={() => setPreviewIndex(idx)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Maximize ${screen.label}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setPreviewIndex(idx);
                    }
                  }}
                >
                  <div className="lakbay-screen-frame">
                    <img src={screen.image} alt={screen.label} className="lakbay-screen-img" />
                    <div className="screen-maximize-btn">
                      <ZoomIn size={18} />
                    </div>
                    <div className="lakbay-screen-tag">
                      <span>{screen.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Design Process */}
        <section className="ping-process-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">METHODOLOGY & WORKFLOW</p>
            <h2 className="ping-cursive-title">Design Process<em>.</em></h2>
          </div>

          <div className="ping-process-showcase">
            {/* Sub-section 1: Mid-Fidelity Designs */}
            <div className="process-block">
              <div className="process-header-bar">
                <h3 className="process-block-title">
                  MID-FIDELITY <em>Designs.</em>
                </h3>
              </div>

              <div className="process-card-offset-wrapper">
                <div className="process-image-frame process-image-frame-large">
                  <img
                    src="/lakbay-mid-fi.png"
                    alt="LAKBAY Mid-Fidelity Wireframes Preview"
                    className="process-img process-img-large"
                  />
                </div>
              </div>
            </div>

            {/* Sub-section 2: High-Fidelity Designs */}
            <div className="process-block">
              <div className="process-header-bar">
                <h3 className="process-block-title">
                  HIGH-FIDELITY <em>Designs.</em>
                </h3>
              </div>

              <div className="process-card-offset-wrapper">
                <div className="process-image-frame process-image-frame-large">
                  <img
                    src="/lakbay-high-fi.png"
                    alt="LAKBAY High-Fidelity Mobile UI Preview"
                    className="process-img process-img-large"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Footer CTA & Next Project */}
        <section className="ping-footer-cta-section section-pad">
          <div className="project-footer-nav">
            <div className="project-footer-contact">
              <p className="eyebrow">INTERESTED IN THIS CASE STUDY?</p>
              <h3>Let's create something <em>exceptional.</em></h3>
              <button className="action-btn" onClick={onContact}>
                Get In Touch <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="next-project-card" onClick={() => onSelectProject(nextProject.slug)}>
              <div className="next-project-label">NEXT PROJECT</div>
              <div className="next-project-title">
                <span>{nextProject.title}</span>
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Gallery Image Lightbox Modal with Exclusive Gallery Arrow Navigation */}
      {previewIndex !== null && (
        <div
          className="cert-modal-overlay"
          onClick={() => setPreviewIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title"
        >
          <button
            className="cert-modal-close"
            onClick={() => setPreviewIndex(null)}
            aria-label="Close image preview"
          >
            <X size={26} />
          </button>

          {/* Left Arrow Navigation Button */}
          <button
            className="preview-nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous gallery screen"
            title="Previous screen (Left arrow)"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            className="preview-nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next gallery screen"
            title="Next screen (Right arrow)"
          >
            <ChevronRight size={30} />
          </button>

          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <span className="cert-modal-issuer">KEY SCREEN {previewIndex + 1} OF {galleryImages.length}</span>
              <h3 id="image-modal-title">{galleryImages[previewIndex].title}</h3>
            </div>

            <div className="cert-modal-body">
              <img
                src={galleryImages[previewIndex].src}
                alt={galleryImages[previewIndex].title || "Maximized UI Screen"}
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}

      {/* Standalone Image Lightbox (No Gallery Navigation for Other Sections) */}
      {standaloneImage && (
        <div
          className="cert-modal-overlay"
          onClick={() => setStandaloneImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="cert-modal-close"
            onClick={() => setStandaloneImage(null)}
            aria-label="Close image preview"
          >
            <X size={26} />
          </button>

          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            {standaloneImage.title && (
              <div className="cert-modal-header">
                <span className="cert-modal-issuer">PREVIEW</span>
                <h3>{standaloneImage.title}</h3>
              </div>
            )}

            <div className="cert-modal-body">
              <img
                src={standaloneImage.src}
                alt={standaloneImage.title || "Maximized Image"}
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <span>2026, All Rights Reserved to Mary Grace Maca.</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mary-grace-maca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-icon-btn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:macamarygrace0327@gmail.com"
            aria-label="Send Email"
            className="footer-icon-btn"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

const tripexScreens = [
  { id: 1, label: 'Buttons Component', image: '/Buttons.png' },
  { id: 2, label: 'Email Template (Redesigned)', image: '/Email Template (RE-DESIGNED).jpeg' },
  { id: 3, label: 'Color Palette', image: '/PALETTE.png' },
  { id: 4, label: 'Sidebars Component', image: '/Side bars.png' },
  { id: 5, label: 'Skeleton Loader', image: '/Skeleton.png' },
  { id: 6, label: 'Storybook - Application Bar', image: '/Storybook-Applicaton Bar.png' },
  { id: 7, label: 'Storybook - Navigation Bar', image: '/Storybook-Navigation Bar.png' },
  { id: 8, label: 'Storybook - Textfield', image: '/Storybook-Textfield.png' },
  { id: 9, label: 'Typography Guidelines', image: '/Typography.png' }
];

function TripexCaseStudy({ onBack, onContact, onSelectProject }) {
  const nextProject = works.find((w) => w.slug === 'ping-me') || works[0];
  const [previewIndex, setPreviewIndex] = useState(null);
  const [standaloneImage, setStandaloneImage] = useState(null);

  const galleryImages = tripexScreens.map((s) => ({ src: s.image, title: s.label }));

  const handlePrev = () => {
    setPreviewIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : galleryImages.length - 1) : null));
  };

  const handleNext = () => {
    setPreviewIndex((prev) => (prev !== null ? (prev < galleryImages.length - 1 ? prev + 1 : 0) : null));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (previewIndex !== null) {
        if (e.key === 'Escape') {
          setPreviewIndex(null);
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      } else if (standaloneImage !== null) {
        if (e.key === 'Escape') {
          setStandaloneImage(null);
        }
      }
    };

    if (previewIndex !== null || standaloneImage !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewIndex, standaloneImage]);

  return (
    <div className="ping-case-study">
      <header className="header">
        <button className="logo" onClick={onBack} aria-label="Go to home">
          <img src="/logo.png" alt="Mary Grace Maca Logo" className="logo-img" />
        </button>
        <nav className="nav" aria-label="Project navigation">
          <button onClick={onBack}>
            <ArrowLeft size={16} />
            <span>BACK TO WORKS</span>
          </button>
        </nav>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="ping-hero-section section-pad">
          <div className="lakbay-hero-grid">
            <div className="ping-hero-copy">
              <p className="eyebrow">UI/UX DESIGN INTERNSHIP • 2026</p>
              <h1>TRIPEX<em>.</em></h1>
              <p className="ping-capstone-subtitle">
                UI/UX Design Internship at<br />COMBTAS Philippines Inc.
              </p>
              <p className="intro">
                As a UI/UX Design Intern at COMBTAS Philippines Inc., I contributed to the development and maintenance of reusable design components and documentation. Throughout my 486-hour internship, I collaborated with team members to support design consistency, component organization, and design-to-development handoff processes using Figma, Storybook, and Chromatic. This experience enhanced my skills in design systems, user interface design, and cross-functional collaboration.
              </p>
            </div>
            <div className="lakbay-hero-mockup-wrapper">
              <img src="/tripex-card-pic.png" alt="TRIPEX Mockup Overview" className="lakbay-hero-mockup-img" />
            </div>
          </div>
        </section>

        {/* Metadata Banner Section */}
        <section className="ping-meta-banner-section">
          <div className="ping-meta-container">
            <div className="ping-meta-item">
              <span className="ping-meta-label">DATE</span>
              <strong className="ping-meta-value">Feb - May 2026</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">ROLE</span>
              <strong className="ping-meta-value">UI/UX Design Intern</strong>
            </div>

            <div className="ping-meta-item">
              <span className="ping-meta-label">TOOLS & TECH</span>
              <div className="ping-meta-tags">
                <span className="ping-meta-tag">Figma</span>
                <span className="ping-meta-tag">Storybook</span>
                <span className="ping-meta-tag">Chromatic</span>
                <span className="ping-meta-tag">Design Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="ping-challenge-section section-pad">
          <div className="ping-challenge-container">
            <p className="eyebrow">THE PROBLEM</p>
            <div className="challenge-card-wrapper">
              <div className="challenge-card">
                <p className="challenge-quote">
                  How might we maintain consistency across reusable UI components and ensure that both designers and developers work from a shared, well-documented source of truth throughout the product development process?
                </p>
              </div>
            </div>

            <div className="ping-challenge-bottom-right">
              <h2 className="ping-cursive-title">Challenge<em>.</em></h2>
            </div>
          </div>
        </section>

        {/* Section 2.5: The Solution (Mirrored Layout & Dark Theme) */}
        <section className="ping-challenge-section ping-solution-dark-section section-pad">
          <div className="ping-challenge-container">
            <p className="eyebrow">THE SOLUTION</p>

            <div className="ping-solution-top-left">
              <h2 className="ping-cursive-title">Solution<em>.</em></h2>
            </div>

            <div className="challenge-card-wrapper solution-card-wrapper-right solution-card-wrapper-light">
              <div className="challenge-card solution-card-light">
                <p className="challenge-quote">
                  To address this challenge, I assisted in documenting and organizing reusable UI components using Storybook while ensuring alignment with Figma design specifications. I collaborated with designers and developers to review component states, maintain consistency across interfaces, and support a smoother design-to-development workflow. Through the use of Chromatic, I contributed to component validation and visual review processes, helping maintain an organized and scalable design system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Evidence of Work Gallery */}
        <section className="ping-solution-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">DESIGN SYSTEM SHOWCASE</p>
            <h2 className="ping-cursive-title ping-cursive-title-sm">Evidence of Work<em>.</em></h2>
          </div>

          <div className="lakbay-screens-gallery">
            <div className="lakbay-gallery-grid">
              {tripexScreens.map((screen, idx) => (
                <div
                  className="lakbay-gallery-card clickable-image-card"
                  key={screen.id}
                  onClick={() => setPreviewIndex(idx)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Maximize ${screen.label}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setPreviewIndex(idx);
                    }
                  }}
                >
                  <div className="lakbay-screen-frame">
                    <img src={screen.image} alt={screen.label} className="lakbay-screen-img" />
                    <div className="screen-maximize-btn">
                      <ZoomIn size={18} />
                    </div>
                    <div className="lakbay-screen-tag">
                      <span>{screen.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Certificate of Completion */}
        <section className="ping-process-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">VERIFICATION & CREDENTIALS</p>
            <h2 className="ping-cursive-title ping-cursive-title-sm">Certificate of Completion<em>.</em></h2>
          </div>

          <div className="ping-process-showcase">
            <div className="process-block">
              <div className="process-card-offset-wrapper">
                <div className="process-image-frame process-image-frame-large">
                  <img
                    src="/cert of completion.jpg"
                    alt="TRIPEX Certificate of Completion"
                    className="process-img process-img-large"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Footer CTA & Next Project */}
        <section className="ping-footer-cta-section section-pad">
          <div className="project-footer-nav">
            <div className="project-footer-contact">
              <p className="eyebrow">INTERESTED IN THIS CASE STUDY?</p>
              <h3>Let's create something <em>exceptional.</em></h3>
              <button className="action-btn" onClick={onContact}>
                Get In Touch <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="next-project-card" onClick={() => onSelectProject(nextProject.slug)}>
              <div className="next-project-label">NEXT PROJECT</div>
              <div className="next-project-title">
                <span>{nextProject.title}</span>
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Gallery Image Lightbox Modal */}
      {previewIndex !== null && (
        <div
          className="cert-modal-overlay"
          onClick={() => setPreviewIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title"
        >
          <button
            className="cert-modal-close"
            onClick={() => setPreviewIndex(null)}
            aria-label="Close image preview"
          >
            <X size={26} />
          </button>

          <button
            className="preview-nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous gallery screen"
            title="Previous screen (Left arrow)"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            className="preview-nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next gallery screen"
            title="Next screen (Right arrow)"
          >
            <ChevronRight size={30} />
          </button>

          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <span className="cert-modal-issuer">EVIDENCE OF WORK {previewIndex + 1} OF {galleryImages.length}</span>
              <h3 id="image-modal-title">{galleryImages[previewIndex].title}</h3>
            </div>

            <div className="cert-modal-body">
              <img
                src={galleryImages[previewIndex].src}
                alt={galleryImages[previewIndex].title || "Maximized UI Screen"}
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}

      {/* Standalone Image Lightbox */}
      {standaloneImage && (
        <div
          className="cert-modal-overlay"
          onClick={() => setStandaloneImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="cert-modal-close"
            onClick={() => setStandaloneImage(null)}
            aria-label="Close image preview"
          >
            <X size={26} />
          </button>

          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            {standaloneImage.title && (
              <div className="cert-modal-header">
                <span className="cert-modal-issuer">PREVIEW</span>
                <h3>{standaloneImage.title}</h3>
              </div>
            )}

            <div className="cert-modal-body">
              <img
                src={standaloneImage.src}
                alt={standaloneImage.title || "Maximized Image"}
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <span>2026, All Rights Reserved to Mary Grace Maca.</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mary-grace-maca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-icon-btn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:macamarygrace0327@gmail.com"
            aria-label="Send Email"
            className="footer-icon-btn"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function ProjectDetailPage({ project, onBack, onContact, onSelectProject }) {
  if (project.slug === 'ping-me') {
    return <PingMeCaseStudy onBack={onBack} onContact={onContact} onSelectProject={onSelectProject} />;
  }
  if (project.slug === 'kain') {
    return <KainCaseStudy onBack={onBack} onContact={onContact} onSelectProject={onSelectProject} />;
  }
  if (project.slug === 'lustre') {
    return <LustreCaseStudy onBack={onBack} onContact={onContact} onSelectProject={onSelectProject} />;
  }
  if (project.slug === 'lakbay') {
    return <LakbayCaseStudy onBack={onBack} onContact={onContact} onSelectProject={onSelectProject} />;
  }
  if (project.slug === 'tripex') {
    return <TripexCaseStudy onBack={onBack} onContact={onContact} onSelectProject={onSelectProject} />;
  }

  const details = projectDetails[project.slug] || {
    title: project.title,
    subtitle: project.type,
    tagline: project.description,
    year: project.year,
    category: project.type,
    role: 'UI/UX Designer',
    tools: ['Figma', 'React', 'CSS'],
    image: project.image,
    overview: project.description,
    problem: 'Detailed challenge statement for ' + project.title,
    solution: 'Detailed solution approach for ' + project.title,
    features: []
  };

  const currentIndex = works.findIndex((w) => w.slug === project.slug);
  const nextProject = works[(currentIndex + 1) % works.length];

  return (
    <div className="project-detail-page">
      <header className="header">
        <button className="logo" onClick={onBack} aria-label="Go to home">
          <img src="/logo.png" alt="Mary Grace Maca Logo" className="logo-img" />
        </button>
        <nav className="nav" aria-label="Project navigation">
          <button onClick={onBack}>
            <ArrowLeft size={16} />
            <span>BACK TO WORKS</span>
          </button>
        </nav>
      </header>

      <main className="project-main">
        <section className="project-hero">
          <div className="project-hero-badge">
            <span>CASE STUDY</span>
            <span className="dot">•</span>
            <span>{details.year}</span>
          </div>

          <h1>{details.title}</h1>
          <p className="project-subtitle">{details.subtitle}</p>
          <p className="project-tagline">{details.tagline}</p>

          <div className="project-meta-grid">
            <div className="meta-item">
              <span className="meta-label">CATEGORY</span>
              <strong className="meta-value">{details.category}</strong>
            </div>
            <div className="meta-item">
              <span className="meta-label">ROLE</span>
              <strong className="meta-value">{details.role}</strong>
            </div>
            <div className="meta-item">
              <span className="meta-label">YEAR</span>
              <strong className="meta-value">{details.year}</strong>
            </div>
            <div className="meta-item">
              <span className="meta-label">TOOLS</span>
              <div className="meta-tags">
                {details.tools.map((t) => (
                  <span className="meta-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="project-cover-container">
          <img src={details.image} alt={`${details.title} Project Preview`} className="project-cover-img" />
        </div>

        <section className="project-body-content">
          <div className="project-section">
            <p className="eyebrow">PROJECT OVERVIEW</p>
            <h2>Overview</h2>
            <p className="lead-p">{details.overview}</p>
          </div>

          <div className="project-challenge-solution-grid">
            <div className="cs-card problem">
              <h3>The Problem</h3>
              <p>{details.problem}</p>
            </div>
            <div className="cs-card solution">
              <h3>The Solution</h3>
              <p>{details.solution}</p>
            </div>
          </div>

          {details.features && details.features.length > 0 && (
            <div className="project-section">
              <p className="eyebrow">KEY FEATURES & CAPABILITIES</p>
              <h2>Key Features</h2>
              <div className="features-grid">
                {details.features.map((feat, i) => {
                  const IconComp = feat.icon || Shield;
                  return (
                    <div className="feature-card" key={feat.title}>
                      <div className="feature-header">
                        <div className="feature-icon-wrapper">
                          <IconComp size={20} />
                        </div>
                        <span className="feature-num">0{i + 1}</span>
                      </div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        <section className="project-footer-nav">
          <div className="project-footer-contact">
            <p className="eyebrow">INTERESTED IN THIS PROJECT?</p>
            <h3>Let's create something <em>exceptional.</em></h3>
            <button className="action-btn" onClick={onContact}>
              Get In Touch <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="next-project-card" onClick={() => onSelectProject(nextProject.slug)}>
            <div className="next-project-label">NEXT PROJECT</div>
            <div className="next-project-title">
              <span>{nextProject.title}</span>
              <ArrowUpRight size={24} />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>2026, All Rights Reserved to Mary Grace Maca.</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mary-grace-maca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-icon-btn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:macamarygrace0327@gmail.com"
            aria-label="Send Email"
            className="footer-icon-btn"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash.startsWith('project/') ? hash.replace('project/', '') : null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project/')) {
        setActiveProjectSlug(hash.replace('project/', ''));
      } else {
        setActiveProjectSlug(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openProject = (slug) => {
    window.location.hash = `project/${slug}`;
    setActiveProjectSlug(slug);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const closeProject = () => {
    window.location.hash = '';
    setActiveProjectSlug(null);
    setTimeout(() => {
      scrollToId('works');
    }, 50);
  };

  const goToContact = () => {
    window.location.hash = '';
    setActiveProjectSlug(null);
    setTimeout(() => {
      scrollToId('contact');
    }, 50);
  };

  const currentProject = works.find((w) => w.slug === activeProjectSlug);

  if (currentProject) {
    return (
      <ProjectDetailPage
        project={currentProject}
        onBack={closeProject}
        onContact={goToContact}
        onSelectProject={openProject}
      />
    );
  }

  return (
    <div className="site">
      <header className="header">
        <button className="logo" onClick={() => scrollToId('home')} aria-label="Go to home">
          <img src="/logo.png" alt="Mary Grace Maca Logo" className="logo-img" />
        </button>
        <nav className="nav" aria-label="Main navigation">
          <button onClick={() => scrollToId('works')}>WORKS</button>
          <button onClick={() => scrollToId('resume')}>RESUME</button>
          <button onClick={() => scrollToId('certifications')}>CERTIFICATIONS</button>
          <button onClick={() => scrollToId('contact')}>CONTACT</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">UI/UX DESIGNER · PRODUCT DESIGNER</p>
            <h1>Mary Grace<br /><em>Maca.</em></h1>
            <p className="intro">I design thoughtful digital experiences that balance clarity, function, and visual personality.</p>
            <button className="action-btn" onClick={() => scrollToId('works')}>Explore my work <ArrowUpRight size={18} /></button>
          </div>
          <div className="hero-note">
            <span>BASED IN</span>
            <strong>MANILA, PHILIPPINES</strong>
            <span className="line"></span>
            <span>AVAILABLE FOR</span>
            <strong>PRODUCT DESIGNER · UI/UX</strong>
          </div>
        </section>

        <WorksSection onSelectProject={openProject} />

        <section id="resume" className="resume section-pad">
          <div className="section-heading">
            <p className="eyebrow">BACKGROUND</p>
            <h2>Resume<span>.</span></h2>
          </div>
          <div className="resume-grid">
            <div>
              <h3>Experience</h3>
              <div className="timeline-item"><span>2025 — 2026</span><div><strong>UI/UX Design Intern</strong><p>COMBTAS PHILIPPINES INC.</p><small>Worked on interface design, Figma components, Storybook, and UI implementation.</small></div></div>
            </div>
            <div>
              <h3>Education</h3>
              <div className="timeline-item"><span>2022 — 2026</span><div><strong>BS Information Technology</strong><p>Technological University of the Philippines — Manila</p><small>Focused on UI/UX, product design, web technologies, and software development.</small></div></div>
            </div>
          </div>
          <div className="skills-block">
            <h3>Skills</h3>
            <div className="skills">
              <span>Figma</span>
              <span>Framer</span>
              <span>React</span>
              <span>Storybook</span>
              <span>HTML/CSS</span>
              <span>Python</span>
              <span>Canva</span>
            </div>
          </div>
          <a className="action-btn" href="https://drive.google.com/file/d/1j4pxNJ3irqqTjmu0OQjY0o0ZgcyEBjJg/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume <ArrowUpRight size={18} /></a>
        </section>

        <CertificationsSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <span>2026, All Rights Reserved to Mary Grace Maca.</span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mary-grace-maca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="footer-icon-btn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:macamarygrace0327@gmail.com"
            aria-label="Send Email"
            className="footer-icon-btn"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
