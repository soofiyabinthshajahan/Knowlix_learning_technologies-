import React from "react";
import "./Modal.css"; // same styling base

const ContactUsModal = ({ show, onClose }) => {
  if (!show) return null;

  const phoneNumber = "+917025235519";
  const whatsappNumber = "917025235519";
  const emailAddress = "knowlixlearning@gmail.com";

  const handleCall = () => window.open(`tel:${phoneNumber}`);
  const handleWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  const handleEmail = () => window.open(`mailto:${emailAddress}`);

  return (
    <div className="modal-overlay">
      <div className="modal-content contact-modal">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>

        <h2>Contact Us</h2>
        <p className="contact-subtext">
          We’d love to hear from you! Choose your preferred way to reach us.
        </p>

        <div className="contact-options">
          <div className="contact-card" onClick={handleCall}>
            <div className="icon-circle call-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="Call"
              />
            </div>
            <h3>Call Us</h3>
            <p>{phoneNumber}</p>
          </div>

          <div className="contact-card" onClick={handleWhatsApp}>
            <div className="icon-circle whatsapp-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                alt="WhatsApp"
              />
            </div>
            <h3>Chat on WhatsApp</h3>
            <p>Click to open chat</p>
          </div>

          <div className="contact-card" onClick={handleEmail}>
            <div className="icon-circle email-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/gmail.png"
                alt="Email"
              />
            </div>
            <h3>Email Us</h3>
            <p>{emailAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
