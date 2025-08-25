import styled from "styled-components";

const LevelsSection = styled.section`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 20px;

  h4 {
    color: #158a68;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    text-align: left;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 40px;
    text-align: left;
  }

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LevelsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlowImage = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

const LevelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LevelCard = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 10px;
    text-align: left;
  }

  p {
    font-size: 14px;
    color: #333;
    line-height: 1.6;
    text-align: left;
  }
`;

const TestimonialsSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  text-align: left;

  h4 {
    color: #158a68;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 40px;
    text-align: left;
  }
`;

const TutorLevels = () => {
    return (
        <LevelsSection>
                    <LevelsContent>
                        <h4>Levels in</h4>
                        <h2>Qualifying As A Tutor</h2>
        
                        {/* flow graphic */}
                        <FlowImage src="/illustration(1).png" alt="Tutor Levels Flow" />
        
                        {/* 3 rounds */}
                        <LevelsGrid>
                        <LevelCard>
                            <h3>First Round</h3>
                            <p>In this round we will be checking out your basic level of subject knowledge.</p>
                        </LevelCard>
                        <LevelCard>
                            <h3>Second Round</h3>
                            <p>Demo video testing. Evaluation of teaching videos of candidates longer than 3 mins.</p>
                        </LevelCard>
                        <LevelCard>
                            <h3>Third Round</h3>
                            <p>
                            It is based on your teaching skill, subject knowledge, & other teaching tools 
                            for online classes (like a whiteboard, or screen sharing).
                            </p>
                        </LevelCard>
                        </LevelsGrid>
                    </LevelsContent>
                </LevelsSection>
    )
}

export default TutorLevels;