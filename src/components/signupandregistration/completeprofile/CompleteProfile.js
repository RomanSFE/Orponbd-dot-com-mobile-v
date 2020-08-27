import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './completeprofile.css';


import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';

export default class CompleteProfile extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="complete-profile-topp-serrct-continue">
                <div className="signup-complete-your-profile-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="register-complete-profile-secrion-mob-vv">
                                    <form action="">
                                        <div className="register-complete-profile-secrion-mob-vv-input-bboox">
                                            <input type="text" placeholder="Full Name"/>
                                        </div>
                                        <div className="register-complete-profile-secrion-mob-vv-input-bboox">
                                            <input type="password" placeholder="Password"/>
                                        </div>

                                        {/* Terms and conditions */}
                                        <div className="complete-profile-agree-and-terms-sec">
                                            <div className="row">
                                                <div className="col-1">
                                                    <div className="terms-ancond-complete-pro-sec-radd-btn">
                                                        <input type="radio" name="agree"/>
                                                    </div>
                                                </div>
                                                <div className="col-11">
                                                    <div className="complete-profile-terms-and-cond-confir">
                                                        <p>I agree to OrponBD <Link to="/">Terms and Conditions</Link> and <Link to="/">Privacy and Policies</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Terms and conditions */}
                                        <div className="register-complete-profile-secrion-mob-vv-signin-bbuttnn">
                                            <button>Register</button>
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
