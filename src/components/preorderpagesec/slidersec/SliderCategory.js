import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slidecategory.css';

export default class SliderCategory extends Component {
    render() {
        var categoryslide = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 5,
            slidesToScroll: 2,
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
            <div className="slide-category-mobile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slide-category-mobile-box">
                                <Slider {...categoryslide}>
                                    <div className="single-category-mobile-ittm">
                                        <Link to="/#">
                                            <div className="mobile-cattgry-ssc-prt">
                                                <img src={require('../../../assets/allcat.png')} alt="orponbd global collection"/>
                                                <p>All Cat</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="single-category-mobile-ittm">
                                        <Link to="/#">
                                            <div className="mobile-cattgry-ssc-prt-2">
                                                <img src={require('../../../assets/icon2.png')} alt="orponBD global"/>
                                                <p>Shoe</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="single-category-mobile-ittm">
                                        <Link to="/#">
                                            <div className="mobile-cattgry-ssc-prt-3">
                                                <img src={require('../../../assets/icon3.png')} alt="orponbd global collection categories"/>
                                                <p>Watch</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="single-category-mobile-ittm">
                                        <Link to="/#">
                                            <div className="mobile-cattgry-ssc-prt-4">
                                                <img src={require('../../../assets/icon4.png')} alt="orponbd global collection"/>
                                                <p>T-Shirt</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="single-category-mobile-ittm">
                                        <Link to="/#">
                                            <div className="mobile-cattgry-ssc-prt-5">
                                                <img src={require('../../../assets/icon5.png')} alt="orponbd global collection"/>
                                                <p>Gadget</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="single-category-mobile-ittm">
                                        <Link to="/#">
                                            <div className="mobile-cattgry-ssc-prt-6">
                                                <img src={require('../../../assets/icon6.png')} alt="orponbd global collection"/>
                                                <p>Toys</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="single-category-mobile-ittm">
                                        <Link to="/#">
                                            <div className="mobile-cattgry-ssc-prt-7">
                                                <img src={require('../../../assets/icon7.png')} alt="orponbd global products"/>
                                                <p>Clotchs</p>
                                            </div>
                                        </Link>
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
