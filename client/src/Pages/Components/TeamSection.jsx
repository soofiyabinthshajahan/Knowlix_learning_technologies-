import React from "react";
import styled from "styled-components";
import Header from "../Header"

// --- Styled Components ---
const Section = styled.section`
  padding: 100px 60px 20px;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 60px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #0b6b40ff;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 40px 0 25px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  gap: 32px;
  justify-content: center;

  /* Default grid */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  /* Management & Advisory (center align if < 3) */
  &.management,
  &.advisory {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
  }

  /* Academics Core Team */
  &.core-team {
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 991px) {
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      justify-items: center;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      justify-content: center;
    }
  }

  /* Councillor (single card center aligned) */
  &.councillor {
    display: flex;
    justify-content: center;
    > div {
      max-width: 280px;
    }
    @media (max-width: 767px) {
      > div {
        max-width: 200px;
      }
    }
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 260px; /* keeps consistent card width */

  @media (max-width: 768px) {
    max-width: 180px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
    height: auto;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px; /* fixed height */
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const CardInfo = styled.div`
  padding: 12px 15px;
`;

const CardName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const CardTitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 4px 0 0;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

// --- Data ---
const managementTeam = [
  { name: "Muhammed Jaseem", title: "MD", img: "/md.jpg" },
  { name: "Casac Benjali", title: "Director", img: "/director.jpg" },
];

const advisoryBoard = [
  { name: "Dr Nijad K K", title: "Asst. Professor - Calicut University", img: "/adv1.jpg" },
  { name: "Muhammed Afsal", title: "MBA", img: "/adv2.jpg" },
  { name: "Hidayathulla", title: "MD Zains", img: "/adv3.jpg" },
  { name: "Suleeb Rahman", title: "GM of Pristine", img: "/adv4.jpg" },
];

const coreTeam = [
  { name: "Hiba Sherin", title: "English Dept.", img: "/core1.jpg" },
  { name: "Chaithra Nair", title: "Hindi Dept.", img: "/core2.jpg" },
  { name: "Safvana Jasmin", title: "Science Dept.", img: "/Safavana.jpg" },
  { name: "Amrutha", title: "Maths Dept.", img: "/Amurtha.png" },
  { name: "Fidha", title: "Arabic Dept.", img: "/Fidha.png" },
];

const councillor = [
  { name: "Shurufa Yasmin", title: "Councillor", img: "/councillor.jpg" },
];

// --- Component ---
const TeamSection = () => {
  const renderTeam = (team) =>
    team.map((member, index) => (
      <Card key={index}>
        <CardImage src={member.img} alt={member.name} />
        <CardInfo>
          <CardName>{member.name}</CardName>
          <CardTitle>{member.title}</CardTitle>
        </CardInfo>
      </Card>
    ));

  return (
    <>
    <Header />
    <Section>
      <Title>We are the people who make up Knowlix</Title>
      <Subtitle>
        Our philosophy is simple: hire great people and give them the resources
        and support to do their best work.
      </Subtitle>

      {/* Management Team */}
      <SectionTitle>Management Team</SectionTitle>
      <TeamGrid className="management">{renderTeam(managementTeam)}</TeamGrid>

      {/* Advisory Board */}
      <SectionTitle>Advisory Board</SectionTitle>
      <TeamGrid className="advisory">{renderTeam(advisoryBoard)}</TeamGrid>

      {/* Academics Core Team */}
      <SectionTitle>Academics Core Team</SectionTitle>
      <TeamGrid className="core-team">{renderTeam(coreTeam)}</TeamGrid>

      {/* Councillor */}
      <SectionTitle>Councillor</SectionTitle>
      <TeamGrid className="councillor">{renderTeam(councillor)}</TeamGrid>
    </Section>
    </>
  );
};

export default TeamSection;
