import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './healthandbeautycatdetails.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import GroceryCartIconBox from '../carticonbox/GroceryCartIconBox';
import MainMenu from '../../mainmenu/MainMenu';

export default class HealthAndBeautyCatDetails extends Component {
    render() {
        var groceryallcat = {
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
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
               
            </div>

            {/* Grocery Cart Icon Box Fixed Section Start */}
            <div className="obd-grocery-main-page-all-item-cart-main-page-box">
                <GroceryCartIconBox/>
            </div>
            {/* Grocery Cart Icon Box Fixed Section End */}

            {/* Banner start */}
            <div className="obd-grocery-main-page-all-item-banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-main-page-all-item-banner-section-box">
                                <img src={require('../../../assets/grocery-cooking-ess-bg.png')} alt="orponbd global collections"/>
                               
                                <div className="obd-grocery-main-page-all-item-banner-back-link">
                                    <Link to="/grocery-all-items">
                                        <p><i className="fas fa-angle-left"></i> <span>Back</span></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner end */}

            {/* Slider Section Start */}
            <div className="grocery-zone-all-itm-wv-com-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="grocery-zone-all-itm-wv-wexv-dot-main-sec-bboxx-web-version">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="grocery-zone-all-itm-wvv-hedd-txt text-center">
                                            <h3>Shop By Category</h3>
                                        </div>
                                        <div className="obdd-dot-cmm-section-box-groceryzone-all-itm-wv">
                                            <Slider {...groceryallcat}>
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
            {/* Slider Section End */}


            {/* Cooking essential Start ----------------------------------------------------*/}
            <div className="obd-grocery-details-products-hed-txt-section-det">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="djfhdsjfhh-health-and-beauty">
                                <div className="row">
                                    <div className="col-md-7 col-7">
                                        <div className="obd-grocery-details-products-hedd-txt-wv-x">
                                            <h4>Health & Beauty</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-5">
                                        <div className="obd-grocery-details-products-sortby-slet text-right">
                                            <select>
                                                <option value="" selected>Short By: Default</option>
                                                <option value="">Orders</option>
                                                <option value="">Price(high to low)</option>
                                                <option value="">Price(low to high)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-grocery-all-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-grocery-allitm-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-3.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-4.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-5.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-8.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-6.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-8.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-9.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Cooking essential Products End */}


            <div className="obd-grocery-all-itxm-details-view-more-buttonn health-and-beauuttyy-lastt">
                <div className="obd-grocery-all-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Cooking essential End Main ---------------------------------*/}


            

            <div className="orponbd-womens-fashion-category-page-web-top-menu-ex">
               <MainMenu/> 
            </div>

            </>
        )
    }
}
