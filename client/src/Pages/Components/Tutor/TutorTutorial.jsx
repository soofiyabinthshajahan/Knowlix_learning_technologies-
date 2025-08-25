import styled from "styled-components";


const TutorialSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  scroll-margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  text-align: left;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  h4 {
    color: #158a68;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 26px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 15px;
    text-align: left;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #333;
  }
`;

const TutorialButton = styled.a`
  background: linear-gradient(90deg, #158a68, #144d67);
  color: white;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.9;
  }
`;

const TutorialVideo = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);

  iframe {
    width: 100%;
    height: 280px;
    border: none;
  }
`;

const TutorTutorial = () => {
    return (
        <TutorialSection id="apply">
        <div>
            <h4>Tutorial</h4>
            <h2>How to apply for a Tutor Job?</h2>
            <p>
            Join Knowlix Learning and start your teaching journey with ease. Enjoy 
            flexible working hours and the comfort of teaching from home. Build a 
            rewarding career while shaping young minds in a fun, engaging, and effective way.
            </p>
            <TutorialButton href="/setups">View all Setups</TutorialButton>
        </div>

        <TutorialVideo>
            <iframe 
            src="https://www.youtube.com/embed/_pwWkHgHZbw" 
            title="How to Apply for a Tutor Job"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            ></iframe>
        </TutorialVideo>
        </TutorialSection>
    )
}

export default TutorTutorial;