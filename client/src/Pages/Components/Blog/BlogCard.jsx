import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  color: #222; /* dark grey/black */
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardWrapper = styled.div`
  perspective: 1000px;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px; /* slightly smaller padding on mobile */
  }
`;

const Card = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #158a68;
  color: #fff;
  border-radius: 12px;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-size: 0.95rem;
  line-height: 1.4;
`;

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

const cards = [
  {
    img: "/card1.jpeg",
    desc: "A productive meeting with Mr. Abdul Latheef, Principal of Regional College Kizhisseri, as part of our course expansion journey. Excited to explore new opportunities and empower more students through Knowlix!",
  },
  {
    img: "/card2.jpeg",
    desc: "Great meeting Dr. Nijad KK, HoD of Commerce at AIA College, Kuniyil, to discuss bringing Knowlix’s Data Analytics with Generative AI course to more students! Excited for what’s ahead!",
  },
  {
    img: "/card3.jpeg",
    desc: "A strategic session at Al-Shifa College focused on business growth, enhancement, and future-oriented strategies, fostering meaningful dialogue with aspiring professionals.",
  },
  {
    img: "/card4.jpeg",
    desc: "An insightful seminar at AIA College, Kuniyil, emphasizing innovation in business practices, leadership strategies, and the importance of adaptability in a dynamic global market.",
  },
];

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

const SliderWrapper = styled.div`
  position: relative;
`;

const BlogCard = () => {
  const sliderRef = useRef(null); // <--- add this

  const settings = {
  dots: true,
  infinite: false,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }, // optional intermediate breakpoint
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 }, // now smaller cards
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 }, // single card on very small screens
    },
  ],
};

  return (
<Section>
      <Title>Collaborations</Title>

      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, i) => (
            <CardWrapper key={i}>
              <Card>
                <CardFront>
                  <img src={card.img} alt={`card-${i}`} />
                </CardFront>
                <CardBack>{card.desc}</CardBack>
              </Card>
            </CardWrapper>
          ))}
        </Slider>

        {/* Custom arrows outside the Slider */}
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </SliderWrapper>
    </Section>
  );
};

export default BlogCard;
