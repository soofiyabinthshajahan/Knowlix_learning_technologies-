import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section = styled.section`
  max-width: 1300px; /* same as BlogServices */
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

const SliderContainer = styled.div`
  position: relative;
`;

const CardWrapper = styled.div`
  perspective: 1000px;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 350px; /* match previous Slick size exactly */
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
  {
    img: "/card1.jpeg",
    desc: "A productive meeting with Mr. Abdul Latheef, Principal of Regional College Kizhisseri, as part of our course expansion journey. Excited to explore new opportunities and empower more students through Knowlix!",
  },
  {
    img: "/card2.jpeg",
    desc: "Great meeting Dr. Nijad KK, HoD of Commerce at AIA College, Kuniyil, to discuss bringing Knowlix’s Data Analytics with Generative AI course to more students! Excited for what’s ahead!",
  },
  {
    img: "/card3.jpg",
    desc: "A strategic session at Al-Shifa College focused on business growth, enhancement, and future-oriented strategies, fostering meaningful dialogue with aspiring professionals.",
  },
  {
    img: "/card4.jpeg",
    desc: "An insightful seminar at AIA College, Kuniyil, emphasizing innovation in business practices, leadership strategies, and the importance of adaptability in a dynamic global market.",
  },
];

const BlogCard = () => {
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
      <Title>Collaborations</Title>
      <SliderContainer>
        <PrevArrow ref={prevRef}>
          <FaChevronLeft />
        </PrevArrow>
        <NextArrow ref={nextRef}>
          <FaChevronRight />
        </NextArrow>

        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          modules={[Navigation]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <CardWrapper>
                <Card>
                  <CardFront>
                    <img src={card.img} alt={`card-${i}`} />
                  </CardFront>
                  <CardBack>{card.desc}</CardBack>
                </Card>
              </CardWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Section>
  );
};

export default BlogCard;
