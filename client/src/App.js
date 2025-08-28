import React from "react";
import "./Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./Pages/About";
import Home from "./Pages/Home";
import ServiceSection from "./Pages/Service";
import Syllabus from "./Pages/Syllabus";
import TestimonialPage from "./Pages/Testimonial";
import CoursePage from "./Pages/Components/CoursePage";
import TeamSection from "./Pages/Components/TeamSection";
import EnrollPage from "../src/Pages/Components/CourseEnroll/EnrollPage";
import CourseDetails from "./Pages/Components/CourseInfo/CourseDetails";
import Blog from "./Pages/Components/Blog/Blog";
import Footer from "./Pages/Components/Footers/Footer.jsx"
import RefundPolicy from "./Pages/Components/Policy/RefundPolicy";
import TutorPage from "./Pages/Components/Tutor/TutorPage";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="home" style={{ scrollMarginTop: "12vh", minHeight: "100vh" }}>
                    <Home />
                  </div>
                  <Syllabus />
                  <div id="about" style={{ scrollMarginTop: "12vh", minHeight: "100vh" }}>
                    <AboutSection />
                  </div>
                  <ServiceSection />
                  <CoursePage />
                  <TestimonialPage />
                </>
              }
            />

            <Route path="/team" element={<TeamSection />} />
            <Route path="/policy" element={<RefundPolicy />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<TutorPage />} />
          </Routes>
        </div>

        {/* ✅ Footer outside Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
