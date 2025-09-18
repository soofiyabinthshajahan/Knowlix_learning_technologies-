import styled from "styled-components"

// 🔹 New Section Styles
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

const Process = () => {
    return (
        <>
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
              </>
    )
}

export default Process;