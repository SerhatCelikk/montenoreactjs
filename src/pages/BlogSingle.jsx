import React , { useState } from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar';

import img from '../assets/images/blog/blog-single.jpg'
import img2 from '../assets/images/blog/related.jpg'
import img3 from '../assets/images/blog/related-1.jpg'
import avt from '../assets/images/blog/avt.jpg'

import img4 from '../assets/images/blog/avt1.jpg'
import img5 from '../assets/images/blog/avt2.jpg'
import img6 from '../assets/images/blog/avt3.jpg'
import img7 from '../assets/images/blog/avt4.jpg'
import Action from '../components/layouts/Action';


const BlogSingle = () => {

    const [data] = useState([
        {
            cmt: 'mt-0',
            img: img4,
            name:'Johnson Doe',
            time: 'February 07, 2021 04:42 pm',
            text: 'Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum'
        },
        {
            cmt: '',
            img: img5,
            name:'Johnson Doe',
            time: 'February 07, 2021 04:42 pm',
            text: 'Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum'
        },
        {
            cmt: 'rep',
            img: img6,
            name:'Johnson Doe',
            time: 'February 07, 2021 04:42 pm',
            text: 'Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod m, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum'
        },
        {
            cmt: '',
            img: img7,
            name:'Johnson Doe',
            time: 'February 07, 2021 04:42 pm',
            text: 'Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum'
        },
    ])

    return (
        <div className='page-blog-single'>
            <Header />
            <section className="blog-single">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-img">
                                <img src={img} alt="Monteno" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-9 col-md-12">
                            <div className="blog-body">
                                <div className="blog-content">
                                    <ul className="meta">
                                        <li><Link to="#"><i className="fa fa-folder-open"></i>Cryptography</Link></li>
                                        <li><Link to="#"><i className="fa fa-user"></i>John Doe</Link></li>
                                        <li><Link to="#"><i className="fa fa-clock"></i>February 07, 2022</Link></li>
                                    </ul>
                                    <h3 className="title">
                                        Complete guide to buy and sale NFT in a marketplace
                                    </h3>
                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and doors. So close no matter how far whatis the best thing</p>
                                    <p className="fs-18 mt-28">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                    <blockquote>
                                        <p className="fs-21">
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesci hoichioi saradin aranonde sultanab ibiana unt. 
                                        </p>
                                        <div>
                                            <Link to="#">Hosen Mahmdud,</Link>
                                            <p>Markout Corporation</p> </div>
                                    </blockquote>
                                    <p className="fs-18 mt-42">
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo luptatem.  Kritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>

                                    <div className="action-group">
                                        <div className="tag">
                                            <ul className="tag">
                                                <li><Link className="fs-18" to="#">Crypto</Link></li>
                                                <li><Link className="fs-18" to="#">Blockchain</Link></li>
                                                <li><Link className="fs-18" to="#">NFT</Link></li>
                                            </ul>
                                        </div>
                                        <div className="share">
                                            <h6 className="fs-16">Share</h6>
                                            <ul>
                                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content related-post">
                                    <div className="prev">
                                        <img src={img2} alt="Monteno" />
                                        <div className="action-right">
                                            <Link to="#"><i className="fa fa-angle-double-left"></i>Previous Post</Link>
                                            <div className="divider"></div>
                                            <Link to='#' className="title">When the musics over turn off the light</Link>
                                        </div>
                                    </div>
                                    <div className="next">
                                        <img src={img3} alt="Monteno" />
                                        <div className="action-right">
                                            <Link to="#">Next Post<i className="fa fa-angle-double-right"></i></Link>
                                            <div className="divider"></div>
                                            <Link to='#' className="title">When the musics over turn off the light</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-content post">
                                    <img src={avt} alt="Monteno" />
                                    <div className="post-right">
                                        <div className="info">
                                            <Link to='#' className="h5">Jewel Khan</Link>
                                            <ul className="social">
                                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum </p>
                                        <Link className="btn-post" to="#">View All Posts <i className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                </div>
                                <div className="blog-content comment">
                                    <h3 className="fs-36">20 Comments</h3>

                                    {
                                        data.map((data,index) => (
                                            <div key={index} className={`comment-box ${data.cmt}`}>
                                                <img src={data.img} alt="Monteno" />
                                                <div className="comment-right">
                                                    <div className="top">
                                                        <div className="info">
                                                            <h5>{data.name}</h5>
                                                            <p>{data.time}</p>
                                                        </div>
                                                        <Link to='#' className="btn-action"><span>Reply</span></Link>
                                                    </div>
                                                    <p className="fs-18">{data.text}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="blog-content comment-form">
                                    <h3 className="fs-36">Add A Comment</h3>
                                    <form className="comment__form">
                                        <div className="form-group">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your comment here"></textarea>
                                        

                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Your name" required />
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email" required />
                                            <input className="form-control mr-0" type="text" placeholder="Your website" required />
                                        </div>
                                        <button type="submit" className="btn-action style-2"><span>Send Now</span></button>
                                    </form>
                                </div>
                            </div>
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

export default BlogSingle;