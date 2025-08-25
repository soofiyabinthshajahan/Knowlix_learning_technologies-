import styled from "styled-components"

// 🔹 New Section Styles
const RegisteredBox = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  padding: 20px 30px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-size: 16px;
    color: #222;

    strong {
      display: block;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 4px;
    }
  }
`;

const LoginButton = styled.a`
  background: linear-gradient(90deg, #158a68, #144d67);
  color: white;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const ApplySection = styled.section`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.4;
    color: black;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #333;
  }
`;

const TutorReg = () => {
    return (
        <>
        <RegisteredBox>
                <p>
                  <strong>Already registered tutors?</strong>
                  For tutors who have previously registered with us
                </p>
                <LoginButton href="/login">Login Here</LoginButton>
              </RegisteredBox>
        
              <ApplySection>
                <h2>Apply For A Tutor And Start Your Teacher Journey With Knowlix!</h2>
                <p>
                  Knowlix Learning provides a flexible and rewarding platform for tutors
                  to teach students from KG class to 12, as well as engage with pre-KG
                  learners. Whether you want to work from home or in a tuition center job,
                </p>
                <p>
                  We offer opportunities that suit your schedule. With{" "}
                  <a href="/" style={{ color: "#0072ff", textDecoration: "none", fontWeight: "600" }}>
                    Knowlix Learning
                  </a>
                  , you can explore Knowlix tutor jobs, Knowlix careers, and Knowlix
                  Learning careers to grow as an educator.
                </p>
                <p>
                  Make a difference in students’ lives with one-on-one personalized tuition.
                  Help them build a bright future with your expertise. Join today and fill
                  out the application form!
                </p>
              </ApplySection>
              </>
    )
}

export default TutorReg;