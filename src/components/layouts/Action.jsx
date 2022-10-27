import React , { useState } from 'react';
import { Link } from 'react-router-dom'

const Action = () => {

    const [data] = useState(
        {
            title: 'The Animal Club NFT',
            desc: 'Get your NFT now!',
        }
    )

    return (
        <section className="tf-section action">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="action__body" data-aos="fade-up">
                            <div className="block-text">
                                <h3 className="mb-13">{data.title}</h3>
                                <p className="fs-21 mb-7">{data.desc}</p>
                            </div>
                            <Link to="/mint" className="btn-action style-2">
                                Mint Now
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Action;
