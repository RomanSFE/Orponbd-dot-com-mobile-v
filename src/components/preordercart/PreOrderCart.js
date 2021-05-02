import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './preordercart.css';

class PreOrderCart extends Component {
    render() {
        return (
            <>
            <div className="obd-mobile-verrsn-pre-order-cart-pgg-main-sec-ff-bgg-colr">
                <div className="obd-mobile-verrsn-pre-order-cart-pgg-main-sec">
                    <div className="container">
                        {/* Pre Order Products start */}
                        <div className="row">
                            <div className="col-12">
                                <div className="bobd-cart-page-main-content-bbox">
                                    <div className="obd-cart-page-main-hed-ttxt">
                                        <h3>Pre Order</h3>
                                    </div>
                                    <div className="bobd-cart-page-main-content-regular-order-ssc">
                                        <h3><span><i class="fas fa-truck"></i></span> Regular Delivery</h3>
                                    </div>
                                    <div className="bobd-cart-page-main-content-select-all">
                                        <input type="checkbox"/>
                                        <span>Select All</span>
                                    </div>
                                    
                                    <div className="pre-order-single-category-sec-bbox">
                                        {/* Single main category item Item */}
                                            <div className="main-category-ex-ppdnfg-exx-secc-pre-order">
                                                <div className="row main-category-ex-ppdnfg-pre-order">
                                                    <div className="col-1">
                                                        <div className="main-category-pre-ordr-select-ccl">
                                                            <input type="checkbox"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-11">
                                                        <Link to="/">
                                                            <div className="hhgfhg-pre-order">
                                                                <div className="row">
                                                                    <div className="col-4">
                                                                        <div className="main-category-immgbg-pre-ordr">
                                                                            <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-7">
                                                                        <div className="main-category-mmobl-text-section-pre-order">
                                                                            <p>Product details text...</p>
                                                                            <h5>Color: Black</h5>
                                                                            <h4>2075 TK</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-1">
                                                                        <div className="main-category-mobll-icon-secctn-pre-orrdr">
                                                                            <span><i class="fas fa-angle-right"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Single main category item Item */}
                                        {/* Single main category item Item */}
                                            <div className="main-category-ex-ppdnfg-exx-secc-pre-order">
                                                <div className="row main-category-ex-ppdnfg-pre-order">
                                                    <div className="col-1">
                                                        <div className="main-category-pre-ordr-select-ccl">
                                                            <input type="checkbox"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-11">
                                                        <Link to="/">
                                                            <div className="hhgfhg-pre-order">
                                                                <div className="row">
                                                                    <div className="col-4">
                                                                        <div className="main-category-immgbg-pre-ordr">
                                                                            <img src={require('../../assets/slide-2.jpg')} alt="OrponBD Online shop"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-7">
                                                                        <div className="main-category-mmobl-text-section-pre-order">
                                                                            <p>Product details text...</p>
                                                                            <h5>Color: Black</h5>
                                                                            <h4>1470 TK</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-1">
                                                                        <div className="main-category-mobll-icon-secctn-pre-orrdr">
                                                                            <span><i class="fas fa-angle-right"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Single main category item Item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pre Order Products End */}

