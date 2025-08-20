import React from "react";
import "./BlogServices.css";

const blogData = [
  {
    id: 1,
    title: "Creative UI Design",
    price: "$1,500",
    image:
      "https://cdn.dribbble.com/userupload/7534610/file/original-240dbb4a37cdc9448a18b0d3f193d8b4.png?resize=400x0",
  },
  {
    id: 2,
    title: "App Interface Concepts",
    price: "$2,000",
    image:
      "https://cdn.dribbble.com/userupload/7534610/file/original-240dbb4a37cdc9448a18b0d3f193d8b4.png?resize=400x0",
  },
  {
    id: 3,
    title: "Mobile App UI Design",
    price: "$2,500",
    image:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/228862573/original/fa259e4246fa142664f5a9be1ccd6cbf13e1d75d/mobile-app-app-prototype-app-ui-app-design-android-app-ui-design-ui-ux-design.png",
  },
  {
    id: 4,
    title: "UX & Wireframing",
    price: "$3,000",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708025523/catalog/1524082441309937664/v5nrrkpjcsdw8abspkzh.webp",
  },
];

const BlogServices = () => {
  return (
    <div className="blog-services">
      <div className="services-header">
        <h1 className="section-title">Services</h1>
        <a href="#">View all services</a>
      </div>

      <div className="service-grid">
        {blogData.map((blog) => (
          <div className="service-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="service-image" />
            <div className="service-info">
              <span className="service-title">{blog.title}</span>
              <span className="service-price">{blog.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogServices;
