import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './toppicsection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class TopPicksSection extends Component {
    render() {
        var toppicks = {
            dots: true,
            infinite: true,
            speed: 600,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,

            centerMode: true,
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
            <div className="top-picks-mobile-main-sectionxz">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-picks-mobile-main-sectionxz-booxcx">
                                <p>Top Picks for you</p>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="top-picks-mobile-main-sectionxz-booxcx-slide">
                                            <Slider {...toppicks}>
                                                {/* single carousel item */}
                                                <div className="single-carosll-mobblil-ittm-top-pic">
                                                    <div className="mobile-carrsl-image-prt-top-picx">
                                                        <div className="row carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg">
                                                                        <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global collections"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg">
                                                                        <img src={require('../../../assets/slide-1.jpg')} alt="orponbd global products"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg">
                                                                        <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global collections"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single carousel item */}
                                                {/* single carousel item */}
                                                <div className="single-carosll-mobblil-ittm-top-pic">
                                                    <div className="mobile-carrsl-image-prt-top-picx">
                                                        <div className="row carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg">
                                                                        <img src={require('../../../assets/slide-1.jpg')} alt="orponbd global items"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg">
                                                                        <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global collections"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg">
                                                                        <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global items"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1751 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* single carousel item */}
                                                
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopPicksSection;