                        {/* In Stock Products start */}
                        <div className="row only-for-instock-exxc-pdd">
                            <div className="col-12">
                                <div className="bobd-cart-page-main-content-bbox">
                                    <div className="bobd-cart-page-main-content-regular-order-ssc">
                                        <h3><span><i class="fas fa-shopping-basket"></i></span> In Stock</h3>
                                    </div>
                                    <div className="bobd-cart-page-main-content-select-all">
                                        <input type="checkbox"/>
                                        <span>Select All</span>
                                    </div>
                                    <div className="pre-order-single-category-sec-bbox">
                                        {/* Single main category item Item */}
                                            <div className="main-category-ex-ppdnfg-exx-secc-pre-order">
                                                <div className="row main-category-ex-ppdnfg-pre-order">
                                                    <div className="col-1">
                                                        <div className="main-category-pre-ordr-select-ccl">
                                                            <input type="checkbox"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-11">
                                                        <Link to="/">
                                                            <div className="hhgfhg-pre-order">
                                                                <div className="row">
                                                                    <div className="col-4">
                                                                        <div className="main-category-immgbg-pre-ordr">
                                                                            <img src={require('../../assets/product-2.jpg')} alt="OrponBD Online shop"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-7">
                                                                        <div className="main-category-mmobl-text-section-pre-order">
                                                                            <p>Product details text...</p>
                                                                            <h5>Color: Black</h5>
                                                                            <h4>1250 TK</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-1">
                                                                        <div className="main-category-mobll-icon-secctn-pre-orrdr">
                                                                            <span><i class="fas fa-angle-right"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Single main category item Item */}
                                        {/* Single main category item Item */}
                                            <div className="main-category-ex-ppdnfg-exx-secc-pre-order">
                                                <div className="row main-category-ex-ppdnfg-pre-order">
                                                    <div className="col-1">
                                                        <div className="main-category-pre-ordr-select-ccl">
                                                            <input type="checkbox"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-11">
                                                        <Link to="/">
                                                            <div className="hhgfhg-pre-order">
                                                                <div className="row">
                                                                    <div className="col-4">
                                                                        <div className="main-category-immgbg-pre-ordr">
                                                                            <img src={require('../../assets/product-3.jpg')} alt="OrponBD Online shop"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-7">
                                                                        <div className="main-category-mmobl-text-section-pre-order">
                                                                            <p>Product details text...</p>
                                                                            <h5>Color: Black</h5>
                                                                            <h4>1700 TK</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-1">
                                                                        <div className="main-category-mobll-icon-secctn-pre-orrdr">
                                                                            <span><i class="fas fa-angle-right"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Single main category item Item */}
                                    </div>

                                    {/* In Stock Blar Section Start*/}
                                    <div className="pre-order-single-category-sec-bbox pre-order-bllr-part">
                                        {/* Single main category item Item */}
                                            <div className="main-category-ex-ppdnfg-exx-secc-pre-order">
                                                <div className="row main-category-ex-ppdnfg-pre-order">
                                                    <div className="col-1">
                                                        <div className="main-category-pre-ordr-select-ccl">
                                                            <input type="checkbox"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-11">
                                                        <Link to="/">
                                                            <div className="hhgfhg-pre-order">
                                                                <div className="row">
                                                                    <div className="col-4">
                                                                        <div className="main-category-immgbg-pre-ordr">
                                                                            <img src={require('../../assets/product-1.jpg')} alt="OrponBD Online shop"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-7">
                                                                        <div className="main-category-mmobl-text-section-pre-order">
                                                                            <p>Product details text...</p>
                                                                            <h5>Color: Black</h5>
                                                                            <h4>1700 TK</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-1">
                                                                        <div className="main-category-mobll-icon-secctn-pre-orrdr">
                                                                            <span><i class="fas fa-angle-right"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Single main category item Item */}
                                        {/* Single main category item Item */}
                                            <div className="main-category-ex-ppdnfg-exx-secc-pre-order">
                                                <div className="row main-category-ex-ppdnfg-pre-order">
                                                    <div className="col-1">
                                                        <div className="main-category-pre-ordr-select-ccl">
                                                            <input type="checkbox"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-11">
                                                        <Link to="/">
                                                            <div className="hhgfhg-pre-order">
                                                                <div className="row">
                                                                    <div className="col-4">
                                                                        <div className="main-category-immgbg-pre-ordr">
                                                                            <img src={require('../../assets/product-8.jpg')} alt="OrponBD Online shop"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-7">
                                                                        <div className="main-category-mmobl-text-section-pre-order">
                                                                            <p>Product details text...</p>
                                                                            <h5>Color: Black</h5>
                                                                            <h4>1500 TK</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-1">
                                                                        <div className="main-category-mobll-icon-secctn-pre-orrdr">
                                                                            <span><i class="fas fa-angle-right"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* Single main category item Item */}
                                    </div>
                                    {/* In Stock Blar Section End*/}
                                </div>
                            </div>
                        </div>
                        {/* In Stock Products End */}
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default PreOrderCart;
