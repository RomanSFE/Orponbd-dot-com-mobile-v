import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../hotcategories/hotcategory.css';

export default class HotCategories extends Component {
    render() {
        var hotcategoryysec = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 2,
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
            <>
            <div className="hotcategoryy-mv-doot-com-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hotcategoryy-mv-wexv-dot-main-sec-bboxx">
                                <div className="hotcategoryy-mv-dott-ccm-dealmmnnff-bb">
                                    <p>Hot Categories</p>
                                </div>

                                    <div className="row hotcategoryy-mv-dott-com-delproj-rww">
                                        <div className="slide-dot-cmm-section-box-hot-categorryy">
                                            <Slider {...hotcategoryysec}>
                                                <div className="hott-cattt-web-ddot-cmm-snnggl-prodct-ex">
                                                    <Link to="/#">
                                                        <div className="hot-categoory-single-banneer-secc">
                                                            <img src={require('../../../assets/hot-cat-banner-item-1.png')} alt="orponbd online shop"/>
                                                            <div className="hot-category-category-nnamsam-web-txtt">
                                                                <h4>Beauty & Health</h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="hott-cattt-web-ddot-cmm-snnggl-prodct-ex">
                                                    <Link to="/#">
                                                        <div className="hot-categoory-single-banneer-secc">
                                                            <img src={require('../../../assets/hot-cat-banner-item-2.png')} alt="orponbd online shop"/>
                                                            <div className="hot-category-category-nnamsam-web-txtt">
                                                                <h4>Kitchen Accessories</h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="hott-cattt-web-ddot-cmm-snnggl-prodct-ex">
                                                    <Link to="/#">
                                                        <div className="hot-categoory-single-banneer-secc">
                                                            <img src={require('../../../assets/hot-cat-banner-item-3.png')} alt="orponbd online shop"/>
                                                            <div className="hot-category-category-nnamsam-web-txtt">
                                                                <h4>Women's Fashion</h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="hott-cattt-web-ddot-cmm-snnggl-prodct-ex">
                                                    <Link to="/#">
                                                        <div className="hot-categoory-single-banneer-secc">
                                                            <img src={require('../../../assets/hot-cat-banner-item-4.png')} alt="orponbd online shop"/>
                                                            <div className="hot-category-category-nnamsam-web-txtt">
                                                                <h4>Travel Accessories</h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="hott-cattt-web-ddot-cmm-snnggl-prodct-ex">
                                                    <Link to="/#">
                                                        <div className="hot-categoory-single-banneer-secc">
                                                            <img src={require('../../../assets/hot-cat-banner-item-5.png')} alt="orponbd online shop"/>
                                                            <div className="hot-category-category-nnamsam-web-txtt">
                                                                <h4>Mobile Accessories</h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="hott-cattt-web-ddot-cmm-snnggl-prodct-ex">
                                                    <Link to="/#">
                                                        <div className="hot-categoory-single-banneer-secc">
                                                            <img src={require('../../../assets/hot-cat-banner-item-6.png')} alt="orponbd online shop"/>
                                                            <div className="hot-category-category-nnamsam-web-txtt">
                                                                <h4>Smart Watches</h4>
                                                            </div>
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
