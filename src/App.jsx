import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Layout, Code, Smartphone, Search, ShoppingBag, PenTool, ShieldCheck, Zap, Mail, Briefcase, MessageCircle, Check, Star, Send, User, FileText, Calendar } from 'lucide-react';
import './App.css';
import aetherisLogo from './assets/Aetheris_Logo+Name-removebg-preview.png';
import backgroundVideo from './assets/mp_.mp4';
import clinicImg from './assets/Screenshot 2026-05-07 190148.png';
import electricianImg from './assets/Screenshot 2026-05-07 190244.png';
import gymImg from './assets/Screenshot 2026-05-07 190425.png';
import techclubImg from './assets/Screenshot 2026-05-07 190509.png';
import restaurantImg from './assets/Screenshot 2026-05-07 190351.png';
import aboutVisionImg from './assets/about_vision.png';
import aboutArtifactImg from './assets/Gemini_Generated_Image_s914xjs914xjs914.png';
import founderAvatar from './assets/1758446053888.png';
import heroPoster from './assets/ChatGPT Image May 3, 2026, 07_54_37 PM(Inverted).png';

function App() {
  const frameRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const openCalendly = (e) => {
    e?.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/ddanishhmohd/30min' });
    } else {
      window.open('https://calendly.com/ddanishhmohd/30min', '_blank');
    }
  };

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const handleMouseMove = (e) => {
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; // Tilt towards mouse
      const rotateY = ((x - centerX) / centerX) * 10;
      
      frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      frame.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    frame.addEventListener('mousemove', handleMouseMove);
    frame.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      frame.removeEventListener('mousemove', handleMouseMove);
      frame.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Clinic Website',
      description: 'A premium, high-conversion medical platform designed for instant patient trust. Features a clinical blue aesthetic, mobile-first architecture, and optimized booking flows.',
      features: ['Conversion-Optimized UI', 'Patient Trust-Building Design', 'Mobile-First Architecture', 'Rapid Load Performance'],
      img: clinicImg,
      accentColor: '#2563eb',
      link: 'https://clinic-website-nine-lemon.vercel.app/'
    },
    {
      id: 2,
      title: 'Electrician Website',
      description: 'A high-impact platform for electrical contractors. Features 24/7 emergency support integration and a conversion-focused service map.',
      features: ['24/7 Emergency Support', 'Conversion-Focused UI', 'Service Area Integration', 'Lead Generation Engine'],
      img: electricianImg,
      accentColor: '#f97316', // Orange accent
      link: 'https://electrician-website-kappa.vercel.app/'
    },
    {
      id: 3,
      title: 'Gym Website',
      description: 'A high-energy fitness platform engineered for real results. Features a bold yellow aesthetic, transformation tracking, and structured training protocols.',
      features: ['500+ Client Transformations', 'Structured Training Protocols', 'Transformation Tracking', 'Mobile-First Performance'],
      img: gymImg,
      accentColor: '#facc15', // Yellow accent
      link: 'https://gym-website-rosy-ten.vercel.app/'
    },
    {
      id: 4,
      title: 'Tech Club Website',
      description: 'An elite technical community hub for builders and visionaries. Features a futuristic purple aesthetic, multi-domain project showcases, and event management.',
      features: ['500+ Active Builders', 'Multi-Domain Showcases', 'Event Management Systems', 'High-Impact Technical UI'],
      img: techclubImg,
      accentColor: '#8b00ff', // Purple accent
      link: 'https://techclub-website-ten.vercel.app/'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'A premium digital experience for Spice Kingdom. Features a royal red aesthetic, immersive food galleries, and an integrated reservation system.',
      features: ['Signature Biryani Showcase', 'Integrated Table Reservation', 'Immersive Food Photography', 'Premium Royal Ambiance'],
      img: restaurantImg,
      accentColor: '#b91c1c', // Red accent
      link: 'https://restaurant-website-kappa-sepia.vercel.app/'
    }
  ];

  return (
    <>
      <div className="hero-container">
      {/* Fallback Background Image (loads instantly) */}
      <img 
        src={heroPoster} 
        alt="Aetheris Hero Background" 
        className="hero-background-image"
        style={{ opacity: videoLoaded ? 0 : 1, transition: 'opacity 1s ease', zIndex: 0 }}
      />

      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        onPlay={() => setVideoLoaded(true)}
        onLoadedData={() => setVideoLoaded(true)}
        className="hero-background-video"
        style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease', zIndex: 0 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Navigation / Header */}
      <nav className="navbar">
        <a href="#" className="logo">
          <img src={aetherisLogo} alt="Aetheris Logo" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#pricing">Pricing</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-spacer"></div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title fade-up" style={{ animationDelay: '0.2s' }}>
            World-Class Websites <br />
            <span>Ethereal Designs</span>
          </h1>
          <p className="hero-subtitle fade-up" style={{ animationDelay: '0.4s' }}>
            We design and develop ultra-responsive, high-performance websites that capture your brand's essence.
          </p>
          <button 
            onClick={openCalendly} 
            className="hero-cta-btn fade-up" 
            style={{ animationDelay: '0.6s' }}
          >
            <Calendar size={18} /> Book a Call
          </button>
          {/* Mobile-only nav buttons — live below subtitle */}
          <div className="mobile-nav-grid">
            <a href="#portfolio" className="mobile-nav-btn">Portfolio</a>
            <a href="#services" className="mobile-nav-btn">Services</a>
            <a href="#about" className="mobile-nav-btn">About</a>
            <a href="#pricing" className="mobile-nav-btn">Pricing</a>
            <a href="#contact" className="mobile-nav-btn">Contact</a>
          </div>
        </div>
      </main>

      {/* Ambient Noise / Grain */}
      <div className="ambient-blur noise"></div>

      {/* Scroll Down Arrow */}
      <a href="#portfolio" className="hero-scroll">
        <ChevronDown size={32} strokeWidth={1.5} />
      </a>
    </div>

    {/* Portfolio Section */}
    <section id="portfolio" className="portfolio-section">
      <div className="section-header reveal-on-scroll">
        <span className="section-tag">My Work</span>
        <h2 className="section-title">Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card reveal-on-scroll" key={item.id}>
            <div className="portfolio-image-container">
              <img src={item.img} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="visit-btn"
                >
                </a>
              </div>
            </div>
            <div className="portfolio-info">
              <h3 className="portfolio-title" style={{ color: item.accentColor }}>{item.title}</h3>
              <p className="portfolio-desc">{item.description}</p>
              <ul className="portfolio-features">
                {item.features.map((feat, idx) => (
                  <li key={idx} style={{ '--accent-color': item.accentColor }}>{feat}</li>
                ))}
              </ul>
              {item.link !== '#' && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-live-link"
                  style={{ color: item.accentColor || '#000' }}
                >
                  View Live Website →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive digital solutions engineered for growth and brand excellence.</p>
        </div>

        <div className="services-grid">
          {[
            { icon: Layout, title: "UI/UX Design", desc: "Bespoke, brand-centric interfaces designed for maximum engagement.", glow: "rgba(139, 0, 255, 0.15)" },
            { icon: Code, title: "Web Development", desc: "Pixel-perfect, high-performance code using modern frameworks.", glow: "rgba(0, 102, 255, 0.15)" },
            { icon: Smartphone, title: "Mobile Ready", desc: "Flawless responsiveness across all devices and screen sizes.", glow: "rgba(0, 255, 204, 0.15)" },
            { icon: Search, title: "Search Engine SEO", desc: "Strategic optimization to ensure your brand dominates search results.", glow: "rgba(255, 0, 102, 0.15)" },
            { icon: ShoppingBag, title: "E-Commerce", desc: "High-conversion online stores built to scale your business.", glow: "rgba(255, 153, 0, 0.15)" },
            { icon: PenTool, title: "Brand Identity", desc: "Crafting unique logos and visual systems that define your voice.", glow: "rgba(204, 0, 255, 0.15)" },
            { icon: ShieldCheck, title: "Maintenance", desc: "24/7 support and security updates to keep your site running smooth.", glow: "rgba(0, 255, 0, 0.15)" },
            { icon: Zap, title: "Speed Optimization", desc: "Ultra-fast load times designed for better UX and higher rankings.", glow: "rgba(255, 255, 0, 0.15)" }
          ].map((service, index) => (
            <div 
              className="service-card reveal-on-scroll" 
              key={index}
              style={{ '--accent-glow': service.glow }}
            >
              <div className="service-icon-box">
                <service.icon className="service-icon" size={24} />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header reveal-on-scroll">
          <span className="section-tag">The Vision</span>
          <h2 className="section-title">ABOUT US</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text-primary reveal-on-scroll">
            <p className="about-description">
              Aetheris is a boutique digital agency dedicated to the art of the possible. We bridge the gap between ethereal imagination and world-class engineering, crafting legacies for brands that refuse to be ordinary.
            </p>
            
            <div className="pillars-grid">
              <div className="pillar-item">
                <h4 className="pillar-title">Ethereal Design</h4>
                <p className="pillar-desc">Visuals that transcend common trends, rooted in timeless aesthetics.</p>
              </div>
              <div className="pillar-item">
                <h4 className="pillar-title">World-Class Code</h4>
                <p className="pillar-desc">Engineering excellence that ensures speed, security, and scalability.</p>
              </div>
              <div className="pillar-item">
                <h4 className="pillar-title">Strategic Growth</h4>
                <p className="pillar-desc">Data-driven approaches that turn visitors into lifelong advocates.</p>
              </div>
              <div className="pillar-item">
                <h4 className="pillar-title">Global Vision</h4>
                <p className="pillar-desc">Building digital experiences that resonate across borders and cultures.</p>
              </div>
            </div>
          </div>

          <div className="about-artifact-wrapper reveal-on-scroll">
            <div className="about-image-frame" ref={frameRef}>
              <img src={aboutArtifactImg} alt="Zen Transformation Art" className="about-artifact" />
            </div>
            <div className="artifact-glow"></div>
          </div>
        </div>

        {/* Contact Form + WhatsApp */}
        <div className="about-contact-row reveal-on-scroll">
          <div className="about-contact-form-block">
            <h3 className="about-contact-heading">Start a Project</h3>
            <p className="about-contact-subtext">Tell me what you need — I'll get back to you within 24 hours.</p>
            <form
              className="about-contact-form"
              onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus('loading');
                const form = e.target;
                const data = new FormData(form);
                
                const response = await fetch('https://formspree.io/f/xqendvan', {
                  method: 'POST',
                  body: data,
                  headers: {
                    'Accept': 'application/json'
                  }
                });
                
                if (response.ok) {
                  setFormStatus('success');
                  form.reset();
                } else {
                  setFormStatus('error');
                }
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <User size={16} className="form-icon" />
                  <input type="text" name="name" placeholder="Your Name" required className="form-input" />
                </div>
                <div className="form-group">
                  <Mail size={16} className="form-icon" />
                  <input type="email" name="email" placeholder="Your Email" required className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <FileText size={16} className="form-icon form-icon-top" />
                <textarea name="message" placeholder="Describe your project..." rows={4} required className="form-input form-textarea" />
              </div>
              <button type="submit" className="form-submit-btn" disabled={formStatus === 'loading'}>
                <Send size={16} />
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p style={{ color: '#25D366', marginTop: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  Message sent successfully! I will get back to you within 24 hours.
                </p>
              )}
              {formStatus === 'error' && (
                <p style={{ color: '#ff4d4d', marginTop: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  Oops! There was a problem sending your message. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="about-whatsapp-block">
            <div className="whatsapp-card">
              <div className="whatsapp-icon-wrap">
                <MessageCircle size={36} />
              </div>
              <h4 className="whatsapp-heading">Prefer WhatsApp?</h4>
              <p className="whatsapp-text">Quick questions, project discussions, or a friendly hello — I'm just a message away.</p>
              <a
                href="https://wa.me/919553722793?text=Hi%20Danish%2C%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <span className="whatsapp-note">Typically replies within a few hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Section - Black Aesthetic */}
    <section id="pricing" className="pricing-section">
      <div className="services-container">
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Transparent Value</span>
          <h2 className="section-title">PRICING</h2>
          <p className="section-subtitle">No hidden fees. No surprises. Just world-class websites at honest prices.</p>
        </div>

        <div className="pricing-grid">
          {[
            {
              name: 'Starter',
              price: '$299',
              tagline: 'Perfect for getting online',
              features: [
                '3-Page Website (Home, About, Contact)',
                'Mobile Responsive Design',
                'Basic On-Page SEO',
                'Contact Form Integration',
                'Fast Hosting Setup (Vercel)',
                '5-Day Delivery',
              ],
              cta: 'Get Started',
              highlight: false,
            },
            {
              name: 'Business',
              price: '$599',
              tagline: 'Most popular — built to convert',
              features: [
                '5–7 Page Custom Website',
                'Premium UI/UX with Animations',
                'Mobile-First Architecture',
                'SEO Optimized + Fast Load',
                'Google Maps + Contact Form',
                '2 Rounds of Revisions',
                '10-Day Delivery',
              ],
              cta: 'Start Project',
              highlight: true,
            },
            {
              name: 'Premium',
              price: '$999+',
              tagline: 'Full-scale brand experience',
              features: [
                'Full Custom React/Vite Website',
                'Advanced Animations & Interactions',
                'E-Commerce or Blog Integration',
                'Comprehensive SEO Strategy',
                '1 Month Post-Launch Support',
                'Unlimited Revisions',
                '14-Day Delivery',
              ],
              cta: 'Let\'s Talk',
              highlight: false,
            },
          ].map((plan, i) => (
            <div key={i} className={`pricing-card reveal-on-scroll ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
              {plan.highlight && <div className="pricing-badge">MOST POPULAR</div>}
              <div className="pricing-card-top">
                <span className="pricing-plan-name">{plan.name}</span>
                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                </div>
                <p className="pricing-tagline">{plan.tagline}</p>
              </div>
              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <Check size={15} className="pricing-check" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`pricing-cta ${plan.highlight ? 'pricing-cta--highlight' : ''}`}>
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note reveal-on-scroll">All prices in USD · Monthly maintenance plans available from $79/mo · Custom quotes for complex projects</p>
      </div>
    </section>

    {/* Testimonials Section - White Aesthetic */}
    <section className="testimonials-section">
      <div className="about-container">
        <div className="about-header reveal-on-scroll">
          <span className="section-tag">Client Love</span>
          <h2 className="section-title">TESTIMONIALS</h2>
        </div>

        <div className="testimonials-grid">
          {[
            {
              name: 'James R.',
              role: 'Gym Owner, Melbourne AU',
              stars: 5,
              quote: 'Danish delivered an absolutely stunning website for my gym. It\'s fast, looks incredible on mobile, and we\'ve seen a real increase in new memberships since launching. Genuinely world-class work.',
            },
            {
              name: 'Sarah M.',
              role: 'Clinic Director, London UK',
              stars: 5,
              quote: 'I was blown away by the quality. The design built immediate trust with our patients. Danish understood exactly what a medical brand needs — clean, professional, and reassuring. Highly recommend.',
            },
            {
              name: 'Carlos T.',
              role: 'Restaurant Owner, Houston TX',
              stars: 5,
              quote: 'We went from a basic template to a premium digital experience. The menu showcase and reservation integration look like something from a Michelin-star brand. Worth every penny.',
            },
          ].map((t, i) => (
            <div key={i} className="testimonial-card reveal-on-scroll">
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={16} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section - Compact Black Aesthetic */}
    <section id="contact" className="contact-section-dark">
      <div className="services-container"> {/* Reusing container for consistency */}
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">CONTACT</h2>
        </div>

        <div className="contact-grid reveal-on-scroll">
          <div className="contact-profile-card">
            <div className="compact-founder-image">
              <img src={founderAvatar} alt="Founder" />
            </div>
            <div className="compact-founder-info">
              <h3>THE VISIONARY</h3>
              <span className="founder-name-text">DANISH MOHAMMED</span>
              <p>Turning bold ideas into ethereal digital realities. Let's create something extraordinary together.</p>
            </div>
          </div>

          <div className="contact-info-grid">
            <a href="mailto:ddanishhmohd@gmail.com" className="compact-contact-item">
              <Mail size={18} />
              <div>
                <span className="label">EMAIL</span>
                <span className="value">ddanishhmohd@gmail.com</span>
              </div>
            </a>
            <div className="compact-contact-item">
              <Smartphone size={18} />
              <div>
                <span className="label">PHONE</span>
                <span className="value">+91-9553722793</span>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/danish-mohammed-4116a7324/" target="_blank" rel="noopener noreferrer" className="compact-contact-item">
              <Briefcase size={18} />
              <div>
                <span className="label">LINKEDIN</span>
                <span className="value">Danish Mohammed</span>
              </div>
            </a>
            <a href="https://github.com/Dzyu-cyber" target="_blank" rel="noopener noreferrer" className="compact-contact-item">
              <Code size={18} />
              <div>
                <span className="label">GITHUB</span>
                <span className="value">@Dzyu-cyber</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Footer - Ethereal White Aesthetic */}
    <footer className="footer-white">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column brand-col">
            <img src={aetherisLogo} alt="Aetheris" className="footer-logo-dark" />
            <p className="footer-about">
              Blending technical precision with artistic vision to create digital experiences that transcend the ordinary.
            </p>
          </div>
          
          <div className="footer-column">
            <h4>NAVIGATION</h4>
            <nav className="footer-links-list">
              <a href="#portfolio">PORTFOLIO</a>
              <a href="#services">SERVICES</a>
              <a href="#about">ABOUT</a>
              <a href="#pricing">PRICING</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </div>

          <div className="footer-column">
            <h4>SOCIAL</h4>
            <nav className="footer-links-list">
              <a href="https://www.linkedin.com/in/danish-mohammed-4116a7324/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="https://github.com/Dzyu-cyber" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </nav>
          </div>

          <div className="footer-column">
            <h4>EST.</h4>
            <div className="neat-est-block">
              <span className="est-year">2026</span>
              <span className="est-motto">CRAFTING DIGITAL LEGACIES</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>DESIGNED BY DANISH MOHAMMED</p>
            <p>© 2026 AETHERIS AGENCY • ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
    {/* Floating Book a Call Button */}
    <button onClick={openCalendly} className="floating-cta-btn">
      <Calendar size={18} />
      <span>Book a Call</span>
    </button>
    </>
  );
}

export default App;
