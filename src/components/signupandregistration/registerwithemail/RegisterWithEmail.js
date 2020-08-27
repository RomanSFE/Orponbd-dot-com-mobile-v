import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './registerwithemail.css';

import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';

export default class RegisterWithEmail extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="register-with-emaill-tpp-bg">
                <div className="register-with-email-main-section-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="register-with-email-secttion-mob-vv">
                                    <form action="">
                                        <div className="register-with-email-cdd-mob-vv-input-bboox">
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                        <div className="register-with-email-cdd-mob-vv-input-bboox">
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

                                        <div className="register-with-email-cdd-mob-vv-bbuttnn">
                                            <button>Register</button>
                                        </div>
                                    </form>
                                    
                                    <div className="register-wifg-oor-connect-ttextt text-center">
                                        <h5>Or Connect with</h5>
                                    </div>

                                    <div className="signin-google-and-facebook-buttnnn-register-with-eeml">
                                        <div className="row">
                                            <div className="col-6 signin-faceeffbbkk-reg-wt-eml">
                                                <div className="register-wtgf-eemml-mob-vv-signin-bbuttnn-facebookx">
                                                    <button><span><i class="fab fa-facebook-f"></i></span>Facebook</button>
                                                </div>
                                            </div>
                                            <div className="col-6 signin-gooooddfgg-reg-wt-eml">
                                                <div className="register-wtgf-eemml-mob-vv-signin-bbuttnn-googgoofd">
                                                    <button><span><i class="fab fa-google"></i></span>Google</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
