import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const ProgramSection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #477e6a;
    text-align: center;
    margin-bottom: 20px;
  }

  .subtitle {
    text-align: center;
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
  }
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramImage = styled(motion.img)`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
`;

const ProgramSteps = styled.div`
  h3 {
    color: #477e6a;
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0 10px 0;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    color: #555;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const OutcomeBox = styled(motion.div)`
  background: linear-gradient(135deg, #477e6a, #158a68);
  color: white;
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }
`;

// Motion Variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const ProgramSect = () => {
  const steps = [
    {
      title: "Orientation & Skill Assessment",
      desc: "Comprehensive evaluation of teaching methods and identification of development areas through AI-driven assessment tools."
    },
    {
      title: "Pedagogical Training",
      desc: "Advanced lesson structuring, modern teaching methodologies, student engagement, and classroom management techniques."
    },
    {
      title: "Technology & AI Integration",
      desc: "Practical sessions on AI tools for lesson planning, performance tracking, and interactive teaching technologies."
    },
    {
      title: "Professional Development",
      desc: "Corporate communication training, adaptability development, emotional intelligence, and conflict management skills."
    },
    {
      title: "Practical Application & Feedback",
      desc: "Live demo classes and micro-teaching sessions with continuous feedback from senior trainers and AI-based performance reports."
    },
    {
      title: "Mentorship & Continuous Growth",
      desc: "Ongoing guidance from experienced educators with access to curated resources, case studies, and industry best practices."
    },
    {
      title: "Performance Review & Certification",
      desc: "Final assessment measuring skill enhancement with certification validating professional growth and excellence commitment."
    }
  ];

  return (
    <ProgramSection
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Professional Advancement Program
      </motion.h2>
      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Elevate your teaching with our comprehensive training initiative
      </motion.p>

      <ProgramGrid>
        <ProgramImage
          src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
          alt="Professional Development Training"
          variants={imageVariants}
        />

        <ProgramSteps>
          {steps.slice(0, 4).map((step, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </ProgramSteps>
      </ProgramGrid>

      <ProgramSteps>
        {steps.slice(4).map((step, i) => (
          <motion.div key={i} variants={itemVariants}>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </ProgramSteps>

      <OutcomeBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3>Program Outcome</h3>
        <p>
          By completing this program, tutors enhance their teaching efficiency, adopt corporate-level 
          professionalism, and deliver higher student satisfaction. The integration of AI tools ensures 
          they stay future-ready, innovative, and competitive in the evolving educational landscape.
        </p>
      </OutcomeBox>
    </ProgramSection>
  );
};

export default ProgramSect;
