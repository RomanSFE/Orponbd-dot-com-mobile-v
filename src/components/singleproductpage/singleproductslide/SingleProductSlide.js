import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './singleproductslide.css';

export default class SingleProductSlide extends Component {
    render() {
        var singleproductslide = {
            dots: false,
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
            <div className="slider-single-product-dot-com-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slide-single-prod-xdot-cmm-section-box">

                            <Link to="/#">
                                <div className="single-product-wishlist-boxzx text-center">
                                    <span><i className="fas fa-heart"></i></span>
                                    <span class="wish-count-mobile-xexe">123</span>
                                </div>
                            </Link>

                                <Slider {...singleproductslide}>
                                    {/* single slide item */}
                                    <div className="single-proddxct-ddt-cm-ittm">
                                        <div className="single-proddxct-ddcm-titm-img-part">
                                            <Link to="/#">
                                                <img src={require('../../../assets/product-2.jpg')} alt="orponbd online shopping"/>
                                            </Link>
                                            
                                            {/* <Link to="/#">
                                                <div className="single-product-wishlist-boxzx text-center">
                                                    <span><i className="fas fa-heart"></i></span>
                                                    <p>12</p>
                                                </div>
                                            </Link> */}
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-proddxct-ddt-cm-ittm">
                                        <div className="single-proddxct-ddcm-titm-img-part">
                                            <Link to="/#">
                                                <img src={require('../../../assets/product-5.jpg')} alt="orponbd online shopping"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-proddxct-ddt-cm-ittm">
                                        <div className="single-proddxct-ddcm-titm-img-part">
                                            <Link to="/#">
                                                <img src={require('../../../assets/product-8.jpg')} alt="orponbd online shopping"/>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* single slide item */}
                                    {/* single slide item */}
                                    <div className="single-proddxct-ddt-cm-ittm">
                                        <div className="single-proddxct-ddcm-titm-img-part">
                                            <Link to="/#">
                                                <img src={require('../../../assets/product-3.jpg')} alt="orponbd online shopping"/>
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
