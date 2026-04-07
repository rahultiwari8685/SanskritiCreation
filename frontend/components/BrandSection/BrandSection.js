import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay } from 'swiper';

// Import brand logos
import BS1 from '/public/images/brand/brand-logo-1.png';
import BS2 from '/public/images/brand/brand-logo-2.png';
import BS3 from '/public/images/brand/brand-logo-3.png';
import BS4 from '/public/images/brand/brand-logo-4.png';
import BS5 from '/public/images/brand/brand-logo-5.png';
import BS6 from '/public/images/brand/brand-logo-6.png';
import BS7 from '/public/images/brand/brand-logo-7.png';
import BS8 from '/public/images/brand/brand-logo-8.png';
import BS9 from '/public/images/brand/brand-logo-9.png';
import BS10 from '/public/images/brand/brand-logo-10.png';
import Image from 'next/image';

// Install required Swiper modules
SwiperCore.use([Autoplay]);

const BrandSection = () => {
    return (
        <div className="brand-section">
            <div className="container">
                <div className="brand-wrapper">
                    <Swiper
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        breakpoints={{
                            1199: { slidesPerView: 5 },
                            991: { slidesPerView: 4 },
                            767: { slidesPerView: 3 },
                            575: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand-logo">
                                <Image src={BS1} alt="Brand 1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <Image src={BS2} alt="Brand 2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <Image src={BS3} alt="Brand 3" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <Image src={BS4} alt="Brand 4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <Image src={BS5} alt="Brand 5" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <Image src={BS3} alt="Brand 3" />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <Swiper
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        autoplay={{ delay: 1000, reverseDirection: true, disableOnInteraction: false }}
                        breakpoints={{
                            1199: { slidesPerView: 5 },
                            991: { slidesPerView: 4 },
                            767: { slidesPerView: 3 },
                            575: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <Image src={BS6} alt="Brand 6" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <Image src={BS7} alt="Brand 7" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <Image src={BS8} alt="Brand 8" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <Image src={BS9} alt="Brand 9" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <Image src={BS10} alt="Brand 10" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <Image src={BS7} alt="Brand 7" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;
