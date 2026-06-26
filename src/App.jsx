import React, { useEffect, useRef, useState } from "react";
import WaylineCity from "./components/WaylineCity";
import industries from "./data/industries";
import DomeGallery from "./components/DomeGallery";
import InstagramGrid from "./components/InstagramGrid";
import ScrollRevealText from "./components/ScrollRevealText";
import ScrollPlaybook from "./components/ScrollPlaybook";

function App() {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const previewRef = useRef(null);

  // Track cursor coordinates dynamically for the floating stack
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      // Add slight offset so it floats elegantly near the cursor
      const offsetX = 180; 
      const offsetY = -80;
      el.style.left = `${e.clientX + offsetX}px`;
      el.style.top = `${e.clientY + offsetY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Filter industries based on the active tab category
  const filteredIndustries = activeCategory === "all"
    ? industries
    : industries.filter(ind => ind.category === activeCategory);

  return (
    <div className="page">
      {/* Navigation Header */}
      <header className="header">
        <div className="brand-logo-container">
          <img
            src="/images/FulllogowithoutBG.png"
            alt="WHNL Logo"
            className="brand-logo"
          />
        </div>
        <nav className="nav-links">
          <a href="#industries" className="nav-link">Sectors</a>
          <a href="#social" className="nav-link">Journal</a>
          <a href="#communities" className="nav-link">Careers</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-hyperspeed-container">
          <WaylineCity />
        </div>
        <div className="hero-overlay" />
        <div className="hero-bottom-fade" />
        <div className="hero-content">
          <div className="hero-title-group">
            <span className="hero-tagline">WHNL Group</span>
            <h1 className="hero-title">What starts here<br />changes the world.</h1>
            <ScrollRevealText
              text="We are a holding company of businesses that make an impact."
              className="hero-subtitle"
            />
          </div>
          <div className="hero-cta-group">
            <button 
              className="btn-primary"
              onClick={() => {
                const el = document.getElementById("communities");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Careers & Communities
            </button>
          </div>
        </div>

        <a href="#industries" className="scroll-indicator">
          <span className="scroll-text">Explore</span>
          <div className="scroll-line"></div>
        </a>
      </section>

      <ScrollPlaybook />

      {/* Main Content Area */}
      <main>
        <section id="industries">
        {/* Desktop Zaina-style Industry Index List */}
        <div className="zaina-index-section">
          <div className="zaina-section-header">
            <span className="section-label">Pursuits</span>
            <h2 id="portfolio-heading" className="section-title">The WHNL Portfolio</h2>
            <ScrollRevealText
              text="An intersection of vision, intellect, and impact. A diverse ecosystem of businesses operating with an obsession for excellence."
              className="section-description"
            />
          </div>

          <div className="filters-row">
            <span className="filters-title">Industries Index</span>
            <div className="filter-tags">
              <button 
                className={`filter-tag ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All Sectors ({industries.length})
              </button>
              <button 
                className={`filter-tag ${activeCategory === "consumer" ? "active" : ""}`}
                onClick={() => setActiveCategory("consumer")}
              >
                Consumer
              </button>
              <button 
                className={`filter-tag ${activeCategory === "tech" ? "active" : ""}`}
                onClick={() => setActiveCategory("tech")}
              >
                Tech & AI
              </button>
              <button 
                className={`filter-tag ${activeCategory === "creative" ? "active" : ""}`}
                onClick={() => setActiveCategory("creative")}
              >
                IP & Creative
              </button>
            </div>
          </div>

          <div className="zaina-table">
            {filteredIndustries.map((ind, index) => (
              <div
                key={ind.id}
                className="zaina-row"
                onMouseEnter={() => setHoveredIndustry(ind)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <span className="row-num">{(index + 1).toString().padStart(2, "0")}</span>
                <span className="row-name">{ind.name}</span>
                <span className="row-tagline">{ind.tagline}</span>
                <div className="row-action">
                  <span className="action-arrow">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mouse Floating Stack Image Preview */}
          <div
            ref={previewRef}
            className={`float-preview-container ${hoveredIndustry ? "visible" : ""}`}
          >
            {hoveredIndustry && (
              <div className="image-stack">
                {hoveredIndustry.images.slice(0, 3).map((url, i) => (
                  <div
                    key={i}
                    className={`stack-image img-${i}`}
                    style={{ backgroundImage: `url("${url}")` }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dome Gallery component (takes active industries) */}
        <DomeGallery items={industries} />
        </section>

        {/* Journal / Instagram Grid Section */}
        <section id="social">
          <InstagramGrid />
        </section>

        {/* Careers & Communities Section */}
        <section id="communities" className="communities-section">
          <div className="communities-content">
            <span className="section-label">Join Our Pursuit</span>
            <h2 className="section-title">Careers & Communities</h2>
            <ScrollRevealText
              text="We believe in ourselves almost to the point of delusion. If you carry unwavering participation, no limitations, and a healthy dose of tenacity, let's design the future together."
              className="section-description"
            />

            <div className="communities-grid">
              <div className="community-card">
                <span className="card-label">Active Talents</span>
                <h3 className="card-title">Explore Careers</h3>
                <p className="card-description">
                  Discover open opportunities across our businesses in technology, FMCG, SaaS, manufacturing, real estate, and finance.
                </p>
                <a href="#apply" className="card-link" onClick={(e) => { e.preventDefault(); alert("Talent recruitment portal coming soon. For inquiries, email careers@whnl.group"); }}>
                  Apply Online <span>→</span>
                </a>
              </div>

              <div className="community-card">
                <span className="card-label">Eco-systems</span>
                <h3 className="card-title">Our Communities</h3>
                <p className="card-description">
                  Learn about our collaborative networks, events, hackathons, creative IPs, and wellness experiences designed to cultivate impact.
                </p>
                <a href="#connect" className="card-link" onClick={(e) => { e.preventDefault(); alert("Community platform launch scheduled for Fall 2026."); }}>
                  Get Involved <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="whnl-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/images/FulllogowithoutBG.png"
              alt="WHNL Logo"
              className="footer-logo"
            />
            <p className="footer-pitch">
              One group, many pursuits, and an obsession for excellence.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4 className="footer-col-title">Operations</h4>
              <ul>
                <li><a href="#industries">Consumer & FMCG</a></li>
                <li><a href="#industries">Technology & SaaS</a></li>
                <li><a href="#industries">Manufacturing & Logistics</a></li>
                <li><a href="#industries">IPs & Media</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul>
                <li><a href="#social">Journal</a></li>
                <li><a href="#communities">Careers</a></li>
                <li><a href="#communities">Communities</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); alert("Contact: hello@whnl.group"); }}>Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} WHNL Group. All rights reserved.</span>
          <span>Sleek • Premium • sorted</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
