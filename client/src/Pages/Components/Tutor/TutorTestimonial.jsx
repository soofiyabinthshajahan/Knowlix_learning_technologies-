import styled from "styled-components";
import { useEffect } from "react";

const CarouselOuter = styled.div`
  position: relative;
  width: 860px; /* enough space for 2 cards */
  margin: 0 auto;
;`

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

const TestimonialTrack = styled.div`
  display: flex;
  gap: 20px; /* spacing between cards */
  transition: transform 0.6s ease;
  transform: translateX(${(props) => `-${props.index * 420}px`}); 
  /* 420px = card + gap */
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #158a68, #144d67);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }
`;

const TestimonialCard = styled.div`
  flex: 0 0 400px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  padding: 30px;   /* more padding */
  text-align: left;
  position: relative;
  min-height: 320px;  /* ✅ makes cards taller */

  img {
    width: 120px;
    height: 120px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #477e6a;
    text-align: left;
  }

  span {
    font-size: 14px;
    color: #777;
    display: block;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    text-align: left;
  }

  &::after {
    content: "❞";
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 40px;
    color: #477e6a;
    opacity: 0.2;
  }
`;


const TutorTestimonial = () => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
    };

    useEffect(() => {
        const links = document.querySelectorAll("a[href^='#']");

        const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.currentTarget.getAttribute("href"));
        if (target) {
            window.scrollTo({
            top: target.offsetTop - 80, // Adjust scroll padding if navbar is fixed
            behavior: "smooth",
            });
        }
        };

        links.forEach((link) => link.addEventListener("click", handleClick));

        // Cleanup
        return () => {
        links.forEach((link) => link.removeEventListener("click", handleClick));
        };
    }, []);
    return (
        <TestimonialsSection>
                    <h4>Experience</h4>
                    <h2>Our Teachers Have To Say</h2>
        
                    <CarouselOuter>
                      <ArrowButton onClick={prevSlide} style={{ left: "-20px" }}>
                        <FaChevronLeft />
                      </ArrowButton>
        
                      <CarouselWrapper>
                        <TestimonialTrack index={index}>
                          {testimonials.map((t, i) => (
                            <TestimonialCard key={i}>
                              <img src={t.image} alt={t.name} />
                              <h3>{t.name}</h3>
                              <span>- {t.role}</span>
                              <p>{t.text}</p>
                            </TestimonialCard>
                          ))}
                        </TestimonialTrack>
                      </CarouselWrapper>
        
                      <ArrowButton onClick={nextSlide} style={{ right: "-20px" }}>
                        <FaChevronRight />
                      </ArrowButton>
                    </CarouselOuter>
                    </TestimonialsSection>
    )
}

export default TutorTestimonial;