import styled from "styled-components";
import { FaUser, FaBookOpen, FaUniversity, FaClock } from "react-icons/fa"; 

const WhoCanBecomeSection = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  text-align: left;

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
    margin-bottom: 20px;
    text-align: left;
  }

  p {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  a {
    color: #477e6a;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-top: 30px;
`;

const BenefitCard = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  transition: box-shadow 0.3s ease;

  svg {
    color: #477e6a;
    font-size: 20px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
    color: #477e6a;
  }

  &:hover {
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  }
`;

const TutorBenefits = () => {
    return (
        <WhoCanBecomeSection>
            <h4>Who Can Become</h4>
            <h2>Be A Part Of The Interval Learning Community</h2>
            <p>
                We are looking for passionate and skilled tutors who can make learning fun, engaging, 
                and effective for students of all levels. No matter which subject or language you 
                specialize in, we’ve got the right platform for you.
            </p>
            <p>
                Join 10000+ tutors across India who are already part of the{" "}
                <a href="/careers">Interval Learning careers</a> community. Whether you’re interested 
                in online tuition jobs for Class 1 to 5 work from home or prefer a tuition center job, 
                we have the right opportunity for you.
            </p>
            <p>
                Teach through one-on-one personalized sessions or group classes, customized to meet 
                each student’s needs. Be part of the <strong>Interval Tutor community</strong> and 
                make a real impact on students’ learning. Apply now and start your teaching journey today!
            </p>

            <BenefitsGrid>
                <BenefitCard>
                <FaClock /><span>Part Time Job Opportunity</span>
                </BenefitCard>
                <BenefitCard>
                <FaUser /><span>Be part of the largest Educators Community</span>
                </BenefitCard>
                <BenefitCard>
                <FaBookOpen /><span>Be the Hero in kid’s life</span>
                </BenefitCard>
                <BenefitCard>
                <FaUniversity /><span>Earn while you are learning</span>
                </BenefitCard>
                <BenefitCard>
                <FaUser /><span>Become certified online tutor</span>
                </BenefitCard>
                <BenefitCard>
                <FaClock /><span>Know your next generation</span>
                </BenefitCard>
            </BenefitsGrid>
            </WhoCanBecomeSection>
    )
}

export default TutorBenefits;