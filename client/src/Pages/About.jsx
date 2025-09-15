import styled from "styled-components";
import { motion } from "framer-motion";

const AboutWrapper = styled.section`
  width: 100%;
  padding: 6% 8%;
  background: rgb(255 245 238);
  color: #0c2f24;
  font-family: "Inter", sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  margin-bottom: 60px;
  justify-content: center;
`;

const TextBlock = styled(motion.div)``;

const OurStoryLabel = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  color: #006c45;
  text-align: center;
  margin-bottom: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
`;

const Heading = styled.h2`
  font-size: 2.7rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: #2d4236;
  line-height: 1.2;
`;

const Subtext = styled.p`
  font-size: 1.1rem;
  color: #2d4236;
  line-height: 1.8;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const StatCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* ✅ pushes text to right edge */
  padding: 16px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  span:first-child {
    font-size: 1.6rem;
    font-weight: bold;
    color: #004c34;
    flex-shrink: 0; /* keeps number size fixed */
  }

  span:last-child {
    color: #444;
    font-size: 0.95rem;
    margin-left: auto; /* ✅ ensures it hugs right edge */
  }

  /* ✅ Desktop overrides */
  @media (min-width: 992px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    span:first-child {
      margin-bottom: 5px;
    }

    span:last-child {
      margin-left: 0;
    }
  }
`;

function AboutSection() {
  return (
    <AboutWrapper>
      <Grid>
        <TextBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <OurStoryLabel>Our Story</OurStoryLabel>
          <Heading>Cultivating a space where learning blooms.</Heading>
          <Subtext>
            Knowlix wasn't born in a classroom, but from a shared mission. A
            group of passionate educators and learners came together to break
            traditional boundaries. We created an environment that supports
            flexible learning, expert mentorship, and skill-building for every
            student.
          </Subtext>
        </TextBlock>
      </Grid>

      <Stats>
        {[
          ["10+", "Countries"],
          ["15+", "States across India"],
          ["2+", "Years of tutoring experience"],
          ["400+", "Dedicated mentors"],
          ["10+", "Curriculum"],
          ["4.5k+", "Students enrolled"],
          ["15+", "Live interactive courses"],
        ].map(([number, label], i) => (
          <StatCard
            key={i}
            initial={{ opacity: 0, y: 40 }}  // ✅ fade-up, no side slide
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span>{number}</span>
            <span>{label}</span>
          </StatCard>
        ))}
      </Stats>
    </AboutWrapper>
  );
}

export default AboutSection;
