import React from 'react';
import Link from 'next/link';
import Mq1 from '/public/images/marquee-box-3.png'
import Mq3 from '/public/images/print-box.png'
import Mq4 from '/public/images/hand-bag.png'
import Mq5 from '/public/images/cta-sticker.png'
import Mq6 from '/public/images/cta-t-shirt.png'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSectionS2 = () => {
    return (
        <section className="cta-section-3">
            <div className="mycustom-marque style-3">
                <div className="scrolling-wrap">
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><Image src={Mq1} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><Image src={Mq1} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><Image src={Mq1} alt="img" /></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="cta-wrapper-2 bg-cover"  style={{ backgroundImage: `url(${'/images/cta-bg-2.jpg'})` }}>
                    <div className="prite-box float-bob-y">
                        <Image src={Mq3} alt="img" />
                    </div>
                    <div className="hand-bag float-bob-x">
                        <Image src={Mq4}alt="img" />
                    </div>
                    <div className="cta-sticker float-bob-y">
                        <Image src={Mq5} alt="img" />
                    </div>
                    <div className="cta-content">
                        <div className="section-title">
                            <h6 className="bg-white wow fadeInUp">printing Service</h6>
                            <h2 className="text-white split-text right">
                                Ready To Create Some <br/>
                                    Custom Products?
                            </h2>
                        </div>
                        <div className="cta-btn mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            <Link onClick={ClickHandler} href="/about" className="theme-btn">more about us</Link>
                        </div>
                    </div>
                    <div className="cta-image">
                        <Image src={Mq6} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS2;