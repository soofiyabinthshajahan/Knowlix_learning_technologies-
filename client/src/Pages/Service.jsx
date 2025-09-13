// ServiceSection.tsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiZap, FiUsers, FiMonitor } from "react-icons/fi";

const Section = styled.section`
  background-color: #10382d;
  padding: 80px 10%;
  color: #e4f2ec;
  font-family: "Inter", sans-serif;
  margin-bottom: 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: #e4f2ec;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled(motion.h4)`
  font-weight: 400;
  letter-spacing: 1.5px;
  color: #a8d3c1;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const ServiceGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

const ServiceCard = styled(motion.div)`
  flex: 1 1 30%;
  min-width: 250px;
  padding: 20px;
  border-left: 2px solid #a8d3c1;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;

  &:hover {
    border-color: #56c598;
    transform: translateY(-8px); /* subtle lift */
  }

  svg {
    color: #56c598;
    font-size: 1.8rem;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #e4f2ec;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.95rem;
    color: #cce8dc;
    line-height: 1.6;
  }
`;

export default function ServiceSection() {
  return (
    <Section>
      <SubTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        WHY CHOOSE US?
      </SubTitle>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Find your perfect fit & grow with us
      </Title>

      <ServiceGrid>
        {[
          { icon: <FiMonitor />, title: "Focus & Productivity", text: "Escape distractions in our thoughtfully crafted digital spaces, where clarity meets creativity." },
          { icon: <FiZap />, title: "Spark Innovation", text: "Collaborate and build with minds alike in our coding labs and interactive workshops." },
          { icon: <FiUsers />, title: "Supportive Community", text: "Get mentored by industry experts and connect with peers to scale your skills and success." }
        ].map((service, i) => (
          <ServiceCard
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </Section>
  );
}
