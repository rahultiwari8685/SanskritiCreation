import React, { useEffect } from 'react';
import Link from 'next/link';
import Swiper from 'swiper/bundle';  // Make sure to install Swiper with 'npm install swiper'
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

import Shap1 from '/public/images/product/shape-2.png';
import Shap2 from '/public/images/product/shape-3.png';
import Image from 'next/image';

const ProductSectionS3 = ({ products }) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        const shopSlider = new Swiper('.shop-slider', {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.array-next',
                prevEl: '.array-prev',
            },
            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }, []);

    return (
        <section className="shop-section bg-cover section-padding" style={{ backgroundImage: `url(${'/images/product/bg.jpg'})` }}>
            <div className="shape-image">
                <Image src={Shap1} alt="img" />
            </div>
            <div className="shape-image-2">
                <Image src={Shap2} alt="img" />
            </div>
            <div className="array-button justify-content-center">
                <button className="array-prev"><i className="fa-regular fa-arrow-left-long"></i></button>
                <button className="array-next"><i className="fa-regular fa-arrow-right-long"></i></button>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Digital printing Service</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Our Popular Print Service <br />
                        Complete Solution
                    </h2>
                </div>
                <div className="swiper shop-slider">
                    <div className="swiper-wrapper">
                        {products.length > 0 &&
                            products.slice(12, 18).map((product, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="shop-box-items">
                                        <div className="shop-image">
                                            <img src={product.proImg} alt="img" />
                                        </div>
                                        <div className="shop-content">
                                            <h3>
                                                <Link onClick={ClickHandler} href={'/shop-details/[slug]'} as={`/shop-details/${product.slug}`}>
                                                    {product.title}
                                                </Link>
                                            </h3>
                                            <p>312 Product</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <h5 className="shop-bottom-title wow fadeInUp" data-wow-delay=".3s">
                    Unlock more products & buy it for your business <Link onClick={ClickHandler} href="/shop">More products</Link>
                </h5>
            </div>
        </section>
    );
};

export default ProductSectionS3;
