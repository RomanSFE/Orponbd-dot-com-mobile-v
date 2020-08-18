import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../newarrival/newarrivalsec.css';

export default class NewArrivalSec extends Component {
    render() {
        var newarrival = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 4,
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
            <>
            <div className="new-arrivalcxz-doot-com-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="new-arrivalnbxc-wexv-dot-main-sec-bboxx">
                                <div className="new-arrivatltx-dott-ccm-dealmmnnff-bb">
                                    <p>New Arrival</p>
                                    <Link to="/#"><span>View More <i className="fa fa-angle-right"></i></span></Link>
                                </div>

                                    <div className="row new-aarvvl-dott-com-delproj-rww">
                                        <div className="slide-dot-cmm-section-box-neww-arrival">
                                            <Slider {...newarrival}>
                                                <div className="new-arrivvalx-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="/#">
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/product-1.jpg')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product details..</p>
                                                            <h4>1250 TK</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="new-arrivvalx-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="/#">
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/product-2.jpg')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product details..</p>
                                                            <h4>1250 TK</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="new-arrivvalx-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="/#">
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/product-3.jpg')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product details..</p>
                                                            <h4>1250 TK</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="new-arrivvalx-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="/#">
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/product-4.jpg')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product details..</p>
                                                            <h4>1250 TK</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="new-arrivvalx-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="/#">
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/product-5.jpg')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product details..</p>
                                                            <h4>1250 TK</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="new-arrivvalx-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="/#">
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/product-6.jpg')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product details..</p>
                                                            <h4>1250 TK</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="new-arrivvalx-web-ddot-cmm-snnggl-prodct">
                                                    <Link to="/#">
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-img">
                                                            <img src={require('../../../assets/product-7.jpg')} alt="orponbd global collections"/>
                                                        </div>
                                                        <div className="new-arrivalcv-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                            <p>Product details..</p>
                                                            <h4>1250 TK</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
            </>
        )
    }
}
