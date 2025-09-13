import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Section container
const Section = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 15px; /* extra horizontal padding on smaller screens */
  }

  @media (max-width: 480px) {
    padding: 40px 10px; /* even more padding on very small screens */
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Card wrapper
const CardWrapper = styled.div`
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

// Service Card styling
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px; /* fixed height */
  object-fit: cover;
  display: block;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  font-size: 0.95rem;
`;

const CardTitle = styled.span`
  font-weight: 500;
`;

// Arrows
const ArrowButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(71, 126, 106, 0.75);
  display: flex !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
  z-index: 10;

  &:hover {
    background: rgba(21, 138, 104, 0.5);
  }

  svg {
    color: white;
    font-size: 18px;
  }
`;

const PrevArrowButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: 768px) {
    left: -10px;
  }

  @media (max-width: 480px) {
    left: -5px;
  }
`;

const NextArrowButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: 768px) {
    right: -10px;
  }

  @media (max-width: 480px) {
    right: -5px;
  }
`;

// Card data
const cards = [
  { img: "/service1.jpeg", desc: "Webinar" },
  { img: "/service2.jpeg", desc: "Webinar" },
  { img: "/service3.jpeg", desc: "Webinar" },
  { img: "/service4.jpeg", desc: "Webinar" },
  { img: "/service5.jpg", desc: "Webinar" }
];

// Custom arrows
const PrevArrow = ({ onClick }) => (
  <PrevArrowButton onClick={onClick}>
    <FaChevronLeft />
  </PrevArrowButton>
);

const NextArrow = ({ onClick }) => (
  <NextArrowButton onClick={onClick}>
    <FaChevronRight />
  </NextArrowButton>
);

// Slider wrapper
const SliderWrapper = styled.div`
  position: relative;
  overflow: visible;
`;

const BlogServices = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Section>
      <Title>Talks and Trainings</Title>
      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, i) => (
            <CardWrapper key={i}>
              <Card className="service-card">
                <CardImage src={card.img} alt={`card-${i}`} className="service-image" />
                <CardInfo className="service-info">
                  <CardTitle className="service-title">{card.desc}</CardTitle>
                </CardInfo>
              </Card>
            </CardWrapper>
          ))}
        </Slider>

        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </SliderWrapper>
    </Section>
  );
};

export default BlogServices;
