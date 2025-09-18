import styled from "styled-components";

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

const TutorHero = () => {
    return (
        <>
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
        </>
    )
}

export default TutorHero;