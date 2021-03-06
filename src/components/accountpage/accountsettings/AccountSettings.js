import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './accountsettings.css';

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
 
    openModalName() {
        this.setState({
            visible : true,
            is_mobile : 0,
        });
    }
 
    closeModal() {
        this.setState({
            visible : false,
        });
    }
    // Modal Name

    // Modal Mobile Number
    openModalMob() {
        this.setState({
            visible : true,
            is_mobile : 1,
           
        });
    }
 
    closeModalMob() {
        this.setState({
            visible : false,
        });
    }
    // Modal Mobile Number
    
    render() {
        const is_mobile = this.state.is_mobile;
        let button;
        if (is_mobile===1) {
             button =  <div><input type="text" placeholder="Type your mobile number"/><div className="avccount-sett-subbmt-bbtn"><button type="submit">Save</button></div></div>;
        } else {
            button =  <div><input type="text" placeholder="Type your name"/><div className="avccount-sett-subbmt-bbtn"><button type="submit">Save</button></div></div>;
        } 
        // elseif {
        //     button =  <div><input type="text" placeholder="Type your Gender"/><div className="avccount-sett-subbmt-bbtn"><button type="submit">Save</button></div></div>;
        // }

        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Account Settings</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

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
                                {/* <div className="acc-sett-proffl-sec-moddl">
                                    <button type="button"  value="Open" onClick={() => this.openModalName()}>Name</button>
                                    <Modal visible={this.state.visible} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                        {this.state.content} 
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
                                </div> */}
                                {/* Single item */}

                                {/* Single item */}
                                <div className="acc-sett-proffl-sec-moddl">
                                    <button type="button"  value="Open" onClick={() => this.openModalName()}>Name</button>
                                </div>
                                {/* Single item */}
                                
                                {/* Single item */}
                                <div className="acc-sett-proffl-sec-moddl">
                                    <button onClick={() => this.openModalMob()}>Mobile Number</button>
                                    <Modal visible={this.state.visible} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModalMob()}>
                                   
                                        <div className="acc-sett-modal-secvc text-center">
                                            {button}
                                                <div className="acc-setxt-close-bbxtn">
                                                    <button onClick={() => this.closeModalMob()}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                                </div>
                                        </div>
                                    </Modal>
                                    <span className="acc-sett-moddl-ang-rr"><i className="fas fa-angle-right"></i></span>
                                </div>
                                {/* Single item */}

                                {/* Single item */}
                                {/* <div className="acc-sett-proffl-sec-moddl">
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
                                </div> */}
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
