import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './signupandregistration.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


export default class SignupAndRegistration extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Sign In or Registration</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-register-page-xxccttn">
                <div className="singup-and-registration-page-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="singup-and-register-sec-main-content-bbox">
                                    <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example">
                                        <Tab eventKey="signin" title="Sign In">
                                            <div className="singin-reg-signin-secrion-mob-vv">
                                                <form action="">
                                                    <div className="singin-reg-signin-secrion-mob-vv-input-bboox">
                                                        <input type="text" placeholder="Full Name"/>
                                                    </div>
                                                    <div className="singin-reg-signin-secrion-mob-vv-input-bboox">
                                                        <input type="password" placeholder="Password"/>
                                                    </div>
                                                    <div className="signin-secrrrt-forgot-pass">
                                                        <Link to="/forget-password-email-phone">
                                                            Forgot password?
                                                        </Link>
                                                    </div>
                                                    <div className="singin-reg-signin-secrion-mob-vv-signin-bbuttnn">
                                                        <button>Sign In</button>
                                                    </div>
                                                </form>
                                                
                                                <div className="sign-inn-oor-connect-ttextt text-center">
                                                    <h5>Or Connect with</h5>
                                                </div>

                                                <div className="signin-google-and-facebook-buttnnn">
                                                    <div className="row">
                                                        <div className="col-6 signin-faceeffbbkk">
                                                            <div className="singin-reg-signin-secrion-mob-vv-signin-bbuttnn-facebookx">
                                                                <button><span><i class="fab fa-facebook-f"></i></span>Facebook</button>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 signin-gooooddfgg">
                                                            <div className="singin-reg-signin-secrion-mob-vv-signin-bbuttnn-googgoofd">
                                                                <button><span><i class="fab fa-google"></i></span>Google</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>

                                        {/* Register section */}
                                        <Tab eventKey="register" title="Register">
                                            <div className="singin-reg-registerxx-secrion-mob-vv">
                                                <form action="">
                                                    <div className="singin-reg-registerxx-secrion-mob-vv-input-bboox">
                                                        <input type="text" placeholder="Phone Number"/>
                                                    </div>
                                                    <div className="singin-reg-registerxx-secrion-mob-vv-input-bboox reggg-ex-vvcls">
                                                        <input type="password" placeholder="Verification Code"/>
                                                        <span><button>Send</button></span>
                                                    </div>
                                                    <Link to="/complete-profile">
                                                        <div className="singin-reg-registerxx-secrion-mob-vv-regg-bbuttnn">
                                                            <button>Continue</button>
                                                        </div>
                                                    </Link>
                                                </form>

                                                {/* Register with email */}
                                                <Link to="/register-with-email">
                                                    <div className="singin-reg-registerxx-with-email-mob-vv-regg-bbuttnn">
                                                        <button>Register with Email</button>
                                                    </div>
                                                </Link>
                                                {/* Register with email */}
                                                
                                                <div className="sign-inn-oor-connect-ttextt text-center">
                                                    <h5>Or Connect with</h5>
                                                </div>

                                                <div className="signin-google-and-facebook-buttnnn">
                                                    <div className="row">
                                                        <div className="col-6 signin-faceeffbbkk">
                                                            <div className="singin-reg-signin-secrion-mob-vv-signin-bbuttnn-facebookx">
                                                                <button><span><i class="fab fa-facebook-f"></i></span>Facebook</button>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 signin-gooooddfgg">
                                                            <div className="singin-reg-signin-secrion-mob-vv-signin-bbuttnn-googgoofd">
                                                                <button><span><i class="fab fa-google"></i></span>Google</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
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
