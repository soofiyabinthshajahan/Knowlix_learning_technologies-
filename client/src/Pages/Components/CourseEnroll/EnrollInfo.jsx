import styled from "styled-components";

const InfoSection = styled.div`
  flex: 1;
  padding: 4rem 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const InfoContent = styled.div`
  max-width: 400px;
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.95rem;
    opacity: 0.8;
  }
`;

const EnrollInfo = ({ items }) => {
    return (
        <InfoSection>
          <InfoContent>
            {items.map((item, index) => (
                <InfoItem key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </InfoItem>
            ))}
          </InfoContent>
        </InfoSection>
    );
};

export default EnrollInfo;