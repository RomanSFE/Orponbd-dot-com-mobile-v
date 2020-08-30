import React, { Component } from 'react';
import './accountsettings.css';

import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';
import MainMenu from '../../mainmenu/MainMenu.js';


export default class AccountSettings extends Component {
    
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
                                <div className="account-settings-popup-single-sect">
                                    <p>Name</p>
                                </div>
                                {/* Single item */}
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
