import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Importar Link de react-scroll
import '../styles/NavBar.css';

const Navbar: React.FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (window.scrollY > 500) {
        setShowScrollUpBtn(true);
      } else {
        setShowScrollUpBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
        <div className="max-width">
          <div className="logo">
            <a href="#">Portafo<span>lio.</span></a>
          </div>
          <ul className={`menu ${menuActive ? 'active' : ''}`}>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuActive(false)}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuActive(false)}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuActive(false)}
              >
                Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuActive(false)}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
          <div className="menu-btn" onClick={handleMenuClick}>
            <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>

      {showScrollUpBtn && (
        <div className="scroll-up-btn" onClick={handleScrollUp}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default Navbar;
