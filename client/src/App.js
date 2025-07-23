import React, { useState } from "react";
import "./Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Header from "./Pages/Header"
import AboutSection from "./Pages/About";
import Home from "./Pages/Home";
import ServiceSection from "./Pages/Service";
import Syllabus from "./Pages/Syllabus";
import TestimonialPage from "./Pages/Testimonial";
import CoursePage from "./Pages/Components/CoursePage";
// import CourseGrid from './Pages/Components/CoursePage';
import CourseDetails from './Pages/Components/CourseInfo/CourseDetails';
// import { courses } from './Pages/Data/CourseData';

function App() {
  // const [selectedCourseId, setSelectedCourseId] = useState(null);

  // const handleViewDetails = (courseId) => {
  //   setSelectedCourseId(courseId);
  // };

  // const handleBack = () => {
  //   setSelectedCourseId(null);
  // };

  // const selectedCourse = selectedCourseId
  //   ? courses.find(course => course.id === selectedCourseId)
  //   : null;

  // // If a course is selected, show only the course details page
  // if (selectedCourse) {
  //   return <CourseDetails course={selectedCourse} onBack={handleBack} />;
  // }

  // // Otherwise, show the full homepage with all sections
  return (
    <Router>
      <Routes>
        {/* Home and all sections */}
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

        {/* Course details page */}
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;