import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './allorderslide.css';

export default class AllOrderSlide extends Component {
    render() {
        var allproductss = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    dots: false,
                    arrows: false
                  }
                }
              ]
          };
        return (
            <div className="all-orders-slider-main-line-sect-mvv">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="all-orders-slidessc-main-bbooxx">
                            <Slider {...allproductss}>
                                {/* Single slide Text */}
                                <div className="all-ordrs-single-slide-text">
                                    <Link to="/all-orders-product">
                                        <p>All</p>
                                    </Link>
                                </div>
                                {/* Single slide Text */}
                                {/* Single slide Text */}
                                <div className="all-ordrs-single-slide-text">
                                    <Link to="/pending-orders">
                                        Pending
                                    </Link>
                                </div>
                                {/* Single slide Text */}
                                {/* Single slide Text */}
                                <div className="all-ordrs-single-slide-text">
                                    <Link to="/">
                                        Processing
                                    </Link>
                                </div>
                                {/* Single slide Text */}
                                {/* Single slide Text */}
                                <div className="all-ordrs-single-slide-text">
                                    <Link to="/">
                                        Delivered
                                    </Link>
                                </div>
                                {/* Single slide Text */}
                                {/* Single slide Text */}
                                <div className="all-ordrs-single-slide-text">
                                    <Link to="/">
                                        Cancelled
                                    </Link>
                                </div>
                                {/* Single slide Text */}
                            </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
