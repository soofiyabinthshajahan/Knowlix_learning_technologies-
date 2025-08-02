import styled from "styled-components";
import EnrollForm from "./EnrollForm.jsx";
import EnrollInfo from "./EnrollInfo.jsx"

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
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  display: flex;
  overflow: hidden;
  width: 95%;
  height: 90vh; /* KEY PART */
  max-width: 1300px;
`;

const EnrollPage = () => {

  return (
    <PageWrapper>
      <GlassCard>

        <EnrollInfo 
          items={[
            { title: "Duration", description: "6 months of intensive training." },
            { title: "Mode", description: "Hybrid - Online + Offline sessions." },
            { title: "Eligibility", description: "Open to UG, HS, and PG students." },
          ]}
        />

        <EnrollForm />
        
      </GlassCard>
    </PageWrapper>
  );
};

export default EnrollPage;
