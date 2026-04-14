import ClientScripts from '@/components/ClientScripts';

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="logo-text">EUREKA</div>
        <div className="preloader-bar"><div className="preloader-bar-inner" id="preloader-bar"></div></div>
        <div className="preloader-percent" id="preloader-percent">0%</div>
      </div>

      {/* Custom Cursor */}
      <div className="cursor-dot" id="cursor-dot"></div>
      <div className="cursor-ring" id="cursor-ring"></div>

      {/* Header */}
      <header id="header">
        <div className="container-wide">
          <div className="header-inner">
            <a href="#hero" className="logo">
              <img src="/eureka-logo.jpeg" alt="Eureka Doors" style={{height: '50px'}} />
            </a>
            <nav>
              <ul className="nav-links">
                <li><a href="#gallery">Gallery</a></li>
                <li className="nav-dropdown">
                  <a href="#products" className="nav-dropdown-toggle">Products <i className="fas fa-chevron-down"></i></a>
                  <ul className="dropdown-menu">
                    <li><a href="#products"><i className="fas fa-tree"></i> Wooden Doors</a></li>
                    <li><a href="#products"><i className="fas fa-droplet"></i> Solid PVC Doors</a></li>
                    <li><a href="#products"><i className="fas fa-palette"></i> Theme Doors</a></li>
                    <li><a href="#products"><i className="fas fa-wind"></i> Balcony Doors</a></li>
                    <li><a href="#products"><i className="fas fa-shield-halved"></i> FRP Doors</a></li>
                    <li><a href="#products"><i className="fas fa-layer-group"></i> Laminated Doors</a></li>
                    <li><a href="#products"><i className="fas fa-cubes"></i> Plywood</a></li>
                  </ul>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#why-eureka">Why Eureka</a></li>
                <li><a href="#testimonials">Clients</a></li>
                <li><a href="#footer">Contact</a></li>
              </ul>
            </nav>
            <a href="#cta-section" className="btn btn-gold btn-sm header-cta desktop-only">Get a Quote</a>
            <button className="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobile-menu">
        <button className="mobile-menu-close" id="mobile-close" aria-label="Close menu"><i className="fas fa-times"></i></button>
        <ul className="mobile-nav">
          <li><a href="#gallery">Gallery</a></li>
          <li>
            <a href="#products" className="mobile-dropdown-toggle">Products <i className="fas fa-chevron-down"></i></a>
            <ul className="mobile-submenu">
              <li><a href="#products">Wooden Doors</a></li>
              <li><a href="#products">Solid PVC Doors</a></li>
              <li><a href="#products">Theme Doors</a></li>
              <li><a href="#products">Balcony Doors</a></li>
              <li><a href="#products">FRP Doors</a></li>
              <li><a href="#products">Laminated Doors</a></li>
              <li><a href="#products">Plywood</a></li>
            </ul>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#why-eureka">Why Eureka</a></li>
          <li><a href="#testimonials">Clients</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
        <div className="mobile-menu-cta">
          <a href="#cta-section" className="btn btn-gold" style={{justifyContent:'center'}}>Get a Quote</a>
          <a href="tel:+918888784444" className="btn btn-secondary" style={{justifyContent:'center'}}><i className="fas fa-phone"></i> Call Us</a>
        </div>
        <div className="mobile-menu-contact">
          <p><i className="fas fa-phone" style={{color:'var(--accent-gold)',marginRight:'8px'}}></i> <a href="tel:+918888784444">+91 8888 78 4444</a></p>
          <p><i className="fas fa-envelope" style={{color:'var(--accent-gold)',marginRight:'8px'}}></i> <a href="mailto:sales@eurekaindia.com">sales@eurekaindia.com</a></p>
          <p style={{marginTop:'12px'}}><i className="fas fa-map-marker-alt" style={{color:'var(--accent-gold)',marginRight:'8px'}}></i> Eureka Towers, Warje, Pune 411058</p>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero-bg">
          {/* Using standard img for external URL to avoid Next.js optimization errors */}
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop" alt="Luxury home entrance with elegant wooden door - Eureka Doors" loading="eager" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container-wide">
          <div className="hero-content">
            <div className="hero-label">Since 2000 — Pune, India</div>
            <h1 className="hero-title">
              <span className="line"><span className="line-inner">Crafted for</span></span>
              <span className="line"><span className="line-inner">Every <em>Opening</em></span></span>
            </h1>
            <p className="hero-desc">India's trusted door manufacturer blending traditional woodworking craftsmanship with industrial-grade polymer technology. Built for modern homes, builders, and developers.</p>
            <div className="hero-actions">
              <a href="#cta-section" className="btn btn-white btn-lg">Get Bulk Quote <i className="fas fa-arrow-right"></i></a>
              <a href="#products" className="btn btn-outline btn-lg">Explore Products</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value"><span className="counter" data-target="864000">0</span><span>+</span></div>
                <div className="hero-stat-label">Doors Installed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value"><span className="counter" data-target="5000">0</span><span>+</span></div>
                <div className="hero-stat-label">Happy Clients</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value"><span className="counter" data-target="26">0</span><span>+</span></div>
                <div className="hero-stat-label">Years Legacy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* Client Marquee */}
      <section id="client-marquee">
        <span className="marquee-label">Trusted By</span>
        <div className="marquee-track">
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/aakar-logo-04.png" alt="Aakar" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/AnandTara-Construction-logo.png" alt="Anand Tara" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/Egale-Properties-logo..png" alt="Eagle Properties" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/DNVgrey-logo.png" alt="DNV" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/Gera-Developers-logo.png" alt="Gera Developers" />
          <img src="https://eurekaindia.com/wp-content/uploads/2020/01/VASUDHA.png" alt="Vasudha" />
          <img src="https://eurekaindia.com/wp-content/uploads/2020/01/RAVIMA.jpg" alt="Ravima" />
          <img src="https://eurekaindia.com/wp-content/uploads/2020/01/PHARANDE.png" alt="Pharande" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/aakar-logo-04.png" alt="Aakar" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/AnandTara-Construction-logo.png" alt="Anand Tara" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/Egale-Properties-logo..png" alt="Eagle Properties" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/DNVgrey-logo.png" alt="DNV" />
          <img src="https://eurekaindia.com/wp-content/uploads/2019/09/Gera-Developers-logo.png" alt="Gera Developers" />
          <img src="https://eurekaindia.com/wp-content/uploads/2020/01/VASUDHA.png" alt="Vasudha" />
          <img src="https://eurekaindia.com/wp-content/uploads/2020/01/RAVIMA.jpg" alt="Ravima" />
          <img src="https://eurekaindia.com/wp-content/uploads/2020/01/PHARANDE.png" alt="Pharande" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap reveal-left">
              <img src="https://eurekaindia.com/wp-content/uploads/2020/01/about-eureka.jpg" alt="Dr. Pramod Bhalerao - Managing Director, Eureka Doors" />
              <div className="about-image-badge">
                <div className="number">26+</div>
                <div className="text">Years of Excellence</div>
              </div>
            </div>
            <div className="about-content reveal-right">
              <div className="section-label">Our Legacy</div>
              <h2 className="section-title">Pioneering Door Manufacturing Since 2000</h2>
              <div className="divider"></div>
              <p className="section-subtitle">Founded by Dr. Pramod Bhalerao in Pune, Eureka Doors has grown from a vision to India's leading door manufacturer. We blend traditional woodworking craftsmanship with industrial-grade polymer technology, delivering architectural precision and timeless elegance.</p>
              <p style={{color:'var(--text-secondary)',fontSize:'0.95rem',lineHeight:'1.8',marginTop:'16px'}}>Our state-of-the-art manufacturing plant in Pune powers production for modern homes, builders, and developers across India. As the first to bring PVC doors to India — before TATA — we continue to innovate with R&D-driven customization for every project.</p>
              <div className="about-features">
                <div className="about-feature"><i className="fas fa-industry"></i><span>State-of-the-art Manufacturing Plant</span></div>
                <div className="about-feature"><i className="fas fa-flask"></i><span>Dedicated R&D Team for Customization</span></div>
                <div className="about-feature"><i className="fas fa-award"></i><span>50+ National Awards Won</span></div>
                <div className="about-feature"><i className="fas fa-building"></i><span>RERA Project Ready Partner</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="section-padding-sm">
        <div className="stats-bg-pattern"></div>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal"><div className="stat-number"><span className="counter" data-target="50">0</span><span className="stat-suffix">+</span></div><div className="stat-label">Awards Won</div></div>
            <div className="stat-item reveal"><div className="stat-number"><span className="counter" data-target="5000">0</span><span className="stat-suffix">+</span></div><div className="stat-label">Happy Clients</div></div>
            <div className="stat-item reveal"><div className="stat-number"><span className="counter" data-target="864000">0</span><span className="stat-suffix">+</span></div><div className="stat-label">Doors Installed</div></div>
            <div className="stat-item reveal"><div className="stat-number"><span className="counter" data-target="2000">0</span></div><div className="stat-label">Founded in the Year</div></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding">
        <div className="container">
          <div className="text-center" style={{marginBottom:'56px'}}>
            <div className="section-label centered">Our Products</div>
            <h2 className="section-title centered">Seven Lines, One Standard — Excellence</h2>
            <div className="divider centered"></div>
            <p className="section-subtitle centered">From waterproof PVC to premium theme doors, every Eureka door is engineered for 15-20 years of reliable performance.</p>
          </div>
          <div className="product-filters">
            <button className="filter-btn active" data-filter="all">All Products</button>
            <button className="filter-btn" data-filter="bedroom">Bedroom</button>
            <button className="filter-btn" data-filter="bathroom">Bathroom</button>
            <button className="filter-btn" data-filter="balcony">Balcony</button>
          </div>
          <div className="products-grid" id="products-grid">
            {[ 
              { img: "https://eurekaindia.com/wp-content/uploads/2019/12/WOODEN-DOOR-768x635.jpg", badge: "Premium", room: "Bedroom", icon: "fa-bed", cat: "bedroom", title: "Wooden Doors", desc: "Laminate, Flush & Molded variants in Teak, Oak, Walnut, and Rosewood. Premium finish with natural beauty and sound insulation.", price: "₹3,500 – ₹8,000", unit: "/ door" },
              { img: "https://eurekaindia.com/wp-content/uploads/2019/12/PVC-DOORS-768x635.jpg", badge: "Industry First", room: "Bathroom", icon: "fa-bath", cat: "bathroom", title: "Solid PVC Doors", desc: "Waterproof PVC Panel & Flush Doors — India's first! Premium paint finish, lightweight, washable, and incredibly durable.", price: "₹2,500 – ₹6,500", unit: "/ door" },
              { img: "https://eurekaindia.com/wp-content/uploads/2020/02/theme-Door-768x635.jpg", badge: "Designer", room: "Bedroom", icon: "fa-bed", cat: "bedroom", title: "Theme Doors", desc: "Designer patterns for statement entrances. Modern, Classical, Contemporary, and Artistic designs with high-end finish.", price: "₹4,500 – ₹10,000", unit: "/ door" },
              { img: "https://eurekaindia.com/wp-content/uploads/2020/02/POST-FORMING-DOORS-768x635.jpg", badge: "UV Protected", room: "Balcony", icon: "fa-sun", cat: "balcony", title: "Balcony Doors", desc: "Lightweight yet durable exterior solutions with UV protection. Available in Sliding, Swing, and Bi-fold designs.", price: "₹3,800 – ₹7,200", unit: "/ door" },
              { img: "https://eurekaindia.com/wp-content/uploads/2020/02/FRP-DOOR-768x635.jpg", badge: "Waterproof", room: "Bathroom", icon: "fa-bath", cat: "bathroom", title: "FRP Doors", desc: "Fibre Reinforced Polymer doors — durable, lightweight, waterproof, and low maintenance. Ideal for wet areas.", price: "₹2,200 – ₹5,500", unit: "/ door" },
              { img: "https://eurekaindia.com/wp-content/uploads/2020/01/FRAME-768x635.jpg", badge: "Essentials", room: "All Rooms", icon: "fa-cubes", cat: "bedroom", title: "Plywood & Frames", desc: "High-quality BWR, Marine & Fire-resistant plywood with superior strength. Premium door frames for all applications.", price: "₹2,000 – ₹5,000", unit: "/ sheet" }
            ].map((product, i) => (
              <div key={i} className="product-card reveal" data-category={product.cat}>
                <a href="#cta-section" className="product-card-arrow"><i className="fas fa-arrow-right"></i></a>
                <div className="product-card-image">
                  <img src={product.img} alt={`${product.title} by Eureka`} loading="lazy" />
                  <span className="product-card-badge">{product.badge}</span>
                  <span className="product-card-room"><i className={`fas ${product.icon}`} style={{marginRight:'4px'}}></i> {product.room}</span>
                </div>
                <div className="product-card-content">
                  <h3 className="product-card-title">{product.title}</h3>
                  <p className="product-card-desc">{product.desc}</p>
                  <div className="product-card-meta">
                    <span className="product-price">{product.price} <span>{product.unit}</span></span>
                    <span className="product-durability"><i className="fas fa-clock"></i> 15-20 yrs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="products-view-all reveal">
            <a href="#cta-section" className="btn btn-primary btn-lg">Request Complete Catalogue <i className="fas fa-download" style={{marginLeft:'4px'}}></i></a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="container">
          <div className="text-center" style={{marginBottom:'56px'}}>
            <div className="section-label centered">Our Memories</div>
            <h2 className="section-title centered">Our Memories</h2>
            <div className="divider centered"></div>
            <p className="section-subtitle centered">A glimpse into our installations across residential and commercial projects in Pune and beyond.</p>
          </div>
          <div className="gallery-grid">
            {["1","2","3","4","5","6"].map((num, i) => (
              <div key={i} className="gallery-item reveal-scale" data-index={i}>
                <img src={`https://eurekaindia.com/wp-content/uploads/2020/02/${num}.jpg`} alt={`Eureka Doors Project ${num}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eureka Section */}
      <section id="why-eureka" className="section-padding">
        <div className="container">
          <div className="text-center" style={{marginBottom:'16px'}}>
            <div className="section-label centered">Why Choose Us</div>
            <h2 className="section-title centered">The Eureka Advantage</h2>
            <div className="divider centered"></div>
            <p className="section-subtitle centered">Every reason why India's top builders trust Eureka Doors for their projects.</p>
          </div>
          <div className="features-grid">
            {[
              { icon: "fa-industry", title: "Excellent Infrastructure", desc: "State-of-the-art manufacturing plant in Pune with advanced CNC routing and automated production lines for consistent quality at scale." },
              { icon: "fa-gem", title: "Best Quality Materials", desc: "Every raw material sourced from certified suppliers. Rigorous quality checks at every stage ensure doors that last 15-20 years." },
              { icon: "fa-ruler-combined", title: "Customized Designs", desc: "Our dedicated R&D team creates bespoke solutions for projects. From CNC routed veneer to custom laminates — we build what you envision." },
              { icon: "fa-truck-fast", title: "Timely Delivery", desc: "On-schedule supply chain management ensures your project never waits. Bulk orders delivered on time, every time." },
              { icon: "fa-headset", title: "After Sales Service", desc: "Dedicated support team for installation guidance, maintenance queries, and any post-delivery assistance your project needs." },
              { icon: "fa-building-circle-check", title: "RERA Project Ready", desc: "Preferred partner for RERA-certified developers. Compliance-ready documentation and specifications for seamless project integration." }
            ].map((feature, i) => (
              <div key={i} className="feature-card reveal">
                <div className="feature-icon"><i className={`fas ${feature.icon}`}></i></div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="testimonials-bg"></div>
        <div className="container">
          <div className="text-center" style={{marginBottom:'56px',position:'relative',zIndex:2}}>
            <div className="section-label centered" style={{color:'var(--accent-gold)'}}>Client Voices</div>
            <h2 className="section-title centered" style={{color:'var(--white)'}}>Trusted by India's Leading Builders</h2>
            <div className="divider centered" style={{background:'var(--accent-gold)'}}></div>
          </div>
          <div className="testimonials-slider" id="testimonials-slider">
            <div className="testimonial-track" id="testimonial-track">
              <div className="testimonial-slide">
                <div className="testimonial-quote-icon">"</div>
                <p className="testimonial-text">We prefer Eureka Doors since last 7 years because they have huge manufacturing capacity. They have supplied us more than 6000 doors till date. Their supply of CNC Routed doors for our L-axis project is the best example for matching with client requirement.</p>
                <div className="testimonial-author">
                  <div className="testimonial-author-logo"><img src="https://eurekaindia.com/wp-content/uploads/2020/01/PHARANDE.png" alt="Pharande Promoters" /></div>
                  <div className="testimonial-author-info">
                    <h4>Mr. Ramesh Pharande</h4>
                    <p>Pharande Promoters</p>
                    <span>6,000+ doors supplied · 7-year partnership</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-slide">
                <div className="testimonial-quote-icon">"</div>
                <p className="testimonial-text">Till date we have completed three projects with Eureka Doors and every time whenever there are any issues related to product or installations they were prompt to listen and solve the problems. They have supplied us more than 2000 doors with frames.</p>
                <div className="testimonial-author">
                  <div className="testimonial-author-logo"><img src="https://eurekaindia.com/wp-content/uploads/2020/01/VASUDHA.png" alt="Vasudha Projects" /></div>
                  <div className="testimonial-author-info">
                    <h4>Mr. Yogesh Wani – Kothawade</h4>
                    <p>Vasudha Projects, Pune</p>
                    <span>2,000+ doors supplied · 3 projects completed</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-slide">
                <div className="testimonial-quote-icon">"</div>
                <p className="testimonial-text">Ravima Ventures is associated with Eureka Doors since last 10 years and we are happy for the product and services they have supplied to our projects. We always prefer them considering their stability in the door sector, production capacity and their services.</p>
                <div className="testimonial-author">
                  <div className="testimonial-author-logo"><img src="https://eurekaindia.com/wp-content/uploads/2020/01/RAVIMA.jpg" alt="Ravima Ventures" /></div>
                  <div className="testimonial-author-info">
                    <h4>Mr. Gaurav Gadiya</h4>
                    <p>Ravima Ventures</p>
                    <span>6,000+ doors supplied · 10-year partnership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-controls">
            <button className="testimonial-btn" id="test-prev" aria-label="Previous testimonial"><i className="fas fa-arrow-left"></i></button>
            <div className="testimonial-dots" id="test-dots">
              <div className="testimonial-dot active" data-index="0"></div>
              <div className="testimonial-dot" data-index="1"></div>
              <div className="testimonial-dot" data-index="2"></div>
            </div>
            <button className="testimonial-btn" id="test-next" aria-label="Next testimonial"><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </section>

      {/* CTA / Quote Section */}
      <section id="cta-section" className="section-padding">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-bg-pattern"></div>
            <div className="cta-content reveal-left">
              <div className="section-label" style={{color:'var(--accent-gold)'}}>Get Started</div>
              <h2 className="section-title">Let's Build Something Exceptional Together</h2>
              <p>Whether you're planning a 50-unit project or 5,000 — we have the capacity, customization capability, and track record to deliver. Share your requirements and our team will respond within 24 hours.</p>
              <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                {["Free project consultation & door recommendations", "Competitive bulk pricing with no hidden costs", "Dedicated project manager for orders above 500 doors", "On-time delivery guarantee with installation support"].map((text, i) => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',color:'var(--text-primary)',fontSize:'0.9rem',fontWeight:'500'}}>
                    <i className="fas fa-check-circle" style={{color:'var(--accent-gold)'}}></i> {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-form reveal-right">
              <div className="cta-form-inner" id="quote-form">
                <h3>Request a Bulk Quote</h3>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" className="form-input" id="q-name" placeholder="Enter your full name" required />
                  <div className="form-error" id="q-name-error">Please enter your name</div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" className="form-input" id="q-phone" placeholder="+91 XXXXX XXXXX" required />
                    <div className="form-error" id="q-phone-error">Please enter a valid phone number</div>
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" className="form-input" id="q-email" placeholder="your@email.com" required />
                    <div className="form-error" id="q-email-error">Please enter a valid email</div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Product Interest</label>
                  <select className="form-select" id="q-product">
                    <option value="">Select product type</option>
                    <option value="wooden">Wooden Doors</option>
                    <option value="pvc">Solid PVC Doors</option>
                    <option value="theme">Theme Doors</option>
                    <option value="balcony">Balcony Doors</option>
                    <option value="frp">FRP Doors</option>
                    <option value="laminated">Laminated Doors</option>
                    <option value="plywood">Plywood & Frames</option>
                    <option value="all">All Door Types</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Approximate Quantity</label>
                  <select className="form-select" id="q-quantity">
                    <option value="">Select quantity range</option>
                    <option value="50-100">50 – 100 Doors</option>
                    <option value="100-500">100 – 500 Doors</option>
                    <option value="500-1000">500 – 1,000 Doors</option>
                    <option value="1000+">1,000+ Doors</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Project Details</label>
                  <textarea className="form-input" id="q-details" rows="3" placeholder="Tell us about your project — location, timeline, special requirements..." style={{resize:'vertical'}}></textarea>
                </div>
                <button type="button" className="btn btn-gold btn-lg" id="quote-submit" style={{width:'100%',justifyContent:'center'}}>
                  Submit Quote Request <i className="fas fa-paper-plane" style={{marginLeft:'6px'}}></i>
                </button>
              </div>
              <div className="form-success" id="quote-success">
                <i className="fas fa-check-circle"></i>
                <h4>Quote Request Received!</h4>
                <p>Thank you for reaching out. Our team will review your requirements and get back to you within 24 hours.</p>
                <a href="https://wa.me/918888784444?text=Hi%20Eureka%20Doors%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website." className="btn btn-gold btn-sm" style={{marginTop:'20px'}} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp Instead
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="container-wide">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#hero" className="logo">
                <img src="/eureka-logo.jpeg" alt="Eureka Doors" style={{height: '50px'}} />
              </a>
              <p className="footer-about">India's leading door manufacturer since 2000. Crafting premium PVC, Wooden, Theme & FRP doors with precision and passion from our state-of-the-art facility in Pune.</p>
              <div className="footer-social">
                <a href="https://instagram.com/eureka_doors" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://facebook.com/eureka_doors" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://linkedin.com/company/eureka-doors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <ul className="footer-links">
                {["Wooden Doors","Solid PVC Doors","Theme Doors","Balcony Doors","FRP Doors","Laminated Doors","Plywood & Frames"].map((p, i) => (
                  <li key={i}><a href="#products">{p}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul className="footer-links">
                {[{t:"About Us",l:"#about"},{t:"Gallery",l:"#gallery"},{t:"Why Eureka",l:"#why-eureka"},{t:"Client Stories",l:"#testimonials"},{t:"Get a Quote",l:"#cta-section"}].map((c, i) => (
                  <li key={i}><a href={c.l}>{c.t}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Eureka Towers, 5th Floor,<br/>Pune-Bangalore Highway,<br/>Warje, Pune 411058</p>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone"></i>
                <p><a href="tel:+918888784444">+91 8888 78 4444</a><br/><a href="tel:+919373040830">+91 9373 040 830</a></p>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <p><a href="mailto:sales@eurekaindia.com">sales@eurekaindia.com</a><br/><a href="mailto:info@eurekaindia.com">info@eurekaindia.com</a></p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Eureka Doors. All Rights Reserved. Crafted in Pune, India.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/918888784444?text=Hi%20Eureka%20Doors%2C%20I%20am%20interested%20in%20your%20door%20products.%20Please%20share%20details." className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Chat with us!</span>
      </a>

      {/* Scroll to Top */}
      <button className="scroll-top" id="scroll-top" aria-label="Scroll to top"><i className="fas fa-chevron-up"></i></button>

      {/* Lightbox */}
      <div className="lightbox" id="lightbox">
        <button className="lightbox-close" aria-label="Close lightbox"><i className="fas fa-times"></i></button>
        <img src="" alt="Gallery Image" id="lightbox-img" />
      </div>

      {/* Toast */}
      <div className="toast" id="toast">
        <i className="fas fa-check-circle"></i>
        <span id="toast-message">Success!</span>
      </div>

      {/* Inject Client-Side Scripts (GSAP, Interactions) */}
      <ClientScripts />
    </>
  )
}
