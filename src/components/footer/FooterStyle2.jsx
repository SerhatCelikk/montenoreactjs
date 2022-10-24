import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-2.png'

const FooterStyle2 = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
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
            <footer className="footer style-2">
                <div className="container">
                    <div className="row">
                        <div className="footer__body">
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="info">
                                <Link to="/">
                                    <img src={logo} alt="Monteno" />
                                </Link>
                                    <p className="desc fs-18">
                                        Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat pariatur.  
                                    </p>
                                    <ul className="social">
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-6">
                                <div className="link s1">
                                    <h5 className="title">Quick links</h5>
                                    <ul>
                                        <li><Link to="/collections">NFT Trading</Link></li>
                                        <li><Link to="/about">Development</Link></li>
                                        <li><Link to="/about">Advertisement</Link></li>
                                        <li><Link to="/about">Career</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-6">
                                <div className="link s2">
                                    <h5 className="title">Help</h5>
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/team">Team Members</Link></li>
                                        <li><Link to="/faq">Support</Link></li>
                                        <li><Link to="/about">Refund Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="newsletter">
                                    <h5 className="title">Newsletter</h5>
                                    <p className="fs-18">Duis aute irure dolor in reprehen derit in voluptate velit.</p>
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email here" required />
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <p className="fs-16">Copyright © 2022, Monteno - NFT Portfolio ReactJS Template. Designed by <Link to="https://themeforest.net/user/themesflat/portfolio">Themesflat</Link></p>
                            <ul>
                                <li><Link to="#">Terms & Condition</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
        </>
    )
}

export default FooterStyle2