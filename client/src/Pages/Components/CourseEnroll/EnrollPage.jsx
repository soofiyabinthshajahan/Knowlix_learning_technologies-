import { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  height: 100vh; /* CHANGED from min-height */
  background-image: url('/enroll-bg-1.png');
  background-size: cover;
  background-position: center;
  font-family: 'Inter', sans-serif;
  padding: 0; /* Optional: full edge-to-edge */
  justify-content: center;
  align-items: center;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  display: flex;
  overflow: hidden;
  width: 95%;
  height: 90vh; /* KEY PART */
  max-width: 1300px;
`;

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

const FormWrapper = styled.div`
  flex: 1.8;
  padding: 2rem;
  background: white;
  overflow-y: auto;
  max-height: 100vh;
  position: relative;
  scroll-behavior: smooth;

  /* Optional: hide scrollbar (Chrome/Webkit) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  color: #477e6a;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  color: #477e6a;
  display: block;
  font-weight: 500;
  margin-bottom: 0.4rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  margin-top: 18px;
  padding: 10px 10px;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: #477e6a;
  color: white;
  box-shadow: 0 4px 15px rgba(71, 126, 106, 0.3);

  &:hover {
    background: #158a68;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(71, 126, 106, 0.4);
  }
`;

const EnrollPage = () => {
  const [education, setEducation] = useState("HS");

  return (
    <PageWrapper>
      <GlassCard>

        <InfoSection>
          <InfoContent>
            <InfoItem>
              <h4>Top-tier Training</h4>
              <p>Get mentored by the best in the industry and build real-world skills.</p>
            </InfoItem>
            <InfoItem>
              <h4>Boost Your Career</h4>
              <p>Unlock opportunities with verified certifications and practical experience.</p>
            </InfoItem>
            <InfoItem>
              <h4>Flexible & Personalized</h4>
              <p>Choose your path based on your background and learning goals.</p>
            </InfoItem>
          </InfoContent>
        </InfoSection>

        <FormWrapper>

          <Title>Enroll in this Course</Title>

          <Label>First Name</Label>
          <Input type="text" placeholder="John" />

          <Label>Last Name</Label>
          <Input type="text" placeholder="Doe" />

          <Label>Date of Birth</Label>
          <Input type="date" />

          <Label>Mobile Number</Label>
          <Input type="tel" placeholder="9876543210" />

          <Label>Email Address</Label>
          <Input type="email" placeholder="you@example.com" />

          <Label>Education Background</Label>
          <Select value={education} onChange={(e) => setEducation(e.target.value)}>
            <option value="HS">High School</option>
            <option value="UG">Undergraduate</option>
            <option value="PG">Postgraduate</option>
          </Select>

          {(education === "UG" || education === "PG") && (
            <>
              <Label>Degree</Label>
              <Input type="text" placeholder="e.g. B.Tech, M.Sc, BCA..." />

              <Label>Branch</Label>
              <Input type="text" placeholder="e.g. Computer Science, Physics..." />
            </>
          )}

          <Button>Submit Enrollment</Button>
        </FormWrapper>
      </GlassCard>
    </PageWrapper>
  );
};

export default EnrollPage;
