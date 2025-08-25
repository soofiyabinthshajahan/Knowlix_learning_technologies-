import styled from "styled-components";
import { FaUser, FaBookOpen, FaUniversity, FaClock } from "react-icons/fa"; 
import { useState, useEffect } from "react";
import Footer from "../../../Footer";
import TutorNav from "./TutorNav";
import TutorHero from "./TutorHero";
import TutorApply from "./TutorApply";
import TutorProgram from "./TutorProgram";
import TutorTutorial from "./TutorTutorial";
import TutorPassion from "./TutorPassion";
import TutorLevels from "./TutorLevels";
import TutorBenefits from "./TutorBenefits";

// Styled Components
const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #222;
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
`;

// Component
const TutorPage = () => {
    const testimonials = [
    {
      name: "Pawan",
      role: "Tutor",
      image: "/pawan.jpg",
      text: `Having completed my first year working alongside Team Interval...`
    },
    {
      name: "Ummu Haleema Ashreena",
      role: "Tutor",
      image: "/ummu.jpg",
      text: `TEAM INTERVAL is a great platform to learn and grow...`
    },
    {
      name: "Fathima Anas",
      role: "Tutor",
      image: "/ummu.jpg",
      text: `TEAM INTERVAL is a great platform to learn and grow...`
    },
    {
      name: "Shakira",
      role: "Tutor",
      image: "/ummu.jpg",
      text: `TEAM INTERVAL is a great platform to learn and grow...`
    },
  ];

  return (
    <PageContainer>
      <TutorNav />
      
      <TutorHero />

      <TutorApply />

      <TutorProgram />

      <TutorTutorial />

      <TutorPassion />
        
      <TutorLevels /> 

      <TutorBenefits /> 
            
      <Footer />
    </PageContainer>
  );
};

export default TutorPage;
