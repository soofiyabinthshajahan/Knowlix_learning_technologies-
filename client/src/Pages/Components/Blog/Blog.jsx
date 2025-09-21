import React from "react";
import { Helmet } from "react-helmet";
import "./Blog.css";
import Header from "../../Header";
import BlogBanner from "./BlogBanner";
import BlogCard from "./BlogCard";
import BlogServices from "./BlogServices";

const Blog = () => {
  return (
  <>
  <Helmet>
  <title>Knowlix Learning Blog – Tips, Insights & Online Learning Updates</title>
  <meta
    name="description"
    content="Explore the Knowlix Learning blog for online learning tips, student success stories, and insights into modern education."
  />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Knowlix Learning Blog – Tips, Insights & Online Learning Updates" />
  <meta property="og:description" content="Explore the Knowlix Learning blog for online learning tips, student success stories, and insights into modern education." />
  <meta property="og:image" content="https://www.knowlixlearning.com/blog-banner.png" />
  <meta property="og:url" content="https://www.knowlixlearning.com/blog" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Knowlix Learning Blog – Tips, Insights & Online Learning Updates" />
  <meta name="twitter:description" content="Explore the Knowlix Learning blog for online learning tips, student success stories, and insights into modern education." />
  <meta name="twitter:image" content="https://www.knowlixlearning.com/blog-banner.png" />

  {/* JSON-LD structured data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Knowlix Learning Blog",
      "description": "Explore the Knowlix Learning blog for online learning tips, student success stories, and insights into modern education.",
      "url": "https://www.knowlixlearning.com/blog"
    }
    `}
  </script>

  {/* Canonical */}
  <link rel="canonical" href="https://www.knowlixlearning.com/blog" />
</Helmet>
 <div>
  <Header />
  <BlogBanner />
  <BlogCard />
  <BlogServices />
   </div>
  </>
  );
};

export default Blog;
