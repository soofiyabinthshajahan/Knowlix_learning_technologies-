import React from "react";
import "./Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./Pages/About";
import Home from "./Pages/Home";
import ServiceSection from "./Pages/Service";
import Syllabus from "./Pages/Syllabus";
import TestimonialPage from "./Pages/Testimonial";
import CoursePage from "./Pages/Components/CoursePage";
import CourseDetails from './Pages/Components/CourseDetails';
import TeamSection from "./Pages/Components/TeamSection"; // ✅ Add this

function App() {
  return (
    <Router>
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
              <div id="courses" style={{ scrollMarginTop: "12vh", minHeight: "100vh" }}>
                <CoursePage />
              </div>
              <TestimonialPage />
            </>
          }
        />

        {/* ✅ Add this route for the Team section */}
        <Route path="/team" element={<TeamSection />} />

        {/* Course details page */}
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
