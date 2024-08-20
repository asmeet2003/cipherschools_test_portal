import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
 
  const schoolName = "Cipher Schools";
  const introText = `${schoolName} offers a wide range of courses designed to help you master new skills and excel in your career. Whether you're interested in coding, design, marketing, or business, we have the right course for you.`;

  return (
    <div className="home-page">
      <Navbar />
      <header className="home-header">
        <h1>Welcome to {schoolName}</h1>
        <p className="home-intro">{introText}</p>
      </header>
      <section className="home-content">
        <h2>Why Choose Us?</h2>
         <p>
          At {schoolName}, we believe in hands-on learning with real-world projects.
          Our experienced instructors are industry professionals dedicated to helping
          you succeed. Join our community of learners and take the next step in your
          educational journey with us.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
