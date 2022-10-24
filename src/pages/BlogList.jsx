import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import dataBlog from '../assets/fake-data/data-blog';

import img from '../assets/images/items/group-ntf-02.png'
import Action from '../components/layouts/Action';
import BlogL from '../components/layouts/BlogL';
import Sidebar from '../components/sidebar/Sidebar';

const BlogList = () => {
    return (
        <div className='page-blog'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Blog</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <img className="s2" src={img} alt="Monteno" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-list">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-md-12">
                            <BlogL data={dataBlog} />
                        </div>
                        <div className="col-xl-3 col-md-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            <Action />
            <Footer />
        </div>
    );
}

export default BlogList;