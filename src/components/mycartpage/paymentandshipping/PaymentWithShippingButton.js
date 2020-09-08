import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './paymentwithshippingbutton.css';


export default class PaymentWithShippingButton extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/singleproductpage">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Add Shipping Address</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add shipping Button */}
            <div className="payment-with-shipping-button-button-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="payment-with-shipping-button-button-box text-center">
                                <Link to="/shipping-address">Add Shipping Address</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add shipping Button */}

            {/* Order Summary */}
            <div className="cart-order-summary-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="order-summary-hedd-ttxt">
                                <h3>Order Summary</h3>
                            </div>
                        </div>
                    </div>
                    {/* Single product item */}
                    <div className="row order-summary-singgl-product-ex-pdd">
                        <div className="col-4">
                            <div className="order-summary-sinng-pro-ittm-img">
                                <img src={require('../../../assets/slide-1.jpg')} alt="orponbd Online shop"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="order-summary-sinng-pro-ittm-ttext">
                                <p>product details text, text details text..</p>
                                <h5>1375 TK</h5>
                                <div className="single-product-itwm-summary-color-option">
                                    <ul>
                                        <li>Color: Black</li>
                                        <li>Size: M</li>
                                        <li>X3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Single product item */}
                    {/* Single product item */}
                    <div className="row order-summary-singgl-product-ex-pdd">
                        <div className="col-4">
                            <div className="order-summary-sinng-pro-ittm-img">
                                <img src={require('../../../assets/product-2.jpg')} alt="orponbd Online shop"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="order-summary-sinng-pro-ittm-ttext">
                                <p>product details text, text details text..</p>
                                <h5>1375 TK</h5>
                                <div className="single-product-itwm-summary-color-option">
                                    <ul>
                                        <li>Color: Black</li>
                                        <li>Size: M</li>
                                        <li>X3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Single product item */}

                    {/* Item total price and delivery charge */}
                    <div className="product-summary-item-total-price-del-charge">
                        <div className="container">
                            <div className="row product-summv-total-ex-pzdd">
                                <div className="col-12">
                                    <div className="product-summary-item-total-price-box text-right">
                                        <p>Item Total: <strong>1785 TK</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-summary-item-total-del-chrrg-bxbx">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="product-summary-item-total-del-chrrg-bxbx-ttxt">
                                            <p>Delivery Charge:</p>
                                            <h6>Est Arrival Time: 1 - 2 Days</h6>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="product-summary-item-total-del-chrrg-bxbx-ttxt-quntty">
                                            <p>60 TK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item total price and delivery charge */}
                </div>
            </div>
            {/* Order Summary */}

            {/* Coupon code */}
            <div className="order-summary-coupponn-main-section">
                <div className="container">
                    <div className="row order-summary-coupponn-ex-ppdd">
                        <div className="col-12">
                            <div className="order-summary-coupponn-input-box-sec">
                                <form action="">
                                    <div className="order-summary-input-bbox-couppn-bx">
                                        <input type="text" placeholder="Enter coupon code"/>
                                    </div>
                                    <div className="order-summary-input-bbox-couppn-bx-button">
                                        <button>Apply</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Coupon code */}

            <div className="order-summary-order-total-section-main-mobile">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="oreder-total-ffhednf-ttxt">
                                <h4>Order Total</h4>
                            </div>
                            <div className="oreder-total-ffhednf-ttxt-single-productt-ittm">
                                <ul>
                                    <li>Item sub total: <span className="hdjhdhfhj text-right">12540 TK</span></li>
                                    <li>Delivery Fee: <span className="hdjhdhfhj text-right">120</span></li>
                                    <li>Discount: <span className="hdjhdhfhj text-right">0</span></li>
                                </ul>
                            </div>
                            {/* Item total */}
                            <div className="product-summary-item-total-payable-amt text-right">
                                <p>Payable Amount: <strong>1785 TK</strong></p>
                            </div>
                            {/* Item total */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Total and confirm section */}
            <div className="product-summary-total-confirm-section">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="product-summary-total-confirm-section-total-ttxt">
                                <p>Total: <span>12540 TK</span></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="product-summary-total-confirm-section-con-ffn-btn">
                                <Link to="">
                                    Confirm <span><i className="fas fa-check"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Total and confirm section */}

            </>
        )
    }
}
