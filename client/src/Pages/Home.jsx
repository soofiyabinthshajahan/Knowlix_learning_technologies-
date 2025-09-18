import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useState } from "react";
import BookDemoModal from "./Components/BookDemoModal";

const HomeSection = styled.div`
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 30px;

  background-image: url("/Home.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0; /* top/right/bottom/left = 0 */
    background: rgba(0, 0, 0, 0.2); /* very slight dark overlay */
    z-index: 0;
  }

  @media only screen and (max-width: 768px) {
    min-height: auto;
    padding-bottom: 80px;
  }
 
  @media only screen and (max-width: 480px) {
    background-image: url("https://images.pexels.com/photos/8259949/pexels-photo-8259949.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 65vh; 
  }
`;


const HeroWrapper = styled.div`
position: relative;
  width: 100%;
  height: auto;
  padding: 80px 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;

const HeroContent = styled.div`
  padding: 40px;
  border-radius: 20px;
  width: 60%;
  color: #fff;
  text-align: center;
  margin-top: 100px;

  h1 {
    padding-top: 140px;
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 25px;
    line-height: 1.6;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  }

  button {
    padding: 12px 24px;
    background-color: #477e6a;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 10;

    &:hover {
      background-color: #158a68;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 2px;

    h1 {
      font-size: 1.5rem; /* smaller title on tablet/mobile */
    }

    p {
      font-size: 0.95rem; /* slightly smaller paragraph */
    }

    button {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.3rem; /* smallest on small mobile */
    }

    p {
      font-size: 0.85rem;
    }

    button {
      font-size: 0.85rem;
      padding: 8px 16px;
    }
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #20ba57;
  }
`;

// const ImpactSection = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
//   gap: 10px;
//   /* padding: 20px 0; */
//   flex-wrap: wrap;

//   @media (max-width: 768px) {
//     overflow-x: auto;
//     flex-wrap: nowrap;
//     scroll-snap-type: x mandatory;
//     -webkit-overflow-scrolling: touch;

//     &::-webkit-scrollbar {
//       display: none;
//     }
//   }
// `;

// const ImpactCard = styled.div`
//   background: rgba(255, 255, 255, 0.76);
//   border-radius: 16px;
//   padding: 30px 20px;
//   min-width: 220px;
//   text-align: center;
//   flex: 0 0 auto;
//   max-width: 220px;
//   margin-left: 10px;
//   scroll-snap-align: start;
//   backdrop-filter: blur(8px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

//   &:first-child {
//     margin-left: 20px;
//   }

//   svg {
//     font-size: 2.5rem;
//     color: #004c34;
//     margin-bottom: 10px;
//   }

//   h2 {
//     font-size: 2rem;
//     color: #006c45;
//     margin-bottom: 10px;
//     font-weight: 700;
//   }

//   p {
//     font-size: 1.05rem;
//     color: #006c45;
//     font-weight: 500;
//   }

//   @media (max-width: 768px) {
//     h2 {
//       font-size: 1.6rem;
//     }

//     p {
//       font-size: 1rem;
//     }
//   }
// `;

function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);
  return (
    <>
    <Helmet>
  <title>Knowlix Learning – Personalized Smart Online Learning for Students</title>
  <meta
    name="description"
    content="Knowlix Learning offers personalized, flexible, and interactive online learning to help students thrive from the comfort of their home."
  />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Knowlix Learning – Personalized Smart Online Learning for Students" />
  <meta property="og:description" content="Knowlix Learning offers personalized, flexible, and interactive online learning to help students thrive from the comfort of their home." />
  <meta property="og:image" content="https://www.knowlixlearning.com/home-banner.png" />
  <meta property="og:url" content="https://www.knowlixlearning.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Knowlix Learning – Personalized Smart Online Learning for Students" />
  <meta name="twitter:description" content="Knowlix Learning offers personalized, flexible, and interactive online learning to help students thrive from the comfort of their home." />
  <meta name="twitter:image" content="https://www.knowlixlearning.com/home-banner.png" />

  {/* JSON-LD structured data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Knowlix Learning",
      "description": "Knowlix Learning offers personalized, flexible, and interactive online learning to help students thrive from the comfort of their home.",
      "url": "https://www.knowlixlearning.com"
    }
    `}
  </script>

  {/* Canonical */}
  <link rel="canonical" href="https://www.knowlixlearning.com/" />
</Helmet>
    <HomeSection>
      <Header />

      <HeroWrapper>
        <HeroContent>
          <h1>Empowering Students with Smart Online Learning</h1>
          <p>
            Personalized, flexible, and interactive learning designed to help
            students thrive from the comfort of their home.
          </p>
          <button onClick={handleOpenDemoModal}>Grab a Demo &nbsp; →</button>
        </HeroContent>

        {/* <ImpactSection>
          <ImpactCard>
            <h2>
              <CountUp end={4500} duration={3} />+
            </h2>
            <p>Students Enrolled</p>
          </ImpactCard>
          <ImpactCard>
            <h2>
              <CountUp end={400} duration={3} />+
            </h2>
            <p>Expert Faculties</p>
          </ImpactCard>
          <ImpactCard>
            <h2>
              <CountUp end={10} duration={3} />+
            </h2>
            <p>Countries</p>
          </ImpactCard>
          <ImpactCard>
            <h2>
              <CountUp end={15} duration={3} />+
            </h2>
            <p>States Across India</p>
          </ImpactCard>
           <ImpactCard>
            <h2>
              <CountUp end={10} duration={3} />+
            </h2>
            <p>Curriculum</p>
          </ImpactCard>
          <ImpactCard>
            <h2>
              <CountUp end={2} duration={3} />+
            </h2>
            <p>Years of Experience</p>
          </ImpactCard>
        </ImpactSection> */}
      </HeroWrapper>
      <BookDemoModal show={isDemoModalOpen} onClose={handleCloseDemoModal} />
      <WhatsAppButton
        href="https://wa.me/7025235519"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </WhatsAppButton>
    </HomeSection>
    </>
  );
}

export default Home;
