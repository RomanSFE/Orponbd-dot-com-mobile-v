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
            infinite: false,
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
                                    <Link to="/awaiting-page">
                                        Awaiting
                                    </Link>
                                </div>
                                {/* Single slide Text */}
                                {/* Single slide Text */}
                                <div className="all-ordrs-single-slide-text">
                                    <Link to="/ready-to-ship">
                                        Ready to Ship
                                    </Link>
                                </div>
                                {/* Single slide Text */}
                                {/* Single slide Text */}
                                <div className="all-ordrs-single-slide-text">
                                    <Link to="/cancel-orders">
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
