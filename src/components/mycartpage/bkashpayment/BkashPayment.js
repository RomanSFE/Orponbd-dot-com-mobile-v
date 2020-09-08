import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './bkashpayment.css';

export default class BkashPayment extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/payment-proceed">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Bkash Payment</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bkash-payment-mobbl-vvrsn-top-cclr-sect">
                <div className="bkash-paymeny-mov-v-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bkash-paymeny-tpoo-section">
                                    <p>To pay via Bkash mobile banking please follow the Instructions</p>
                                </div>

                                <div className="bkash-payment-info-hed-text">
                                    <h4>Payment Information</h4>
                                </div>

                                {/* Order number and payable amount */}
                                <div className="bkash-order-number-and-payable-ammnt-sec-bbox">
                                    <div className="bkash-order-number-and-payable-ammnt-sec">
                                        <p>Order Number</p>
                                        <span className="bkash-ord-pay-amnt-right-ttxt">12457</span>
                                    </div>
                                    <div className="bkash-order-number-and-payable-ammnt-sec">
                                        <p>Payable Amount</p>
                                        <span className="bkash-ord-pay-amnt-right-ttxt">1250 TK</span>
                                    </div>
                                </div>
                                {/* Order number and payable amount */}

                                {/* Merchant Number */}
                                <div className="bkash-payment-mercnt-nmbr-sec">
                                    <p>Merchant Number:</p>
                                    <span className="merchent-nnmbe-mv-nmbr">01933339963</span>
                                </div>
                                {/* Merchant Number */}

                                {/* Enter Transaction section */}
                                <div className="bkash-payment-enter-transaction-sec-mv text-center">
                                    <h4>Enter Transaction id</h4>
                                    <div className="bkks-entt-teansctn-input-bbx">
                                        <input type="text" placeholder="E.G: 0178G5HF58"/>
                                    </div>
                                </div>
                                {/* Enter Transaction section */}

                                {/* Confirm Order */}
                                <div className="bkash-payment-confirm-order-mv text-center">
                                    <button type="submit">Confirm Order</button>
                                </div>
                                {/* Confirm Order */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ex */}
                <div className="edfred"></div>
                {/* ex */}
                {/* Bkash payment how to order sec */}
                <div className="bkash-payment-how-to-order-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bkash-payment-how-to-order-sec-main-ttxt">
                                    <div className="bkash-pmnt-how-to-or-hed">
                                        <h4>How to pay?</h4>
                                    </div>

                                    <div className="bkash-payment-hhow-to-orrd-rull-ttxt">
                                        {/* single box */}
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box exxppdnfs">
                                            <h6>1</h6>
                                            <p className="ggbvzxuii">Open bkash menu by dialing *247# Or Open Bkash App</p>
                                        </div>
                                        {/* single box */}
                                        {/* single box */}
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>2</h6>
                                            <p className="ggbvzxuii">Choose Make Payment by enter 3</p>
                                        </div>
                                        {/* single box */}
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>3</h6>
                                            <p className="ggbvzxuii">Enter our bkash number: 01933339963</p>
                                        </div>
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>4</h6>
                                            <p className="ggbvzxuii">Enter the amount: 1225</p>
                                        </div>
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>5</h6>
                                            <p className="ggbvzxuii">Enter the reference: 693</p>
                                        </div>
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>6</h6>
                                            <p className="ggbvzxuii">Enter the counter number: 0</p>
                                        </div>
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>7</h6>
                                            <p className="ggbvzxuii">Review details and enter bkash menu PIN</p>
                                        </div>
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>8</h6>
                                            <p className="ggbvzxuii">Now, You will receive the transaction details</p>
                                        </div>
                                        <div className="bkash-payment-hhow-to-orrd-rull-ttxt-sngl-box">
                                            <h6>9</h6>
                                            <p className="ggbvzxuii">Finally enter the TRxID in the field and click on the Verify button</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bkash payment how to order sec */}
            </div>
            </>
        )
    }
}
