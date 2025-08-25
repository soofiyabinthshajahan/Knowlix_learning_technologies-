import styled from "styled-components";

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  max-width: 900px;
  margin: 0 auto;

  h1 {
    color: #477e6a;
    font-size: 28px;
    font-weight: 700;
  }

  h2 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    color: black;
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }
`;

const WhySection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 40px;
  align-items: start;

  h2 {
    font-size: 22px;
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

const TutorImage = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 700px;
    margin: 0 auto; // ✅ Horizontally center image
    display: block; // ✅ Ensure margin works
  }
`;

const Benefits = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 15px;
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

const TutorHero = () => {
    return (
        <>
            <HeroSection id="homes">
                <h1>Online Teaching Job In Kerala! Join Knowlix Learning As A Tutor</h1>
                <h2>Inspire. Educate. Transform.</h2>
                <p>
                Do you love teaching and want to shape young minds for a bright future?
                We’re looking for passionate and skilled tutors who can make learning fun
                and effective for students of all levels. Whether you’re an expert in
                academic subjects, languages, or foundation programs, Knowlix Learning
                is the perfect platform to showcase your teaching skills and help
                students become future-ready.
                </p>
            </HeroSection>

            {/* Why Section */}
            <WhySection>
                <TutorImage
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
                alt="Tutor"
                />
                <div>
                <h2>Why Teach With KNOWLIX?</h2>
                <Benefits>
                    <li>
                    <span>Teach from Anywhere</span> – Work from the comfort of your home
                    </li>
                    <li>
                    <span>One-to-One Sessions</span> – Focused and personalized teaching
                    experience
                    </li>
                    <li>
                    <span>Flexible Schedules</span> – Choose your own working hours
                    </li>
                    <li>
                    <span>Competitive Earnings</span> – Get paid for your expertise
                    </li>
                    <li>
                    <span>Diverse Opportunities</span> – Teach school subjects, language
                    courses, Montessori training, and more
                    </li>
                </Benefits>
                </div>
            </WhySection>
        </>
    )
}

export default TutorHero;