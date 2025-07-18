import React from "react";
import styled from "styled-components";
import WeekSection from "./WeekSection";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const BannerSection = styled.div`
  padding: 4rem;
  width: 100%;
  height: 46vh;
  background-image: url("https://images.pexels.com/photos/5711948/pexels-photo-5711948.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.35);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Path = styled.div`
  display: flex;
;`

const Path_1 = styled.a`
  color: #3d3d3dff;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  font-weight: 550;
  text-decoration: none;

  &:hover {
    color: #477e6a;
  }
`;

const Path_2 = styled.a`
  color: #006c45;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  font-weight: 550;
  text-decoration: none;

  &:hover {
    color: #477e6a;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #006c45;
`;

const SubTitleWrap = styled.div`
  display: flex;
`;

const SubTitle = styled.p`
  color: #3d3d3dff;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  text-decoration: underline;
`;

const FacultyInfo = styled.div`
  margin-bottom: 30px;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  border-left: 4px solid #477e6a;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: fit-content;
;`

const FacultyName = styled.a`
  font-size: 1.3rem;
  color: #006c45;
  text-decoration: none;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
  transition: color 0.3s ease;
  padding-right: 20rem;

  &:hover {
    color: #477e6a;
    text-decoration: underline;
  }
;`

const FacultyQualifications = styled.a`
  font-size: 1rem;
  color: #666;
  text-decoration: none;
  font-style: italic;
  transition: color 0.3s ease;

  &:hover {
    color: #477e6a;
    text-decoration: underline;
  }
;`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  font-size: 0.9rem;
  color: #333;
  padding: 1.5rem;
  justify-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 15;
  text-align: center;

  strong {
    color: #006c45;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #006c45;
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
    color: #006c45;
    content: "✔";
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const SidebarWrapper = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const SidebarCard = styled.div`
  border-radius: 30px;
  box-shadow: 4px 4px 20px #bcbbbbff;
  padding: 2rem;
  background: #f7f8f9;
  margin-top: 2rem;
  height: fir-content;
  align-self: start;
  text-decoration: none;

  h3, strong {
    color: #006c45;
    font-weight: 600;
  }

  ul li {
    cursor: pointer;
    margin-bottom: 0.5rem;
  }

  ul li:hover {
    color: #477e6a;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
;`

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

const Button = styled.button`
  flex: 1;
  padding: 15px 25px;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.primary {
    background: #006c45;
    color: white;
    box-shadow: 0 4px 15px rgba(71, 126, 106, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(71, 126, 106, 0.4);
    }
  }

  &.secondary {
    background: transparent;
    color: #747977ff;
    border: 2px solid #a4a5a5ff;

    &:hover {
      color: #747977ff;
      transform: translateY(-2px);
    }
  }
;`

const SyllabusSection = styled.div`

  h3 {
    font-size: 1.5rem;
    color: #006c45;
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
    filter: grayscale(100%);
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
      <BannerSection>
        <Path>
          <Path_1 href="/">Courses</Path_1>
          <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
          <Path_2 href="">Python & Django</Path_2>
        </Path>
        <Title>Python & Django</Title>
        <SubTitleWrap>
          <SubTitle>Course on Knowlix</SubTitle>
          <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <SubTitle>By Knowlix Technologies</SubTitle>
        </SubTitleWrap>
        <FacultyInfo>
          <FacultyName href="#faculty-profile">Dr. Sarah Johnson</FacultyName>
          <FacultyQualifications href="#faculty-qualifications">
            Ph.D. Computer Science, IIT
          </FacultyQualifications>
        </FacultyInfo>
      </BannerSection>

      <InfoGrid>
        <InfoItem>
          <strong>Duration</strong>
          3 Weeks
        </InfoItem>
        <InfoItem>
          <strong>Mode</strong>
          Hybrid
        </InfoItem>
        <InfoItem>
          <strong>Enrolled Students</strong>
          400
        </InfoItem>
      </InfoGrid>

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

        <SidebarWrapper>
          <SidebarCard>
            <h3>Python & Django</h3>
            <ul style={{ listStyleType: "none", padding: 0, marginTop: "1rem" }}>
              <li onClick={() => document.getElementById("about-course").scrollIntoView({ behavior: "smooth" })}>
                <strong>•</strong> About Course
              </li>
              <li onClick={() => document.getElementById("what-you-will-learn").scrollIntoView({ behavior: "smooth" })}>
                <strong>•</strong> What will you learn
              </li>
              <li onClick={() => document.getElementById("syllabus-section").scrollIntoView({ behavior: "smooth" })}>
                <strong>•</strong> Course Syllabus
              </li>
            </ul>
            <ButtonGroup style={{ justifyContent: "flex-end" }}>
              <Button className="secondary">Book a Demo</Button>
              <Button className="primary">Enroll Now</Button>
            </ButtonGroup>
          </SidebarCard>
          </SidebarWrapper>
      </GridWrapper>

          <CompaniesSection>
            <h3>Our Alumni Work At</h3>
            <CompanyLogos>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
            </CompanyLogos>
          </CompaniesSection>

          <Footer>
            © 2025 Knowlix Learning. All rights reserved.
          </Footer>
    </Wrapper>
  );
};

export default CoursePage;