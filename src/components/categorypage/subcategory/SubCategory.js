import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './subcategory.css';

import SingleProductTopMenu from '../../singleproductpage/SingleProductTopMenu.js';

import MainMenu from '../../mainmenu/MainMenu.js';

class SubCategory extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="sub-category-mobile-vvrsec-main-section">
                <div className="container">
                    {/* Single Row section */}
                    <div className="row">
                        <div className="col-12">
                            <div className="sub-category-main-secccton-ddt-ccm-bbooxcx">
                                {/* Single item */}
                                <div className="row sub-category-ex-padd-ddt-ccom">
                                    <div className="col-4">
                                        <div className="sub-category-snggl-prodct-ddtx-ocm">
                                            <Link to="/single-category-product">
                                                <div className="sub-category-snggl-prodct-ddtx-ocm-img">
                                                    <img src={require('../../../assets/product-6.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="sub-category-snggl-prodct-ddt-xcvm-ttxt text-center">
                                                    <p>Sub Category Name</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sub-category-snggl-prodct-ddtx-ocm">
                                            <Link to="/single-category-product">
                                                <div className="sub-category-snggl-prodct-ddtx-ocm-img">
                                                    <img src={require('../../../assets/product-2.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="sub-category-snggl-prodct-ddt-xcvm-ttxt text-center">
                                                    <p>Sub Category Name</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sub-category-snggl-prodct-ddtx-ocm">
                                            <Link to="/single-category-product">
                                                <div className="sub-category-snggl-prodct-ddtx-ocm-img">
                                                    <img src={require('../../../assets/product-7.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="sub-category-snggl-prodct-ddt-xcvm-ttxt text-center">
                                                    <p>Sub Category Name</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                
                            </div> 
                        </div>
                    </div>
                    {/* Single Row section */}
                    {/* Single Row section */}
                    <div className="row">
                        <div className="col-12">
                            <div className="sub-category-main-secccton-ddt-ccm-bbooxcx">
                                {/* Single item */}
                                <div className="row sub-category-ex-padd-ddt-ccom">
                                    <div className="col-4">
                                        <div className="sub-category-snggl-prodct-ddtx-ocm">
                                            <Link to="/single-category-product">
                                                <div className="sub-category-snggl-prodct-ddtx-ocm-img">
                                                    <img src={require('../../../assets/product-3.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="sub-category-snggl-prodct-ddt-xcvm-ttxt text-center">
                                                    <p>Sub Category Name</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sub-category-snggl-prodct-ddtx-ocm">
                                            <Link to="/single-category-product">
                                                <div className="sub-category-snggl-prodct-ddtx-ocm-img">
                                                    <img src={require('../../../assets/product-5.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="sub-category-snggl-prodct-ddt-xcvm-ttxt text-center">
                                                    <p>Sub Category Name</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sub-category-snggl-prodct-ddtx-ocm">
                                            <Link to="/single-category-product">
                                                <div className="sub-category-snggl-prodct-ddtx-ocm-img">
                                                    <img src={require('../../../assets/product-8.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="sub-category-snggl-prodct-ddt-xcvm-ttxt text-center">
                                                    <p>Sub Category Name</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                
                            </div> 
                        </div>
                    </div>
                    {/* Single Row section */}
                </div>
            </div>

            <MainMenu/>
            </>
        );
    }
}

export default SubCategory;
