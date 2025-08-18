import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterContainer = styled.footer`
  background: #041f1a;
  color: #cde8e0;
  padding: 20px 0;
  font-size: 0.95rem;
  border-top: 1px solid #0d3b31;
  width: 100%;
  margin-top: 40px;
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
        <FooterClick onClick={() => scrollToSection("home")}>Home</FooterClick> | 
        <FooterClick onClick={() => scrollToSection("about")}>About</FooterClick> | 
        <FooterClick onClick={() => scrollToSection("courses")}>Courses</FooterClick> |
        <FooterClick onClick={() => scrollToSection("contact")}>Contact</FooterClick>
      </FooterLinks>

      <Address>
        NEOSPACE II BUILDING KINFRA TECHONO INDUSTRIAL PARK,
        <br />
        Calicut University, Malappuram, Tirurangadi,
        <br />
        Kerala, India, 673635
      </Address>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        © {new Date().getFullYear()} Knowlix Learning. All rights reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
