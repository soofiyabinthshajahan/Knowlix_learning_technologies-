import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from '../../Header';
import TutorHero from './TutorHero';
import RequirementsSect from './Requirements';
import Process from './Process';
import ProgramSect from './ProgramSect';

const PageContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
`;

const ApplySection = styled.section`
  background: #477e6a;
  color: white;
  padding: 80px 20px;
  text-align: center;
  
  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
  }
  
  p {
    font-size: 18px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TutorCareersPage = () => {

  return (
    <>
    <Helmet>
        <title>Careers at Knowlix – Join Our Online Teaching Community</title>
        <meta
          name="description"
          content="Become an online tutor with Knowlix Learning. Shape the future of education in Kerala with our professional advancement program and AI-driven teaching tools."
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Online Tutor",
            "description": "Join Knowlix Learning as an online tutor. Help students across Kerala achieve their academic dreams.",
            "datePosted": "2025-09-18",
            "validThrough": "2025-12-31T23:59",
            "employmentType": "PART_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Knowlix Learning",
              "sameAs": "https://www.knowlixlearning.com"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kerala",
                "addressCountry": "IN"
              }
            }
          }
          `}
        </script>

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Careers at Knowlix – Join Our Online Teaching Community" />
        <meta property="og:description" content="Become an online tutor with Knowlix Learning. Shape the future of education in Kerala with our professional advancement program and AI-driven teaching tools." />
        <meta property="og:image" content="https://www.knowlixlearning.com/careers-banner.png" />
        <meta property="og:url" content="https://www.knowlixlearning.com/careers" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Knowlix – Join Our Online Teaching Community" />
        <meta name="twitter:description" content="Become an online tutor with Knowlix Learning. Shape the future of education in Kerala with our professional advancement program and AI-driven teaching tools." />
        <meta name="twitter:image" content="https://www.knowlixlearning.com/careers-banner.png" />
      </Helmet>
    <Header />
    <PageContainer>
      <TutorHero />

      <RequirementsSect />

      <Process />

      <ProgramSect />

      <ApplySection>
        <h2>Ready to Start Your Teaching Journey?</h2>
        <p>
          Join hundreds of successful tutors who are already making a difference in students' lives. 
          Apply today and become part of Kerala's leading online education platform.
        </p>
      </ApplySection>
    </PageContainer>
    </>
  );
};

export default TutorCareersPage;