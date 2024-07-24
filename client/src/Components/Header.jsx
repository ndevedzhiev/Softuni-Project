import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
    
    return (
        <header className="header">
  <div className="header-top">
    <div className="container">
      <div className="countdown-text">
        Exclusive Offer <span className="span skewBg">10</span>{" "}
        Days Left
      </div>
      <div className="social-wrapper">
        <p className="social-title">Follow us on :</p>
        <ul className="social-list">
          <li>
            <a href="https://www.facebook.com/" className="social-link">
            <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" className="social-link">
            <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" className="social-link">
              <FaInstagram />
             </a>
          </li>
          <li>
            <a href="https://linkedin.com/" className="social-link">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="header-bottom skewBg" data-header="">
    <div className="container">
      <a href="#" className="logo">
      GameVerse
      </a>
      <nav className="navbar" data-navbar="">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home" className="navbar-link skewBg" data-nav-link="">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#live" className="navbar-link skewBg" data-nav-link="">
              Live
            </a>
          </li>
          <li className="navbar-item">
            <a href="#features" className="navbar-link skewBg" data-nav-link="">
              Features
            </a>
          </li>
          <li className="navbar-item">
            <a href="#shop" className="navbar-link skewBg" data-nav-link="">
              Shop
            </a>
          </li>
          <li className="navbar-item">
            <a href="#blog" className="navbar-link skewBg" data-nav-link="">
              Blog
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link skewBg" data-nav-link="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button
          className="search-btn"
          aria-label="open search"
          data-search-toggler=""
          
        >
          <FaSearch />
          <ion-icon name="search-outline" />
        </button>
        <button
          className="nav-toggle-btn"
          aria-label="toggle menu"
          data-nav-toggler=""
        >
          <ion-icon name="menu-outline" className="menu" />
          <ion-icon name="close-outline" className="close" />
        </button>
      </div>
    </div>
  </div>
</header>

    )
}

export default Header