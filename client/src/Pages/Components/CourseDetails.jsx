import styled from "styled-components";
import WeekSection from "./WeekSection";

const CoursePageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const BannerSection = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url("https://www.shutterstock.com/image-photo/programmer-developing-python-code-can-260nw-2286921943.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 108, 69, 0.7), rgba(71, 126, 106, 0.6));
  }

  @media (max-width: 768px) {
    height: 30vh;
  }
;`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
;`

const MainContent = styled.div`
  flex: 2;
;`

const CourseTitle = styled.h1`
  font-size: 2.5rem;
  color: #006c45;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
;`

const FacultyInfo = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  border-left: 4px solid #477e6a;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
;`

const FacultyName = styled.a`
  font-size: 1.3rem;
  color: #006c45;
  text-decoration: none;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
  transition: color 0.3s ease;

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

const CourseDescription = styled.div`
  padding: 25px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #006c45;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
  }
;`

const SyllabusSection = styled.div`
  padding: 25px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #006c45;
    margin-bottom: 20px;
    font-weight: 600;
  }
;`

const SyllabusLayout = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
;`

const SyllabusColumn = styled.div`
  flex: 2;
;`

const CourseDetailsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
;`

const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 20px;
  height: 100%;
;`

const CourseDetailsCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 30px;
  
;`

const DetailItem = styled.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(71, 126, 106, 0.2);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  label {
    font-size: 0.9rem;
    color: #666;
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  span {
    font-size: 1.1rem;
    color: #006c45;
    font-weight: 600;
  }
;`

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
;`

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

function CoursePage() {
  return (
    <CoursePageWrapper>
      <BannerSection />
      
      <ContentWrapper>
        <MainContent>
          <CourseTitle>Python & Django</CourseTitle>
          
          <FacultyInfo>
            <FacultyName href="#faculty-profile">Dr. Sarah Johnson</FacultyName>
            <FacultyQualifications href="#faculty-qualifications">
              Ph.D. Computer Science, IIT
            </FacultyQualifications>
          </FacultyInfo>

          <CourseDescription>
            <h3>Course Description</h3>
            <p>
              Master full-stack web development with Python and Django framework
            </p>
          </CourseDescription>
         </MainContent>
        </ContentWrapper>  

        <ContentWrapper>
          <MainContent>
            <SyllabusLayout>
              <SyllabusColumn>
                <SyllabusSection>
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
              </SyllabusColumn>

              <CourseDetailsColumn>
                <CourseDetailsCard>
                  <DetailItem>
                    <label>Duration</label>
                    <span>3 Weeks</span>
                  </DetailItem>
                  <DetailItem>
                    <label>Mode</label>
                    <span>Hybrid</span>
                  </DetailItem>
                  <DetailItem>
                    <label>Enrolled Students</label>
                    <span>400</span>
                  </DetailItem>

                  <ButtonGroup style={{ justifyContent: "flex-end" }}>
                    <Button className="secondary">Book a Demo</Button>
                    <Button className="primary">Enroll Now</Button>
                  </ButtonGroup>
                </CourseDetailsCard>
              </CourseDetailsColumn>
            </SyllabusLayout>
          </MainContent>  
      </ContentWrapper>

      <ContentWrapper>
        <Sidebar>
          <CompaniesSection>
              <h3>Our Alumni Work At</h3>
              <CompanyLogos>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
              </CompanyLogos>
            </CompaniesSection>
        </Sidebar>
      </ContentWrapper>

      <Footer>
        © 2025 Knowlix Learning. All rights reserved.
      </Footer>
    </CoursePageWrapper>
  );
}

export default CoursePage;