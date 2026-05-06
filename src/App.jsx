import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './App.css';
import aetherisLogo from './assets/Aetheris_Logo+Name-removebg-preview.png';
import backgroundVideo from './assets/mp_.mp4';
import clinicImg from './assets/clinic_mockup.png';
import electricianImg from './assets/electrician_mockup.png';
import restaurantImg from './assets/restaurant_mockup.png';
import gymImg from './assets/gym_mockup.png';
import techclubImg from './assets/techclub_mockup.png';

function App() {
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
      title: 'Clinic Platform',
      description: 'A premium healthcare platform featuring patient appointment scheduling, doctor profiles, and telemedicine integration. Built with React and tailored for clinical efficiency.',
      features: ['Appointment Scheduling', 'Doctor Portals', 'Secure Telemedicine', 'Patient Dashboard'],
      img: clinicImg
    },
    {
      id: 2,
      title: 'Electrical Services',
      description: 'A high-conversion service landing page for electrical contractors. Includes emergency service routing, dynamic quoting, and a fully responsive service area map.',
      features: ['Dynamic Quoting System', 'Emergency Routing', 'Service Area Maps', 'Lead Generation'],
      img: electricianImg
    },
    {
      id: 3,
      title: 'Fine Dining Experience',
      description: 'An immersive culinary experience showcasing dynamic menus, an integrated reservation system, and high-fidelity food galleries.',
      features: ['Live Reservation System', 'Dynamic Menus', 'High-Fidelity Galleries', 'Event Bookings'],
      img: restaurantImg
    },
    {
      id: 4,
      title: 'Modern Fitness Gym',
      description: 'A high-energy fitness platform with member portal integration, class scheduling logic, and dynamic trainer portfolios.',
      features: ['Class Scheduling', 'Member Portals', 'Trainer Portfolios', 'Subscription Management'],
      img: gymImg
    },
    {
      id: 5,
      title: 'University Tech Club',
      description: 'A modern community hub for tech enthusiasts, featuring event management, member directories, and interactive project showcases.',
      features: ['Event Management', 'Member Directory', 'Project Showcase', 'Interactive Forums'],
      img: techclubImg
    }
  ];

  return (
    <>
      <div className="hero-container">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-background-video"
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
      <h2 className="section-title reveal-on-scroll">Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card reveal-on-scroll" key={item.id}>
            <div className="portfolio-image-container">
              <img src={item.img} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <button className="visit-btn">Visit Website</button>
              </div>
            </div>
            <div className="portfolio-info">
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-desc">{item.description}</p>
              <ul className="portfolio-features">
                {item.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default App;
