import React from 'react';
import Logo1 from '/public/images/brand/brand-logo-11.png'
import Logo2 from '/public/images/brand/brand-logo-12.png'
import Logo3 from '/public/images/brand/brand-logo-13.png'
import Logo4 from '/public/images/brand/brand-logo-14.png'
import Logo5 from '/public/images/brand/brand-logo-15.png'
import VideoModal from '../ModalVideo/VideoModal';
import Image from 'next/image';



const CtaVideoSection = () => {
    return (
        <div className="cta-video-section">
            <div className="mycustom-marque style-about">
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div className="cmn-textslide">business </div>
                        <div className="cmn-textslide">Consulting</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide">business </div>
                        <div className="cmn-textslide">Consulting</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide">business </div>
                        <div className="cmn-textslide">Consulting</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide">business </div>
                        <div className="cmn-textslide">Consulting</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide">business </div>
                        <div className="cmn-textslide">Consulting</div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="cta-video-wrapper bg-cover" style={{ backgroundImage: `url(${'/images/cta-video.jpg'})`}}>
                    <div >
                        <VideoModal/>
                    </div>
                </div>
            </div>
            <div className="brand-wrapper-4 bg-cover" style={{ backgroundImage: `url(${'/images/brand/bg.jpg'})`}}>
                <div className="container">
                    <h4 className="text-center">We are blessed to work with leading brands <span>brands</span></h4>
                    <div className="brand-items">
                        <div className="brand-logo">
                            <Image src={Logo1} alt="img" />
                        </div>
                        <div className="brand-logo">
                            <Image src={Logo2} alt="img" />
                        </div>
                        <div className="brand-logo">
                            <Image src={Logo3} alt="img" />
                        </div>
                        <div className="brand-logo">
                            <Image src={Logo4} alt="img" />
                        </div>
                        <div className="brand-logo">
                            <Image src={Logo5} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CtaVideoSection;