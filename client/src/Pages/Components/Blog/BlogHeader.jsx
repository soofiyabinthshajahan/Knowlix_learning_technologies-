import React from 'react'
import { FaHeart, FaRegBookmark, FaRegCalendar, FaEnvelope, FaDesktop } from "react-icons/fa";
import './BlogHeader.css'
import Header from '../../Header';

export default function BlogHeader() {
  return (
    <>

    <div className="blog-wrapper">
          <Header />
      <div className="blog-container">
        
        {/* Left Section */}
        <div className="blog-left">
          <h3 className="header-title">SoftQA - Blog Page</h3>

          <div className="author-section">
            <div className="author-logo-wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Product_sample_icon_picture.png/500px-Product_sample_icon_picture.png"
                alt="Author"
                className="author-logo"
              />
              <span className="status-dot"></span>
            </div>
            <div className="author-info">
              <p>
                <span className="author-role">Dipa UI/UX</span> for{" "}
                <span className="author-name">Dipa Inhouse</span>{" "}
                <span className="available-text">Available for work</span>{" "}
                <a href="/" className="follow-link">Follow</a>
              </p>
              <div className="contact-info">
                <span className="email">
                  <FaEnvelope /> hi@dipainhouse.com
                </span>
                <span className="website">
                  <FaDesktop /> dipainhouse.com
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
          <button className="contact-btn">Get in touch</button>
        </div>

      </div>
    </div>
      </>
  );
}
