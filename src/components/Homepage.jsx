import React, { useState } from 'react';
import './Homepage.css';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="homepage">
  

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src="briyani.jpg" alt="Delicious Biryani Dish" />
          <div className="brand-logo-overlay">
            <img src="restaurant-logo-3.png" alt="Brand Logo" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h1 className="section-title">WELCOME TO SPR GLOBAL</h1>
          <div className="spr-logo-text">
            <span>S</span>
            <span>P</span>
            <span>R</span>
          </div>
          <p className="tagline">
            <span className="bold">Inspiring Lives, Empowering Communities</span>
          </p>
          <p className="welcome-description">
            At SPR Global, we're committed to excellence, quality, and affordability. We're a dynamic group leading innovation in the food & beverage industry with a focus on creating exceptional customer experiences.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">BRANDS WE OPERATE</h2>
          <div className="brands-grid">
            {/* Brand 1 */}
            <div className="brand-card">
              <div className="brand-logo">
                <img src="restaurant-logo-1.png" alt="Restaurant Logo" />
              </div>
              <p className="brand-description">
                Crafting culinary wonders from South and Southeast Asian cuisines with a commitment to authentic flavors and exceptional experience.
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
            
            {/* Brand 2 */}
            <div className="brand-card">
              <div className="brand-logo">
                <img src="restaurant-logo-2.png" alt="Restaurant Logo" />
              </div>
              <p className="brand-description">
                Celebrating the rich and diverse traditions of South Asian cuisine with a focus on authenticity and a memorable dining experience.
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>

            <div className="brand-card">
              <div className="brand-logo">
                <img src="logo6.png" alt="Restaurant Logo" />
              </div>
              <p className="brand-description">
                Celebrating the rich and diverse traditions of South Asian cuisine with a focus on authenticity and a memorable dining experience.
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
            
            <div className="brand-card">
              <div className="brand-logo">
                <img src="image1.png" alt="Restaurant Logo" />
              </div>
              <p className="brand-description">
                Celebrating the rich and diverse traditions of South Asian cuisine with a focus on authenticity and a memorable dining experience.
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
            
            <div className="brand-card">
              <div className="brand-logo">
                <img src="logo5.png" alt="Restaurant Logo" />
              </div>
              <p className="brand-description">
                Celebrating the rich and diverse traditions of South Asian cuisine with a focus on authenticity and a memorable dining experience.
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
            
            {/* Brand 3 */}
            <div className="brand-card">
              <div className="brand-logo">
                <img src="restaurant-logo-3.png" alt="Restaurant Logo" />
              </div>
              <p className="brand-description">
                Modern interpretations of classic recipes with a focus on quality ingredients and innovative culinary techniques.
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Opportunities Banner */}
      <section className="business-opportunities-banner">
        <div className="container">
          <div className="scrolling-text">
            <span>BUSINESS OPPORTUNITIES •</span>
            <span>BUSINESS OPPORTUNITIES •</span>
            <span>BUSINESS OPPORTUNITIES •</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-title">Become an Entrepreneur Today -<br />Grow Your Business with SPR Global</h3>
              <p className="contact-description">
                Join our growing network of successful franchise partners and benefit from our proven business model, comprehensive training, and ongoing support.
              </p>
              
              <div className="info-grid">
                <div className="info-block">
                  <h4 className="info-title">Our Office</h4>
                  <p className="info-text">123 Business Avenue<br />Suite 456<br />City, State 12345</p>
                </div>
                <div className="info-block">
                  <h4 className="info-title">Contact Info</h4>
                  <p className="info-text">info@sprglobal.com<br />+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-grid">
                <div className="info-block">
                  <h4 className="info-title">Opening Hours</h4>
                  <p className="info-text">Mon-Fri: 9:00 AM - 5:00 PM<br />Weekends: Closed</p>
                </div>
                <div className="info-block">
                  <h4 className="info-title">Social Media</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <img src="logo.png" alt="SPR Global Logo" className="footer-logo" />
              <p className="footer-description">
                Empowering entrepreneurs and delivering exceptional food experiences across our family of brands.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Brands</a></li>
                <li><a href="#">Franchise Information</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-brands">
              <h4 className="footer-title">Brands</h4>
              <ul className="footer-menu">
                <li><a href="#">Restaurant Brand 1</a></li>
                <li><a href="#">Restaurant Brand 2</a></li>
                <li><a href="#">Restaurant Brand 3</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-contact-info">
                <li>123 Business Avenue, Suite 456</li>
                <li>City, State 12345</li>
                <li>info@sprglobal.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Mon-Fri: 9AM - 5PM</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} SPR Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;