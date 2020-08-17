import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../toppicks/toppicks.css';

export default class TopPicks extends Component {
    render() {
        var toppicksx = {
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
            <div className="top-picks-web-ddt-cm-main-sectionxz">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-picks-web-dott-cm-main-sectionxz-booxcx">
                                <p>Top Picks for you</p>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="top-picks-web-dott-cm-main-sectionxz-booxcx-slide">
                                            <Slider {...toppicksx}>
                                                {/* single carousel item */}
                                                <div className="single-carosll-web-ddt-cm-top-pic">
                                                    <div className="web-ddtcm-carrsl-image-prt-top-picx">
                                                        <div className="row web-ddt-cm-carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg-web-ddt-cm">
                                                                        <img src={require('../../../assets/slide-1.jpg')} alt="orponbd global collections"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt-web-ddcd-cm">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row web-ddt-cm-carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg-web-ddt-cm">
                                                                        <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global products"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt-web-ddcd-cm">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row web-ddt-cm-carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg-web-ddt-cm">
                                                                        <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global collections"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt-web-ddcd-cm">
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
                                                <div className="single-carosll-web-ddt-cm-top-pic">
                                                    <div className="web-ddtcm-carrsl-image-prt-top-picx">
                                                        <div className="row web-ddt-cm-carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg-web-ddt-cm">
                                                                        <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global items"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt-web-ddcd-cm">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row web-ddt-cm-carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg-web-ddt-cm">
                                                                        <img src={require('../../../assets/slide-1.jpg')} alt="orponbd global collections"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt-web-ddcd-cm">
                                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                                        <h3>1750 TK</h3>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="row web-ddt-cm-carssl-extra-clss">
                                                            <Link to="/#">
                                                                <div className="col-4">
                                                                    <div className="top-picks-carr-iimg-web-ddt-cm">
                                                                        <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global items"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div className="top-picks-carrsl-ttxtrt-web-ddcd-cm">
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
        )
    }
}
