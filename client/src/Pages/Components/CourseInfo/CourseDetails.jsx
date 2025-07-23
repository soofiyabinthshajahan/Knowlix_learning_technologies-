import React from "react";
import styled from "styled-components";
import WeekSection from "./WeekSeciton.js";
import CourseBanner from "./CourseBanner.jsx";
import CourseNavigator from "./CourseNavigator.jsx";
import CourseStats from "./CourseStats.jsx";
import SectionOutline from "./SectionOutline.jsx";
import HiringPartners from "./HiringPartners.jsx";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const LearnList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LearnItem = styled.li`
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;

  &::before {
    color: #477e6a;
    content: "✔";
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  padding: 4rem;
  background: #e9e9e9ff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SyllabusSection = styled.div`

  h3 {
    font-size: 1.5rem;
    color: #477e6a;
    margin-bottom: 20px;
    font-weight: 600;
  }
;`

const Footer = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 0.9rem;
;`

const CoursePage = () => {
  return (
    <Wrapper>
      <CourseBanner 
        courseTitle = "Python & Django"
        facultyName = "Dr. Sarah Johnson"
        facultyQualifications = "Ph.D. Computer Science, IIT Madras"
      />

      <CourseStats
        duration = "3 weeks"
        mode = "Hybrid"
        students = {400}
      />

      <GridWrapper>
        <div>
          <SectionOutline id="about-course" title="About Course">
            <p>
              This course, part of the Python & Django Track, equips you with the skills needed to become an 
              entry-level <strong>Python & Django developer</strong>. You'll learn to design and build a mobile 
              app backend and a responsive website focused on social good. You'll showcase all that you've learned 
              by completing the full development process — from understanding user needs to testing. 
            </p>
          </SectionOutline>

          <SectionOutline id="what-you-will-learn" title = "What will you learn">
            <LearnList>
              <LearnItem>Full-Stack Web Development Fundamentals</LearnItem>
              <LearnItem>Database Design and Management with Django ORM</LearnItem>
              <LearnItem>Building Robust Features and Functionality</LearnItem>                <LearnItem>Practical Application Development and Deployment</LearnItem>
            </LearnList>
          </SectionOutline>

        <SectionOutline id="syllabus-section" title="Course Syllabus">
          <SyllabusSection>

            <WeekSection
              title="Week 1: Foundation & Setup"
              topics={[
                "Python Essentials & Web Development Basics",
                "Django Project Structure",
                "Djando App Structure",
                "Version Control with GitHub"
              ]}
            />
            <WeekSection
              title="Week 2: Django Core Components"
              topics={[
                "Django Models & Database Interaction",
                "Django Views & Request/Response Handling",
                "Django Templates & Frontend Integration",
                "URL Routing"
              ]}
            />
            <WeekSection
            title="Week 3: Advanced Django & API Development"
            topics={[
              "Advanced ORM Techniques",
              "Django REST Framework (DRF) for APIs",
              "Authentication & Permissions",
              "Testing & Performance Optimization"
            ]}
            />
          </SyllabusSection>
        </SectionOutline>
        </div>

        <CourseNavigator 
          courseTitle = "Python & Django"
        />

      </GridWrapper>

          <HiringPartners />

          <Footer>
            © 2025 Knowlix Learning. All rights reserved.
          </Footer>
    </Wrapper>
  );
};

export default CoursePage;