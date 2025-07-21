import React from "react";
import styled from "styled-components";
import WeekSection from "./WeekSection";
import CourseBanner from "./CourseBanner";
import CourseSidebarCard from "./CourseSideCard";
import CourseInfoGrid from "./CourseInfoGrid";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`;



const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #477e6a;
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

const CompaniesSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.3rem;
    color: #006c45;
    margin-bottom: 20px;
    font-weight: 600;
  }
;`

const CompanyLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  img {
    height: 40px;
    width: auto;
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }
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

      <CourseInfoGrid
        duration = "3 weeks"
        mode = "Hybrid"
        students = {400}
      />

      <GridWrapper>
        <div>
          <Section>
            <SectionTitle id="about-course">About Course</SectionTitle>
            <p>
              This course, part of the Python & Django Track, equips you with the skills needed to become an 
              entry-level <strong>Python & Django developer</strong>. You'll learn to design and build a mobile 
              app backend and a responsive website focused on social good. You'll showcase all that you've learned 
              by completing the full development process — from understanding user needs to testing. 
            </p>
          </Section>

          <Section>
            <SectionTitle id="what-you-will-learn">What will you learn</SectionTitle>
            <LearnList>
              <LearnItem>Full-Stack Web Development Fundamentals</LearnItem>
              <LearnItem>Database Design and Management with Django ORM</LearnItem>
              <LearnItem>Building Robust Features and Functionality</LearnItem>
              <LearnItem>Practical Application Development and Deployment</LearnItem>
            </LearnList>
          </Section>

        <Section>
          <SyllabusSection id="syllabus-section">
            <h3>Course Syllabus</h3>

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
        </Section>
        </div>

        <CourseSidebarCard 
          courseTitle = "Python & Django"
        />

      </GridWrapper>

          <CompaniesSection>
            <h3>Our Alumni Work At</h3>
            <CompanyLogos>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1199px-IBM_logo.svg.png?20250604110737" alt="IBM" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png?20171127075036" alt="Razorpay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/768px-Intel_logo_2023.svg.png?20230330174340" alt="Intel" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/245px-Accenture.svg.png?20241209170218" alt="Accenture" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/768px-Wipro_new_logo.svg.png?20250425120007" alt="Wipro" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png?20100302211036" alt="Infoys" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/104px-EY_logo_2019.svg.png?20200124061112" alt="EY" />
            </CompanyLogos>
          </CompaniesSection>

          <Footer>
            © 2025 Knowlix Learning. All rights reserved.
          </Footer>
    </Wrapper>
  );
};

export default CoursePage;