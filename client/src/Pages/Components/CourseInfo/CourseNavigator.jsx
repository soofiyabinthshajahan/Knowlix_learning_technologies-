import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SidebarWrapper = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const SidebarCard = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.3s;
  padding: 2rem;
  background: rgba(71, 126, 106, 0.1);
  margin-top: 2rem;
  border-right: 4px solid #477e6a;

  h3, strong {
    color: #477e6a;
    font-weight: 650;
  }

  ul li {
    margin-bottom: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 420;
  }

  ul li:hover {
    color: #407360ff;
    transform: translateX(5px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
;`

const Button = styled.button`
  flex: 1;
  padding: 15px 25px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &.primary {
    background: #477e6a;
    color: white;
    box-shadow: 0 4px 15px rgba(71, 126, 106, 0.3);

    &:hover {
      background: #158a68;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(71, 126, 106, 0.4);
    }
  }

  &.secondary {
    background: transparent;
    color: #646a68ff;
    border: 0.02rem solid #8f9090ff;

    &:hover {
      background: rgba(71, 126, 106, 0.13);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  }
;`

const CourseNavigator = ({
    courseTitle,
    course,
    demoId
}) => {

    const navigate = useNavigate();
    const handleEnroll = () => {
      navigate('/enroll', { state: { course } });
    };

    return (
        <SidebarWrapper>
            <SidebarCard>
                <h3>{courseTitle}</h3>
                <ul style={{ listStyleType: "none", padding: 0, marginTop: "1rem" }}>
                    <li onClick={() => document.getElementById("about-course").scrollIntoView({ behavior: "smooth" })}>
                    <strong>•</strong> About Course
                    </li>
                    <li onClick={() => document.getElementById("what-you-will-learn").scrollIntoView({ behavior: "smooth" })}>
                    <strong>•</strong> What will you learn
                    </li>
                    <li onClick={() => document.getElementById("syllabus-section").scrollIntoView({ behavior: "smooth" })}>
                    <strong>•</strong> Course Syllabus
                    </li>
                </ul>
                <ButtonGroup style={{ justifyContent: "flex-end" }}>
                    <Button className="secondary">Book a Demo</Button>
                    <Button className="primary" onClick={handleEnroll}>Enroll Now</Button>
                </ButtonGroup>
            </SidebarCard>
        </SidebarWrapper>
    )
}

export default CourseNavigator;