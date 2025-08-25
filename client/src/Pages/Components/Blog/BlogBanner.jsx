import React from "react";
import "./BlogBanner.css";
import { useState } from "react";
import GetinTouchModal from "./GetinTouchModal";

const BlogBanner = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* Top Banner Section */}
      <div className="blog-banner">
        <img
          src="/Banner.jpeg"
          alt="Blog Banner"
          className="blog-banner-img"
        />
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

      {/* Bottom Banner */}
      <div className="blog-banner">
        <img
           src="/Banner2.jpeg"
          alt="Blog Banner"
          className="blog-banner-img bottom"
        />
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>
          Interested to collaborate? Let’s <em>Get in Touch!</em>
        </h2>
        <p>
          Reach us out through the <strong className="get-in-touch"><u onClick={() => setShowModal(true)}>Get in touch</u></strong> button.
        </p>
      </div>
       {/* Modal */}
            <GetinTouchModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default BlogBanner;
