import React, { useState } from 'react'
import { FaHeart, FaRegBookmark, FaRegCalendar, FaEnvelope, FaDesktop } from "react-icons/fa";
import './BlogHeader.css'
import Header from '../../Header';
import GetinTouchModal from "./GetinTouchModal";

export default function BlogHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="blog-wrapper">
        <Header />
        <div className="blog-container">

          {/* Left Section */}
          <div className="blog-left">
            <h3 className="header-title"> Knowlix Learning - Blog Page</h3>

            <div className="author-section">
              <div className="author-logo-wrapper">
                <img
                  src="/Logo-removebg-preview.png"
                  alt="Author"
                  className="author-logo"
                />
                {/* <span className="status-dot"></span> */}
              </div>
              <div className="author-info">
                <p>
                  <span className="author-role"> Knowlix</span> for{" "}
                  <span className="author-name">Learning</span>{" "}
                  <span className="available-text">Available for work</span>{" "}
                  <a href="/" className="follow-link">Follow</a>
                </p>
                <div className="contact-info">
                  <span className="email">
                    <FaEnvelope /> knowlixacademics@gmail.com
                  </span>
                  <span className="website">
                    <FaDesktop /> knowlixacademics.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="blog-right">
            <div className="icon-group">
              <button className="icon-btn"><FaHeart /></button>
              <button className="icon-btn"><FaRegBookmark /></button>
              <button className="icon-btn"><FaRegCalendar /></button>
            </div>
            <button className="contact-btn" onClick={() => setShowModal(true)}>
              Get in touch
            </button>
          </div>

        </div>
      </div>

      {/* Modal */}
      <GetinTouchModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
