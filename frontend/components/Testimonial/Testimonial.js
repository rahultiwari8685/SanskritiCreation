import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Line1 from '/public/images/line.png';
import Line2 from '/public/images/testimonial/line.png';
import TS2 from '/public/images/testimonial/testimonial.png';
import TS3 from '/public/images/testimonial/work-shape.png';
import Image from 'next/image';

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const Testimonial = () => {



    return (
        <section
            className="testimonial-section section-padding fix bg-cover"
            style={{ backgroundImage: `url(${'/images/testimonial/testimonial-bg.jpg'})` }}
        >
            <div className="array-button">
                <button className="array-prev"><i className="fa-regular fa-chevron-left"></i></button>
                <button className="array-next"><i className="fa-regular fa-chevron-right"></i></button>
            </div>
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="row g-4 justify-content-between align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title">
                                <h6 className="wow fadeInUp">More about us</h6>
                                <h2 className="text-white split-text right">
                                    Create Stunning Print For <br />
                                    <span>Your Business <Image src={Line1} alt="img" /></span>
                                </h2>
                            </div>
                            <Swiper
                                spaceBetween={30}
                                speed={2000}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: '.array-next',
                                    prevEl: '.array-prev',
                                }}
                                className="testimonial-slider"
                            >
                                <SwiperSlide>
                                    <div className="testimonial-content mt-4 mt-md-0">
                                        <p>
                                            Climb the mountain not to plant your flag but to embrace
                                            the ways challenge, enjoy the air, and behold the. Climb it
                                            see the world, not so the world can see you. This is due to
                                            excellent service competitive pricing their
                                        </p>
                                        <div className="client-info">
                                            <h3>
                                                Robert J. Hare/ <span>Graphics Designer</span>
                                            </h3>
                                            <div className="star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-content mt-4 mt-md-0">
                                        <p>
                                            Climb the mountain not to plant your flag but to embrace
                                            the ways challenge, enjoy the air, and behold the. Climb it
                                            see the world, not so the world can see you. This is due to
                                            excellent service competitive pricing their
                                        </p>
                                        <div className="client-info">
                                            <h3>
                                                Robert J. Hare/ <span>Graphics Designer</span>
                                            </h3>
                                            <div className="star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-content mt-4 mt-md-0">
                                        <p>
                                            Climb the mountain not to plant your flag but to embrace
                                            the ways challenge, enjoy the air, and behold the. Climb it
                                            see the world, not so the world can see you. This is due to
                                            excellent service competitive pricing their
                                        </p>
                                        <div className="client-info">
                                            <h3>
                                                Robert J. Hare/ <span>Graphics Designer</span>
                                            </h3>
                                            <div className="star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-lg-5">
                            <div className="testimoni-image-items ">
                                <div className="line-shape">
                                    <Image src={Line2} alt="shape-img" />
                                </div>
                                <div className="testimoni-image image-anime">
                                    <Image src={TS2} alt="img"  data-speed="0.8" />
                                </div>
                                <h2 className="work-shape">
                                    <Image src={TS3} alt="img" />
                                </h2>
                                <div className="icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
