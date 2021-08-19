import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './categorymenu.css';

export default class CategoryMenu extends Component {
    render() {
        return (
            <div className="category-menu-dodd-cmm-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 category-menu-dodd-cmm-exxtra">
                            <div className="caatetory-meny-dd-bbox text-center">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/m-all-category-mg.svg')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">All <br/> Category</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/m-global-shopping-mg.svg')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">Global Shopping</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/m-beauty-and-health.svg')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">Beauty & Health</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/m-home-and-living.svg')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">Home & <br/> Living</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/m-watch-and-accrs.svg')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">Watches & Accessories</p>
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
