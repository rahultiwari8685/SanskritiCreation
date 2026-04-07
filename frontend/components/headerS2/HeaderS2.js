import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import HeaderTopbarS2 from '../HeaderTopbarS2/HeaderTopbarS2';
import Logo from '/public/images/logo/black-logo.svg';
import Home1 from '/public/images/header/home-1.jpg';
import Home2 from '/public/images/header/home-2.jpg';
import Home3 from '/public/images/header/home-3.jpg';
import MobileMenu from '../MobileMenu/MobileMenu';
import Image from 'next/image';


const HeaderS2 = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;


    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={props.hclass}>
            <HeaderTopbarS2 />
            <div id="header-sticky" className={isSticky ? 'header-1 style-2 sticky' : 'header-1 style-2'}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link onClick={ClickHandler} href="/" className="header-logo">
                                        <Image src={Logo} alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown active menu-thumb">
                                                <Link onClick={ClickHandler} href="/home">
                                                    Home
                                                </Link>
                                                <ul className="submenu has-homemenu">
                                                    <li>
                                                        <div className="homemenu-items">
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb">
                                                                    <Image src={Home1} alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link onClick={ClickHandler} href="/home" className="theme-btn">
                                                                            Demo Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 01
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <Image src={Home2} alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link onClick={ClickHandler} href="/home-2" className="theme-btn">
                                                                            Demo Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 02
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <Image src={Home3} alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link onClick={ClickHandler} href="/home-3" className="theme-btn">
                                                                            Demo Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 03
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <Link onClick={ClickHandler} href="/team" className="border-none">
                                                    Home
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} href="/home">Home 01</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-2">Home 02</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-3">Home 03</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="#">
                                                    Services
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} href="/service">Services</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-details/Sticker-printing">Service Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link onClick={ClickHandler} href="#">
                                                    Pages
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} href="/project">Projects</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project-details/3d-Genareted-Cate">Project Details</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/404">404 Page</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="#">
                                                    Shop
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} href="/shop">Shop Page</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/shop-details/Calendar-printing-design">Shop Details</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/shop-cart">Shop Cart</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="#">
                                                    Blog
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} href="/news">Blog</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="menu-cart">
                                    <Link onClick={ClickHandler} href="/shop-cart" className="cart-icon">
                                        <i className="far fa-shopping-basket"></i>
                                        <span>{carts.length}</span>
                                    </Link>
                                </div>
                                <div className="content">
                                    <p>HOTLINE</p>
                                    <h5><a onClick={ClickHandler} href="del:00190081889">00190081889</a></h5>
                                </div>
                                <div className="header-button">
                                    <Link onClick={ClickHandler} href="/contact" className="theme-btn">Contact Us</Link>
                                </div>
                                <div className="header__hamburger d-xl-none my-auto">
                                    <div className="sidebar__toggle">
                                        <MobileMenu />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(HeaderS2);









