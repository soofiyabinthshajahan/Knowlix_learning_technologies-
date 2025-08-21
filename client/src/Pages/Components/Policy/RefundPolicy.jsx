import React, { useState } from 'react';
import './RefundPolicy.css';
import Header from '../../Header';
import Footers from '../Footer/Footers';

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState('general');

  const policySections = {
    general: {
      title: "General Refund Policy",
      content: "We want you to be completely satisfied with your purchase. If you're not happy for any reason, we offer a 30-day money-back guarantee on all our products."
    },
    eligibility: {
      title: "Eligibility Criteria",
      content: "To be eligible for a refund, your request must be made within 30 days of purchase. The product must not have been used extensively, and all original materials must be returned in their original condition."
    },
    process: {
      title: "Refund Process",
      content: "To request a refund, please contact our support team with your order details. Once approved, refunds will be processed within 5-7 business days and credited to your original payment method."
    },
    exceptions: {
      title: "Exceptions",
      content: "Some products are exempt from refunds including downloadable software, services already rendered, and products marked as final sale. Digital products may only be refunded if they are defective."
    },
    contact: {
      title: "Contact Us",
      content: "If you have any questions about our refund policy, please contact us at support@company.com or call us at (555) 123-4567 between 9am-5pm EST, Monday through Friday."
    }
  };

  return (
    <>
      <Header />
      <div className="refund-policy-container">
        <header className="policy-header">
          <h1>Refund Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="policy-content">
          <nav className="policy-nav">
            <h2>Policy Sections</h2>
            <ul>
              {Object.keys(policySections).map(section => (
                <li key={section}>
                  <button 
                    className={activeSection === section ? 'active' : ''}
                    onClick={() => setActiveSection(section)}
                  >
                    {policySections[section].title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="policy-details">
            <h2>{policySections[activeSection].title}</h2>
            <p>{policySections[activeSection].content}</p>
            
            <div className="additional-info">
              <h3>Need More Help?</h3>
              <p>Visit our <a href="/faq">FAQ page</a> or contact our customer support team for additional assistance.</p>
            </div>
          </div>
        </div>

        
      </div>
      <Footers />
    </>
  );
};

export default RefundPolicy;
