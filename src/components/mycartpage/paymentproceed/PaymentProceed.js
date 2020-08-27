import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './paymentproceed.css';


import SingleProductTopMenu from '../../singleproductpage/SingleProductTopMenu.js';

export default class PaymentProceed extends Component {
    render() {
        return (
            <>
              <SingleProductTopMenu/>
              <div className="payment-proceed-courier-mob-sec">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="payment-proceed-courerr-sec-bboox-mv">
                                <div className="select-courier-service-hed-mob">
                                    <h4>Select Courier Service</h4>
                                </div>
                                <div className="select-courier-service-name-box">
                                    <p>E-Courier</p>
                                    <span><input type="radio" name="courier-addr"/></span>
                                </div>
                                <div className="select-courier-service-name-box">
                                    <p>Pathao Courier</p>
                                    <span><input type="radio" name="courier-addr"/></span>
                                </div>
                                <div className="select-courier-service-name-box">
                                    <p>RedX Courier</p>
                                    <span><input type="radio" name="courier-addr"/></span>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Payment option */}
              <div className="payment-proceed-payment-option-mob-sec">
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="payment-proceed-seeccxxt-bbox">
                                <div className="payment-option-secc-service-hed-mob">
                                    <h4>Payment Method</h4>
                                </div>
                                
                                <div className="payment-option-name-service-name-box">
                                    <span>Wallet</span> <img src={require('../../../assets/wallet.svg')} alt="orponbd Online shop"/>
                                    <span className="payment-proceed-inngz"><input type="radio" name="pathao-couriar"/></span>
                                </div>
                                <div className="payment-option-name-service-name-box">
                                    <span>Bkash</span> <img src={require('../../../assets/bkash.png')} alt="orponbd Online shop"/>
                                    <span className="payment-proceed-inngz"><input type="radio" name="pathao-couriar"/></span>
                                </div>
                                <div className="payment-option-name-service-name-box">
                                    <span>Nagod</span> <img src={require('../../../assets/nagod.svg')} alt="orponbd Online shop"/>
                                    <span className="payment-proceed-inngz"><input type="radio" name="pathao-couriar"/></span>
                                </div>
                                <div className="payment-option-name-service-name-box">
                                    <span>Card</span> <img src={require('../../../assets/card.svg')} alt="orponbd Online shop"/>
                                    <span className="payment-proceed-inngz"><input type="radio" name="pathao-couriar"/></span>
                                </div>
                                <div className="payment-option-name-service-name-box">
                                    <span>Cash on delivery</span> <img src={require('../../../assets/cash-on-delivery.svg')} alt="orponbd Online shop"/>
                                    <span className="payment-proceed-inngz"><input type="radio" name="pathao-couriar"/></span>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Total and confirm section */}
            <div className="select-courier-total-proceed-mmxml-section">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="select-courier-total-proceed-mmxml-section-ttxt-mv">
                                <p>Total: <span>12540 TK</span></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="select-courier-total-proceed-mmxml-section-ttxt-mv-procceed-ffn-btn">
                                <Link to="/">
                                    Proceed <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
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
