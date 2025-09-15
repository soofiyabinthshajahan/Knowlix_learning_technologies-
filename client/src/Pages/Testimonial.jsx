import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footers/Footer"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "My Tutor’s guidance proved to be a game-changer, and we're grateful for their support.",
    name: "Adil S/O Muhammad",
    country: "Kerala,India",
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
      "I am deeply grateful to Knowlix for the positive change I see in my daughter, Ayra Mehrin.",
    name: "Ayra Mehrin D/O Sana",
    country: "UAE",
    company: "KG 2 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Ayra Mehrin D/O Sana",
        comment:
          "The way the teachers guide, encourage, and support her has made a big difference in her learning journey. She enjoys her classes, feels more confident, and looks forward to learning every day. As a parent, it gives me immense happiness and peace of mind to know that Ayra is in such caring and capable hands. Thank you, Knowlix, for your dedication and genuine concern for every child.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "We are so grateful to Team Knowlix for making this incredible transformation possible!",
    name: "Adhila D/O Sajna",
    country: "Kerala, India",
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
      "My son Tufail used to hate studying and would get frustrated whenever the word ‘study’ was mentioned.",
    name: "Thufail S/O Saleena",
    country: "Riyadh, Saudi Arabia",
    company: "KG 2 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Thufail S/O Saleena",
        comment:
          "Thanks to Knowlix, with their patient and friendly teachers providing individual attention, he is now confident, motivated, and even enjoys learning. I am truly grateful for the care and guidance they’ve given him.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "After a few days, he mastered the subject’s basics, and now he is able to write and read Hindi easily.",
    name: "Aflah S/O Sulaiman",
    country: "India",
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
    country: "India",
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
  {
    quote:
      "I enrolled my son, Devadarsh, in Knowlix for Malayalam reading and writing classes with Hiba ma’am, and I couldn’t be happier with the experience.",
    name: "Devdarsh S/O Athira",
    country: "Kerala, India",
    company: "Class 3 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Devdarsh S/O Athira",
        comment:
          "He not only learns well in class but also shows so much enthusiasm at home—practicing what he learned, reading aloud, and even trying to write on his own. It makes me so glad to see him excited about the language and enjoying his learning journey. I am truly grateful to Hiba ma’am for her patient and effective teaching, and to Knowlix for providing such a nurturing platform.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "I enrolled her in Knowlix, and the change has been remarkable.",
    name: "Fadwa D/O Vaheed",
    country: "Kerala, India",
    company: "Class 8 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Fadwa D/O Vaheed",
        comment:
          "My daughter, Fadwa, who is in class 8, started learning Hindi in school during the COVID time. Unfortunately, she struggled a lot with the basics—letters, meanings, and overall understanding. Later, I enrolled her in Knowlix, and the change has been remarkable. Today, she can read, write, and even handle entire paragraphs confidently. As a parent, it makes me proud and relieved to see her progress so well. I am always thankful to Knowlix for guiding her with such care and dedication.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "I am truly grateful to Knowlix for their patience, guidance, and the way they’ve supported Ameya’s growth.",
    name: "Ameya D/O Babitha",
    country: "Kerala,India",
    company: "Class 5 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Ameya D/O Babitha",
        comment:
          "I still remember how my daughter, Ameya, in class 5, struggled with Maths and EVS. She would get frustrated, and it broke my heart to see her lose confidence in herself. When we joined Knowlix, everything started to change. She began understanding the concepts, enjoying her lessons, and even coming home excited to share what she learned. Seeing her regain her confidence and enthusiasm for learning fills me with so much happiness.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "My daughter, Jumana, has been taking Hindi and English classes at Knowlix for the past two years, and I am deeply grateful for all the support we have received.",
    name: "Rayinaath D/O Jumana",
    country: "Kerala, India",
    company: "Class 5 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Rayinaath D/O Jumana",
        comment:
          "Jaseem sir, CEO of Knowlix – My daughter, Jumana, has been taking Hindi and English classes at Knowlix for the past two years, and I am deeply grateful for all the support we have received. After her father passed away, our family faced many difficulties, and managing her education seemed impossible. When I shared our situation with Jaseem sir, he immediately offered help and ensured that Jumana could continue learning without any burden. Thanks to the free classes and the dedicated guidance from her teachers, Jumana has not only improved tremendously but is now scoring excellently in her exams. As a mother, I feel truly blessed and grateful to God, to Jaseem sir, and to all the teachers at Knowlix for their kindness, support, and unwavering dedication to my daughter’s education.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "After joining Knowlix, I have seen a remarkable improvement in his learning.",
    name: "Jiyajin D/O Drishiya",
    country: "Bahrain",
    company: "Class 3 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Jiyajin D/O Drishiya",
        comment:
          "I, Drishya, enrolled my son in Knowlix because he was struggling a lot with English, Hindi, and other languages. He used to feel frustrated and lacked confidence in his studies. After joining Knowlix, I have seen a remarkable improvement in his learning. His understanding of languages has grown, he participates more actively, and his confidence has increased tremendously. I am truly grateful to Knowlix and the teachers for their guidance, patience, and support in helping my son improve so much.",
        stars: 5,
      },
    ],
  },
];

