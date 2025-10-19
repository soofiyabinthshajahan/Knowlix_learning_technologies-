import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const ProcessSection = styled.section`
  background: #f8faf9;
  padding: 60px 20px;
  margin: 60px 0;
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #477e6a;
    margin-bottom: 20px;
  }

  p.description {
    font-size: 18px;
    color: #666;
    max-width: 800px;
    margin: 0 auto 50px auto;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const ProcessStep = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;

  .step-number {
    width: 50px;
    height: 50px;
    background: #477e6a;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
    margin: 0 auto 20px;
  }

  h3 {
    color: #477e6a;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    color: #555;
    font-size: 14px;
    line-height: 1.5;
  }
`;

// Motion Variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Process = () => {
  const steps = [
    {
      title: "Profile Verification",
      desc: "We verify your academic qualifications, teaching certifications, and prior experience. Identity verification and technical readiness check are also conducted."
    },
    {
      title: "Demo Video Submission",
      desc: "Submit a 3-minute recorded demo lesson to showcase your content delivery, subject command, and communication style."
    },
    {
      title: "Live Interview",
      desc: "One-on-one interview covering your teaching philosophy, handling different learners, and scenario-based questions with aptitude assessment."
    },
    {
      title: "Live Demo Class",
      desc: "Conduct a real-time 5-10 minute teaching session to demonstrate student engagement, class management, and use of digital tools."
    }
  ];

  return (
    <ProcessSection>
      <ProcessContainer>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Selection Process
        </motion.h2>

        <motion.p
          className="description"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We follow a comprehensive 4-stage process to ensure we select the best educators 
          who align with our teaching standards and student-first approach.
        </motion.p>

        <ProcessSteps
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <ProcessStep key={index} variants={stepVariants}>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </ProcessContainer>
    </ProcessSection>
  );
};

export default Process;
