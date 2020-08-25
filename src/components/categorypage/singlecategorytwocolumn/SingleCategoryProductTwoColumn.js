import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singlecategoryproducttwocolumn.css';

// import { Button } from 'rsuite';

import SingleProductTopMenu from '../../singleproductpage/SingleProductTopMenu.js';
import MainMenu from '../../mainmenu/MainMenu.js';

class SingleCategoryProductTwoColumn extends Component {
    
    // filter
    constructor(){
        super();
        this.state = {
          style:"menu",
          menuStatus:"open",
        };
        this.handleClick = this.handleClick.bind(this);
      };
    
      handleClick() {
        switch(this.state.menuStatus)
        {
          case "open":
            this.setState({
              menuStatus:"close",
              style:"menu active"
            });
            break;
          case "close":
            this.setState({
              menuStatus:"open",
              style:"menu"
            });
            break;
            default:
                return ' '
        }        
      }
    // filter
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="singlecategory-product-two-column-top-menu">
                <div className="container">
                    <div className="row single-category-prod-ex-pdd">
                        <div className="col-9">
                            <div className="single-category-product-left-best-match-section">
                                <select>
                                    <option value="" selected>Best match</option>
                                    <option value="">Orders</option>
                                    <option value="">Price(high to low)</option>
                                    <option value="">Price(low to high)</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="single-category-product-right-filter-sec-mobli">
                                <ul>
                                    <li className="single-cat-prr-iitm-left-icn"><Link to="/single-category-product"><span className="sing-pro-sing-pro-icon-two-box"><i class="fas fa-bars"></i></span></Link></li>
                                    {/* <li className="single-cat-prr-iitm-filter-iicn"><span><i class="fas fa-filter"></i></span></li> */}
                                </ul>
                            </div>
                        </div>
                        {/* Sidebar section */}
                        <button onClick={this.handleClick}><span><i class="fas fa-filter"></i></span></button>
                        <div className={this.state.style}> 
                            <div className="single-pro-cat-sidebar-filter-section">
                                <div className="container">
                                    <div className="row sidebar-inside-ccnntv">
                                        <div className="col-12">
                                            <div className="single-pro-cat-sidebar-filter-section-top-menu">
                                                <ul>
                                                    <li><span>Reset</span></li>
                                                    <li><span>Filter</span></li>
                                                    <li className="sing-cat-profill-done"><span>Done</span></li>
                                                </ul>
                                            </div>
                                            {/* Color */}
                                            <div className="single-pro-cat-sidebar-filter-section-select-opttn">
                                                <select>
                                                    <option value="" selected disabled>Color</option>
                                                    <option value="">color 1</option>
                                                    <option value="">color 2</option>
                                                    <option value="">color 3</option>
                                                </select>
                                            </div>
                                            {/* Color */}

                                            {/* Feature */}
                                            <div className="single-pro-cat-sidebar-filter-section-select-opttn">
                                                <select>
                                                    <option value="" selected disabled>Features</option>
                                                    <option value="">features 1</option>
                                                    <option value="">Features 2</option>
                                                    <option value="">Features 3</option>
                                                </select>
                                            </div>
                                            {/* Feature */}

                                            {/* Size */}
                                            <div className="single-pro-cat-sidebar-filter-section-select-opttn">
                                                <select>
                                                    <option value="" selected disabled>Size</option>
                                                    <option value="">S</option>
                                                    <option value="">M</option>
                                                    <option value="">L</option>
                                                    <option value="">XL</option>
                                                </select>
                                            </div>
                                            {/* Size */}

                                            {/* Price */}
                                            <div className="single-pro-cat-sidebar-filter-section-pricce-opttn">
                                                <div className="row single-pro-fill-price-ex-pdd">
                                                    <div className="col-6">
                                                        <div className="sinngg-pprt-ttxt">
                                                            <p>price</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="hgfgzzhf">
                                                            <ul>
                                                                <li><input type="text" placeholder="Min"/></li>
                                                                <li><input type="text" placeholder="Max"/></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Price */}
                                        </div>
                                    </div>
                                </div>
                            </div>              
                        </div>
                         {/* Sidebar section */}
                    </div>
                </div>
            </div>
            
            {/* single category product two column */}
            <div className="single-category-single-product-two-column">
                <div className="container">
                    {/* single item row */}
                    <div className="row single-catt-two-cllm-ex-pdd">
                        {/* single item */}
                        <div className="col-6">
                            <div className="single-category-single-product-two-column-single-product">
                                <Link to="/">
                                    <div className="single-cattgr-product-two-cclm-img">
                                        <img src={require('../../../assets/slide-1.jpg')} alt="orponbd Online shop"/>
                                    </div>
                                    <div className="single-cattgr-product-two-cclm-texxt-secc">
                                        <p>Product details text, text details-text..</p>
                                        <h3>1270 TK</h3>
                                        <h6>4.5 <span className="single-catt-pro-iit-star-two-cclm"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* single item */}
                        {/* single item */}
                        <div className="col-6">
                            <div className="single-category-single-product-two-column-single-product">
                                <Link to="/">
                                    <div className="single-cattgr-product-two-cclm-img">
                                        <img src={require('../../../assets/slide-2.jpg')} alt="orponbd Online shop"/>
                                    </div>
                                    <div className="single-cattgr-product-two-cclm-texxt-secc">
                                        <p>Product details text, text details-text..</p>
                                        <h3>1270 TK</h3>
                                        <h6>4.5 <span className="single-catt-pro-iit-star-two-cclm"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* single item */}
                    </div>
                    {/* single item row */}
                    {/* single item row */}
                    <div className="row single-catt-two-cllm-ex-pdd">
                        {/* single item */}
                        <div className="col-6">
                            <div className="single-category-single-product-two-column-single-product">
                                <Link to="/">
                                    <div className="single-cattgr-product-two-cclm-img">
                                        <img src={require('../../../assets/slide-3.jpg')} alt="orponbd Online shop"/>
                                    </div>
                                    <div className="single-cattgr-product-two-cclm-texxt-secc">
                                        <p>Product details text, text details-text..</p>
                                        <h3>1270 TK</h3>
                                        <h6>4.5 <span className="single-catt-pro-iit-star-two-cclm"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* single item */}
                        {/* single item */}
                        <div className="col-6">
                            <div className="single-category-single-product-two-column-single-product">
                                <Link to="/">
                                    <div className="single-cattgr-product-two-cclm-img">
                                        <img src={require('../../../assets/product-2.jpg')} alt="orponbd Online shop"/>
                                    </div>
                                    <div className="single-cattgr-product-two-cclm-texxt-secc">
                                        <p>Product details text, text details-text..</p>
                                        <h3>1270 TK</h3>
                                        <h6>4.5 <span className="single-catt-pro-iit-star-two-cclm"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* single item */}
                    </div>
                    {/* single item row */}
                </div>
            </div>
            {/* single category product two column */}

            <MainMenu/>
            </>
        );
    }
}

export default SingleCategoryProductTwoColumn;
