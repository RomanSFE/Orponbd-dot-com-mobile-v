import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './mainmenu.css';

import { NavLink } from 'react-router-dom';

export default class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu-dott-cm-cmm-main-sec">
                <div className="container">
                    <div className="row main-menu-web-ddt-cm">
                        <div className="col-md-12 main-menu-dott-cm-cmm-ex-cclx">
                            <div className="mainementu-meny-dd-bbox text-center">
                                <ul>
                                    <li>
                                        
                                        <NavLink
                                            tag={Link}
                                            d="navResume"
                                            className="text-dark inactive resumeImageHome"
                                            activeClassName="activestyleclasshome"
                                            to="/"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                            }}
                                        >   
                                        <span>Account</span>
                                            
                                        </NavLink>
                                        <div className="hhgfgzzz">
                                            <p>Home</p>
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink
                                            tag={Link}
                                            d="navResume"
                                            className="text-dark inactive resumeImageList"
                                            activeClassName="activestyleclasslist"
                                            to="/main-category"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                            }}
                                        >   
                                        <span>Account</span>
                                            
                                        </NavLink>
                                        <div className="hhgfgzzz">
                                            <p>Category</p>
                                        </div>
                                    </li>
                                    <li className="cart-wish-iitm-ex">
                                        <NavLink
                                            tag={Link}
                                            d="navResume"
                                            className="text-dark inactive resumeImageCart"
                                            activeClassName="activestyleclasscart"
                                            to="/my-cart"
                                            activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                            }}
                                        >   
                                        <span>Account</span>
                                        <div className="cartt-addd-ittwm-nmbr">
                                            <span><p>10</p></span>
                                        </div>
                                            
                                        </NavLink>
                                        <div className="hhgfgzzz">
                                            <p>Cart</p>
                                        </div>
                                    </li>
                                    <li>

                                            <NavLink
                                                tag={Link}
                                                d="navResume"
                                                className="text-dark inactive resumeImage"
                                                activeClassName="activestyleclass"
                                                to="/my-account-without-login"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "red"
                                                }}
                                            >   
                                            <span>Account</span>
                                                
                                            </NavLink>
                                            <div className="hhgfgzzz">
                                                <p>Account</p>
                                            </div>
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
