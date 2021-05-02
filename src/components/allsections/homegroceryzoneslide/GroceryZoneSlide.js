import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './groceryzoneslide.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class GroceryZoneSlide extends Component {
    
    render() {
        var groceryzonewv = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 3,
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
            <div className="grocery-zone-wv-com-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="grocery-zone-wv-wexv-dot-main-sec-bboxx-web-version">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="grocery-zone-wvv-hedd-txt">
                                            <h3>Grocery Zone</h3>
                                            <Link to="/grocery-all-items"><span>View More <i className="fa fa-angle-right"></i></span></Link>
                                        </div>
                                        <div className="obdd-dot-cmm-section-box-groceryzone-wv">
                                            <Slider {...groceryzonewv}>
                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-cooking-essentials-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img">
                                                                <img src={require('../../../assets/grocery-slide-1.png')} alt="orponbd Online Shop"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn">
                                                                    <h4>Cooking Essentials</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start 2 */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-snacks-confectionary-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-two">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-two">
                                                                <img src={require('../../../assets/grocery-slide-2.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-two">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-two">
                                                                    <h4>Snacks & Confectonary</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 2 */}
                                                {/* Single product start 3 */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-beverage-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-three">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-three">
                                                                <img src={require('../../../assets/grocery-slide-3.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-three">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-three">
                                                                    <h4>Beverages</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 3 */}
                                                {/* Single product start 4 */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-health-and-beauty-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-four">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-four">
                                                                <img src={require('../../../assets/grocery-slide-4.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-four">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-four">
                                                                    <h4>Health & Beauty</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 4 */}

                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="#">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img">
                                                                <img src={require('../../../assets/grocery-slide-1.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn">
                                                                    <h4>Cooking Essentials</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="#">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img">
                                                                <img src={require('../../../assets/grocery-slide-2.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn">
                                                                    <h4>Health & Beauty</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                            </Slider>
                                        </div>
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
