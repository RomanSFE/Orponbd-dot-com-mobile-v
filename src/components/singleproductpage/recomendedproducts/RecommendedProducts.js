import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './recommendedproducts.css';

export default class RecommendedProducts extends Component {
    render() {
        return (
            <>
            <div className="recommended-products-single-pg-products-mobile-v">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="recommended-products-single-pg-products-mobile-v-booxcx">
                                <div className="recommended-products-single-pg-products-mobile-v-headdng">
                                    <p>Recommended for you</p>
                                    <Link to="/#"><span>View More <i className="fa fa-angle-right"></i></span></Link>
                                </div>
                                {/* Single item */}
                                <div className="row recommended-products-extr-pdd-products-ext">
                                    <div className="col-4">
                                        <div className="recommended-products-single-proxc-products-mob-sing-xxc">
                                            <Link to="/#">
                                                <div className="recommended-products-single-pg-products-mobile-v-iimgx">
                                                    <img src={require('../../../assets/product-4.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="recommended-products-single-pg-products-mobile-v-texxtct">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="recommended-products-single-proxc-products-mob-sing-xxc">
                                            <Link to="/#">
                                                <div className="recommended-products-single-pg-products-mobile-v-iimgx">
                                                    <img src={require('../../../assets/product-3.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="recommended-products-single-pg-products-mobile-v-texxtct">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="recommended-products-single-proxc-products-mob-sing-xxc">
                                            <Link to="/#">
                                                <div className="recommended-products-single-pg-products-mobile-v-iimgx">
                                                    <img src={require('../../../assets/product-7.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="recommended-products-single-pg-products-mobile-v-texxtct">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                {/* Single item */}
                                <div className="row recommended-products-extr-pdd-products-ext">
                                    <div className="col-4">
                                        <div className="recommended-products-single-proxc-products-mob-sing-xxc">
                                            <Link to="/#">
                                                <div className="recommended-products-single-pg-products-mobile-v-iimgx">
                                                    <img src={require('../../../assets/product-5.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="recommended-products-single-pg-products-mobile-v-texxtct">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="recommended-products-single-proxc-products-mob-sing-xxc">
                                            <Link to="/#">
                                                <div className="recommended-products-single-pg-products-mobile-v-iimgx">
                                                    <img src={require('../../../assets/product-1.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="recommended-products-single-pg-products-mobile-v-texxtct">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="recommended-products-single-proxc-products-mob-sing-xxc">
                                            <Link to="/#">
                                                <div className="recommended-products-single-pg-products-mobile-v-iimgx">
                                                    <img src={require('../../../assets/product-8.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="recommended-products-single-pg-products-mobile-v-texxtct">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

