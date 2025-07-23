import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #477e6a;
`;

const CourseSection = ({ title, children }) => {
    return (
        <Section>
            <SectionTitle>{title}</SectionTitle>
            {children}
      </Section>
    )
}

export default CourseSection;