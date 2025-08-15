import React from 'react'
import styled from "styled-components";
const Footer = styled.footer`
  background: #041f1a;
  color: #cde8e0;
  padding: 30px 5%;
  margin-top: 60px;
  font-size: 0.95rem;
  border-top: 1px solid #0d3b31;
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
const Address = styled.address`
  text-align: center;
  font-style: normal;
  line-height: 1.5;
  color: #a3dcd2;
`;

export default function Footers() {
  return (
   <Footer>
        <FooterLinks>
          <a href="/">Home</a> | <a href="/courses">Courses</a> |{" "}
          <a href="/about">About</a> | <a href="/contact">Contact</a>
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
      </Footer>
  )
}
