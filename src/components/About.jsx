import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Your favorite meals, delivered fast and fresh.</p>
      </div>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At [Swiggy], we believe in bringing fresh, delicious food to your doorstep with just a click. 
            Our mission is to simplify your life by connecting you with the best restaurants in your area and delivering 
            meals as quickly as possible.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Wide selection of restaurants and cuisines</li>
            <li>Fast and reliable delivery</li>
            <li>24/7 customer support</li>
            <li>Exclusive discounts and offers</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            [Swiggy] was founded in 2024 with a simple vision: to make ordering food more convenient and enjoyable. 
            What started as a small startup is now one of the fastest-growing food delivery services, loved by customers and 
            restaurants alike. 
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            We are more than just a food delivery service. Our focus is on creating seamless and delightful experiences 
            for our customers. Whether you’re craving a gourmet meal or a quick snack, you can count on us to deliver.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
