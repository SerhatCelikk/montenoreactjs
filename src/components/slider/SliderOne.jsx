import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import item from "../../assets/fake-data/item";

const SliderOne = () => {
  const [datatext] = useState({
    subtitle: "We are The Animal Club NFT",
    title: "Collect Next Generation NFTs Today",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  });

  return (
    <section className="tf-section hero-slider">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-6 col-12">
            <div className="block-text pt-24">
              <h6 className="sub-title" data-aos="fade-up">
                {datatext.subtitle}
              </h6>
              <h2 className="" data-aos="fade-up">
                {datatext.title}
              </h2>
              <p className="" data-aos="fade-up">
                {datatext.desc}
              </p>
              <Link
                to="/about"
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Get Connected
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-md-6 col-12">
            <div className="content-right d-flex">
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className="item">
                    <img
                      
                      src={item.item1}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                      
                      src={item.item2}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      
                      src={item.item3}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                      
                      src={item.item4}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                      
                      src={item.item5}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item6}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item14}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  reverseDirection: true,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item8}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item9}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item10}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item11}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item12}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item17}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item7}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item15}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item16}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item13}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item18}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item19}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item20}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item ">
                    <img
                     
                      src={item.item21}
                      alt="Monteno"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
