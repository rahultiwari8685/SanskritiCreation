import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Link from 'next/link'
import Services from "../../api/Services";
import Shape2 from '/public/images/line.png'
import Shape3 from '/public/images/icon/14.svg'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS4 = (props) => {
    useEffect(() => {
        const serviceSlider3 = new Swiper(".service-slider-3", {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }, []);


    return (
        <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: `url(${'/images/service/service-bg.jpg'})` }}>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h6 className="wow fadeInUp">More service us</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Create Stunning Print For<br />
                            <span> Your Business <Image src={Shape2} alt="img" /></span>
                        </h2>
                    </div>
                    <Link onClick={ClickHandler} href="/service" className="theme-btn" >See all Services</Link>
                </div>
            </div>
            <div className="services-wrapper-3">
                <div className="swiper service-slider-3">
                    <div className="swiper-wrapper">
                        {Services.slice(12, 16).map((service, sitem) => (
                            <div className="swiper-slide" key={sitem}>

                                <div className="service-box-items-3">
                                    <div className="service-thumb">
                                        <Image src={service.sImg} alt="img" />
                                        <div className="icon">
                                            <Image src={Shape3} alt="img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>01</h4>
                                            <h3><Link onClick={ClickHandler} href={'/service-details/[slug]'} as={`/service-details/${service.slug}`}>Digital Scanning</Link></h3>
                                            <p>
                                                Sed ut perspiciatis unde is <br />
                                                voluptatem accusant
                                            </p>
                                            <Link onClick={ClickHandler} href={'/service-details/[slug]'} as={`/service-details/${service.slug}`} className="arrow-icon"><i className="far fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS4;


