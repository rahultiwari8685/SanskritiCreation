import React from 'react';
import Link from 'next/link';
import Shape1 from '/public/images/hero/circle-2.png'
import Shape2 from '/public/images/hero/vector.png'
import Shape3 from '/public/images/hero/circle.png'
import Shape4 from '/public/images/hero/arrow-up.png'
import Shape5 from '/public/images/Scroll_Down.png'
import Shape6 from '/public/images/hero/bar.png'
import hero1 from '/public/images/hero/hero-1.png'
import hero2 from '/public/images/hero/information.png'
import Image from 'next/image';



const hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url(${'/images/hero/hero-bg.jpg'})` }} >
            <div className="circle-shape">
                <Image src={Shape1} alt="img" />
            </div>
            <div className="vector-shape float-bob-x">
                <Image src={Shape2} alt="img" />
            </div>
            <div className="circle-shape-2">
                <Image src={Shape3} alt="img" />
            </div>
            <div className="arrow-shape float-bob-y">
                <Image src={Shape4} alt="img" />
            </div>
            <div id="scrollDown" className="scroll-down">
                <Image src={Shape5} alt="img" />
            </div>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h6 className="wow fadeInUp">Digital printing Service</h6>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Produce Printing,
                                <span>Art & Sticker <Image src={Shape6} alt="img" /></span>..
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                Beautiful, customizable template, with a ton of web blocks <br />
                                to create an amazing website that looks
                            </p>
                            <ul className="list wow fadeInUp" data-wow-delay=".7s">
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    Top quality prints using the latest technology
                                </li>
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    Mix and match colors, sizes, and designs
                                </li>
                            </ul>
                            <Link href="/shop" onClick={ClickHandler} className="theme-btn wow fadeInUp" data-wow-delay=".9s">Custom order</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="hero-thumb">
                            <Image src={hero1} alt="hero-img" />
                            <div className="information-shape float-bob-x">
                                <Image src={hero2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;