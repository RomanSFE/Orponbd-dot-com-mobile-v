import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slidesec.css';

export default class SliderCompo extends Component {
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
            <div className="slider-main-section-mobile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slider-mobile-section-box">
                                <Slider {...settings}>
                                    <div className="single-carosll-mobblil-ittm">
                                        <div className="mobile-carrsl-image-prt">
                                            <Link to="/#">
                                                <img src={require('../../../assets/slide-1.jpg')} alt="orponbd global collection"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-carosll-mobblil-ittm">
                                        <div className="mobile-carrsl-image-prt">
                                            <Link to="/#">
                                                <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global items"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-carosll-mobblil-ittm">
                                        <div className="mobile-carrsl-image-prt">
                                            <Link to="/#">
                                                <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global collections"/>
                                            </Link>
                                        </div> 
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
