import React from 'react';
import dataBlog from '../assets/fake-data/data-blog';
import dataFaq from '../assets/fake-data/data-faq';
import dataMontono from '../assets/fake-data/data-montono';
import dataRoadMap from '../assets/fake-data/data-roadmap2';
import dataTeam from '../assets/fake-data/data-team';
import dataTechnology from '../assets/fake-data/data-technology';
import dataTestimonials from '../assets/fake-data/data-testimonials2';
import FooterStyle2 from '../components/footer/FooterStyle2';
import HeaderOnePage from '../components/header/HeaderOnePage'
import AboutTwo from '../components/layouts/AboutTwo';
import Blog from '../components/layouts/Blog';
import CounterTwo from '../components/layouts/CounterTwo';
import FAQ3 from '../components/layouts/FAQ3';
import Infomation from '../components/layouts/Infomation';
import Montono2 from '../components/layouts/Montono2';
import Newsletter from '../components/layouts/Newsletter';
import RoadMap2 from '../components/layouts/RoadMap2';
import Team from '../components/layouts/Team';
import Technology from '../components/layouts/Technology';
import Testimonials2 from '../components/layouts/Testimonials2';
import SliderThree from '../components/slider/SliderThree';

const HomeOnePage = () => {
  return (
    <div className='home-3 one-page'>
        <HeaderOnePage />
        <SliderThree />
        <AboutTwo />
        <Infomation />
        <RoadMap2 data={dataRoadMap} />
        <Montono2 data={dataMontono} />
        <Team data={dataTeam} />
        <Technology data={dataTechnology} />
        <Testimonials2 data={dataTestimonials} />
        <CounterTwo />
        <Blog data={dataBlog} />
        <FAQ3 data={dataFaq} />
        <Newsletter />
        <FooterStyle2 />
    </div>
  );
}

export default HomeOnePage;