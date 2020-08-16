import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slidemain.css';

export default class SlideMain extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    dots: true,
                    arrows: false
                  }
                }
              ]
          };
        return (
            <div className="slider-main-dot-com-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slide-dot-cmm-section-box">
                                <Slider {...settings}>
                                    {/* single slide item */}
                                    <div className="single-carousel-ddt-cm-ittm">
                                        <div className="ddcm-titm-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/slide-1.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-ddt-cm-ittm">
                                        <div className="ddcm-titm-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/slide-2.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-carousel-ddt-cm-ittm">
                                        <div className="ddcm-titm-img-part">
                                            <Link to="/#">
                                                <img src={require('../../assets/slide-3.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
