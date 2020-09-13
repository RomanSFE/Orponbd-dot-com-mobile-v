import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singlecategoryproduct.css';

import Search from '../../search/Search.js'

import classnames from "classnames";

import MainMenu from '../../mainmenu/MainMenu.js';

// Modal
import PopPop from 'react-poppop';
// Modal

class SingleCategoryProduct extends Component {
    
     // filter
     constructor(){
        super();
        this.state = {
          style:"menu",
          menuStatus:"open",
        //   Modal
          show: false,
        //   Modal

        // Topbar Option
        prevScrollpos: window.pageYOffset,
          visible: true
        // Topbar Option

        };
        this.handleClick = this.handleClick.bind(this);
      };
    
      handleClick() {
        switch(this.state.menuStatus)
        {
          case "open":
            this.setState({
              menuStatus:"close",
              style:"menu active xxcc"
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

    // Modal
    toggleShow = show => {
        this.setState({show});
      }
    // Modal

    // Top Bar Option
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
        // Modal
        const {show} = this.state;
        // Modal
        return (
            <>
            <div className="single-acllttgory-cclr-ppdr">
            <nav
                className={classnames("main-category-top-nav-menu-ex", {
                "main-category-top-nav-menu-ex-hidden": !this.state.visible
                })}
            >
                <div className="container">
                    <div className="row">
                        {/* <div className="col-1"> */}
                            {/* <Link to="/sub-category">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Single Category Product</span>
                                </div>
                            </Link> */}

                            {/* <div className="main-category-top-menu-iconn-sec-txt">
                                <Link to="/sub-category">
                                    <span><i className="fa fa-chevron-left"></i></span>
                                </Link>
                            </div> */}
                            
                            
                            {/* <div className="main-category-proddct-serrch-boox">
                                <form action="" id="demo-2">
                                    <input type="search" placeholder="search"/>
                                </form>
                            </div> */}

                        {/* </div> */}
                        <div className="col-12">

                        <div className="main-category-top-menu-iconn-sec-txt-exttxra">
                            <Link to="/sub-category">
                                <span><i className="fa fa-chevron-left"></i></span>
                            </Link>
                        </div>

                        <div className="sin-cct-ser-ttp">
                                <Search/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="single-category-product-item-mobile-top-section">
                <div className="container">
                    <div className="row single-category-prod-ex-pdd">
                        <div className="col-8">
                            <div className="single-category-product-left-best-match-section">
                                <select>
                                    <option value="" selected>Best match</option>
                                    <option value="">Orders</option>
                                    <option value="">Price(high to low)</option>
                                    <option value="">Price(low to high)</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="single-category-product-right-filter-sec-mobli">
                                <ul>
                                    <li className="single-cat-prr-iitm-left-icn"><Link to="/single-category-product-two-column"><span className="sing-pro-sing-pro-icon-two-box"><img src={require('../../../assets/sngle-cat.png')} alt="OrponBD Online shop"/></span></Link></li>
                                    {/* <li className="single-cat-prr-iitm-filter-iicn"><span><i class="fas fa-filter"></i></span></li> */}
                                    
                                </ul>
                            </div>
                        </div>
                        {/* Sidebar section */}
                        {/* <button onClick={this.handleClick}><span><i class="fas fa-filter"></i></span></button> */}
                        <button onClick={() => this.toggleShow(true)}><span><i class="fas fa-filter"></i> Filter</span></button>
                        {/* <div className={this.state.style}> 
                            <p>Lorem, ipsum dolor.</p>              
                        </div> */}
                         {/* Sidebar section */}
                    </div>
                </div>
            </div>

            {/* single category single product section */}
            <div className="single-category-single-product-main-section">
                <div className="container">
                    {/* single product item */}
                    <Link to="/">
                        <div className="single-category-proo-mv-ez-bbox">
                            <div className="row single-catt-prood-ex0pdd">
                                <div className="col-5">
                                    <div className="single-category-single-product-immxg-sec">
                                        <img src={require('../../../assets/slide-1.jpg')} alt="orponbd Online shop"/>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="single-category-single-product-texxtt-sec">
                                        <p>Product details text, text details-text.....</p>
                                        <h3>1270 TK</h3>
                                        <h6>4.5 <span className="single-catt-pro-iit-star"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* single product item */}
                    {/* single product item */}
                    <Link to="/">
                        <div className="row single-catt-prood-ex0pdd">
                            <div className="col-5">
                                <div className="single-category-single-product-immxg-sec">
                                    <img src={require('../../../assets/slide-2.jpg')} alt="orponbd Online shop"/>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="single-category-single-product-texxtt-sec">
                                    <p>Product details text, product details-text......</p>
                                    <h3>1270 TK</h3>
                                    <h6>4.5 <span className="single-catt-pro-iit-star"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* single product item */}
                    {/* single product item */}
                    <Link to="/">
                        <div className="row single-catt-prood-ex0pdd">
                            <div className="col-5">
                                <div className="single-category-single-product-immxg-sec">
                                    <img src={require('../../../assets/slide-3.jpg')} alt="orponbd Online shop"/>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="single-category-single-product-texxtt-sec">
                                    <p>Product details text, text details-text.....</p>
                                    <h3>1270 TK</h3>
                                    <h6>4.5 <span className="single-catt-pro-iit-star"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* single product item */}
                    {/* single product item */}
                    <Link to="/">
                        <div className="row single-catt-prood-ex0pdd">
                            <div className="col-5">
                                <div className="single-category-single-product-immxg-sec">
                                    <img src={require('../../../assets/product-2.jpg')} alt="orponbd Online shop"/>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="single-category-single-product-texxtt-sec">
                                    <p>Product details text, text details-text......</p>
                                    <h3>1270 TK</h3>
                                    <h6>4.5 <span className="single-catt-pro-iit-star"><i className="fas fa-star"></i></span> <span>190 sold</span></h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* single product item */}
                </div>
            </div>
            {/* single category single product section */}

            {/* Modal */}
            <div className="cchdhgfg">
                {/* <Button onClick={() => this.toggleShow(true)}>Long Content</Button> */}
                {/* <button onClick={() => this.toggleShow(true)}>Show Me</button> */}
                <PopPop open={show}
                        closeBtn={true}
                        closeOnEsc={true}
                        onClose={() => this.toggleShow(false)}
                        closeOnOverlay={true}>
                {/* <div style={{textAlign: 'center'}}> */}
                    <div className="jhgjhfhjfyt">
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
                {/* </div> */}
                </PopPop>
            </div>
            {/* Modal */}

            <MainMenu/>
            </div>
            </>
        );
    }
}

export default SingleCategoryProduct;
