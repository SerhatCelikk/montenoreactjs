import React from 'react';

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataFaq from '../assets/fake-data/data-faq';
import dataPortfolio from '../assets/fake-data/data-portfolio2';
import dataRoadMap from '../assets/fake-data/data-roadmap';

import Action from '../components/layouts/Action';
import FAQ2 from '../components/layouts/FAQ2';
import Portfolio2 from '../components/layouts/Portfolio2';
import RoadMap from '../components/layouts/RoadMap';
import img from '../assets/images/items/group-ntf-01.png'

const RoadMapMain = () => {
    return (
        <div className='roadmap'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Road Map</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <img className="s2" src={img} alt="Monteno" />
                        </div>
                    </div>
                </div>
            </section>
            <RoadMap data={dataRoadMap} />
            <Portfolio2 data={dataPortfolio} />
            <FAQ2 data={dataFaq} />
            <Action />
            <Footer />
        </div>
    );
}

export default RoadMapMain;