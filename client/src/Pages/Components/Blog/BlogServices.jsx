import React from "react";
import "./BlogServices.css";

const blogData = [
  {
    id: 1,
    title: "Webinar",
  
    image:
      "/service1.jpeg",
  },
  {
    id: 2,
    title: "Webinar",
  
    image:
"/service2.jpeg",  },
  {
    id: 3,
    title: "Webinar",
  
    image:
"/service3.jpeg",  },
  {
    id: 4,
    title: "Webinar",
   
    image:
"/service4.jpeg",  },
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
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogServices;
