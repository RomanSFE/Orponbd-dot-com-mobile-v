import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './accountsettings.css';

import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';
import MainMenu from '../../mainmenu/MainMenu.js';

import Modal from 'react-awesome-modal';


export default class AccountSettings extends Component {

    // Modal Name
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
    // Modal Name

    // Modal Mobile Number
    // openModalMob() {
    //     this.setState({
    //         show : true
    //     });
    // }
 
    // closeModalMob() {
    //     this.setState({
    //         show : false
    //     });
    // }
    // Modal Mobile Number
    
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="account-settings-mv-toop-section">
                <div className="account-settings-mob-vv-main-sections">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Single item */}
                                <div className="account-settings-popup-single-sect">
                                    <p>My Avatar</p>

                                    <span className="axaxax"><input type="file" className="custom-file-input"/>
                                        <p className="ghghgh">Upload</p>
                                    </span>
                                </div>
                                {/* Single item */}

                                {/* Single item */}
                                <div className="acc-sett-proffl-sec-moddl">
                                    <button onClick={() => this.openModal()}>Name</button>
                                    <Modal visible={this.state.visible} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                        <div className="acc-sett-modal-secvc text-center">
                                            <input type="text" placeholder="your name..."/>
                                            <div className="avccount-sett-subbmt-bbtn">
                                                <button type="submit">Save</button>
                                            </div>
                                            <div className="acc-setxt-close-bbxtn">
                                                <button onClick={() => this.closeModal()}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </Modal>
                                    <span className="acc-sett-moddl-ang-rr"><i className="fas fa-angle-right"></i></span>
                                </div>
                                {/* Single item */}

                                {/* Single item */}
                                <div className="acc-sett-proffl-sec-moddl">
                                    <button onClick={() => this.openModal()}>Mobile Number</button>
                                    <Modal show={this.state.show} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                        <div className="acc-sett-modal-secvc text-center">
                                            <input type="text" placeholder="your mobile number"/>
                                            <div className="avccount-sett-subbmt-bbtn">
                                                <button type="submit">Save</button>
                                            </div>
                                            <div className="acc-setxt-close-bbxtn">
                                                <button onClick={() => this.closeModal()}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </Modal>
                                    <span className="acc-sett-moddl-ang-rr"><i className="fas fa-angle-right"></i></span>
                                </div>
                                {/* Single item */}

                                {/* Single item */}
                                <div className="acc-sett-proffl-sec-moddl">
                                    <button onClick={() => this.openModal()}>Gender</button>
                                    <Modal visible={this.state.visible} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                        <div className="acc-sett-modal-secvc text-center">
                                            <div className="acc-seet-mdl-gender text-left">
                                                <p>Gender</p>
                                            </div>
                                            <div className="acc-seet-mal-radio-ttxt">
                                                <span><input type="radio" name="gen"/></span>
                                                <p className="acc-secct-ml-ttxt">Male</p>
                                            </div>
                                            <div className="acc-seet-mal-radio-ttxt">
                                                <span><input type="radio" name="gen"/></span>
                                                <p className="acc-secct-ml-ttxt">Female</p>
                                            </div>
                                            <div className="avccount-sett-subbmt-bbtn">

                                            <button type="submit">Save</button>
                                            </div>
                                            <div className="acc-setxt-close-bbxtn">
                                                <button onClick={() => this.closeModal()}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </Modal>
                                    <span className="acc-sett-moddl-ang-rr"><i className="fas fa-angle-right"></i></span>
                                </div>
                                {/* Single item */}
                                <Link to="/forget-password">
                                    <div className="account-settings-modal-change">
                                        <p>Change Password</p>
                                        <span className="account-sett-icon-chpass"><i className="fas fa-angle-right"></i></span>
                                    </div>
                                </Link>
                                {/* Single Item */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <MainMenu/>
            </>
        )
    }
}