const Wrapper = styled.section`
  background: #062e26;
  color: #fff;
  padding: 60px 2%;
  font-family: sans-serif;
  position: relative;

  /* ✅ allow expanded card to show fully */
  .slick-list {
    overflow: visible;
  }
`;

const CardWrapper = styled.div`
  padding: 0 15px; /* ✅ gap between cards */
`;

const TestimonialCard = styled.div`
  background: #0a3e33;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  min-width: 250px; /* safe minimum */
  width: 100%; /* let slick control width */
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    height: auto;
    min-height: 350px;
    transform: scale(1.05);
    z-index: 10;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
  }
`;

const Quote = styled.blockquote`
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 10px;
  flex-shrink: 0;
`;

const Feedback = styled.div`
  background: #0a3e33;
  padding: 12px;
  border-radius: 10px;
  color: #dff5f0;
  margin-top: auto;
  font-size: 0.85rem;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;

  ${TestimonialCard}:hover & {
    max-height: none;
    overflow: visible;
  }
`;

const Author = styled.div`
  font-weight: bold;
  color: #9ee3d8;
  margin-top: 10px;
`;

const Country = styled.div`
  font-size: 0.85rem;
  color: #b5e9df;
  margin-top: 4px;
`;

const StarRating = styled.div`
  color: gold;
  font-size: 1rem;
  margin-top: 5px;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  z-index: 20;
  position: absolute;

  top: 175px; 
  transform: translateY(-50%);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
    background: rgba(255, 255, 255, 0.6);
  }

   @media (max-width: 768px) {
    &.next {
      right: -10px;
    }
    &.prev {
      left: -10px;
    }
  }

  @media (max-width: 480px) {
    &.next {
      right: -5px;
    }
    &.prev {
      left: -5px;
    }
  }
`;

const NextArrow = ({ onClick }) => (
  <Arrow className="next" onClick={onClick}>
    <FaChevronRight size={18} />
  </Arrow>
);

const PrevArrow = ({ onClick }) => (
  <Arrow className="prev" onClick={onClick}>
    <FaChevronLeft size={18} />
  </Arrow>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600, // phones
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialPage = () => {
  return (
    <>
    <Wrapper>
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <CardWrapper key={idx}>
            <TestimonialCard>
              <Quote>"{t.quote}"</Quote>
              {t.feedbacks.map((fb, i) => (
                <React.Fragment key={i}>
                  <Feedback>
                    <p>{fb.comment}</p>
                  </Feedback>
                  <Author>{t.name}, {t.company}</Author>
                  <Country>{t.country}</Country>
                  <StarRating>{"★".repeat(fb.stars)}</StarRating>
                </React.Fragment>
              ))}
            </TestimonialCard>
          </CardWrapper>
        ))}
      </Slider>
    </Wrapper>
    <Footer />
    </>
  );
};

export default TestimonialPage;