import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './mywallet.css';
import Modal from 'react-awesome-modal';

import MainMenu from '../../mainmenu/MainMenu.js';

export default class MyWallet extends Component {
    // Reacharge Modal
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
    // Reacharge Modal
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> My Wallet</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="obd-main-section-my-wallet-bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-main-section-my-wallet-bg-section-box">
                                <div className="obd-main-section-my-wallet-main-sec-content-txt text-center">
                                    <h3>৳ 17250</h3>
                                    <p>Wallet Balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reachrge wallet Modal sec start  */}
            <div className="obd-main-section-my-wallet-reacharge-modal-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-main-section-my-wallet-reacharge-modal-section-box">
                                <div className="obd-main-section-my-wallet-reacharge-modal-section-box-bbtn text-center">
                                    <button onClick={() => this.openModal()}><i className="fas fa-plus"></i></button> <span>Recharge Wallet</span>
                                </div>
                                
                                    <Modal visible={this.state.visible} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                        <div className="reacherge-main-modal-secc">
                                            {/* Head sec start */}
                                            <div className="orponbd-reacharge-wallet-bx-color-section-box">
                                                <div className="orponbd-reacharge-wallet-bx-txtt-hd">
                                                    <div className="orponbd-reacharge-wallet-bx-txtt-hd-bboxx">
                                                        <ul>
                                                            <li><h4>Recharge Wallet</h4></li>
                                                        </ul>
                                                    </div>
                                                    <div className="flltrr-bbttn-brdr-reacharge-wallet"></div>
                                                </div>
                                            </div>
                                            {/* Head sec end */}
                                            <input type="text" placeholder="Recharge Amount.."/>
                                            <div className="obd-reacharge-payment-method-select-secc">
                                                <select>
                                                    <option value="" selected>Select Payment Method</option>
                                                    <option value="">Payment Method 1</option>
                                                    <option value="">Payment Method 2</option>
                                                    <option value="">Payment Method 3</option>
                                                </select>
                                            </div>
                                            <div className="reacharrge-confirm-btn-bbtn text-center">
                                                <button type="submit">Confirm</button>
                                            </div>
                                            <div className="reachergeee-close-bbxtn">
                                                <button onClick={() => this.closeModal()}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reachrge wallet Modal sec end  */}

            {/* Reacharge Wallet History start ---------------*/}
            <div className="obd-main-section-my-wallet-reacharge-history-section-headtxt">
                <h3>Recharge History</h3>
            </div>
            {/* Single Section Start */}
            <div className="obd-main-section-my-wallet-reacharge-history-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-main-section-my-wallet-reacharge-hitory-sec-box">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="obd-main-section-my-wallet-reacharge-hitory-heading">
                                            <h4>Date:</h4>
                                            <h4>Amount:</h4>
                                            <h4>Paymeny Method:</h4>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="obd-main-section-my-wallet-reacharge-hitory-details">
                                            <h4>10/12/2021</h4>
                                            <h4>৳ 1000</h4>
                                            <h4>Bkash</h4>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="obd-main-section-my-wallet-reacharge-hitory-status text-right">
                                            <div className="obd-main-section-my-wallet-reacharge-hitory-status-buttons">
                                                <div className="obd-main-section-my-wallet-reacharge-hitory-status-buttons-pending">
                                                    <button>Pending</button>
                                                </div>
                                            </div>
                                            <h4>ID#: <span>2154787</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Section End ------- */}

            {/* Single Section Start */}
            <div className="obd-main-section-my-wallet-reacharge-history-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-main-section-my-wallet-reacharge-hitory-sec-box">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="obd-main-section-my-wallet-reacharge-hitory-heading">
                                            <h4>Date:</h4>
                                            <h4>Amount:</h4>
                                            <h4>Paymeny Method:</h4>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="obd-main-section-my-wallet-reacharge-hitory-details">
                                            <h4>10/12/2021</h4>
                                            <h4>৳ 1000</h4>
                                            <h4>Bkash</h4>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="obd-main-section-my-wallet-reacharge-hitory-status text-right">
                                            <div className="obd-main-section-my-wallet-reacharge-hitory-status-buttons">
                                                <div className="obd-main-section-my-wallet-reacharge-hitory-status-buttons-approved">
                                                    <button>Pending</button>
                                                </div>
                                            </div>
                                            <h4>ID#: <span>2154787</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Section End ------- */}
            {/* Reacharge Wallet History end */}

            
            <MainMenu/>
            </>
        )
    }
}
