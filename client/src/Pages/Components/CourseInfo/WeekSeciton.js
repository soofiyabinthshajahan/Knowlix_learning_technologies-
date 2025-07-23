import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(71, 126, 106, 0.1);
  border-radius: 10px;
  border-left: 4px solid #477e6a;

  h4 {
    font-size: 1.2rem;
    color: #477e6a;
    margin-bottom: 15px;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1rem;
    color: #333;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
    line-height: 1.5;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #477e6a;
      font-weight: bold;
    }
  }
`;

const WeekSection = ({ title, topics }) => (
  <Wrapper>
    <h4>{title}</h4>
    <ul>
      {topics.map((topic, idx) => (
        <li key={idx}>{topic}</li>
      ))}
    </ul>
  </Wrapper>
);

export default WeekSection;
