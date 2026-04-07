import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const BlogSection = (props) => {
    const { blogAllbtn = true } = props
    return (
        <section className={"" + props.hclass} style={{ backgroundImage: `url(${'images/news/bg.png'})` }}>
            <div className="container">
                <div className="section-title text-center">
                    <h6>Digital printing Service</h6>
                    <h2>
                        Get Update News & Blogs<br />
                        By Company
                    </h2>
                </div>
                <div className={"" +props.SubClass}>
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" key={bl}>
                                <div className="blog-box-items">
                                    <div className="blog-image">
                                        <Image src={blog.screens} alt="img" />
                                        <Image src={blog.screens} alt="img" />
                                    </div>
                                    <div className="blog-content">
                                        <span>e-Learning</span>
                                        <h3>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                        </h3>
                                        <ul className="blog-meta">
                                            <li>
                                                <i className="fa-regular fa-user"></i>
                                                Roger J. Spaulding
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-comment"></i>
                                                Comments (5)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {blogAllbtn && (
                        <div className="news-button text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
                            <Link onClick={ClickHandler} href="/news" className="theme-btn">See all News</Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;



