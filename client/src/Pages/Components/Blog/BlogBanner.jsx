import React from "react";
import "./BlogBanner.css";

const BlogBanner = () => {
  return (
    <div>
      {/* Top Banner Section */}
      <div className="blog-banner">
        <img
          src="https://cdn.dribbble.com/userupload/43619887/file/original-8f5f06081f464c2e4b7d30c0f4caa6fe.png?resize=1600x1200&vertical=center"
          alt="Blog Banner"
          className="blog-banner-img"
        />
      </div>

      {/* Content Section */}
      <div className="blog-content">
        <h1>
          Hi Dribbble! <span role="img" aria-label="wave"></span>
        </h1>
        <p>
          SoftQA is a generative QA tool that automatically writes unit tests for you,
          allowing you to focus on developing exciting features without the hassle of
          manual testing.
        </p>
        <p>
          Scroll to see full version case study!{" "}
          <span role="img" aria-label="down arrow">👇</span>
        </p>

        <h1>Mockup</h1>
        <p>Here's the mockup of our design project. Check it out!</p>
      </div>

      {/* Bottom Banner */}
      <div className="blog-banner">
        <img
          src="https://cdn.dribbble.com/userupload/43619888/file/original-88db9e63b05c6672f9322ab71aa447e3.png?resize=1600x1200&vertical=center"
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
          Reach us out through the <strong><u>Get in touch</u></strong> button. Design crafted by Malik.
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
