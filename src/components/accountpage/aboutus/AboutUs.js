import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import MainMenu from '../../mainmenu/MainMenu.js';

export default class AboutUs extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> About Us</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="privacy-and-policy-main-toop-sections">
                <div className="pricacy-and-policy-main-section-mm-v">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="pricacy-and-policy-textt-sec">
                                    <h4>About Us</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Obcaecati quaerat ullam
                                        veritatis ea voluptates earum, adipisci quasi
                                        molestiae dolore cum!
                                    </p>
                                </div>
                                <div className="pricacy-and-policy-textt-sec">
                                    <h4>About Us</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Obcaecati quaerat ullam
                                        veritatis ea voluptates earum, adipisci quasi
                                        molestiae dolore cum!
                                    </p>
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
