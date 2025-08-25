import styled from "styled-components"
import { FaUser, FaBookOpen, FaUniversity, FaClock } from "react-icons/fa"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProgramsSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    color: #477e6a;
  }
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
`;

const ProgramCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ProgramContent = styled.div`
  padding: 20px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #477e6a;
  }

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 15px;
  }
`;

const ProgramInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #444;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: #477e6a;
  }
`;

const ApplyNowButton = styled.a`
  margin: 20px auto;
  background: linear-gradient(90deg, #158a68, #144d67);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const TutorProgram = () => {
    return (
        <ProgramsSection>
        <h2>Our Tutoring Programs</h2>
        <ProgramGrid>
          {/* ECPC */}
          <ProgramCard>
            <ProgramImage src="https://images.pexels.com/photos/8613085/pexels-photo-8613085.jpeg" alt="ECPC" />
            <ProgramContent>
              <h3>ECPC</h3>
              <p>ECPC - Early Childhood Preparatory Course. Teach Montessori kids</p>
              <ProgramInfo>
                <div><FaUser /> 4–8 years</div>
                <div><FaBookOpen /> KG</div>
                <div><FaUniversity /> Preschool & KG Students</div>
                <div><FaClock /> 1hr – 1.5hrs</div>
              </ProgramInfo>
              <ApplyNowButton href="/apply">Apply Now</ApplyNowButton>
            </ProgramContent>
          </ProgramCard>

          {/* Open School */}
          <ProgramCard>
            <ProgramImage src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg" alt="Open School" />
            <ProgramContent>
              <h3>Open School</h3>
              <p>Just like traditional school teachers, teach academic subjects.</p>
              <ProgramInfo>
                <div><FaUser /> Age 14 and above</div>
                <div><FaBookOpen /> HS, HSS</div>
                <div><FaUniversity /> Academic Subjects</div>
                <div><FaClock /> 1.5hrs</div>
              </ProgramInfo>
              <ApplyNowButton href="/apply">Apply Now</ApplyNowButton>
            </ProgramContent>
          </ProgramCard>

          {/* Foundation */}
          <ProgramCard>
            <ProgramImage src="https://images.pexels.com/photos/5427861/pexels-photo-5427861.jpeg" alt="Foundation" />
            <ProgramContent>
              <h3>Foundation</h3>
              <p>Teach Class 1–10 students reading, writing, and skills to build a strong base.</p>
              <ProgramInfo>
                <div><FaUser /> 6–15 years</div>
                <div><FaBookOpen /> LP, UP, HS</div>
                <div><FaUniversity /> Foundation course</div>
                <div><FaClock /> 1–1.5hrs</div>
              </ProgramInfo>
              <ApplyNowButton href="/apply">Apply Now</ApplyNowButton>
            </ProgramContent>
          </ProgramCard>

          {/* Speak Pro */}
          <ProgramCard>
            <ProgramImage src="https://images.pexels.com/photos/4143792/pexels-photo-4143792.jpeg" alt="Speak Pro" />
            <ProgramContent>
              <h3>Speak Pro</h3>
              <p>Use your language expertise to teach others and help them become fluent.</p>
              <ProgramInfo>
                <div><FaUser /> 6–15 years</div>
                <div><FaBookOpen /> LP, UP</div>
                <div><FaUniversity /> Speaking skills</div>
                <div><FaClock /> 30mins – 1hr</div>
              </ProgramInfo>
              <ApplyNowButton href="/apply">Apply Now</ApplyNowButton>
            </ProgramContent>
          </ProgramCard>
        </ProgramGrid>
      </ProgramsSection>
    )
}

export default TutorProgram;