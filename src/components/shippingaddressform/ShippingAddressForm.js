import React, { Component } from 'react';
import './shippingaddressform.css';
import {Link} from 'react-router-dom';

export default class ShippingAddressForm extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Shipping Address</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shipping-address-form-main-top-color-sec">
                <div className="shipping-address-form-main-section-mobl">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="shipping-address-form-main-section--mbl-bbxx">
                                    <form action="">
                                        <div className="shipping-address-form-main-section-input-bboox">
                                            <input type="text" placeholder="Full Name"/>
                                        </div>
                                        <div className="shipping-address-form-main-section-input-bboox">
                                            <input type="text" placeholder="Phone Number"/>
                                        </div>
                                        <div className="shipping-address-form-main-section-input-bboox">
                                            <input type="text" placeholder="Address"/>
                                        </div>
                                        <div className="shipping-address-form-main-section-input-bboox">
                                            <select>
                                                <option value="" selected disabled>District</option>
                                                <option value="">Dhaka</option>
                                                <option value="">Rangpur</option>
                                                <option value="">A</option>
                                                <option value="">Bbb</option>
                                            </select>
                                        </div>
                                        <div className="shipping-address-form-main-section-input-bboox">
                                            <select>
                                                <option value="" selected disabled>Thana</option>
                                                <option value="">Dhaka</option>
                                                <option value="">Rangpur</option>
                                                <option value="">A</option>
                                                <option value="">Bbb</option>
                                            </select>
                                        </div>
                                        <div className="shipping-address-form-main-section-input-bboox">
                                            <div className="row exx-pprrddaddress">
                                                <div className="col-10">
                                                    <div className="shippnng-aasad-mak-tzxt">
                                                        <p>Make default shipping address</p>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="jhgjsgfgfdxz text-right">
                                                        <span><input type="radio" id="address" name="address"/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shipping-address-form-main-section-input-bboox-button-xx">
                                            <button>Save</button>
                                        </div>
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
