import React from "react";
import "./BlogCard.css";

const BlogCard = () => {
  const cards = [
    {
      id: 1,
      img: "/card1.jpeg"
    },
    {
      id: 2,
img: "/card2.jpeg"    },
    {
      id: 3,
img: "/card3.jpeg"    },
    {
      id: 4,
img: "/card4.jpeg"    }
  ];

  return (
    <div className="blog-card-section">
      <div className="blog-card-header">
        <h2>More by Knowlix Learning</h2>
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
