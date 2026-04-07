import React from 'react'
import Link from 'next/link'
import abImg from '/public/images/about/t-shirt.png'
import abImg1 from '/public/images/about/shape-1.png'
import abImg2 from '/public/images/about/mug1.png'
import abImg3 from '/public/images/about/color_cycle.png'
import abImg4 from '/public/images/about/sticer.png'
import abImg5 from '/public/images/about/shape-2.png'
import Line from '/public/images/line.png'
import author from '/public/images/about/author.png'
import Line2 from '/public/images/about/line.png'
import Image from 'next/image'


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-image wow img-custom-anim-top" >
                                    <Image src={abImg} alt="img" />
                                </div>
                                <div className="shape-1">
                                    <Image src={abImg1} alt="img" />
                                </div>
                                <div className="shape-2">
                                    <Image src={abImg2} alt="img" />
                                </div>
                                <div className="shape-3">
                                    <Image src={abImg3} alt="img" />
                                </div>
                                <div className="shape-4">
                                    <Image src={abImg4} alt="img" />
                                </div>
                                <div className="shape-5">
                                    <Image src={abImg5} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">More about us</h6>
                                    <h2 className="wow fadeInUp" >
                                        Create Stunning Print For
                                        <span> Your Business <Image src={Line} alt="img" /></span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" >
                                    A full administration printing background. Print shirts for yourself
                                    or your online business Beautiful, customizable template,
                                </p>
                                <ul className="about-list wow fadeInUp">
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Large paper & stock selection & Unique Print
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Printing programs tailored to your company ne
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Customer places their order Connect your store
                                    </li>
                                </ul>
                                <div className="about-author">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn wow fadeInUp" >more about us</Link>
                                    <div className="author-image wow fadeInUp" >
                                        <Image src={author} alt="author-img" />
                                            <div className="content">
                                            <span>10m+ Trusted Global clients <Image src={Line2} alt="img" /></span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;