import React from 'react';
import './Brands.css';

const Brands = () => {
  return (
    <div className="brands-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="logo-container">
            <img src="restaurant-logo-1.png" alt="Restaurant Logo" className="restaurant-logo" />
          </div>
          <h1 className="hero-title">THE PONUSAMY ELITE</h1>
          <p className="hero-subtitle">Authentic Traditional Cuisine with a Legacy of Excellence</p>
        </div>
      </div>

      {/* About Brand Section */}
      <div className="section about-section">
        <h2 className="section-title">ABOUT THE BRAND</h2>
        <div className="section-content">
          <p className="about-text">
            Founded on the principles of authentic culinary traditions, our brand brings the rich flavors of 
            Chettinad cuisine to food enthusiasts around the world. With a legacy spanning decades, we have
            perfected recipes that have been passed down through generations, ensuring each dish delivers
            an exceptional dining experience.
          </p>
          <div className="brand-images">
            <img src="brand.png" alt="Restaurant Interior" className="brand-image" />
          </div>
        </div>
      </div>

      {/* Signature Dishes */}
      <div className="section signature-section">
        <h2 className="section-title">SIGNATURE DISHES</h2>
        <div className="dishes-grid">
          <div className="dish-item">
            <img src="food1.jpg" alt="Dish 1" />
            <h3 className="dish-title">Chettinad Chicken</h3>
            <p className="dish-description">Traditional chicken curry with aromatic spices</p>
          </div>
          <div className="dish-item">
            <img src="food2.jpg" alt="Dish 2" />
            <h3 className="dish-title">Masala Dosa</h3>
            <p className="dish-description">Crispy rice crepe with spiced potato filling</p>
          </div>
          <div className="dish-item">
            <img src="food3.jpg" alt="Dish 3" />
            <h3 className="dish-title">Chettinad Fish Curry</h3>
            <p className="dish-description">Fresh fish cooked in traditional spices</p>
          </div>
          <div className="dish-item">
            <img src="food4.jpg" alt="Dish 4" />
            <h3 className="dish-title">Vegetable Thali</h3>
            <p className="dish-description">Complete meal with variety of vegetables</p>
          </div>
        </div>
      </div>

      {/* Signature Offerings */}
      <div className="section offerings-section">
        <h2 className="section-title">SIGNATURE OFFERINGS</h2>
        <div className="offerings-grid">
          {[1, 2, 3].map((item) => (
            <div className="offering-item" key={item}>
              <img src="image1.png" alt={`Offering ${item}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Business Opportunities */}
      <div className="business-opportunities">
        <div className="opportunities-banner">
          <p>BUSINESS OPPORTUNITIES • BUSINESS OPPORTUNITIES • BUSINESS OPPORTUNITIES</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="section why-choose-section">
        <h2 className="section-title">WHY CHOOSE US</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <img src="image1.png" alt="Icon 1" />
            </div>
            <h3 className="feature-title">Profit Opportunity</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <img src="image1.png" alt="Icon 2" />
            </div>
            <h3 className="feature-title">Traditional Recipes</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <img src="image1.png" alt="Icon 3" />
            </div>
            <h3 className="feature-title">Market Value</h3>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section cta-section">
        <h2 className="cta-title">Bring Chettinad Heritage To Your City!</h2>
        <div className="cta-features">
          <div className="cta-feature">
            <h3>Master Support</h3>
          </div>
          <div className="cta-feature">
            <h3>Collaboration in Training</h3>
          </div>
          <div className="cta-feature">
            <h3>Opportunity Growth</h3>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="section contact-section">
        <h2 className="form-title">Grow Your Business with IPR Model</h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter your city" />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Message</label>
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>SPR</h2>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>About</h3>
              <ul>
                <li>Our Story</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>Franchising</li>
                <li>Consulting</li>
                <li>Training</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li>Email</li>
                <li>Phone</li>
                <li>Address</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 The Poshgaary Elite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Brands;
