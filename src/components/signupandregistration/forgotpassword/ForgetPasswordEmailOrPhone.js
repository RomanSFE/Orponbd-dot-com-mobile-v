import React, { Component } from 'react';
import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';
import MainMenu from '../../mainmenu/MainMenu.js';

import Modal from 'react-awesome-modal';

export default class ForgetPasswordEmailOrPhone extends Component {

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

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="forget-password-email-and-padss-send-topp-clr-sec">
                <div className="forget-password-email-and-passwoo-send-linnk-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="forget-password-email-and-passwoo-send-linnk-bbox-mv">
                                    <form action="" onSubmit={ this.submitHandler }>
                                        <div className="forget-pass-eml-llnk-send-sngle-mv">
                                            <input type="email" placeholder="Enter Email or Phone Number"/>
                                        </div>
                                        <div className="forget-pass-eml-llnk-send-sngle-mv-sbnt-bbtn">

                                            <button type="submit" onClick={() => this.openModal()}>Send</button>
                                            <Modal visible={this.state.visible} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                                <div className="acc-sett-modal-secvc text-center">
                                                   <p>A Password Reset Link Send to your Email Account, Please check your Email</p>
                                                </div>
                                            </Modal>
                                            {/* <button type>Send</button> */}
                                        </div>
                                    </form>
                                </div>
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
