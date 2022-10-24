import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import img from '../assets/images/items/group-ntf-04.png'

import img1 from '../assets/images/items/item-26.png'
import img2 from '../assets/images/items/item-08.png'
import img3 from '../assets/images/items/item-09.png'
import img4 from '../assets/images/items/item-10.png'
import Montono2 from '../components/layouts/Montono2';
import dataMontono from '../assets/fake-data/data-montono';
import Action from '../components/layouts/Action';


const Collections = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [data] = useState([
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
    ])
    return (
        <div className='collections'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">NFT</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <img className="s2" src={img} alt="Monteno" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section collection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>About</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">About Monteno</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Know More About <br /> Monteno</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image">

                            <Swiper 
                                style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-top"
                            >
                                
                                {
                                    data.map((data,index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item bg-2"><img src={data.img} alt="Monteno" /></div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-thumbs"
                            >
                                {
                                    data.map((data,index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item bg-2"><img src={data.img} alt="Monteno" /></div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
        
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text">
                                <h3 className="fs-42 mb-31">About Monteno ii</h3>
                                <p className="fs-18">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa </p>
                                <h3 className="fs-30 mt-37">Features</h3>
                                <ul className="nft">
                                    <li><Link to="#"><i className="fa fa-arrow-right"></i><span>Latest Technology</span></Link></li>
                                    <li><Link to="#"><i className="fa fa-arrow-right"></i><span>Regular Updates</span></Link></li>
                                    <li><Link to="#"><i className="fa fa-arrow-right"></i><span>Unlimited Stock</span></Link></li>
                                    <li><Link to="#"><i className="fa fa-arrow-right"></i><span>Quality Assured</span></Link></li>
                                </ul>
                                <h3 className="fs-30 mt-19">Links</h3>
                                <ul className="nft s2">
                                    <li><Link to="#"><i className="fas fa-external-link-alt"></i><span>Open Sea</span></Link></li>
                                    <li><Link to="#"><i className="fas fa-external-link-alt"></i><span>Rarible</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            <Montono2 data={dataMontono} />
            <Action />
            <Footer />
        </div>
    );
}

export default Collections;