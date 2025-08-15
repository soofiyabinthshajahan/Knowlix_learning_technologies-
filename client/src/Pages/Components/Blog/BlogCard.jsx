import React from "react";
import "./BlogCard.css";

const BlogCard = () => {
  const cards = [
    {
      id: 1,
      img: "https://thumbs.dreamstime.com/b/business-man-phone-updates-system-blue-background-businessman-phone-updates-system-blue-background-234900173.jpg"
    },
    {
      id: 2,
      img: "https://thumbs.dreamstime.com/b/compliance-rule-law-regulation-graphic-interface-business-quality-policy-planning-to-meet-international-standard-184946168.jpg"
    },
    {
      id: 3,
      img: "https://i.ytimg.com/vi/bRrIhgn52m0/maxresdefault.jpg"
    },
    {
      id: 4,
      img: "https://thumbs.dreamstime.com/b/businessman-pressing-button-touch-screen-interface-select-update-icon-businessman-pressing-button-touch-screen-interface-265315151.jpg"
    }
  ];

  return (
    <div className="blog-card-section">
      <div className="blog-card-header">
        <h2>More by Dipa Inhouse</h2>
        <a href="#">View profile</a>
      </div>
      <div className="blog-card-grid">
        {cards.map((card) => (
          <div className="blog-card" key={card.id}>
            <img src={card.img} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
