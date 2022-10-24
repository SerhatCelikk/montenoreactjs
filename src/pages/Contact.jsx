import React from 'react';
import img from '../assets/images/items/group-ntf-04.png'
import Action from '../components/layouts/Action';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Contact = () => {
    return (
        <div className='page-contact'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Contact</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <img className="s2" src={img} alt="Monteno" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>About</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Send Message</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Write Us Message for<br /> Any Reason</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-left">
                                <ul>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div className="info">
                                            <h5>Address</h5>
                                            <p className="fs-18">20, Backway Road, New York, US AB42</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                        <div className="info">
                                            <h5>Phone</h5>
                                            <p className="fs-18">+123 456 7890</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up">
                                        <div className="icon"><i className="fas fa-envelope"></i></div>
                                        <div className="info">
                                            <h5>Email</h5>
                                            <p className="fs-18">hello@nftportfolio.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="contact__form">

                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Your name" required />
                                    <input type="email" className="form-control mr-0" id="exampleInputEmail1" placeholder="Your email" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Your phone" required />
                                    <select className="form-control mr-0" id="exampleFormControlSelect1" >
                                        <option>Subject</option>
                                        <option>Subject 1</option>
                                        <option>Subject 2</option>
                                        <option>Subject 3</option>
                                        <option>Subject 4</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message here"></textarea>
                                </div>
                                <button type="submit" className="btn-action style-2"><span>Send Now</span></button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </section>

            <section className="map">
                <div className="container">
                    <div className="col-12">
                        <p data-aos="fade-up"><iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sT%C3%B2a%20nh%C3%A0%20Empire%20State!5e0!3m2!1svi!2s!4v1645507902092!5m2!1svi!2s" width="600" height="450"  allowFullScreen="" loading="lazy"></iframe></p>
                    </div>
                </div>
            </section>

            <Action />
            <Footer />
        </div>
    );
}

export default Contact;