import React, { useState } from "react";
import "./GetinTouchModal.css";

export default function GetinTouchModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
  });

  if (!show) return null; // hide modal if not active

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose(); // close modal after submit
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Organization</label>
            <input
              type="text"
              name="organization"
              placeholder="Enter your organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
