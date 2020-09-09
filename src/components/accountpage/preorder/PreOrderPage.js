import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './preorderpage.css';

import MainMenu from '../../mainmenu/MainMenu.js';

export default class PreOrderPage extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Pre Order</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pre-order-page-top-cll-section">
                <div className="preordee-page-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Single Pre Order Item */}
                                <div className="pre-order-main-bboox-mmainn">
                                    <div className="pre-order-ppag-main-bbox">
                                        <div className="pre-order-ppg-idd-rpp-bx">
                                            <div className="row pre-order-ttp-id-ex-pdd">
                                                <div className="col-8">
                                                    <div className="pre-order-ttop-order-id-sec">
                                                        <h4>Order ID: <span>021458</span></h4>
                                                        <p>Time: 10 Aug 2020</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="pre-order-ttop-order-id-pending">
                                                        <p>Pending</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pre-order-singgle-product-sec">
                                            <div className="row pre-oordr-snn-immg-eezx-pdd">
                                                <div className="col-4">
                                                    <div className="pre-order-single-immg">
                                                        <img src={require('../../../assets/product-2.jpg')} alt="orponbd global collections"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="pre-order-single-tteexct">
                                                        <p>product details text, details text product details text..</p>
                                                        <h4>1250 TK <span>X3</span></h4>
                                                        <div className="pre-oordr-color-sz">
                                                            <ul>
                                                                <li><p>Color: Black</p></li>
                                                                <li><p>Size: M</p></li>
                                                            </ul>
                                                        </div>
                                                        <div className="partially-paid-sect-pre-order-mv">
                                                            <p>Partially Paid</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="preorder-vied-details-bbtn text-center">
                                                <Link to="/invoice-page">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Pre Order Item */}

                                {/* Single Pre Order Item */}
                                <div className="pre-order-main-bboox-mmainn">
                                    <div className="pre-order-ppag-main-bbox">
                                        <div className="pre-order-ppg-idd-rpp-bx">
                                            <div className="row pre-order-ttp-id-ex-pdd">
                                                <div className="col-8">
                                                    <div className="pre-order-ttop-order-id-sec">
                                                        <h4>Order ID: <span>021458</span></h4>
                                                        <p>Time: 10 Aug 2020</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="pre-order-ttop-order-id-pending">
                                                        <p>Pending</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pre-order-singgle-product-sec">
                                            <div className="row pre-oordr-snn-immg-eezx-pdd">
                                                <div className="col-4">
                                                    <div className="pre-order-single-immg">
                                                        <img src={require('../../../assets/product-6.jpg')} alt="orponbd global collections"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="pre-order-single-tteexct">
                                                        <p>product details text, details text product details text..</p>
                                                        <h4>1250 TK <span>X3</span></h4>
                                                        <div className="pre-oordr-color-sz">
                                                            <ul>
                                                                <li><p>Color: Black</p></li>
                                                                <li><p>Size: M</p></li>
                                                            </ul>
                                                        </div>
                                                        <div className="partially-paid-sect-pre-order-mv">
                                                            <p>Full Paid</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="preorder-vied-details-bbtn text-center">
                                                <Link to="/invoice-page">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Pre Order Item */}
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
