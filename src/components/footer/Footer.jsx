import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

import logo from "../../assets/fake-data/logo";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer__body">
              <Link to="/">
                <img id="Animals" src={logo} alt="The Animal Club" data-aos="fade-down" />
              </Link>

              <p className="desc fs-18" data-aos="fade-up">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat
                cupidatat non proident, sunt in culpa qui officia dese runt
                mollit ani
              </p>
              <ul className="social" >
                
                <li >
                 <a href="https://twitter.com/animalclubnft" target="_blank">
                    <i className="fab fa-telegram" ></i>
                  </a>
                </li><li>
                 <a href="https://twitter.com/animalclubnft" target="_blank">
                    <i className="fab fa-twitter" ></i>
                  </a>
                </li><li>
                 <a href="https://twitter.com/animalclubnft" target="_blank">
                    <i className="fab fa-discord" ></i>
                  </a>
                </li>
                
              </ul>
            </div>
            {/* <div className="footer_bottom"> */}
            {/* <p className="fs-16">Copyright © 2022, Monteno - NFT Portfolio ReactJS Template. Designed by <Link to="https://themeforest.net/user/themesflat/portfolio">Themesflat</Link></p> */}
            {/* <ul>
                            <li><Link to="#">Terms & Condition</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Cookie Policy</Link></li>
                        </ul>
                    </div> */}
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </>
  );
};

export default Footer;
