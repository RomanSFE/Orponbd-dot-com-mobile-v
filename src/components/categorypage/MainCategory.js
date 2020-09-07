import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './maincategory.css';

import classnames from "classnames";

import MainMenu from '../mainmenu/MainMenu.js';

class MainCategory extends Component {

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
                            <Link to="/">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Main Category</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            
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
