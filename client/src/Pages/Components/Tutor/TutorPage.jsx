import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Header';

const PageContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  max-width: 900px;
  margin: 0 auto;
  
  h1 {
    color: #477e6a;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  h2 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-bottom: 20px;
  }
  
  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
`;

const RequirementsSection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 40px;
  align-items: start;
  
  h2 {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 700;
    text-align: left;
    color: black;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

const RequirementsImage = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  
  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const RequirementsList = styled.div`
  h3 {
    color: #477e6a;
    font-size: 18px;
    font-weight: 700;
    margin: 25px 0 15px 0;
    
    &:first-child {
      margin-top: 0;
    }
  }
`;

const Requirements = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  
  li {
    margin-bottom: 12px;
    font-size: 16px;
    
    span {
      font-weight: 700;
      color: #222;
    }
    
    &::before {
      content: "✔ ";
      color: #158a68;
      font-weight: bold;
    }
  }
`;

const ProcessSection = styled.section`
  background: #f8faf9;
  padding: 60px 20px;
  margin: 60px 0;
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 50px;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const ProcessStep = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
  
  .step-number {
    width: 50px;
    height: 50px;
    background: #477e6a;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
    margin: 0 auto 20px;
  }
  
  h3 {
    color: #477e6a;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  p {
    color: #555;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const ProgramSection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #477e6a;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .subtitle {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
  }
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 40px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
`;

const ProgramSteps = styled.div`
  h3 {
    color: #477e6a;
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0 10px 0;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  p {
    color: #555;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const OutcomeBox = styled.div`
  background: linear-gradient(135deg, #477e6a, #158a68);
  color: white;
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;
  
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.6;
  }
`;

const ApplySection = styled.section`
  background: #477e6a;
  color: white;
  padding: 80px 20px;
  text-align: center;
  
  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
  }
  
  p {
    font-size: 18px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ApplyButton = styled.button`
  background: white;
  color: #477e6a;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const TutorCareersPage = () => {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <>
    <Header />
    <PageContainer>
      <HeroSection>
        <h1>Join Our Teaching Community</h1>
        <h2>Shape the Future of Education</h2>
        <p>
          Are you passionate about teaching and ready to make a real impact? Join Knowlix Learning 
          as an online tutor and help students across Kerala achieve their academic dreams. We're 
          looking for dedicated educators who want to be part of an innovative learning platform 
          that values excellence, growth, and student success.
        </p>
      </HeroSection>

      <RequirementsSection>
        <div>
          <h2>What We're Looking For</h2>
          
          <RequirementsList>
            <h3>Educational Qualifications</h3>
            <Requirements>
              <li><span>Minimum Bachelor's degree</span> (Master's preferred for higher grades)</li>
              <li><span>Subject expertise</span> in your teaching area</li>
              <li><span>Teaching certifications</span> are a plus</li>
            </Requirements>

            <h3>Experience & Skills</h3>
            <Requirements>
              <li><span>Teaching experience</span> (online/offline preferred but not mandatory)</li>
              <li><span>Language proficiency</span> in English, Hindi, or Malayalam</li>
              <li><span>Clear communication skills</span> and engaging teaching style</li>
            </Requirements>

            <h3>Technical Setup</h3>
            <Requirements>
              <li><span>Laptop/Desktop</span> with good webcam</li>
              <li><span>Stable internet connection</span> (high-speed recommended)</li>
              <li><span>Headset with microphone</span> for clear audio</li>
              <li><span>Familiarity</span> with Zoom, Google Meet, or Teams</li>
            </Requirements>
          </RequirementsList>
        </div>
        
        <RequirementsImage
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
          alt="Online Teaching Setup"
        />
      </RequirementsSection>

      <ProcessSection>
        <ProcessContainer>
          <h2>Our Selection Process</h2>
          <p style={{fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto'}}>
            We follow a comprehensive 4-stage process to ensure we select the best educators 
            who align with our teaching standards and student-first approach.
          </p>
          
          <ProcessSteps>
            <ProcessStep>
              <div className="step-number">1</div>
              <h3>Profile Verification</h3>
              <p>
                We verify your academic qualifications, teaching certifications, and prior experience. 
                Identity verification and technical readiness check are also conducted.
              </p>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">2</div>
              <h3>Demo Video Submission</h3>
              <p>
                Submit a 3-minute recorded demo lesson to showcase your content delivery, 
                subject command, and communication style.
              </p>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">3</div>
              <h3>Live Interview</h3>
              <p>
                One-on-one interview covering your teaching philosophy, handling different learners, 
                and scenario-based questions with aptitude assessment.
              </p>
            </ProcessStep>
            
            <ProcessStep>
              <div className="step-number">4</div>
              <h3>Live Demo Class</h3>
              <p>
                Conduct a real-time 5-10 minute teaching session to demonstrate student engagement, 
                class management, and use of digital tools.
              </p>
            </ProcessStep>
          </ProcessSteps>
        </ProcessContainer>
      </ProcessSection>

      <ProgramSection>
        <h2>Professional Advancement Program</h2>
        <p className="subtitle">Elevate your teaching with our comprehensive training initiative</p>
        
        <ProgramGrid>
          <ProgramImage
            src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
            alt="Professional Development Training"
          />
          
          <ProgramSteps>
            <h3>Orientation & Skill Assessment</h3>
            <p>Comprehensive evaluation of teaching methods and identification of development areas through AI-driven assessment tools.</p>
            
            <h3>Pedagogical Training</h3>
            <p>Advanced lesson structuring, modern teaching methodologies, student engagement, and classroom management techniques.</p>
            
            <h3>Technology & AI Integration</h3>
            <p>Practical sessions on AI tools for lesson planning, performance tracking, and interactive teaching technologies.</p>
            
            <h3>Professional Development</h3>
            <p>Corporate communication training, adaptability development, emotional intelligence, and conflict management skills.</p>
          </ProgramSteps>
        </ProgramGrid>
        
        <ProgramSteps>
          <h3>Practical Application & Feedback</h3>
          <p>Live demo classes and micro-teaching sessions with continuous feedback from senior trainers and AI-based performance reports.</p>
          
          <h3>Mentorship & Continuous Growth</h3>
          <p>Ongoing guidance from experienced educators with access to curated resources, case studies, and industry best practices.</p>
          
          <h3>Performance Review & Certification</h3>
          <p>Final assessment measuring skill enhancement with certification validating professional growth and excellence commitment.</p>
        </ProgramSteps>

        <OutcomeBox>
          <h3>Program Outcome</h3>
          <p>
            By completing this program, tutors enhance their teaching efficiency, adopt corporate-level 
            professionalism, and deliver higher student satisfaction. The integration of AI tools ensures 
            they stay future-ready, innovative, and competitive in the evolving educational landscape.
          </p>
        </OutcomeBox>
      </ProgramSection>

      <ApplySection>
        <h2>Ready to Start Your Teaching Journey?</h2>
        <p>
          Join hundreds of successful tutors who are already making a difference in students' lives. 
          Apply today and become part of Kerala's leading online education platform.
        </p>
      </ApplySection>
    </PageContainer>
    </>
  );
};

export default TutorCareersPage;