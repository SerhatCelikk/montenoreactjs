import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataFaq from '../assets/fake-data/data-faq';
import dataPartners from '../assets/fake-data/data-partners';
import img from '../assets/images/items/group-ntf-02.png'
import Action from '../components/layouts/Action';
import FAQ2 from '../components/layouts/FAQ2';
import Partners from '../components/layouts/Partners';

const FAQ = () => {
    return (
        <div className='page-faq'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">FAQ</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <img src={img} alt="Monteno" />
                        </div>
                    </div>
                </div>
            </section>
            <FAQ2 data={dataFaq} />
            <Partners data={dataPartners} />
            <Action />
            <Footer />
        </div>
    );
}

export default FAQ;