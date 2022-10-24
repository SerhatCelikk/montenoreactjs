import React from 'react';
import Header from '../components/header/Header'
import dataCard from '../assets/fake-data/data-card';
import dataMontono from '../assets/fake-data/data-montono';
import dataPortfolio from '../assets/fake-data/data-portfolio2';
import dataRoadMap from '../assets/fake-data/data-roadmap2';
import dataTeam from '../assets/fake-data/data-team';
import dataFaq from '../assets/fake-data/data-faq';
import About from '../components/layouts/About';
import Montono2 from '../components/layouts/Montono2';
import Portfolio2 from '../components/layouts/Portfolio2';
import RoadMap2 from '../components/layouts/RoadMap2';
import Speciality2 from '../components/layouts/Speciality2';
import Team2 from '../components/layouts/Team2';
import SliderTwo from '../components/slider/SliderTwo';
import Counter from '../components/layouts/Counter'
import Testimonials2 from '../components/layouts/Testimonials2';
import dataTestimonials from '../assets/fake-data/data-testimonials2';
import FAQ2 from '../components/layouts/FAQ2';
import Blog from '../components/layouts/Blog';
import dataBlog from '../assets/fake-data/data-blog';
import Partners2 from '../components/layouts/Partners2';
import dataPartners from '../assets/fake-data/data-partners';
import FooterStyle2 from '../components/footer/FooterStyle2';

const Home02 = () => {
    return (
        <div className='home-2'>
            <Header />
            <SliderTwo />
            <Speciality2 data={dataCard} />
            <About />
            <Montono2 data={dataMontono} />
            <RoadMap2 data={dataRoadMap} />
            <Portfolio2 data={dataPortfolio} />
            <Team2 data={dataTeam} />
            <Counter />
            <Testimonials2 data={dataTestimonials} />
            <FAQ2 data={dataFaq} />
            <Blog data={dataBlog} />
            <Partners2 data={dataPartners} />
            <FooterStyle2 />
        </div>
    );
}

export default Home02;