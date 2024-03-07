import React from 'react';
import '../styles/MainContent.scss';

const MainContent = () => (
  <main className="main-content">
    <section className="welcome-section">
      <h2>Welcome to Our Website!</h2>
      <p>We are delighted to have you here. Explore our services and let us know how we can help you.</p>
    </section>
    <section className="features-section">
      <h3>Our Features</h3>
      <ul className="feature-list">
      <li>Feature 1: Description</li>
        <li>Feature 2: Description</li>
        <li>Feature 3: Description</li>  <li>Feature 4: Description</li>
        <li>Feature 5: Description</li>
        <li>Feature 6: Description</li>
    
      
      </ul>
    </section>
  </main>
);

export default MainContent;
