import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const FooterContainer = styled.footer`
  background: #041f1a;
  color: #cde8e0;
  padding: 20px 0;
  font-size: 0.95rem;
  border-top: 1px solid #0d3b31;
  width: 100%;
 
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FooterLinks = styled.div`
  text-align: center;
  margin-bottom: 15px;
  a {
    color: #9ee3d8;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #ffffff;
    }
  }
`;

const FooterClick = styled.span`
  cursor: pointer;
  color: #9ee3d8;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s;
  &:hover { color: #ffffff; }
`;

const Address = styled.address`
  text-align: center;
  font-style: normal;
  line-height: 1.5;
  color: #a3dcd2;
`;

const SocialIcons = styled.div`
  text-align: center;
  margin: 15px 0;
  font-size: 1.5rem;

  a {
    margin: 0 10px;
    color: #9ee3d8;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
`;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterClick onClick={() => scrollToSection("home")}>
          Home</FooterClick> | 
        <FooterClick onClick={() => scrollToSection("about")}>About</FooterClick> | 
        <FooterClick onClick={() => scrollToSection("courses")}>Courses</FooterClick> |
     
          <Link to="/blog">Blog</Link> | 
        <Link to="/policy">Policy</Link> | 
        <FooterClick onClick={() => scrollToSection("contact")}>Contact</FooterClick>
      </FooterLinks>

      <Address>
        NEOSPACE II BUILDING KINFRA TECHNO INDUSTRIAL PARK,
        <br />
        Calicut University, Malappuram, Tirurangadi,
        <br />
        Kerala, India, 673635
      </Address>

      <SocialIcons>
        <a href="https://www.linkedin.com/company/knowlix-learning" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/knowlix_learning/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/KNOWLIXLEARNING/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://wa.me/7025235519" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=knowlixlearning@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
      </SocialIcons>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        © {new Date().getFullYear()} Knowlix Learning. All rights reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
