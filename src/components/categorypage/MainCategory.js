import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './maincategory.css';

import SingleProductTopMenu from '../singleproductpage/SingleProductTopMenu.js';

import MainMenu from '../mainmenu/MainMenu.js';

class MainCategory extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="main-category-section-page-mobile-v-section">
                <div className="container">
                    {/* Single main category item Item */}
                    <Link to="/sub-category">
                        <div className="row main-category-ex-ppdnfg">
                            <div className="col-3">
                                <div className="main-category-immgbg">
                                    <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="main-category-mmobl-text-section">
                                    <p>Product details text...</p>
                                    <h4>1700 Items</h4>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="main-category-mobll-icon-secctn">
                                    <span><i class="fas fa-angle-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* Single main category item Item */}
                    {/* Single main category item Item */}
                    <Link to="/sub-category">
                        <div className="row main-category-ex-ppdnfg">
                            <div className="col-3">
                                <div className="main-category-immgbg">
                                    <img src={require('../../assets/slide-3.jpg')} alt="OrponBD Online shop"/>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="main-category-mmobl-text-section">
                                    <p>Product details text...</p>
                                    <h4>1700 Items</h4>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="main-category-mobll-icon-secctn">
                                    <span><i class="fas fa-angle-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* Single main category item Item */}
                    {/* Single main category item Item */}
                    <Link to="/sub-category">
                        <div className="row main-category-ex-ppdnfg">
                            <div className="col-3">
                                <div className="main-category-immgbg">
                                    <img src={require('../../assets/slide-2.jpg')} alt="OrponBD Online shop"/>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="main-category-mmobl-text-section">
                                    <p>Product details text...</p>
                                    <h4>1700 Items</h4>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="main-category-mobll-icon-secctn">
                                    <span><i class="fas fa-angle-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* Single main category item Item */}
                </div>
            </div>

            <MainMenu/>
            </>
        );
    }
}

export default MainCategory;
