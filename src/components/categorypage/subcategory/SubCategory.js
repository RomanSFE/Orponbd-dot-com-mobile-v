import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './subcategory.css';

import classnames from "classnames";

import MainMenu from '../../mainmenu/MainMenu.js';

class SubCategory extends Component {

        // Top Bar Option
        constructor(props) {
            super(props);
        
            this.state = {
              prevScrollpos: window.pageYOffset,
              visible: true
            };
          }
        
          // Adds an event listener when the component is mount.
          componentDidMount() {
            window.addEventListener("scroll", this.handleScroll);
          }
        
          // Remove the event listener when the component is unmount.
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
        
          // Hide or show the menu.
          handleScroll = () => {
            const { prevScrollpos } = this.state;
        
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollpos > currentScrollPos;
        
            this.setState({
              prevScrollpos: currentScrollPos,
              visible
            });
          };
        // Top Bar Option

    render() {
        return (
            <>
            <nav
                className={classnames("main-category-top-nav-menu", {
                "main-category-top-nav-menu-hidden": !this.state.visible
                })}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <Link to="/main-category">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Sub Category</span>
                                </div>
                            </Link> */}
                            <div className="main-category-top-menu-iconn-sec-txt">
                            <Link to="/main-category">
                                <span><i className="fa fa-chevron-left"></i></span>
                            </Link>
                                <span>Sub Category</span>
                            </div>
                        
                            <div className="main-category-proddct-serrch-boox">
                                <form action="" id="demo-2">
                                    {/* <button type="submit" className="main-cattgry-serrxcg-ixn"><i class="fas fa-search"></i></button> */}
                                    <input type="search" placeholder="search"/>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>

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
