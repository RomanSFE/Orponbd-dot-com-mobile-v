import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './orderconfirmsuccessful.css';


import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';

export default class OrderConfirmSuccesful extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="orderplaced-confirmation-successful top-cclr-mv-sec">
                <div className="orderplaced-confirmation-successful-main-mv-secttn">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="order-placed-confirm-suuccessfl-mn-mv-box">
                                    <div className="order-placed-confirmmn-hedd-ttxt text-center">
                                        <h4>Thank you for your Order</h4>
                                    </div>
                                    <div className="order-placed-suvvess-fll-succ-mv-txt text-center">
                                        <p>Your order has been placed successfully</p>
                                    </div>
                                    {/* Order confirm info */}
                                    <div className="order-placed-succs-mv-mnttxt-sec-bbox">
                                        <div className="order-placed-succfl-number-and-payable-ammnt-sec">
                                            <p>Order Number:</p>
                                            <span className="order-ppls-succfl-amnt-right-ttxt">12457</span>
                                        </div>
                                        <div className="order-placed-succfl-number-and-payable-ammnt-sec">
                                            <p>Payment Method:</p>
                                            <span className="order-ppls-succfl-amnt-right-ttxt">Bkash</span>
                                        </div>
                                        <div className="order-placed-succfl-number-and-payable-ammnt-sec">
                                            <p>Order Amount:</p>
                                            <span className="order-ppls-succfl-amnt-right-ttxt">1250 TK</span>
                                        </div>
                                    </div>
                                    {/* Order confirm info */}

                                    {/* Confirm order image and text sec */}
                                    <div className="confirm-order-successful-immg-txtt-sec-mv text-center">
                                        <img src={require('../../../assets/confirm-order-2.png')} alt="orponbd Online shop"/>
                                        <h5>Estimated Delivery Time:</h5>
                                        <p>Within 2 or 3 days</p>
                                        <h6>Delivery Courier: <span>DropBD</span></h6>
                                    </div>
                                    {/* Confirm order image */}

                                    {/* Back to my account button  */}
                                    <div className="order-placed-confirm-succs-backto-hmm-buttn text-center">
                                        <Link to="/">
                                            Back to My Account
                                        </Link>
                                    </div>
                                    {/* Back to my account button  */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
