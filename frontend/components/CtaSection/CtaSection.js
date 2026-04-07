import React from 'react';

import Ct1 from '/public/images/cta-img.png';
import Ct2 from '/public/images/hand-bag.png';
import Ct3 from '/public/images/t-shirt.png';
import Ct4 from '/public/images/print-box.png';
import Link from 'next/link';
import Image from 'next/image';

const CtaSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-wrapper bg-cover" style={{backgroundImage: `url(${'/images/cta-bg.jpg'})`} }>
                    <div className="cta-image">
                        <Image src={Ct1} alt="img" />
                    </div>
                    <div className="hand-bag float-bob-x">
                        <Image src={Ct2} alt="img" />
                    </div>
                    <div className="t-shirt-shape float-bob-x">
                        <Image src={Ct3} alt="img" />
                    </div>
                    <div className="prite-box float-bob-y">
                        <Image src={Ct4} alt="img" />
                    </div>
                    <div className="section-title">
                        <h6 className="wow fadeInUp">printing Service</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Ready To Create Some <br />
                                Custom Products?
                        </h2>
                    </div>
                    <Link onClick={ClickHandler} href="/about" className="theme-btn mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">more about us</Link>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;