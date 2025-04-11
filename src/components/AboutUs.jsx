import React from 'react';
import './AboutUs.css';

const brands = [
  {
    name: 'PONNUSAMY',
    description: 'A legacy of authentic Chettinad cuisine.',
    logo: 'restaurant-logo-1.png',
  },
  {
    name: 'CHEAP&BEST',
    description: 'Affordable grooming solutions for men.',
    logo: 'restaurant-logo-2.png',
  },
  {
    name: "Sulthaan's",
    description: 'Traditional wood-fired Tamil Muslim biryani.',
    logo: 'restaurant-logo-3.png',
  },
  {
    name: 'SLAM',
    description: 'A premium fitness destination.',
    logo: '/images/logos/slam.png',
  },
  {
    name: 'FX',
    description: 'Thrilling adventures and family fun.',
    logo: '/images/logos/fx.png',
  },
  {
    name: "Jonah's",
    description: 'A global culinary journey.',
    logo: '/images/logos/jonahs.png',
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>WELCOME TO <br /><span>SPR GLOBAL</span></h1>
            <p>At SPR Global, we are passionate about transforming dreams into reality. As a dynamic company, we empower entrepreneurs by providing franchise opportunities in thriving industries like food, fashion, fitness, and entertainment. Our journey is fueled by innovation, dedication, and the vision to create exceptional experiences that enrich lives and communities.</p>
          </div>
          <div className="welcome-img">
            <img src="/aboutbg.png" alt="Welcome" />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card">
            <h2>Our Mission</h2>
            <p>To foster lasting partnerships with franchisees, equipping them with the tools, training, and resources necessary for success while delivering unmatched experiences to customers through our diverse range of brands.</p>
          </div>
          <div className="vision-card">
            <h2>Our Vision</h2>
            <p>To be a global leader in franchising, creating opportunities that inspire and empower individuals to achieve their entrepreneurial dreams while driving innovation and excellence across food, fashion, fitness, and entertainment industries.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="story-container">
          <div className="story-img">
            <img src="/story-image.png" alt="Our Story" />
          </div>
          <div className="story-text">
            <h2>OUR STORY</h2>
            <p>SPR Global was founded with a simple yet powerful idea: to create opportunities for individuals to grow, innovate, and succeed. From our humble beginnings to becoming a trusted name in multiple industries, we have always believed in the power of collaboration and community.</p>
            <p>Through our brands—each with a unique identity—we strive to meet the needs of modern consumers while maintaining our commitment to quality, authenticity, and innovation.</p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="section-header">
          <h2>WHAT WE OFFER</h2>
          <p>At SPR Global, we bring together expertise and passion to create brands that resonate with customers and franchisees alike.</p>
        </div>
        
        <div className="offer-cards">
          {brands.map((brand, idx) => (
            <div className="offer-card" key={idx}>
              <div className="offer-logo">
                <img src={brand.logo} alt={`${brand.name} Logo`} />
              </div>
              <div className="offer-details">
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <button className="know-more-btn">KNOW MORE</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-text">
            <h2>FOUNDER'S MESSAGE</h2>
            <p>At Funzone, we set out to create more than just an entertainment space—we envisioned a place where joy meets trend, world blends with brand, and experiences ignite the best in everyone. Every activity is designed to inspire, foster connection, and be ever-flexible, bringing smiles and joy to families every time. Looking forward to making unforgettable moments with you!</p>
            <div className="founder-signature">
              <p><strong>John Doe</strong><br/>Founder of Funzone</p>
            </div>
          </div>
          <div className="founder-img">
            <img src="/founder.png" alt="Founder" />
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>MEET THE TEAM</h2>
          <p>Our passionate individuals are bringing a wealth of expertise to help you achieve the diverse and vibrant future we work to build. Together in mission, vision, and cause, we are igniting opportunities for every achiever.</p>
        </div>
        
        <div className="team-grid">
          {Array(6).fill(null).map((_, idx) => (
            <div className="team-card" key={idx}>
              <div className="team-img">
                <img src={`/team-member-${idx+1}.png`} alt="Team Member" />
              </div>
              <h3>NAME OF THE PERSON</h3>
              <p>Designation</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why SPR Global Section */}
      <section className="why-spr-section">
        <div className="section-header">
          <h2>WHY SPR GLOBAL?</h2>
        </div>
        
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img src="/icons/support.png" alt="Support Icon" />
            </div>
            <h3>Entrepreneurial Support</h3>
            <p>Comprehensive training, resources, and tools to set you up for success.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img src="/icons/diverse.png" alt="Diverse Icon" />
            </div>
            <h3>Diverse Opportunities</h3>
            <p>A range of industries to choose from, each with proven business models.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img src="/icons/excellence.png" alt="Excellence Icon" />
            </div>
            <h3>Commitment to Excellence</h3>
            <p>Relentless pursuit of quality in all our services and partnerships.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h3>Become an Entrepreneur Today – Grow Your Business with SPR Global</h3>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email Address" className="full-width" />
            </div>
            <div className="form-row">
              <textarea placeholder="Message/Requirement" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>SPR <span>GLOBAL</span></h2>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Business Opportunity</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Brands</h4>
              <ul>
                <li>Ponnusamy</li>
                <li>Sulthaan's</li>
                <li>SLAM</li>
                <li>Jonah's</li>
                <li>FX</li>
                <li>Cheap&Best</li>
              </ul>
            </div>
            <div className="footer-column contact-info">
              <h4>Contact</h4>
              <p>+91 999 43 04321</p>
              <p>sprglobal@gmail.com</p>
              <p>SPK Nagar, Near Kandaswamy Modern Rice Mill, Uthukuli Road, Tirupur, India 641 601</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SPR Global. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;