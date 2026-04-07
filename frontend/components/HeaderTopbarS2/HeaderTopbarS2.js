import React from 'react';

import Link from 'next/link';
import CountdownTimer from './CountdownTimer';

const HeaderTopbarS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className="container-fluid">
            <div className="header-top-wrapper-2">
                <div className="coming-soon">
                    <h5>Extra Sale 30% off</h5>
                    <CountdownTimer />
                    <Link onClick={ClickHandler} href="/shop" className="theme-btn"> Shop Now</Link>
                </div>
                <div className="header-top-right-2">
                    <h6><i className="fas fa-truck"></i> Track Your Order</h6>
                    <div className="social-icon d-flex align-items-center">
                        <Link onClick={ClickHandler} href="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link onClick={ClickHandler} href="#"><i className="fab fa-twitter"></i></Link>
                        <Link onClick={ClickHandler} href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link onClick={ClickHandler} href="#"><i className="fa-brands fa-youtube"></i></Link>
                    </div>
                    <div className="flag-wrap">
                        <select className='nice-select'>
                            <option>English</option>
                            <option>Bangla</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopbarS2;