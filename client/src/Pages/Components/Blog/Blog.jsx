import React from "react";
import "./Blog.css";
import BlogHeader from "./BlogHeader";
import BlogBanner from "./BlogBanner";
import BlogCard from "./BlogCard";
import BlogServices from "./BlogServices";
import Footers from "../Footer/Footers";

const Blog = () => {
  return (
  <>
  
 <div>


  <BlogHeader />
  <BlogBanner />
  <BlogCard />
  <BlogServices />
  <Footers />
  
   </div>
  </>
  );
};

export default Blog;
