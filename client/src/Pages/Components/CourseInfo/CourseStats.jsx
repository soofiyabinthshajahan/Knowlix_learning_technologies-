import styled from "styled-components";

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  font-size: 1rem;
  color: #333;
  padding: 1.5rem;
  width: 60%;
  margin: auto;
  place-items: center;
  text-align: center;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 15;
  text-align: center;

  strong {
    color: #477e6a;
  }
`;

const CourseInfoGrid = ({
    duration,
    mode,
    students
}) => {
    return (
      <InfoGrid>
        <InfoItem>
          <strong>Duration</strong>
          {duration}
        </InfoItem>
        <InfoItem>
          <strong>Mode</strong>
          {mode}
        </InfoItem>
        <InfoItem>
          <strong>Enrolled Students</strong>
          {students}
        </InfoItem>
      </InfoGrid>
    )
}

export default CourseInfoGrid;