import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './groceryallitems.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Modal from 'react-bootstrap/Modal';

import GroceryCartIconBox from './carticonbox/GroceryCartIconBox';
import MainMenu from '../mainmenu/MainMenu';

export default class GroceryAllItems extends Component {
    

    // View More Modal
    constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,

            // For Increase Decrease
            value: 1,
            // For Increase Decrease
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}
    // View More Modal

    // Increace Decreace Section start ---------------------------

    // state = {
    //     value: 0
    //   }
    
    decrease = () => {
        this.setState({ value: this.state.value - 1 });
      }
    
      increase = () => {
        this.setState({ value: this.state.value + 1 });
      }
    // Increace Decreace Section end -----------------

    render() {

        var groceryallcat = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    dots: false,
                    arrows: false
                  }
                }
              ]
          };
        return (
            <>
            <div className="orponbd-womens-fashion-category-page-web-top-menu">
                
            </div>

            {/* Grocery Cart Icon Box Fixed Section Start */}
            <div className="obd-grocery-main-page-all-item-cart-main-page-box">
                <GroceryCartIconBox/>
            </div>
            {/* Grocery Cart Icon Box Fixed Section End */}

            {/* Banner start */}
            <div className="obd-grocery-main-page-all-item-banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-main-page-all-item-banner-section-box">
                                <img src={require('../../assets/grocery-main-page-main-banner.png')} alt="orponbd global collections"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner end */}

            {/* Slider Section Start */}
            <div className="grocery-zone-all-itm-wv-com-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="grocery-zone-all-itm-wv-wexv-dot-main-sec-bboxx-web-version">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="grocery-zone-all-itm-wvv-hedd-txt text-center">
                                            <h3>Shop By Category</h3>
                                        </div>
                                        <div className="obdd-dot-cmm-section-box-groceryzone-all-itm-wv">
                                            <Slider {...groceryallcat}>
                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-cooking-essentials-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img">
                                                                <img src={require('../../assets/grocery-slide-1.png')} alt="orponbd Online Shop"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn">
                                                                    <h4>Cooking Essentials</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start 2 */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-snacks-confectionary-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-two">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-two">
                                                                <img src={require('../../assets/grocery-slide-2.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-two">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-two">
                                                                    <h4>Snacks & Confectonary</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 2 */}
                                                {/* Single product start 3 */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-beverage-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-three">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-three">
                                                                <img src={require('../../assets/grocery-slide-3.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-three">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-three">
                                                                    <h4>Beverages</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 3 */}
                                                {/* Single product start 4 */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="/grocery-health-and-beauty-all-items">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-four">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img-four">
                                                                <img src={require('../../assets/grocery-slide-4.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt-four">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn-four">
                                                                    <h4>Health & Beauty</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end 4 */}

                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="#">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img">
                                                                <img src={require('../../assets/grocery-slide-1.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn">
                                                                    <h4>Cooking Essentials</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                                {/* Single product start */}
                                                <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-pdd-wrap">
                                                    <Link to="#">
                                                        <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct">
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-img">
                                                                <img src={require('../../assets/grocery-slide-2.png')} alt="orponbd global collections"/>
                                                            </div>
                                                            <div className="obd-groceryzonee-web-ddot-cmm-snnggl-prodct-ttxt">
                                                                <div className="grocery-zone-product-ratng-priicice-web-vvrsn">
                                                                    <h4>Health & Beauty</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                {/* Single product end */}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider Section End */}


            {/* Cooking essential Start ----------------------------------------------------*/}
            <div className="obd-grocery-details-products-hed-txt-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-details-products-hedd-txt-wv">
                                <h4>Cooking Essentials</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-grocery-all-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-grocery-allitm-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="content-overlay"></div>

                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>

                                                <div class="content-details fadeIn-bottom">
                                                    <div className="obd-grocery-all-itxm-details-overly-con">
                                                        <div className="obd-grocery-all-itxm-details-overly-con-in-dec">
                                                            <div className="def-number-input number-input">
                                                                <button className="grocery-cart-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                                <input className="quantity grocery-cart-inc-dec-input-fld" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                                type="number" />
                                                                <button className="grocery-cart-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="obd-grocery-all-itxm-details-overly-con-add-to-cart">
                                                            <Link to="/">
                                                                Add to Cart
                                                            </Link>       
                                                        </div>
                                                        <div className="obd-grocery-all-itxm-details-overly-con-view-det">

                                                            {/* Modal Start */}
                                                            <button onClick={this.handleShow}>
                                                                View Details
                                                            </button>
                                                                <Modal show={this.state.show} onHide={this.handleClose}>
                                                                    <Modal.Header closeButton>
                                                                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                                                                    </Modal.Header>

                                                                    <Modal.Body>
                                                                        <div className="obd-grocery-all-itxm-details-modal-body-main-box">
                                                                            <div className="container">
                                                                                <div className="row obd-grocery-all-itxm-details-exx-pxcd">
                                                                                    <div className="col-md-6">
                                                                                        <div className="obd-grocery-all-itxm-details-modal-body-product-img">
                                                                                            <img src={require('../../assets/grocery-product-2.png')} alt="orponbd Online Shop"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="obd-grocery-all-itxm-details-modal-body-product-text-content">
                                                                                            <div className="obd-grocery-all-itxm-details-modal-body-product-text-hedd">
                                                                                                <h4>Product Name Here</h4>
                                                                                                <p>2.5 KG</p>
                                                                                            </div>

                                                                                            <div className="obd-grocery-all-itxm-details-modal-body-product-text-price-and-offer">
                                                                                                <h4><span>৳</span> 1750 <span className="obdx-grocery-all-itxm-details-modal-offer"><p>17% Off</p></span></h4>
                                                                                            </div>

                                                                                            <div className="obd-grocery-all-itxm-details-modal-body-product-text-inc-dec">
                                                                                                <div className="def-number-input number-input">
                                                                                                    <button className="grocery-cart-dec-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                                                                    <input className="quantity grocery-cart-inc-dec-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                                                                    type="number" />
                                                                                                    <button className="grocery-cart-incc-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="obd-grocery-all-itxm-details-modal-body-product-text-description">
                                                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur quia
                                                                                                    vel esse, voluptas numquam mollitia saepe laudantium.  
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="obd-grocery-all-itxm-details-modal-body-product-bottom-add-to-cart-buy-sec">
                                                                                <div className="container">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6">
                                                                                            <div className="obd-grocery-all-itxm-web-version-social-icon-section">
                                                                                                <ul>
                                                                                                    <li><span>Share to :</span></li>
                                                                                                    <li className="obd-grocery-all-itxm-details-share-social-icon">
                                                                                                        <li className="obd-grocery-all-itxm-details-facbk"><Link to=""><i class="fab fa-facebook-f"></i></Link></li>
                                                                                                        <li className="obd-grocery-all-itxm-details-twittr"><Link to=""><i class="fab fa-twitter"></i></Link></li>
                                                                                                        <li className="obd-grocery-all-itxm-details-instag"><Link to=""><i class="fab fa-instagram"></i></Link></li>
                                                                                                        <li className="obd-grocery-all-itxm-details-whatsa"><Link to=""><i class="fab fa-whatsapp"></i></Link></li>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <div className="obd-grocery-all-itxm-web-version-addd-buy-now-btnn-wv text-right">
                                                                                                <ul>
                                                                                                    <li className="obd-grocery-all-itxm-addd-buy-now-add-bxtn"><Link to="">Add to Cart</Link></li>
                                                                                                    <li className="obd-grocery-all-itxm-addd-buy-now-buy-bxtn"><Link to="">Buy Now</Link></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Modal.Body>

                                                                    {/* <Modal.Footer>
                                                                        <Button variant="secondary" onClick={this.handleClose}>
                                                                            Close
                                                                        </Button>
                                                                        <Button variant="primary" onClick={this.handleClose}>
                                                                            Save Changes
                                                                        </Button>
                                                                    </Modal.Footer> */}
                                                                </Modal>
                                                                {/* Modal End*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-2.png')} alt="orponbd Online Shop"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-3.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-4.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    
                                    
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-9.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Cooking essential Products End */}


            <div className="obd-grocery-all-itxm-details-view-more-buttonn">
                <div className="obd-grocery-all-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Cooking essential End Main ---------------------------------*/}


            {/* Snacks & Confectonary Start --------------------------------*/}
            <div className="obd-grocery-details-products-hed-txt-section-snacks">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-details-products-hedd-txt-wv-snacks">
                                <h4>Snacks & Confectonary</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-grocery-all-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-grocery-allitm-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-6.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Snacks & Confectonary Products End */}


            <div className="obd-grocery-all-itxm-details-view-more-buttonn">
                <div className="obd-grocery-all-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Snacks & Confectonary End Main ---------------------------------*/}


            {/* Beverages Section Start ------------------------------------- */}
            <div className="obd-grocery-details-products-hed-txt-section-beverage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-details-products-hedd-txt-wv-beverage">
                                <h4>Beverages</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-grocery-all-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-grocery-allitm-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-3.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-4.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-6.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Beverages Products End */}


            <div className="obd-grocery-all-itxm-details-view-more-buttonn">
                <div className="obd-grocery-all-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Beverages End Main ---------------------------------*/}


            {/* Health & Beauty Section Start ------------------------------------- */}
            <div className="obd-grocery-details-products-hed-txt-section-healtyand-beauty">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-grocery-details-products-hedd-txt-wv-healtyand-beauty">
                                <h4>Health & Beauty</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-grocery-all-details-products-webversion-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="obd-grocery-allitm-det-section-all-products-sec-box">
                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-1.png')} alt="orponbd online shop"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-2.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-5.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-8.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}

                                {/* Single Roww Start */}
                                <div className="row grocery-all-itm-det-prod-exx-pdddrw">
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-6.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                    {/* Single product start */}
                                    <div className="col-md-2 col-6">
                                        <div className="obd-grocery-all-itxm-details-all-products-single-product">
                                            <Link to="#">
                                                <div className="obd-grocery-all-itxm-details-all-products-single-web-vvesnn-img">
                                                    <img src={require('../../assets/grocery-product-7.png')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="obd-grocery-all-itxm-details-web-ddot-cmm-snnggl-prodct-web-vvrsn-ttxt">
                                                    <p>Product Name In Two Line maximum</p>
                                                    <div className="obd-grocery-all-itxm-details-start-rattng">
                                                        <span className="obd-grocery-all-itxm-details-star-count-number">150 Sold</span>
                                                    </div>
                                                    <div className="obd-grocery-all-itxm-details-priicice-web-vvrsn">
                                                        <h3><span>৳</span> 1200</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single product end */}
                                </div>
                                {/* Single Roww End */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Health & Beauty Products End */}


            <div className="obd-grocery-all-itxm-details-view-more-buttonn health-and-beauuttyy-lastt">
                <div className="obd-grocery-all-web-version-view-more-btn text-center">
                    <button>View More <span><i className="fas fa-angle-down"></i></span></button>
                </div>
           </div>
            {/* Health & Beauty End Main ---------------------------------*/}

            <div className="orponbd-womens-fashion-category-page-web-top-menu-ex">
                <MainMenu/>
            </div>

            </>
        )
    }
}
