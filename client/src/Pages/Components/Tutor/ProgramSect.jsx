import styled from "styled-components";

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

const ProgramSect = () => {
    return (
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
    )
}

export default ProgramSect;