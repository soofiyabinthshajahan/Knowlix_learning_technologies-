import React, { useState } from 'react';
import './RefundPolicy.css';
import Header from '../../Header';


const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState('general');

  const policySections = {
    general: {
      title: "General Refund Policy",
      content: (
        <>
          <p>1. The Admission Fee and Mentor Allocation Charge are non-refundable.</p>
          <p>2. If a student is not satisfied within the first three days of joining, the concern will be reviewed, and if found valid, a 10% refund will be provided.</p>
          <p>3. Any requests made after three days will not be eligible for a refund.</p>
        </>
      )
    },
    eligibility: {
      title: "Eligibility Criteria",
      content: (
        <>
          <p>1. If a student is not satisfied within the first three days of joining, the concern will be reviewed, and if found valid, a 10% refund will be provided.
</p>
          </>
      )
    },
    process: {
      title: "Refund Process",
        content: (
        <>
          <p>1. In case of any complaint, kindly register it through the company’s official email.</p>
          <p>2. The complaint will be reviewed, and you will receive an update or reply within 14 working days.</p>
          <p>3. If the complaint is found to be genuine, a refund will be processed.</p>
        </>
      )
    },
    exceptions: {
      title: "Refund Method",
      content: (
        <>
          <p>1. All approved refunds will be processed to the original method of payment used at the time of purchase.</p>
          <p>2. The time required for the refund to appear may vary depending on your bank or card issuer.</p>
          <p>3. Refunds typically reflect within 5 to 10 business days.</p>
          <p>4. The company is not responsible for any delays caused by banks or payment providers.</p>
        </>
      )
    },
    contact: {
      title: "Contact Us",
      content: "If you have any questions about our refund policy, please contact us at knowlixacademics@gmail.com or call us at +91 7025235519 between 9am-5pm EST, Monday through Friday."
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
            <div className="policy-text">
              {policySections[activeSection].content}
            </div>
          
          </div>
        </div>

        
      </div>
    </>
  );
};

export default RefundPolicy;