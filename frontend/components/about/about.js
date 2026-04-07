import React from 'react';

/* image  */
import Abimg1 from '/public/images/about/dot-1.png'
import Abimg2 from '/public/images/about/dot-2.png'
import Abimg3 from '/public/images/about/circle.png'
import Abimg4 from '/public/images/about/cap.png'
import Abimg5 from '/public/images/about/shape.png'
import Abimg6 from '/public/images/about/01.jpg'
import Abimg7 from '/public/images/about/02.jpg'
import Abimg8 from '/public/images/about/03.jpg'
import Abimg9 from '/public/images/line.png'
import Abimg10 from '/public/images/icon/01.svg'
import Abimg11 from '/public/images/about/author.png'
import Abimg12 from '/public/images/about/line.png'
import Abimg13 from '/public/images/icon/02.svg'
import Link from 'next/link';
import Image from 'next/image';

const about = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section section-padding pt-0">
            <div className="dot-shape">
                <Image src={Abimg1} alt="img" />
            </div>
            <div className="dot-shape-2">
                <Image src={Abimg2} alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="circle-shape float-bob-y">
                                    <Image src={Abimg3} alt="img" />
                                </div>
                                <div className="cap-shape float-bob-x">
                                    <Image src={Abimg4} alt="img" />
                                </div>
                                <div className="shape-img">
                                    <Image src={Abimg5} alt="img" />
                                </div>
                                <div className="about-image-1 wow fadeInUp">
                                    <Image src={Abimg6} alt="img" />
                                </div>
                                <div className="about-image-2">
                                    <Image src={Abimg7} alt="img" />
                                </div>
                                <div className="about-image-3">
                                    <Image src={Abimg8} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">More about us</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Create Stunning Print For
                                        <span> Your Business <Image src={Abimg9} alt="img" /></span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    A full administration printing background. Print shirts for yourself
                                    or your online business Beautiful, customizable template,
                                </p>
                                <div className="row g-4">
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon-box-items active">
                                            <div className="icon-items">
                                                <div className="icon">
                                                    <Image src={Abimg10} alt="img" />
                                                </div>
                                                <h6>Smooth Automation</h6>
                                            </div>
                                            <span>
                                                No matter how much you know
                                                about a part icular medical
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon-box-items">
                                            <div className="icon-items">
                                                <div className="icon bg-2">
                                                    <Image src={Abimg13} alt="" />
                                                </div>
                                                <h6>Custom Branding Tools</h6>
                                            </div>
                                            <span>
                                                No matter how much you know
                                                about a part icular medical
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">more about us</Link>
                                    <div className="author-image wow fadeInUp" data-wow-delay=".5s">
                                        <Image src={Abimg11} alt="img" />
                                            <div className="content">
                                            <span>10m+ Trusted Global clients <Image src={Abimg12} alt="img" /></span>
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

export default about;