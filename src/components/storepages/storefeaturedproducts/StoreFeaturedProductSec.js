import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './storefeatureproductsec.css';

export default class StoreFeaturedProductSec extends Component {
    render() {
        return (
            <>
             <div className="store-featuted-products-mv-secz">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="store-featuted-products-mv-secz-bbox">
                                <div className="store-featuted-products-mv-sec-hd-lnk">
                                    <p>Featured Products</p>
                                    <Link to="/store-featured-all"><span>View More <i className="fa fa-angle-right"></i></span></Link>
                                </div>
                                {/* Single item */}
                                <div className="row store-featuted-products-mv-ex-pd">
                                    <div className="col-4">
                                        <div className="store-featuted-products-mv-single-prodz">
                                            <Link to="/">
                                                <div className="store-feat-prod-mv-single-prodz-img">
                                                    <img src={require('../../../assets/product-6.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="store-feat-prod-mv-single-prodz-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="store-featuted-products-mv-single-prodz">
                                            <Link to="/#">
                                                <div className="store-feat-prod-mv-single-prodz-img">
                                                    <img src={require('../../../assets/product-4.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="store-feat-prod-mv-single-prodz-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="store-featuted-products-mv-single-prodz">
                                            <Link to="/#">
                                                <div className="store-feat-prod-mv-single-prodz-img">
                                                    <img src={require('../../../assets/product-3.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="store-feat-prod-mv-single-prodz-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                {/* Single item */}
                                <div className="row store-featuted-products-mv-ex-pd">
                                    <div className="col-4">
                                        <div className="store-featuted-products-mv-single-prodz">
                                            <Link to="/#">
                                                <div className="store-feat-prod-mv-single-prodz-img">
                                                    <img src={require('../../../assets/product-2.jpg')} alt="Orponbd global"/>
                                                </div>
                                                <div className="store-feat-prod-mv-single-prodz-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="store-featuted-products-mv-single-prodz">
                                            <Link to="/#">
                                                <div className="store-feat-prod-mv-single-prodz-img">
                                                    <img src={require('../../../assets/product-1.jpg')} alt="Orponbd global collections"/>
                                                </div>
                                                <div className="store-feat-prod-mv-single-prodz-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="store-featuted-products-mv-single-prodz">
                                            <Link to="/#">
                                                <div className="store-feat-prod-mv-single-prodz-img">
                                                    <img src={require('../../../assets/product-8.jpg')} alt="orpon bd global items"/>
                                                </div>
                                                <div className="store-feat-prod-mv-single-prodz-ttxt">
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
