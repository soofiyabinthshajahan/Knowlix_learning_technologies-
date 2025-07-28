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

const EnrollPage = () => {
  const [education, setEducation] = useState("HS");

  return (
    <PageWrapper>
      <GlassCard>

        <FormWrapper>
        </FormWrapper>
        
      </GlassCard>
    </PageWrapper>
  );
};

export default EnrollPage;
