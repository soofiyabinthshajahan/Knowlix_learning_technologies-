import styled from "styled-components";

const PassionSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;

  h4 {
    color: #158a68;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 15px;
    text-align: left;
  }

  p {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
  }
`;

const JoinUsSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  text-align: left;

  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #477e6a;
    text-align: left;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 40px;

    li {
      display: flex;
      align-items: center;
      font-size: 16px;
      margin-bottom: 15px;
      color: #333;

      &::before {
        content: "■";
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        background: linear-gradient(90deg, #158a68, #144d67);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
      }
    }
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #333;
  }
`;

const TutorPassion = () => {
    return (
        <>
        <PassionSection>
            <div className="content">
                <h4>Levels In</h4>
                <h2>Are You Ready To Turn Your Passion For Teaching Into A Career?</h2>
                <p>
                    Do you love teaching or looking for online tuition jobs and want to make 
                    a difference in students’ lives? We’re looking for passionate tutors like 
                    you to help shape a brighter future for kids.
                </p>
            </div>
        </PassionSection>
        <JoinUsSection>
        <h2>Why Join Us?</h2>
        <ul>
            <li>Work on exciting projects that develop your skills.</li>
            <li>Gain hands-on experience and grow with us.</li>
            <li>Be part of a supportive and innovative team.</li>
        </ul>

        <h2>Your Dream Job Awaits!</h2>
        <p>
            Whether you’re looking for a full-time or part-time tutoring job, or want to gain
            teaching experience, Knowlix Learning is the perfect platform. Join us and secure
            a stable future while making a real impact on students’ learning.
        </p>

        <h2>Become Part Of The Teaching Revolution</h2>
        <p>
            Let’s work together to create a better tomorrow for our students. Apply now and be a
            part of our mission to transform education!
        </p>
        </JoinUsSection>
        </>
    )
}

export default TutorPassion;