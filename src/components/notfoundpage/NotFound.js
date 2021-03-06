import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './notfound.css';

import MainMenu from '../mainmenu/MainMenu.js'

class NotFound extends Component {
    render() {
        return (
            <>
             <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Product Not Found</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-not-found-page-mobile-v-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-not-found-page-mobile-v-main-section-booxc text-center">
                                <div className="product-not-found-page-mobile-v-main-section-booxc-img">
                                    <img src={require('../../assets/error-page.jpg')} alt="OrponBD Online shop"/>
                                </div>
                                <div className="product-nnt-founnd-mobile-v-main-section-booxc-texttc">
                                    <h3>Product Not Found</h3>
                                </div>
                                <div className="product-nt-ffund-mobile-v-main-section-booxc-back-bbtnn mx-auto">
                                    <Link to="/">
                                        Back to Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainMenu/>
            </>
        );
    }
}
export default NotFound;
