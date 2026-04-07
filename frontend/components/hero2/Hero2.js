import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Autoplay, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Shap1 from '/public/images/hero/flower.png'
import Shap2 from '/public/images/hero/rong-box.png'
import Shap3 from '/public/images/hero/stickers.png'
import Link from "next/link";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Swiper
                modules={[Navigation,  Autoplay, EffectFade]}
                loop={true}
                slidesPerView={1}
                effect="fade"
                speed={3000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
              
            >
                <SwiperSlide>
                    <div
                        className="hero-2 bg-cover"
                        style={{ backgroundImage: `url(${'/images/hero/hero-1.jpg'})` }}
                    >
                        <div className="hero-image">
                            <div
                                className="flower-shape"
                                data-animation="slideInDown"
                                data-duration="2s"
                                data-delay="1.5s"
                            >
                                <Image src={Shap1} alt="img" />
                            </div>
                            <div
                                className="rong-shape"
                                data-animation="slideInLeft"
                                data-duration="2s"
                                data-delay="1.7s"
                            >
                                <Image src={Shap2} alt="img" />
                            </div>
                            <div
                                className="stickers-shape"
                                data-animation="slideInRight"
                                data-duration="2s"
                                data-delay="1.9s"
                            >
                                <Image src={Shap3} alt="img" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-xxl-end">
                                <div className="col-lg-7">
                                    <div
                                        className="hero-content"
                                        data-animation="fadeInUp"
                                        data-delay="1.1s"
                                        style={{
                                            backgroundImage: `url(${'/images/hero/hero-content-shape.png'})`,
                                        }}
                                    >
                                        <h5>Digital printing Service</h5>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Get 25% off your <br /> first order
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            Beautiful, customizable template, with a ton of web blocks <br />
                                            to create an amazing website that looks
                                        </p>
                                        <div className="hero-button">
                                            <Link onClick={ClickHandler} href="/shop"
                                                data-animation="fadeInUp"
                                                data-delay="1.9s"
                                                className="theme-btn hover-white"
                                            >
                                                Order Today
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero-2 bg-cover"
                        style={{ backgroundImage: `url(${'/images/hero/hero-2.jpg'})` }}
                    >
                       <div className="hero-image">
                            <div
                                className="flower-shape"
                                data-animation="slideInDown"
                                data-duration="2s"
                                data-delay="1.5s"
                            >
                                <Image src={Shap1} alt="img" />
                            </div>
                            <div
                                className="rong-shape"
                                data-animation="slideInLeft"
                                data-duration="2s"
                                data-delay="1.7s"
                            >
                                <Image src={Shap2} alt="img" />
                            </div>
                            <div
                                className="stickers-shape"
                                data-animation="slideInRight"
                                data-duration="2s"
                                data-delay="1.9s"
                            >
                                <Image src={Shap3} alt="img" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-xxl-end">
                                <div className="col-lg-7">
                                    <div
                                        className="hero-content"
                                        data-animation="fadeInUp"
                                        data-delay="1.1s"
                                        style={{
                                            backgroundImage: `url(${'/images/hero/hero-content-shape.png'})`,
                                        }}
                                    >
                                        <h5>Digital printing Service</h5>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Get 30% off your <br /> first order
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            Beautiful, customizable template, with a ton of web blocks <br />
                                            to create an amazing website that looks
                                        </p>
                                        <div className="hero-button">
                                            <Link onClick={ClickHandler} href="/shop"
                                                data-animation="fadeInUp"
                                                data-delay="1.9s"
                                                className="theme-btn hover-white"
                                            >
                                                Order Today
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero-2 bg-cover"
                        style={{ backgroundImage: `url(${'/images/hero/hero-3.jpg'})` }}
                    >
                       <div className="hero-image">
                            <div
                                className="flower-shape"
                                data-animation="slideInDown"
                                data-duration="2s"
                                data-delay="1.5s"
                            >
                                <Image src={Shap1} alt="img" />
                            </div>
                            <div
                                className="rong-shape"
                                data-animation="slideInLeft"
                                data-duration="2s"
                                data-delay="1.7s"
                            >
                                <Image src={Shap2} alt="img" />
                            </div>
                            <div
                                className="stickers-shape"
                                data-animation="slideInRight"
                                data-duration="2s"
                                data-delay="1.9s"
                            >
                                <Image src={Shap3} alt="img" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-xxl-end">
                                <div className="col-lg-7">
                                    <div
                                        className="hero-content"
                                        data-animation="fadeInUp"
                                        data-delay="1.1s"
                                        style={{
                                            backgroundImage: `url(${'/images/hero/hero-content-shape.png'})`,
                                        }}
                                    >
                                        <h5>Digital printing Service</h5>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Get 20% off your <br /> first order
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            Beautiful, customizable template, with a ton of web blocks <br />
                                            to create an amazing website that looks
                                        </p>
                                        <div className="hero-button">
                                            <Link onClick={ClickHandler} href="/shop"
                                                data-animation="fadeInUp"
                                                data-delay="1.9s"
                                                className="theme-btn hover-white"
                                            >
                                                Order Today
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="dot-2"></div>
        </section>
    );
};

export default HeroSection;
