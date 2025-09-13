import styled from "styled-components";
import { useState } from "react";
import Footer from "./Components/Footers/Footer";

const testimonials = [
  {
    quote:
      "My Tutor’s guidance proved to be a game-changer, and we're grateful for their support.",
    name: "Adil S/O Muhammad",
    company: "Commerce Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Adil S/O Muhammad",
        comment:
          "My son faced challenges in Accountancy, but My Knowlix's helpful tutors helped him improve remarkably. He gained confidence within days!",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "We are so grateful to Team Knowlix for making this incredible transformation possible!",
    name: "Adhila D/O Sajna",
    company: "Science Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Adhila D/O Sajna",
        comment:
          "Physics was tough for my daughter, but thanks to Knowlix expert tutors and their 24x7 support, she now loves the subject and excels in it.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "After a few days, he mastered the subject’s basics, and now he is able to write and read Hindi easily.",
    name: "Aflah S/O Sulaiman",
    company: "Class 9 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Aflah S/O Sulaiman",
        comment:
          "My son had a weak base in Hindi, but after joining Knowlix Learning Hindi Foundation course, he quickly picked up reading and writing skills.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "A top-notch educational resource that makes complex topics easy to understand!",
    name: "Fathima",
    company: "Plus One Science Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Fathima",
        comment:
          "This platform is excellent! Classes are engaging, instructors are knowledgeable, and everything is simple to navigate. I highly recommend it.",
        stars: 5,
      },
    ],
  },
];

const Wrapper = styled.section`
  background: #062e26;
  color: #fff;
  padding: 60px 60px; /* left/right space for arrows */
  font-family: sans-serif;
  position: relative; /* for arrows */
  overflow: hidden;
`;

const cardWidth = 320 + 30; // card width + gap
const visibleCards = 4; // desktop
const maxIndex = testimonials.length - visibleCards;

const CarouselRow = styled.div`
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => `-${props.index * cardWidth}px`});
`;

const TestimonialCard = styled.div`
  background: #0a3e33;
  padding: 30px 20px;
  border-radius: 15px;
  width: 320px;
  flex-shrink: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.blockquote`
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Author = styled.div`
  font-weight: bold;
  color: #9ee3d8;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid #ffffff20;
`;

const Feedback = styled.div`
  background: #113c32;
  padding: 15px;
  border-radius: 10px;
  color: #dff5f0;
  margin-top: auto;
`;

const StarRating = styled.div`
  color: gold;
  font-size: 1.1rem;
  margin-bottom: 8px;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.1);
  }

  ${(props) => (props.left ? `left: 20px;` : `right: 20px;`)}
  z-index: 10;
`;

const TestimonialPage = () => {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(350);
  const [visibleCards, setVisibleCards] = useState(2);

  const updateLayout = () => {
    if (window.innerWidth <= 768) {
      setVisibleCards(2); // 2 cards visible on mobile
      setCardWidth(250); // adjust width to fit nicely
    } else {
      setVisibleCards(4); // 4 cards visible on desktop
      setCardWidth(350);
    }
    setIndex(0); // reset index to avoid overflow
  };

  useState(() => updateLayout());
  window.addEventListener("resize", updateLayout);

  const maxIndex = testimonials.length - visibleCards;

  const handlePrev = () => setIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setIndex(prev => Math.min(prev + 1, maxIndex));
  return (
    <>
      <Wrapper>
        <Arrow left onClick={handlePrev}>
          ‹
        </Arrow>
        <CarouselRow index={index}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx}>
              <Quote>"{t.quote}"</Quote>
              {t.feedbacks.map((fb, i) => (
                <Feedback key={i}>
                  <p>{fb.comment}</p>
                  <Author>
                    {t.name}, {t.company}
                  </Author>
                  <StarRating>{"★".repeat(fb.stars)}</StarRating>
                </Feedback>
              ))}
            </TestimonialCard>
          ))}
        </CarouselRow>
        <Arrow onClick={handleNext}>›</Arrow>
      </Wrapper>
      <Footer />
    </>
  );
};

export default TestimonialPage;
