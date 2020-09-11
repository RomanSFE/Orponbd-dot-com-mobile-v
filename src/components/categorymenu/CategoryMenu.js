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
                                                <img src={require('../../assets/all-444.png')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">All Category</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/all-555.png')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">T-Shirt</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/all-333.png')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">Watch</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/all-524.png')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">Shoes</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="caatetory-meny-dd-bbox-img-bbx">
                                                <img src={require('../../assets/all-555.png')} alt="orponbd online shop"/>
                                            </div>
                                            <p className="caatetory-meny-dd-bbox-cct-name text-center">Toys</p>
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
