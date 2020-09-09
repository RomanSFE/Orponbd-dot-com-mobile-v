import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './myaccountmainpage.css';

import Modal from 'react-awesome-modal';

import MainMenu from '../mainmenu/MainMenu.js';
import JustForYou from '../allsections/justforyou/JustForYou.js'

export default class MyAccountMainPage extends Component {

    // Modal
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false,
        });
    }
    // Modal

    render() {
        return (
            <>
            <div className="myaccount-mainpage-ttop-sectioon">
                <div className="myaccount-main-page-vv-mm-profile-img-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="myaccount-main-page-vv-mm-profile-img-section-immg">
                                    <img src={require('../../assets/product-9.jpg')} alt="orponbd global collections"/>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="myaccount-main-page-vv-mm-profile-img-section-name-ttxt">
                                    <h4>User Name</h4>
                                    <p>useremailadd@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* My orders section */}
                <div className="my-account-page-may-order-main-sectionx">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="my-account-page-may-order-main-mob-sectionx-bboxx">
                                    <div className="my-account-page-may-order-main-hed">
                                        <p>My Orders</p>
                                    </div>
                                    <div className="my-order-view-all-b-text-vbx">
                                        <Link to="/all-orders-product">
                                            View All
                                        </Link>
                                    </div>
                                    {/* single row */}
                                    <div className="row my-account-page-may-order-expdd-rww">
                                        {/* single item */}
                                        <div className="my-account-page-mobb-lv-snnggl-prodct text-center">
                                            <Link to="/all-orders-product">
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-img">
                                                    <img src={require('../../assets/all-333.png')} alt="orponbd global collections"/>
                                                    {/* <span><i class="fa fa-th" aria-hidden="true"></i></span> */}
                                                </div>
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-ttxt">
                                                    <p>All</p>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* single item */}
                                        {/* single item */}
                                        <div className="my-account-page-mobb-lv-snnggl-prodct text-center">
                                            <Link to="/all-orders-product">
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-img">
                                                    <img src={require('../../assets/all-444.png')} alt="orponbd global collections"/>
                                                    {/* <span><i class="far fa-clone"></i></span> */}
                                                </div>
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-ttxt">
                                                    <p>Pending</p>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* single item */}
                                        {/* single item */}
                                        <div className="my-account-page-mobb-lv-snnggl-prodct text-center">
                                            <Link to="/all-orders-product">
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-img">
                                                    <img src={require('../../assets/all-555.png')} alt="orponbd global collections"/>
                                                    {/* <span><i class="fas fa-recycle"></i></span> */}
                                                </div>
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-ttxt">
                                                    <p>Awaiting</p>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* single item */}
                                        {/* single item */}
                                        <div className="my-account-page-mobb-lv-snnggl-prodct text-center">
                                            <Link to="/all-orders-product">
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-img">
                                                    <img src={require('../../assets/all-524.png')} alt="orponbd global collections"/>
                                                    {/* <span><i class="fas fa-shuttle-van"></i></span> */}
                                                </div>
                                                <div className="my-account-page-mobb-lv-snnggl-prodct-ttxt">
                                                    <p>Delivered</p>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* single item */}
                                    </div>
                                    {/* single row */}

                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* My orders section */}

                {/* My Wallet Section */}
                <div className="my-account-my-wallet-main-section-mv">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="my-account-my-wallet-mv-ttxt">
                                    <h4>My Wallet</h4>
                                    <p>Balance: <span>17250 TK</span></p>
                                </div>
                                <div className="my-accnt-recennxt-view-recent-sec">
                                    <Link to="/">
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* My Wallet Section */}

                {/* Wishlist Account Settings all Section */}
                <div className="account-settings-wishlist-all-link-sections-mv-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="account-settings-wishlist-all-link-sections-mv-sec-boxx">
                                    {/* single link */}
                                    <Link to="/wishlist">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/wishlist-11.png')} alt="orponbd Online shop"/></span>
                                            <p>My Wishlist</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    {/* single link */}
                                    <Link to="/pre-order">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/pre-order-11.png')} alt="orponbd Online shop"/></span>
                                            <p>Pre Order</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/coupon-11.png')} alt="orponbd Online shop"/></span>
                                            <p>Coupon</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link to="/address-book">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/address-book-11.png')} alt="orponbd Online shop"/></span>
                                            <p>My Address Book</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link to="/manage-review">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/manage-rev-11.png')} alt="orponbd Online shop"/></span>
                                            <p>Manage Reviews</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link to="/help-and-support">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/help-support-11.png')} alt="orponbd Online shop"/></span>
                                            <p>Help And Support</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link to="/accounts-settings">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/account-settings-11.png')} alt="orponbd Online shop"/></span>
                                            <p>Account Settings</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                    <Link to="/about-us">
                                        <div className="account-settings-wishlist-all-link-sections-mv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/about-us-11.png')} alt="orponbd Online shop"/></span>
                                            <p>About Us</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>

                                    {/* modal */}
                                    {/* Single item Logout */}
                                    <div className="main-acc-sec-loggoout-sec-moddl">
                                        <button onClick={() => this.openModal()}> <span className="my-accny-logout-bbsf"><img src={require('../../assets/logout-11.png')} alt="orponbd Online shop"/></span> <strong>Logout</strong></button>
                                        <Modal visible={this.state.visible} width="320" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                            <div className="main-acc-logoutacc-sett-modal-secvc text-center">
                                                {/* <input type="text" placeholder="your name..."/> */}
                                                <div className="main-acc-logxg-avccount-sett-subbmt-bbtn">
                                                    <button type="submit">Logout</button>
                                                </div>
                                                <div className="main-acc-llxzg-acc-setxt-close-bbxtn">
                                                    <button onClick={() => this.closeModal()}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </Modal>
                                        <span className="main-llggacc-sett-moddl-ang-rr"><i className="fas fa-angle-right"></i></span>
                                    </div>
                                    {/* Single item LogOut */}
                                    {/* modal */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Wishlist Account Settings all Section */}

                {/* Just for you section */}
                <div className="myy-account-just-for-youu-secctbn">
                    <JustForYou/>
                </div>
                {/* Just for you section */}

            </div>

            <MainMenu/>
            </>
        )
    }
}
