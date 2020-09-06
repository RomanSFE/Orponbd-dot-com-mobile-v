import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './invoicepage.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import SingleProductTopMenu from '../singleproductpage/SingleProductTopMenu.js';

export default class InvoicePage extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="invoice-page-main-section-top-color-section">
                <div className="invoice-page-mobile-vv-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="invoice-all-contt-mv-main-content-bbox">
                                    <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                                        {/* Details Section */}
                                        <Tab eventKey="details" title="Details">
                                            <div className="invoice-page-all-details-ittn-sec-bx-mv">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="invoice-details-text-amm-mv-main-box">
                                                                <div className="invoice-details-text-amm-mv-bbox">
                                                                    {/* Name and inv no */}
                                                                    <div className="invoice-detauls-mv-namm-sec">
                                                                        <h4>Abdulla Al Roman</h4>
                                                                        <span className="invoice-dettls-nam-ino-no">24781571</span>
                                                                    </div>
                                                                    {/* Name and inv no */}

                                                                    {/* Inv Details Address sec */}
                                                                    <div className="invvoice-details-addrexs-sec-mvv-box">
                                                                        <div className="row invvox-detls-txt-bx-ex-pdd">
                                                                            <div className="col-6">
                                                                                <div className="invvoice-details-addrexs-sec-mvv-lft">
                                                                                    <h4>orponbd.com</h4>
                                                                                    <p>Order Time: 09/06/2020</p>
                                                                                    <p>Status: <span>pending</span></p>
                                                                                    <p>Payment Method: <span className="invvice-address-dts-pay-metdx">Bkash</span></p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="invvoice-details-addrexs-sec-mvv-right">
                                                                                    <h4>Abdulla Al Roman</h4>
                                                                                    <h5>0174 555 6661</h5>
                                                                                    <p> 
                                                                                        House- 5/7, Lane- 16, Block-
                                                                                        C, Avenue- 5, Section- 11,
                                                                                        Mirpur, Dhaka, 1200
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* Inv Details Address sec */}

                                                                    {/* Invoice Products Details */}
                                                                    <div className="invoice-details-text-product-lst-sec-mn-mv-bbox">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <p>Some Text</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Single Item */}
                                                                        <Link to="/">
                                                                            <div className="row invoice-details-text-product-lst-ex-pdd">
                                                                                <div className="col-4">
                                                                                    <div className="invoice-details-text-product-lst-img">
                                                                                        <img src={require('../../assets/product-3.jpg')} alt="orponbd Online shop"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-8">
                                                                                    <div className="invoice-details-text-product-lst-ttxt-ssc">
                                                                                        <p>Product details text, product details text, details text...</p>
                                                                                        <h4>1250 TK <span>X 3</span></h4>
                                                                                        <div className="invoice-mv-sec-color-sz">
                                                                                            <ul>
                                                                                                <li><p>Color: Black</p></li>
                                                                                                <li><p>Size: M</p></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                        {/* Single Item */}
                                                                        {/* Single Item */}
                                                                        <Link to="/">
                                                                            <div className="row invoice-details-text-product-lst-ex-pdd">
                                                                                <div className="col-4">
                                                                                    <div className="invoice-details-text-product-lst-img">
                                                                                        <img src={require('../../assets/product-2.jpg')} alt="orponbd Online shop"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-8">
                                                                                    <div className="invoice-details-text-product-lst-ttxt-ssc">
                                                                                        <p>Product details text, product details text, details text...</p>
                                                                                        <h4>1250 TK <span>X 3</span></h4>
                                                                                        <div className="invoice-mv-sec-color-sz">
                                                                                            <ul>
                                                                                                <li><p>Color: Black</p></li>
                                                                                                <li><p>Size: M</p></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                        {/* Single Item */}
                                                                    </div>
                                                                    {/* Invoice Products Details */}

                                                                    {/* Invoice Total Text */}
                                                                    <div className="invoice-total-text-total-item-pricee text-right">
                                                                        <h4>Subtotal: <strong>12750 TK</strong></h4>
                                                                    </div>
                                                                    {/* Invoice Total Text */}

                                                                    {/* Delivery Info */}
                                                                    <div className="invoice-page-delivery-info-mv-sec">

                                                                    </div>
                                                                    {/* Delivery Info */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>

                                        {/* History section */}
                                        <Tab eventKey="history" title="History">
                                            <div className="invoice-page-all-coont-history-mv-sec">
                                                <h4>History</h4>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
