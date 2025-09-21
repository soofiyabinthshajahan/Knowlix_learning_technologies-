import styled from "styled-components";

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

const RequirementsSect = () => {
    return (
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
    )
}

export default RequirementsSect;