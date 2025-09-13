import React from "react";
import styled, { keyframes } from "styled-components";

const SyllabusWrapper = styled.section`
  width: 100%;
  background: #fff;
  padding: 40px 0;
  overflow: hidden;
  font-family: "Inter", sans-serif;
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SyllabusSlider = styled.div`
  display: flex;
  width: 200%;
  animation: ${scroll} 30s linear infinite;

  @media (max-width: 768px) {
    animation: ${scroll} 40s linear infinite; /* slower scroll on mobile */
  }
`;

const SyllabusTrack = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 8px; /* smaller gap on mobile */
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100px;
    height: 90px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  margin-top: 6px;
  font-size: 0.875rem;
  color: #374151;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.65rem; /* smaller text on mobile */
  }
`;

function Syllabus() {
  const syllabusItems = [
    { src: "/Syllabus1.png", name: "Cambridge Assessment International Education" },
    { src: "syllabus7.png", name: "International General Certificate of Secondary Education (IGCSE)" },
    { src: "/syllabus6.png", name: "National Institute of Open Schooling" },
    { src: "/ib_syllabus.png", name: "International Baccalaureate (IB) World School" },
    { src: "/Syllabus3.jpeg", name: "Government of Kerala" },
    { src: "Syllabus4.png", name: "Karnataka Secondary Education Examination Board" },
    { src: "/Syllabus8.jpg", name: "Government of Tamil Nadu" },
    { src: "/syllabus5.png", name: "Council for the Indian School Certificate Examinations" },
    { src: "Syllabus9.png", name: "Maharashtra State Board of Secondary and Higher Secondary Education" },
    { src: "syllabus10.jpg", name: "Telengana State Board of Intermediate Education" },
    { src: "syllabus11.jpeg", name: "State Board of Technical Education & Training, Andhra Pradesh" },
    { src: "syllabus12.png", name: "Board of Secondary & Intermediate Education Andhra Pradesh" }
  ];

  // duplicate for infinite scrolling
  const scrollingImages = [...syllabusItems, ...syllabusItems];

  return (
    <SyllabusWrapper>
      <div style={{ overflow: "visible" }}>
        <SyllabusSlider>
          <SyllabusTrack>
            {scrollingImages.map((item, index) => (
              <ImageWrapper key={index}>
                <ImageContainer>
                  <Image src={item.src} alt={item.name} />
                </ImageContainer>
                <Label>{item.name}</Label>
              </ImageWrapper>
            ))}
          </SyllabusTrack>
        </SyllabusSlider>
      </div>
    </SyllabusWrapper>
  );
}

export default Syllabus;
