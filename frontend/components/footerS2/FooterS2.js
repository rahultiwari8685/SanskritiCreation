import React from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Services from "../../api/Services";
import Shape1 from '/public/images/footer/line-shape.png'
import Shape2 from '/public/images/footer/star.png'
import Shape3 from '/public/images/mail.png'
import Logo from '/public/images/logo/white-logo.svg'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const FooterS2 = () => {
    return (
        <footer className="footer-section style-2 bg-cover" style={{ backgroundImage: `url(${'/images/footer/footer-bg.jpg'})` }}>
            <div className="line-shape float-bob-y">
                <Image src={Shape1} alt="img" />
            </div>
            <div className="star-shape float-bob-y">
                <Image src={Shape2} alt="img" />
            </div>
            <div className="container">
                <div className="footer-newsletter-wrapper">
                    <div className="newsletter-items wow fadeInUp" data-wow-delay=".3s">
                        <div className="icon">
                            <Image src={Shape3} alt="img" />
                        </div>
                        <h2>
                            Get Our Latest's News <br />
                            & Updates
                        </h2>
                    </div>
                    <div className="newsletter-input wow fadeInUp" data-wow-delay=".5s">
                        <input type="email" id="email22" placeholder="Business email adress" />
                        <button className="newsletter-btn" type="submit">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="footer-widgets-wrapper style-2">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link onClick={ClickHandler} href="/home">
                                        <Image src={Logo} alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p className="text-white">
                                        A new way to make the payments easy,
                                        reliable and 100% secure. claritatem itamconse quat. Exerci tation ullamcorper.
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link onClick={ClickHandler} href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link onClick={ClickHandler} href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link onClick={ClickHandler} href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                        <Link onClick={ClickHandler} href="#"><i className="fa-brands fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".4s">
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
                        <div className="col-xl-3 ps-lg-4 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".6s">
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
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className="footer-content">
                                    <p className="text-white">
                                        2972 Westheimer Rd. Santa Ana, <br />
                                        Illinois 85486
                                    </p>
                                    <ul className="contact-list">
                                        <li>
                                            <Link onClick={ClickHandler} href="#" className="link">contact@info.com</Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="tel:+8060008899">+806 (000) 88 99</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <AnchorLink onClick={ClickHandler} href="#__next" id="scrollUp" className="scroll-icon">
                        <i className="fa-solid fa-chevrons-up"></i>
                    </AnchorLink>
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                            Copyright <span>@2024</span> <Link onClick={ClickHandler} href="/home">Ui-drops</Link> All Rights Reserved
                        </p>
                        <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <Link onClick={ClickHandler} href="/">
                                    Faqs
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} href="/contact">
                                    Setting
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} href="/contact">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterS2;