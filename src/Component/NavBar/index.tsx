import { SetStateAction, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

import './index.css';

const NavBar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleNavClick = (item: SetStateAction<string>) => {
    setActiveItem(item);
  };

  const handleSubMenuClick = () => {
    setShowSubMenu(false);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openSlidebar = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <div className='navbar-section'>
        <div className='flex-logo-items'>
          <div>
            <img
              src='https://res.cloudinary.com/djo2jovhh/image/upload/v1719815545/apexpay_logopng_1_hzcvzh.svg'
              height={57}
              width={97}
              alt='logo'
            />
          </div>
          <div className='hamburger' onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`nav-list-card ${showMenu ? 'show' : ''}`}>
            <li
              onClick={() => handleNavClick('/')}
            >
              <Link to='/' className={`nav-item ${activeItem === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li
              onClick={() => handleNavClick('/about-us')}
            >
              <Link to='/about-us' className={`nav-item ${activeItem === '/about-us' ? 'active' : ''}`}>
                About Us
              </Link>
            </li>
            <li
              onClick={() => handleNavClick('/payIn')}
            >
              <Link to='/payIn' className={`nav-item ${activeItem === '/payIn' ? 'active' : ''}`}>
              Make Payment
              </Link>
            </li>
            <li
              onClick={() => handleNavClick('/payout')}
            >
              <Link to='/payout' className={`nav-item ${activeItem === '/payout' ? 'active' : ''}`}>
              Make Payout
              </Link>
            </li>
            <li
              onClick={() => handleNavClick('/api-docs')}
            >
              <Link to='/api-docs' className={`nav-item ${activeItem === '/api-docs' ? 'active' : ''}`}>
                API Docs
              </Link>
            </li>
            <li
              onClick={() => handleNavClick('/contact')}
            >
              <Link to='/contact' className={`nav-item ${activeItem === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
        <a style={{textDecoration:"none",color:"white"}} href='https://apexpay.tech/merchant/#/login' target='_blank'>
          <button className='login-card'> Login </button>
          </a>
        </div>
      </div>
      {showSubMenu && (
        <div className='submenu'>
          <div style={{ marginTop: '20px' }}>
            <Link className='nav-link' to='/payIn' onClick={handleSubMenuClick}>
              PayIn
            </Link>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link className='nav-link' to='/payOut' onClick={handleSubMenuClick}>
              PayOut
            </Link>
          </div>
        </div>
      )}

      <div className='small-nav'>
        <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1719815545/apexpay_logopng_1_hzcvzh.svg" alt="nav-image" />
        <div onClick={openSlidebar}>
          <RxHamburgerMenu size={35} />
        </div>
      </div>
      {hamburgerMenu ? (
        <div className='sidebar'>
          <ul className={`nav-list-card ${showMenu ? 'show' : ''}`}>
            <li
              className={`nav-item ${activeItem === '/' ? 'active' : ''}`}
              onClick={() => handleNavClick('/')}
            >
              <Link to='/' className='nav-link' onClick={openSlidebar}>
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${activeItem === '/about-us' ? 'active' : ''}`}
              onClick={() => handleNavClick('/about-us')}
            >
              <Link to='/about-us' className='nav-link' onClick={openSlidebar}>
                About Us
              </Link>
            </li>
            <li
              className={`nav-item ${activeItem === '/payIn' ? 'active' : ''}`}
              onClick={() => handleNavClick('/payIn')}
            >
              <Link to='/payIn' className='nav-link' onClick={openSlidebar}>
                Make Payment
              </Link>
            </li>
            <li
              className={`nav-item ${activeItem === '/payout' ? 'active' : ''}`}
              onClick={() => handleNavClick('/payout')}
            >
              <Link to='/payout' className='nav-link' onClick={openSlidebar}>
                Make Payout
              </Link>
            </li>
            <li
              className={`nav-item ${activeItem === '/api-docs' ? 'active' : ''}`}
              onClick={() => handleNavClick('/api-docs')}
            >
              <Link to='/api-docs' className='nav-link' onClick={openSlidebar}>
                API Docs
              </Link>
            </li>
            <li
              className={`nav-item ${activeItem === '/contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('/contact')}
            >
              <Link to='/contact' className='nav-link' onClick={openSlidebar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
