import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './mainmenu.css';

export default class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu-dott-cm-cmm-main-sec">
                <div className="container">
                    <div className="row main-menu-web-ddt-cm">
                        <div className="col-md-12">
                            <div className="mainementu-meny-dd-bbox text-center">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <div className="main-menu-xccx-boxc">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                    <img src={require('../../assets/home-icon-red.svg')} alt="orponbd global collection"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name text-center">Home</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="main-menu-xccx-boxc">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                    <img src={require('../../assets/list.svg')} alt="orponbd global collection"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name text-center">Category</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="main-menu-xccx-boxc">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                    <img src={require('../../assets/shopping-cart.svg')} alt="orponbd global collection"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name crrtxtx text-center">Cart</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="main-menu-xccx-boxc">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                    <img src={require('../../assets/profile-man-icon.svg')} alt="orponbd global collection"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name text-center">Account</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
