import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singleproductmenu.css';

import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';


class SingleProductTopMenu extends Component {
    render() {
        return (
            <div className="single-product-menu-dot-cm-top-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <Link to="/">
                                <div className="single-product-menu-dot-cm-top-menu-left-icon">
                                    <span><i className="fa fa-chevron-left"></i></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-10 text-right">
                            <div className="right-dot-cm-single-mmnsenu">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <div className="single-product-menu-dot-cm-top-menu-right-icon">
                                                <img src={require('../../assets/homem.svg')} alt="orponbd global collection"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="single-product-menu-dot-cm-top-menu-right-icon">
                                                <img src={require('../../assets/share-icon-new.svg')} alt="orponbd global collection"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="single-product-menu-dot-cm-top-menu-right-icon-dropdown">
                                            <img src={require('../../assets/drop-menu.svg')} alt="orponbd global collection"/>
                                            <DropdownButton id="dropdown-basic-button" title="">
                                                <Dropdown.Item><Link to="/link">Link 1</Link></Dropdown.Item>
                                                <Dropdown.Item><Link to="/link">Link 2</Link></Dropdown.Item>
                                                <Dropdown.Item><Link to="/link">Link 3</Link></Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleProductTopMenu;
