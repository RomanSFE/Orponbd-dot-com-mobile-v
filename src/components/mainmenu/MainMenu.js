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
                                        {/* <Link to="/">
                                            <div className="main-menu-xccx-boxc">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                    <img src={require('../../assets/home-icon-red.svg')} alt="orponbd Online Shop"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name-homm">Home</p>
                                            </div>
                                        </Link> */}
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
                                        {/* <Link to="/main-category">
                                            <div className="main-menu-xccx-boxc">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx category-exx-ccls-vc">
                                                    <img src={require('../../assets/catt-list.svg')} alt="orponbd Online Shop"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name-cattx text-center">Category</p>
                                            </div>
                                        </Link> */}
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
                                        {/* <Link to="/my-cart">
                                            <div className="main-menu-xccx-boxc extra-cczxrt-ic">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                    <img src={require('../../assets/supermarket.svg')} alt="orponbd Online Shop"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name-ccvrt crrtxtx text-center">Cart</p>
                                                <span><p>10</p></span>
                                            </div>
                                        </Link> */}
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
                                        {/* <Link to="/signup-registration">
                                            <div className="main-menu-xccx-boxc">
                                                <div className="mainmenu-cm-meny-dd-bbox-img-bbx">
                                                    <img src={require('../../assets/user.svg')} alt="orponbd Online Shop"/>
                                                </div>
                                                <p className="main-cx-meny-dd-bbox-cct-name-aacnxt text-center">Account</p>
                                            </div>
                                        </Link> */}

                                            {/* <NavLink tag={Link} d="navResume" className="text-dark inactive resumeImage" to="/main-category">
                                                Resume
                                            </NavLink>; */}

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
