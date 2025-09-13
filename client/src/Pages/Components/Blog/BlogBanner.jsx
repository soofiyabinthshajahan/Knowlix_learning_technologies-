import React from "react";
import "./BlogBanner.css";
import { useState } from "react";
import GetinTouchModal from "./GetinTouchModal";

const BlogBanner = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="blog-intro">
        <h1>
          Welcome to Knowlix
        </h1>
        <p>
          At Knowlix, we believe learning should be simple, smart, and inspiring. 
          We’re not just a tutoring hub—we’re a space where knowledge meets innovation.
        </p>
        <p>
          Our mission is to make education accessible and engaging for everyone. 
          With experienced tutors, personalized learning plans, and modern teaching tools, 
          Knowlix helps students grow beyond textbooks. From academic subjects to 
          skill-based training, we create an environment where curiosity thrives and confidence grows.
        </p>
        <p>
          Whether you’re a student aiming for excellence or a professional looking to upgrade skills, 
          Knowlix is here to guide your journey. Because learning isn’t just about grades—it’s about growth.
        </p>
        <h3>
          Know more. Grow more. With Knowlix.
        </h3>
      </div>

      {/* Top Banner Section */}
      <div className="blog-banner-row">
        <img src="/Banner.jpeg" alt="Blog Banner 1" className="blog-banner-img" />
        <img src="/Banner2.jpeg" alt="Blog Banner 2" className="blog-banner-img bottom" />
        <p>
          An exchange of ideas on entrepreneurship, growth, and future opportunities.
        </p>
      </div>

      {/* Content Section */}
      <div className="blog-content">
        <h1>
          {/* Hi Dribbble! <span role="img" aria-label="wave"></span> */}
        </h1>
        <p>
          {/* SoftQA is a generative QA tool that automatically writes unit tests for you,
          allowing you to focus on developing exciting features without the hassle of
          manual testing. */}
        </p>
        <p>
          {/* Scroll to see full version case study!{" "}
          <span role="img" aria-label="down arrow">👇</span> */}
        </p>

        {/* <h1>Mockup</h1>
        <p>Here's the mockup of our design project. Check it out!</p> */}
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>
          Interested to collaborate? Let’s <em>Get in Touch!</em>
        </h2>
        <div className="cta-button-wrapper">
          <button className="get-in-touch-btn" onClick={() => setShowModal(true)}>
            Get in Touch
          </button>
        </div>
      </div>
       {/* Modal */}
            <GetinTouchModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default BlogBanner;