import React from 'react';
import Link from 'next/link';

import lineshape from '/public/images/line-3.png'
import ratting from '/public/images/ratting-shape.png'
import brush from '/public/images/brush-front.png'
import demand from '/public/images/demand-shape.png'
import homedemand from '/public/images/home-demand.png'
import custom from '/public/images/custom-print-img.png'
import lineab from '/public/images/line-2.png'
import lineab1 from '/public/images/icon/09.svg'
import lineab2 from '/public/images/icon/10.svg'
import lineab3 from '/public/images/icon/16.svg'
import Image from 'next/image';

const about3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="product-demand-section fix section-padding">
            <div className="line-shape">
                <Image src={lineshape} alt="img" />
            </div>
            <div className="container">
                <div className="product-demand-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-demand-image">
                                <Image src={custom} alt="img" className="border-radius-22 wow img-custom-anim-top" />
                                <div className="ratting-shape">
                                    <Image src={ratting} alt="img" />
                                </div>
                                <div className="brush-shape">
                                    <Image src={brush} alt="img" />
                                </div>
                                <div className="demand-shape float-bob-y">
                                    <Image src={demand} alt="img" />
                                </div>
                                <div className="home-demand-shape float-bob-x">
                                    <Image src={homedemand} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-demand-content">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Create And Sell Custom On-
                                        <span> Demand Products <Image src={lineab} alt="img" /></span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    A full administration printing background. Print shirts for yourself <br />
                                    or your online business Beautiful, customizable template,
                                </p>
                                <div className="icon-wrapper">
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <Image src={lineab1} alt="img" />
                                        </div>
                                        <h4>
                                            Mix and match colors, <br />
                                            sizes, and designs
                                        </h4>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <Image src={lineab2} alt="img" />
                                        </div>
                                        <h4>
                                            Top quality prints using <br />
                                            the latest technology
                                        </h4>
                                    </div>
                                </div>
                                <ul className="wow fadeInUp" data-wow-delay=".3s">
                                    <li>
                                        <Image src={lineab3} alt="img" />
                                        Printing programs tailored to your company needs
                                    </li>
                                    <li>
                                        <Image src={lineab3} alt="img" />
                                        Large paper & stock selection & Unique Print
                                    </li>
                                </ul>
                                <Link onClick={ClickHandler} href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".5s">more about us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about3;