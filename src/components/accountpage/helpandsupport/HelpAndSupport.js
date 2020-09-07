import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './helpandsupport.css';

import MainMenu from '../../mainmenu/MainMenu.js';

export default class HelpAndSupport extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Help and Support</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-account-help-and-support-page-top-sectiom">
                <div className="my-accpont-help-and-support-page-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* single link */}
                                <div className="my-accoon-helpp-spp-secbbox">
                                    <Link to="/">
                                    <div className="row help-annd-sprtl-ex-pdd">
                                        <div className="col-2">
                                            <div className="my-account-help-and-suttort-immg text-center">
                                                <span><i class="far fa-comment-alt"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="my-avccount-help-and-supp-ttxtt">
                                                <h4>Live Chat</h4>
                                                <p>10 AM - 10 PM Online Service</p>
                                                <span className="acc-help-supp-right-icn"><i className="fas fa-angle-right"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                {/* single link */}
                                {/* single link */}
                                <div className="my-accoon-helpp-spp-secbbox">
                                    <Link to="/">
                                    <div className="row help-annd-sprtl-ex-pdd">
                                        <div className="col-2">
                                            <div className="my-account-help-and-suttort-immg-2 text-center">
                                                <span><i class="fab fa-facebook-messenger"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="my-avccount-help-and-supp-ttxtt">
                                                <h4>Connect Facebook Messenger</h4>
                                                <p>10 AM - 10 PM Online Service</p>
                                                <span className="acc-help-supp-right-icn"><i className="fas fa-angle-right"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                {/* single link */}
                                {/* single link */}
                                <div className="my-accoon-helpp-spp-secbbox">
                                    <Link to="/">
                                    <div className="row help-annd-sprtl-ex-pdd">
                                        <div className="col-2">
                                            <div className="my-account-help-and-suttort-immg-3 text-center">
                                                <span><i class="fas fa-phone-alt"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="my-avccount-help-and-supp-ttxtt-call-center">
                                                <h4>Connect With Call Center</h4>
                                                <h6>01722 333 444</h6>
                                                <p>10 AM - 10 PM Online Service</p>
                                                <span className="acc-help-supp-right-icn"><i className="fas fa-angle-right"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                {/* single link */}
                                {/* single link */}
                                <div className="my-accoon-helpp-spp-secbbox">
                                    <Link to="/">
                                    <div className="row help-annd-sprtl-ex-pdd">
                                        <div className="col-2">
                                            <div className="my-account-help-and-suttort-immg-4 text-center">
                                                <span><i class="far fa-envelope"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="my-avccount-help-and-supp-ttxtt">
                                                <h4>Email Us</h4>
                                                <h5>emailaddr@gmail.com</h5>
                                                <span className="acc-help-supp-right-icn"><i className="fas fa-angle-right"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                {/* single link */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terms and privacy section */}
                <div className="account-set-terms-and-privicy-section">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">
                                <div className="account-settings-terms-conddtt-sections-mv-sec-boxx">
                                    {/* single link */}
                                    <Link to="/privacy-policy">
                                        <div className="account-settings-terms-and-condition-link-sections-mv-single">
                                            <span className="acc-terms-coond-icn-cls"><i class="fas fa-lock"></i></span>
                                            <p>Privacy & Policy</p>
                                            <span className="account-trrms-con-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    {/* single link */}
                                    {/* single link */}
                                    <Link to="/terms-conditions">
                                        <div className="account-settings-terms-and-condition-link-sections-mv-single">
                                            <span className="acc-terms-coond-icn-cls"><i class="fas fa-journal-whills"></i></span>
                                            <p>Terms & Conditions</p>
                                            <span className="account-trrms-con-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    {/* single link */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Terms and privacy section */}


            </div>
            <MainMenu/>
            </>
        )
    }
}
