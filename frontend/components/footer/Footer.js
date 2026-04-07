import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";

import Fi1 from '/public/images/footer/dot.png'
import Fi2 from '/public/images/footer/footer-shape-1.png'
import Fi3 from '/public/images/footer/footer-shape-2.png'
import Logo from '/public/images/logo/black-logo.svg'
import Fi4 from '/public/images/QRcode.png'
import Fi5 from '/public/images/apple.png'
import Fi6 from '/public/images/play-store.png'
import Fi7 from '/public/images/card.png'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="dot-shape">
                <Image src={Fi1} alt="img" />
            </div>
            <div className="footer-shape-1">
                <Image src={Fi2} alt="img" />
            </div>
            <div className="footer-shape-2">
                <Image src={Fi3} alt="img" />
            </div>
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4" >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link onClick={ClickHandler} href="/home">
                                        <Image src={Logo} alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        A new way to make the payments easy,
                                        reliable and 100% secure. claritatem itamconse quat. Exerci tation ullamcorper.
                                    </p>
                                    <ul className="contact-list">
                                        <li>
                                            <i className="fa-sharp fa-solid fa-phone-volume"></i>
                                            <a href="tel:+8060008899">+806 (000) 88 99</a>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-envelope"></i>
                                            <a onClick={ClickHandler} href="mailto:contact@info.com" className="link">contact@info.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-4">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Usefull Links</h3>
                                </div>
                                <ul className="list-items">
                                    {Services.slice(0, 5).map((service, sitem) => (
                                        <li key={sitem}>
                                        <Link onClick={ClickHandler} href={'/service-details/[slug]'} as={`/service-details/${service.slug}`}>
                                                {service.title}
                                        </Link>
                                    </li>
                                    ))} 
                                   
                                 
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-lg-4 col-sm-6 col-md-6 col-lg-4" >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Community</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link onClick={ClickHandler} href="/contact">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/contact">
                                            Partners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/contact">
                                            Suggestions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/news">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/contact">
                                            Newsletters
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className="footer-content">
                                    <div className="scan-items">
                                        <div className="scan-img">
                                            <Image src={Fi4} alt="img" />
                                        </div>
                                        <ul className="store-list">
                                            <li>
                                                <Link onClick={ClickHandler} href="/contact">
                                                    <Image src={Fi5} alt="img" />
                                                    App Store
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link onClick={ClickHandler} href="/contact">
                                                    <Image src={Fi6} alt="img" />
                                                    Google play
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="brand-logo">
                                        <Image src={Fi7} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <Link onClick={ClickHandler} href="/" id="scrollUp" className="scroll-icon">
                        <i className="fa-solid fa-chevrons-up"></i>
                    </Link>
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="fadeInLeft color-2" >
                            Copyright <span>@2024</span> <Link onClick={ClickHandler} href="/">wpoceans</Link> All Rights Reserved
                        </p>
                        <div className="social-icon d-flex align-items-center fadeInRight" >
                            <Link onClick={ClickHandler} href="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link onClick={ClickHandler} href="/"><i className="fa-brands fa-vimeo-v"></i></Link>
                            <Link onClick={ClickHandler} href="/"><i className="fab fa-twitter"></i></Link>
                            <Link onClick={ClickHandler} href="/"><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;