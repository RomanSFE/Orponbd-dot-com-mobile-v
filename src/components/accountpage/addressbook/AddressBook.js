import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './addressbook.css';

import MainMenu from '../../mainmenu/MainMenu.js';

export default class AddressBook extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Address Book</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="address-book-account-settings-mv-topp-sec">
                <div className="address-book-account-settings-mv-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="address-book-add-address-rrpp-bx">
                                    <div className="address-pbbok-buttn-section text-center">
                                        <Link to="/shipping-address">
                                            <span><i class="fas fa-plus"></i></span> Add Address
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* address section */}
                <div className="address-book-acc-sett-address-boxx">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Single Address setion */}
                                <div className="address-book-acc-sett-address-boxx-ttext">
                                    <h4>Abdulla Al Roman</h4>
                                    <h5>0174 555 6660</h5>
                                    <p>address details text, address details text, address details text...</p>

                                    <div className="address-boos-defsult-add-sec">
                                        <ul>
                                            <li><p>Default address</p></li>
                                            {/* <li className="address-bbock-def-radio-tbtn"><input type="checkbox"/></li> */}
                                            
                                            <li className="address-bbock-def-radio-tbtn">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span class="lbl padding-8"></span>
                                                </label>
								            </li>
                                        </ul>
                                    </div>

                                    <div className="address-book-add-settngs-edit-ttxt">
                                        <Link to="/shipping-address">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                                {/* Single Address setion */}
                                {/* Single Address setion */}
                                <div className="address-book-acc-sett-address-boxx-ttext">
                                    <h4>Abdulla Al Roman</h4>
                                    <h5>0174 555 6660</h5>
                                    <p>address details text, address details text, address details text...</p>
                                    
                                    <div className="address-boos-defsult-add-sec">
                                        <ul>
                                            <li><p>Default address</p></li>
                                            {/* <li className="address-bbock-def-radio-tbtn"><input type="checkbox"/></li> */}
                                            
                                            <li className="address-bbock-def-radio-tbtn">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span class="lbl padding-8"></span>
                                                </label>
								            </li>
                                        </ul>
                                    </div>

                                    <div className="address-book-add-settngs-edit-ttxt">
                                        <Link to="/shipping-address">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                                {/* Single Address setion */}
                                {/* Single Address setion */}
                                <div className="address-book-acc-sett-address-boxx-ttext">
                                    <h4>Abdulla Al Roman</h4>
                                    <h5>0174 555 6660</h5>
                                    <p>address details text, address details text, address details text...</p>

                                    <div className="address-boos-defsult-add-sec">
                                        <ul>
                                            <li><p>Default address</p></li>
                                            {/* <li className="address-bbock-def-radio-tbtn"><input type="checkbox"/></li> */}
                                            
                                            <li className="address-bbock-def-radio-tbtn">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span class="lbl padding-8"></span>
                                                </label>
								            </li>
                                        </ul>
                                    </div>

                                    <div className="address-book-add-settngs-edit-ttxt">
                                        <Link to="/shipping-address">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                                {/* Single Address setion */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* address section */}

            </div>
            <MainMenu/>
            </>
        )
    }
}
