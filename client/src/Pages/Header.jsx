import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiSearch, FiBell, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import BookDemoModal from './Components/BookDemoModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderSection = styled.header`
  height: 10vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    height: 6vh;
  }

  @media (max-width: 768px) {
    background: rgba(255, 255, 255, 0.76);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1001;

  img.desktop-logo {
    width: 160px;
    height: 60px;
    object-fit: contain;

    @media (max-width: 1024px) {
      width: 100px;
      height: 40px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  img.mobile-logo {
    display: none;
    width: 100px;
    height: 50px;
    object-fit: contain;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeaderElements = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const Element = styled.li`
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 400;
  color: #477e6a;
  transition: color 0.3s ease;

  &:hover {
    color: #158a68;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: #477e6a;
  color: #ffffff;
  font-weight: 500;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: #158a68;
  }

  @media (max-width: 1024px) {
    margin-top: 10px;
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 20px;
  padding: 3px 9px;
  border: 2px solid rgba(15, 61, 46, 0.3);
  transition: all 0.3s ease;
  width: ${props => props.show ? '300px' : '40px'};
  overflow: hidden;
  height: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #0f3d2e;
  
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(15, 61, 46, 0.1);
  }

  svg {
    font-size: 20px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #0f3d2e;
  font-size: 1rem;
  padding-left: 10px;
  width: ${props => props.show ? '100%' : '0'};
  opacity: ${props => props.show ? '1' : '0'};
  transition: all 0.3s ease;

  &::placeholder {
    color: #888;
  }
`;

const CloseSearch = styled.div`
  cursor: pointer;
  color: #0f3d2e;
  padding: 4px;
  border-radius: 50%;
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(15, 61, 46, 0.1);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #0f3d2e;

  svg {
    font-size: 20px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #22a884;
    }
  }

  @media (max-width: 1024px) {
    gap: 12px;
    margin-top: 10px;

    svg {
      font-size: 18px;
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: #0f3d2e;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 8vh;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 20px 5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    top: 6vh;
    padding: 15px 5%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${props => props.show ? 'block' : 'none'};
`;

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('Token');

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setShowMobileMenu(false);
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
    setShowMobileMenu(false);
  };
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  };

  const handleClickOutside = (e) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <HeaderSection>
        <Logo>
          <Link to="/">
            <img src="/Logo.jpg" alt="Logo" className="desktop-logo" />
            <img src="/Logo-removebg-preview.png" alt="Mobile Logo" className="mobile-logo" />
          </Link>
        </Logo>

        <Navigation>
          <HeaderElements>
            <Element onClick={() => scrollToSection("home")}>Home</Element>
            <Element onClick={() => scrollToSection("about")}>About</Element>
            <Element onClick={() => scrollToSection("courses")}>Courses</Element>
            <Element>
              <Link to="/team" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setShowMobileMenu(false)}>
                Team
              </Link>
            </Element>
            <Element>
              <Link to="/careers" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setShowMobileMenu(false)}>
                Careers
              </Link>
            </Element>
          </HeaderElements>
          
          <IconsContainer>
          
            
            <Button onClick={handleOpenDemoModal}>Contact us</Button>
              <SearchContainer ref={searchContainerRef} show={showSearch}>
              <SearchIcon onClick={toggleSearch}>
                <FiSearch />
              </SearchIcon>
              <SearchInput
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                show={showSearch}
              />
              <CloseSearch show={showSearch} onClick={() => setShowSearch(false)}>
                <FiX size={18} />
              </CloseSearch>
            </SearchContainer>
            <IconWrapper>
              {token == null ? '' : <FiBell />}
              {isDark ? <FiSun onClick={toggleTheme} /> : <FiMoon onClick={toggleTheme} />}
            </IconWrapper>
          </IconsContainer>
        </Navigation>

        <MobileMenuIcon onClick={toggleMobileMenu}>
          {showMobileMenu ? <FiX /> : <FiMenu />}
        </MobileMenuIcon>
      </HeaderSection>

      {showMobileMenu && (
        <MobileMenu>
          <HeaderElements>
            <Element onClick={() => scrollToSection("home")}>Home</Element>
            <Element onClick={() => scrollToSection("about")}>About</Element>
            <Element onClick={() => scrollToSection("courses")}>Courses</Element>
            <Element>
              <Link to="/team" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setShowMobileMenu(false)}>
                Team
              </Link>
            </Element>
            <Element>
              <Link to="/careers">Careers</Link>
            </Element>
            <Element>
              <Link to="/policy">Policy</Link>
            </Element>
          </HeaderElements>
          <Button onClick={handleOpenDemoModal}>Contact Us</Button>
          <IconWrapper>
            {token == null ? '' : <FiBell />}
            {isDark ? <FiSun onClick={toggleTheme} /> : <FiMoon onClick={toggleTheme} />}
          </IconWrapper>
        </MobileMenu>
      )}

      <BookDemoModal show={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </>
  );
}

export default Header;