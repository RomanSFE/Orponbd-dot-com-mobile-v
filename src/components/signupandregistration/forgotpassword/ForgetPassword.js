import React, { Component } from 'react';
import './forgetpassword.css';

import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';
import MainMenu from '../../mainmenu/MainMenu.js';

export default class ForgetPassword extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="forget-password-main-toop-sec-mv">
                <div className="forget-password-main-section-mv">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="forget-password-mv-secc-bbox">
                                    <form action="">
                                        <div className="forget-password-immput-box">
                                            <input type="password" placeholder="New password"/>
                                        </div>
                                        <div className="forget-password-immput-box">
                                            <input type="password" placeholder="Confirm password"/>
                                        </div>

                                        <div className="forget-password-immput-box-buttn">
                                           <button type="submit">Save</button>
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
