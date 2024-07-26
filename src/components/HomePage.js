import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css";
import EyeglassDropdown from "./EyeglassDropdown";
import SignInForm from "./SignInForm";
import LoginForm from "./LoginForm";
import ShopByCategory from "./ShopByCategory";
import SunglassesDropdown from "./SunglassesDropdown";
import ContactLens from "./ContactLensDropdown";
import AccessoriesDropdown from "./AccessoriesDropdown";
import KidGlassesDropdown from "./KidGlassesDropdown";
import Offers from "./Offers";


const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 
  const images = [
    "https://static1.lenskart.com/media/desktop/img/2024/feb/IN/Sobhita/Desktop.png",
    "https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif",
    "https://static1.lenskart.com/media/desktop/img/oct9/holiday-edit/Desktop.jpg",
  ];


  const offers = [
    {
      src: "https://via.placeholder.com/800x400.png?text=Offer+1",
      alt: "Flat 30% Off on Zeff Frames"
    },
    {
      src: "https://via.placeholder.com/800x400.png?text=Offer+2",
      alt: "Up to 20% Off on Aristo Frames"
    },
    {
      src: "https://via.placeholder.com/800x400.png?text=Offer+3",
      alt: "Buy 1 Get 1 Free on All Frames"
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openSignIn = () => {
    setShowSignIn(true);
    setShowLogin(false);
  };

  const handleDropdownClick = (category) => {
    setActiveDropdown((prev) => (prev === category ? null : category));
  };

  const handleDropdownMouseEnter = (category) => {
    setHoveredDropdown(category);
  };

  const handleDropdownMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const closeSignIn = () => setShowSignIn(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignIn(false);
  };

  const closeLogin = () => setShowLogin(false);
  const navigateToService = () => {
    navigate('/service'); // Navigate to ServicePage
  };
  const navigateToLocation = () => {
    navigate('/location'); // Navigate to LocationPage
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Specs</div>
        <nav>
          <ul className="nav-links">
            <li
              onMouseEnter={() => handleDropdownMouseEnter('eyeglasses')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#eyeglasses"
                onClick={() => handleDropdownClick('eyeglasses')}
              >
                Eyeglasses
              </a>
              {(activeDropdown === 'eyeglasses' || hoveredDropdown === 'eyeglasses') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('eyeglasses')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <EyeglassDropdown />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('sunglasses')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#sunglasses"
                onClick={() => handleDropdownClick('sunglasses')}
              >
                Sunglasses
              </a>
              {(activeDropdown === 'sunglasses' || hoveredDropdown === 'sunglasses') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('sunglasses')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <SunglassesDropdown />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('contactlens')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#contactlens"
                onClick={() => handleDropdownClick('contactlens')}
              >
                Contact Lens
              </a>
              {(activeDropdown === 'contactlens' || hoveredDropdown === 'contactlens') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('contactlens')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <ContactLens />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('accessories')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#accessories"
                onClick={() => handleDropdownClick('accessories')}
              >
                Accessories
              </a>
              {(activeDropdown === 'accessories' || hoveredDropdown === 'accessories') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('accessories')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <AccessoriesDropdown />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleDropdownMouseEnter('kidglasses')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <a
                href="#kidglasses"
                onClick={() => handleDropdownClick('kidglasses')}
              >
                Kidglasses
              </a>
              {(activeDropdown === 'kidglasses' || hoveredDropdown === 'kidglasses') && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => handleDropdownMouseEnter('kidglasses')}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <KidGlassesDropdown />
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="header-buttons">
            <button className="header-button" onClick={openSignIn}>
              Sign In
            </button>
            <button className="header-button">🛒 Cart</button>
            <button className="header-button">❤ WishList</button>
            <button className="header-button">Try-On-Three</button>
          </div>
        </div>
      </header>
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Eyeglasses, Sunglasses"
          />
          <button>🔍</button>
        </div>
        <div className="service-location-buttons">
        <button className="service-button" onClick={navigateToService}>
            Service
          </button>
          <button className="location-button" onClick={navigateToLocation}>Location</button>
        </div>
      </div>
      <main className="main-content">
        <div className="banner">
          <img
            src={images[currentSlide]}
            alt="banner"
            className="banner-image"
          />
        </div>
        <ShopByCategory />
        <Offers offers={offers} />
      </main>
      {showSignIn && (
        <SignInForm closeModal={closeSignIn} openLogin={openLogin} />
      )}
      {showLogin && (
        <LoginForm closeModal={closeLogin} openSignUp={openSignIn} />
      )}
    </div>
  );
};

export default HomePage;