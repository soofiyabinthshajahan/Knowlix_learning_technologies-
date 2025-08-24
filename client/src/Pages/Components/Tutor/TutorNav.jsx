import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 60px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
`;

const Logo = styled.img`
  height: 45px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    text-decoration: none;
    font-weight: 500;
    color: #0b0b0b;
    transition: all 0.3s ease;

    &:hover {
      color: #158a68;
    }
  }

  span {
    color: white;
  }
`;

const ContactButton = styled.a`
  background: linear-gradient(90deg, #158a68, #144d67);
  color: white;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const TutorNav = () => {
    return (
        <Nav>
        <Logo src="/Logo-removebg-preview.png" alt="Interval Logo" />
        <NavLinks>
          <a href="#homes">Home</a>
          <a href="#apply">How to Apply</a>
          <ContactButton href="/contact"><span>Contact</span></ContactButton>
        </NavLinks>
      </Nav>
    )
}

export default TutorNav;