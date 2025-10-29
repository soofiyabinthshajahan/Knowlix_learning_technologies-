import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const RequirementsSection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 40px;
  align-items: start;
  
  h2 {
    font-size: 24px;
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

const RequirementsImage = styled(motion.img)`
  width: 500px;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  
  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const RequirementsList = styled.div`
  h3 {
    color: #477e6a;
    font-size: 18px;
    font-weight: 700;
    margin: 25px 0 15px 0;
    
    &:first-child {
      margin-top: 0;
    }
  }
`;

const Requirements = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  
  li {
    margin-bottom: 12px;
    font-size: 16px;
    color: #555;
    
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

// Motion Variants
const containerVariants = {
  hidden: {},
  show: { 
    transition: { staggerChildren: 0.15 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const RequirementsSect = () => {
  const sections = [
    {
      title: "Educational Qualifications",
      items: [
        "Minimum Bachelor's degree (Master's preferred for higher grades)",
        "Subject expertise in your teaching area",
        "Teaching certifications are a plus"
      ]
    },
    {
      title: "Experience & Skills",
      items: [
        "Teaching experience (online/offline preferred but not mandatory)",
        "Language proficiency in English, Hindi, or Malayalam",
        "Clear communication skills and engaging teaching style"
      ]
    },
    {
      title: "Technical Setup",
      items: [
        "Laptop/Desktop with good webcam",
        "Stable internet connection (high-speed recommended)",
        "Headset with microphone for clear audio",
        "Familiarity with Zoom, Google Meet, or Teams"
      ]
    }
  ];

  return (
    <RequirementsSection
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          What We're Looking For
        </motion.h2>

        <RequirementsList>
          {sections.map((section, i) => (
            <div key={i}>
              <motion.h3
                variants={itemVariants}
              >
                {section.title}
              </motion.h3>
              <Requirements
                variants={containerVariants}
              >
                {section.items.map((item, j) => (
                  <motion.li key={j} variants={itemVariants}>
                    {item}
                  </motion.li>
                ))}
              </Requirements>
            </div>
          ))}
        </RequirementsList>
      </div>

      <RequirementsImage
        src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
        alt="Online Teaching Setup"
        variants={imageVariants}
      />
    </RequirementsSection>
  );
};

export default RequirementsSect;
