import React from 'react';
import { Link } from 'react-router-dom'

const Montono = (props) => {

    const data = props.data;

    return (
        <section   id="collections"  className="tf-section montono   pb-20 ">
            <div  className="container-fluid ">
                <div   className="row  pt-95">
                    {
                        data.slice(0,8).map((data,index) => (
                            <div key={index} className="col-xl-3 col-md-6" >
                                <div className="image-box" data-aos="fade-up" data-aos-duration="1000">
                                    <img src={data.img} alt="Monteno" />
                                    <div className="image-box__title ">
                                        {/* <Link to="/collections" className="h6"> */}
                                            {data.title}
                                            {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default Montono;