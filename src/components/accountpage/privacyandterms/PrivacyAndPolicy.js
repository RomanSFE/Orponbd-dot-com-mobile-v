import React, { Component } from 'react';
import './privacyandterms.css';

import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';
import MainMenu from '../../mainmenu/MainMenu.js';

export default class PrivacyAndPolicy extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="privacy-and-policy-main-toop-sections">
                <div className="pricacy-and-policy-main-section-mm-v">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="pricacy-and-policy-textt-sec">
                                    <h4>Pricacy And Policy Heading Text</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Obcaecati quaerat ullam
                                        veritatis ea voluptates earum, adipisci quasi
                                        molestiae dolore cum!
                                    </p>
                                </div>
                                <div className="pricacy-and-policy-textt-sec">
                                    <h4>Pricacy And Policy Heading Text</h4>
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
