import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;

  @media (max-width: 1024px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
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

const CardWrapper = styled.div`
  padding: 10px;
`;

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
  height: 300px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 15px;
  font-size: 0.95rem;
`;

const CardTitle = styled.span`
  font-weight: 500;
`;

// Arrows
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(71, 126, 106, 0.75);
  display: flex !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    background: rgba(21, 138, 104, 0.5);
  }

  svg {
    color: white;
    font-size: 18px;
  }
`;

const PrevArrow = styled(Arrow)`
  left: -30px; /* default for desktop */

  @media (max-width: 1024px) {
    left: -1px; /* tablet */
  }

  @media (max-width: 768px) {
    left: 5px; /* smaller tablets */
  }

  @media (max-width: 480px) {
    left: 0px; /* mobile */
  }
`;

const NextArrow = styled(Arrow)`
  right: -30px; /* default for desktop */

  @media (max-width: 1024px) {
    right: 1px; /* tablet */
  }

  @media (max-width: 768px) {
    right: 5px; /* smaller tablets */
  }

  @media (max-width: 480px) {
    right: 0px; /* mobile */
  }
`;

const cards = [
  { img: "/service1.jpeg", desc: "A webinar that encouraged students to transform challenges into opportunities." },
  { img: "/service2.jpeg", desc: "Inspiring future leaders to embrace creativity, resilience, and growth." },
  { img: "/service3.jpeg", desc: "Empowering educators through AI: A webinar on making teaching smarter and easier." },
  { img: "/service5.jpg", desc: "Enhancing the art of tutoring with simple, effective strategies." },
];

const BlogServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <Section>
      <Title>Talks and Trainings</Title>

      <PrevArrow ref={prevRef}>
        <FaChevronLeft />
      </PrevArrow>
      <NextArrow ref={nextRef}>
        <FaChevronRight />
      </NextArrow>

      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4} // default for desktop
        breakpoints={{
          0: { slidesPerView: 1 },     // mobile
          480: { slidesPerView: 1 },   // small phones
          768: { slidesPerView: 2 },   // tablets
          1024: { slidesPerView: 4 },  // desktop
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <CardWrapper>
              <Card>
                <CardImage src={card.img} alt={`card-${i}`} />
                <CardInfo>
                  <CardTitle>{card.desc}</CardTitle>
                </CardInfo>
              </Card>
            </CardWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default BlogServices;
