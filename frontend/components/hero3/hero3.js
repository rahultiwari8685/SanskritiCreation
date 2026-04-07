import React, { useEffect } from "react";
import Link from 'next/link';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

import Line from '/public/images/hero/line.png';
import Bar from '/public/images/hero/bar.png';
import Tshirt from '/public/images/hero/t-shirt.png';
import Tshirt1 from '/public/images/hero/t-shirt-2.png';
import Tshirt2 from '/public/images/hero/t-shirt-3.png';
import Bucket from '/public/images/hero/bucket-front-color.png';
import Mockup from '/public/images/hero/mockup-generator.png';
import Mockup1 from '/public/images/hero/stiker.png';
import Mockup2 from '/public/images/hero/cap.png';
import Image from "next/image";

const Hero3 = () => {

    useEffect(() => {
        const sliderswiper = new Swiper('.hero-slider-2', {
            speed: 1500,
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            effect: 'fade',
            breakpoints: {
                1600: { slidesPerView: 1 },
                1400: { slidesPerView: 1 },
                1200: { slidesPerView: 1 },
                992: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 }
            },
            pagination: {
                el: ".tp-slider-2-dots",
                clickable: true,
            },
            a11y: false,
        });
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="hero-section hero-3 bg-cover" style={{ backgroundImage: `url(${'/images/hero/hero-bg-2.jpg'})` }}>
            <div className="line-shape">
                <Image src={Line} alt="line shape" />
            </div>
            <div className="container">
                <div className="swiper hero-slider-2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="row g-4 justify-content-between align-items-center">
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="hero-content">
                                        <h6>Digital printing Service</h6>
                                        <h1>
                                            Custom T-shirt,
                                            <span>simplified.. <Image src={Bar} alt="bar shape" /></span>
                                        </h1>
                                        <p>
                                            Beautiful, customizable template, with a ton of web blocks <br />
                                            to create an amazing website that looks
                                        </p>
                                    </div>
                                    <div className="hero-button">
                                        <Link onClick={ClickHandler} href="/shop" className="theme-btn">Order Today</Link>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-xl-6 col-lg-6">
                                    <div className="hero-image-items">
                                        <div className="hero-image">
                                            <Image src={Tshirt} alt="t-shirt" />
                                        </div>
                                        <div className="color-box">
                                            <Image src={Bucket} alt="bucket color" />
                                        </div>
                                        <div className="mockup-shape">
                                            <Image src={Mockup} alt="mockup" />
                                        </div>
                                        <div className="stickers-shape">
                                            <Image src={Mockup1} alt="sticker" />
                                        </div>
                                        <div className="cap-shape">
                                            <Image src={Mockup2} alt="cap" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="row g-4 justify-content-between align-items-center">
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="hero-content">
                                        <h6>Digital printing Service</h6>
                                        <h1>
                                            Custom T-shirt,
                                            <span>simplified.. <Image src={Bar} alt="bar shape" /></span>
                                        </h1>
                                        <p>
                                            Beautiful, customizable template, with a ton of web blocks <br />
                                            to create an amazing website that looks
                                        </p>
                                    </div>
                                    <div className="hero-button">
                                        <Link onClick={ClickHandler} href="/shop" className="theme-btn">Order Today</Link>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-xl-6 col-lg-6">
                                    <div className="hero-image-items">
                                        <div className="hero-image">
                                            <Image src={Tshirt1} alt="t-shirt" />
                                        </div>
                                        <div className="color-box">
                                            <Image src={Bucket} alt="bucket color" />
                                        </div>
                                        <div className="mockup-shape">
                                            <Image src={Mockup} alt="mockup" />
                                        </div>
                                        <div className="stickers-shape">
                                            <Image src={Mockup1} alt="sticker" />
                                        </div>
                                        <div className="cap-shape">
                                            <Image src={Mockup2} alt="cap" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="row g-4 justify-content-between align-items-center">
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="hero-content">
                                        <h6>Digital printing Service</h6>
                                        <h1>
                                            Custom T-shirt,
                                            <span>simplified.. <Image src={Bar} alt="bar shape" /></span>
                                        </h1>
                                        <p>
                                            Beautiful, customizable template, with a ton of web blocks <br />
                                            to create an amazing website that looks
                                        </p>
                                    </div>
                                    <div className="hero-button">
                                        <Link onClick={ClickHandler} href="/shop" className="theme-btn">Order Today</Link>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-xl-6 col-lg-6">
                                    <div className="hero-image-items">
                                        <div className="hero-image">
                                            <Image src={Tshirt2} alt="t-shirt" />
                                        </div>
                                        <div className="color-box">
                                            <Image src={Bucket} alt="bucket color" />
                                        </div>
                                        <div className="mockup-shape">
                                            <Image src={Mockup} alt="mockup" />
                                        </div>
                                        <div className="stickers-shape">
                                            <Image src={Mockup1} alt="sticker" />
                                        </div>
                                        <div className="cap-shape">
                                            <Image src={Mockup2} alt="cap" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero3;
