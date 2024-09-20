
import './Footer.css'; 
import { IoCopy } from "react-icons/io5";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false); // To track if the email was copied

  const handleCopy = () => {
    const email = document.querySelector('.email-input').value;
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true); // Set copied to true
      setTimeout(() => setCopied(false), 2000); // Show "Copied!" message for 2 seconds
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container"> 
        <div className="row footer-content">

          {/* Logo and Description */}
          <div className="min-w-full p-2 display-flex footer-column">
            <div className="footer-logo-section">
              <img src='swiggy_logo/logo.png' className='footer-logo' alt='' />
              <p className="footer-description text-center">
                Subscribe to Our Page
              </p>
              <div className="email-signup">
                <input type="email" className="email-input" placeholder="Email Address" />
               
                <button type="submit" className="email-btn">→</button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 footer-column text-center">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">About Company</a></li>
              <li><a href="#">Home Shop</a></li>
              <li><a href="#">Our Menu (CMS)</a></li>
              <h5 className="footer-heading">Branch Location:</h5>
            <p className="contact-info">402 Nehru Place Noida, Noida Uttar Pradesh.</p>
            <p style={{ fontSize: '20px' }}>India, 281405.</p>
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-3 col-md-6 footer-column text-center">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><a href="#">Hamburger</a></li>
              <li><a href="#">Chicken Burger</a></li>
              <li><a href="#">Vegetable Pizza</a></li>
              <li><a href="#">Chicken Roll</a></li>
              <li><a href="#">Ice-Cream</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6 footer-column text-center">
            <h4 className="footer-heading">Call for order:</h4>
            <h3 style={{ fontSize: '24px' }}> 
              <a href="tel:+125865789">+91 8938900984</a> 
            </h3>
               <div className="email-copy-section">
                <p className="contact-info">
                  hello@example.com
                </p>
                <IoCopy className="copy-icon" onClick={handleCopy} style={{ cursor: 'pointer' }} />
                {copied && <span className="copied-message">Copied!</span>} {/* Show Copied message */}
              </div>
           
            <h5 className="footer-heading">Head Office Location:</h5>
            <p className="contact-info">202 California Lane California, United State. </p>
            <h3 style={{ fontSize: '24px' }}>
              <a href="tel:+125865789">+1 2586 6984</a> 
            </h3>

              {/* Social media icons */}
              <div className="footer-social-media">
            <a href="https://www.facebook.com"><FaFacebookF className="social-icon" /></a>
            <a href="https://www.instagram.com"><FaInstagram className="social-icon" /></a>
            <a href="https://www.twitter.com"><FaTwitter className="social-icon" /></a>
            <a href="https://www.linkedin.com"><FaLinkedinIn className="social-icon" /></a>
          </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© 2024 Swiggy, All Rights Reserved</p>
          <ul className="footer-bottom-links">
            <li><a href="#">Setting & Privacy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Food Menu</a></li>
          </ul>
        </div>      
      </div>
    </footer>
  );
};

export default Footer;
