import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './cardpayment.css';


import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';

export default class CardPayment extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="card-payment-main-top-section">
                <div className="card-payment-section-main-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card-image-card-icon-section text-center">
                                    <img src={require('../../../assets/credit-card-2.png')} alt="orponbd Online shop"/>
                                </div>
                                <div className="credit-card-total-price-sec-box text-center">
                                    <h4>1575 TK</h4>
                                </div>
                                <div className="credit-card-details-hedd-ttxtt">
                                    <p>Card Details</p>
                                </div>
                            </div>
                        </div>
                        <div className="row crdd-ccd-card-immag-rxx-pdd">
                            <div className="col-3">
                                <div className="crrded-card-image-boxx">
                                    <img src={require('../../../assets/visa.png')} alt="orponbd Online shop"/> 
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="crrded-card-image-boxx">
                                    <img src={require('../../../assets/master-card.png')} alt="orponbd Online shop"/> 
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="crrded-card-image-boxx">
                                    <img src={require('../../../assets/unionpay.png')} alt="orponbd Online shop"/> 
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="crrded-card-image-boxx">
                                    <img src={require('../../../assets/american-ex.png')} alt="orponbd Online shop"/> 
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-payment-secrion-mob-vv-pp">
                                    <form action="">
                                        <div className="card-payment-pp-secrion-mob-vv-input-bboox card-pay-ex-vvcls">
                                            <input type="text" placeholder="Card Number"/>
                                            <span>
                                                <img src={require('../../../assets/visa.png')} alt="orponbd Online shop"/>
                                            </span>
                                        </div>
                                        <div className="card-payment-discount-text">
                                            <p>Congratulation! You get 20% discount</p>
                                        </div>
                                        <div className="card-payment-pp-secrion-mob-vv-input-bboox">
                                            <input type="text" placeholder="Cardholder Name"/>
                                        </div>
                                        <div className="card-payment-pp-secrion-mob-vv-input-bboox">
                                            <input type="text" placeholder="Expire Date(MM/YY)"/>
                                        </div>
                                        <div className="card-payment-pp-secrion-mob-vv-input-bboox">
                                            <input type="text" placeholder="CVV"/>
                                        </div>
                                        <div className="card-payment-save-info-sec">
                                            <input type="checkbox"/>
                                            <label htmlFor="">Save Card</label>
                                        </div>
                                        <Link to="/">
                                            <div className="card-payment-pp-secrion-mob-vv-regg-bbuttnn">
                                                <button>Pay Now</button>
                                            </div>
                                        </Link>
                                    </form>
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
