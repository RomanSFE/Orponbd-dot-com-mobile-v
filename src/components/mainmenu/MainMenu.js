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
                                            <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                <span><i className="fas fa-home"></i></span>
                                            </div>
                                            <p className="main-cx-meny-dd-bbox-cct-name text-center">Home</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/tshirt.png')} alt="orponbd global collection"/>
                                            </div>
                                            <p className="main-cx-meny-dd-bbox-cct-name text-center">Category</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/watch2.png')} alt="orponbd global collection"/>
                                            </div>
                                            <p className="main-cx-meny-dd-bbox-cct-name text-center">Cart</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/shoes1.png')} alt="orponbd global collection"/>
                                            </div>
                                            <p className="main-cx-meny-dd-bbox-cct-name text-center">Account</p>
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
