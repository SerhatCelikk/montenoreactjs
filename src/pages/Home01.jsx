import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataCard from '../assets/fake-data/data-card';
import dataFaq from '../assets/fake-data/data-faq';
import dataMontono from '../assets/fake-data/data-montono';
import dataPartners from '../assets/fake-data/data-partners';
import dataPortfolio from '../assets/fake-data/data-portfolio';
import dataRoadMap from '../assets/fake-data/data-roadmap';
import dataTeam from '../assets/fake-data/data-team';
import dataTestimonials from '../assets/fake-data/data-testimonials';
import About from '../components/layouts/About';
import Action from '../components/layouts/Action';
import FAQ from '../components/layouts/FAQ';
import Montono from '../components/layouts/Montono';
import Newsletter from '../components/layouts/Newsletter';
import Partners from '../components/layouts/Partners';
import Portfolio from '../components/layouts/Portfolio';
import RoadMap from '../components/layouts/RoadMap';
import Speciality from '../components/layouts/Speciality';
import Team from '../components/layouts/Team';
import Testimonial from '../components/layouts/Testimonial';
import SliderOne from '../components/slider/SliderOne';
import { useWeb3 } from "@fewcha/web3-react";
import { ConnectWallet } from "@fewcha/web3-react";
const Home01 = () => {
    const web3 = useWeb3();
const { init, account, balance, isConnected, connect, disconnect, network, txs, sdk, token } = web3;

const connectWallet = () => {
    connect();
    console.log("connectWallet");
    };

    return (
        <div>
            <button onClick={()=>{console.log(isConnected,account,balance);}}>asdasdad</button>
            <button onClick={connectWallet}>asdasdad</button>
            <ConnectWallet />
<ConnectWallet type="grid" />
            <Header />
            <SliderOne />
            <About />
            <Speciality data={dataCard} />
            <Portfolio data={dataPortfolio} />
            <Montono data={dataMontono} />
            {/* <RoadMap data={dataRoadMap} /> */}
            {/* <Newsletter /> */}
            {/* <Team data={dataTeam} /> */}
            <Partners data={dataPartners} />
            {/* <Testimonial data={dataTestimonials} /> */}
            <FAQ data={dataFaq} />
            <Action />
            <Footer />
        </div>
    );
}

export default Home01;