import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './invoicepage.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
                                                                    {/* download and print sec */}
                                                                     <div className="invoice-download-andprint-secp-mv text-right">
                                                                         <ul>
                                                                             <li><button><i class="fas fa-download"></i></button></li>
                                                                             <li><button><i class="fas fa-print"></i></button></li>
                                                                         </ul>
                                                                    </div>  
                                                                    {/* download and print sec */}

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
                                                                                <div className="invoice-detauls-product-list-hed-txt-mv">
                                                                                    <h4>Product List</h4>
                                                                                </div>
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
                                                                        <div className="invoice-deliverry-hedd-txt-mv">
                                                                            <h4>Delivery Information</h4>
                                                                        </div>
                                                                        <div className="invoice-deliverry-indvsl-ittm-sec">
                                                                            <p>Delivery Courier:</p>
                                                                            <span className="invoice-delivery-ind-itm-rt-sec">Bahok</span>
                                                                        </div>
                                                                        <div className="invoice-deliverry-indvsl-ittm-sec">
                                                                            <p>Delivery Time:</p>
                                                                            <span className="invoice-delivery-ind-itm-rt-sec">2-3 Days</span>
                                                                        </div>
                                                                        <div className="invoice-deliverry-indvsl-ittm-sec">
                                                                            <p>Delivery Fee:</p>
                                                                            <span className="invoice-delivery-ind-itm-rt-sec">50 TK</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* Delivery Info */}

                                                                    {/* Order Amount */}
                                                                    <div className="invoice-page-order-inffxo-info-mv-sec">
                                                                        <div className="invoice-deliverry-hedd-txt-mv">
                                                                            <h4>Order Amount Details</h4>
                                                                        </div>
                                                                        <div className="invoice-order-amnt-hedd-txt-mv">
                                                                            <p>Product Amount:</p>
                                                                            <span className="invoice-delivery-ind-itm-rt-sec">1250 TK</span>
                                                                        </div>
                                                                        <div className="invoice-order-amnt-hedd-txt-mv">
                                                                            <p>Delivery Fee:</p>
                                                                            <span className="invoice-order-amntt-ind-itm-rt-sec">50 TK</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* Order Amount */}

                                                                    {/* Invoice Total Text */}
                                                                    <div className="invoice-total-text-last-total-item-pricee text-right">
                                                                        <h4>Total: <strong>1270 TK</strong></h4>
                                                                    </div>
                                                                    {/* Invoice Total Text */}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>

                                        {/* History section -------------------------------------------*/}
                                        <Tab eventKey="history" title="History">
                                            <div className="invoice-page-all-coont-history-mv-sec">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            {/* Invoice hedd Text */}
                                                            <div className="invoice-page-all-coont-history-mv-hedd">
                                                                <h4>Previous History</h4>
                                                            </div>
                                                            {/* Invoice hedd Text */}

                                                            {/* Single History Item */}
                                                            <VerticalTimeline>
                                                                {/* Single item */}
                                                                <VerticalTimelineElement
                                                                    className="vertical-timeline-element--work"
                                                                    contentStyle={{ backgroundColor: '#f88422', color: '#fff' }}
                                                                    contentArrowStyle={{ borderRight: '7px solid  #f88422' }}
                                                                    // date="2011 - present"
                                                                    iconStyle={{ backgroundColor: '#f88422', color: '#fff', textAlign: 'center', paddingTop: '7px', fontSize: '18px' }}
                                                                    icon={<i class="fas fa-cart-plus"></i>}
                                                                >
                                                                    <div className="invoice-timeline-mv-content-text">
                                                                        <h4>Order Placed</h4>
                                                                        <p>Your order placed on <br/> <span>06/09/2020</span> </p>
                                                                    </div>
                                                                </VerticalTimelineElement>
                                                                {/* Single item */}

                                                                {/* Single item */}
                                                                <VerticalTimelineElement
                                                                    className="vertical-timeline-element--work"
                                                                    contentArrowStyle={{ borderRight: '7px solid  #E52900' }}
                                                                    // date="2011 - present"
                                                                    iconStyle={{ backgroundColor: '#f88422', color: '#fff', textAlign: 'center', paddingTop: '7px', fontSize: '18px' }}
                                                                    icon={<i class="fas fa-money-check-alt"></i>}
                                                                >
                                                                    <div className="invoice-timeline-mv-content-text">
                                                                        <h4>Payment Completed</h4>
                                                                        <p>Your payment completed on <br/> <span>06/09/2020</span> </p>
                                                                    </div>
                                                                </VerticalTimelineElement>
                                                                {/* Single item */}

                                                                {/* Single item */}
                                                                <VerticalTimelineElement
                                                                    className="vertical-timeline-element--work"
                                                                    contentArrowStyle={{ borderRight: '7px solid  #E52900' }}
                                                                    // date="2011 - present"
                                                                    iconStyle={{ backgroundColor: '#f88422', color: '#fff', textAlign: 'center', paddingTop: '7px', fontSize: '18px' }}
                                                                    icon={<i class="fas fa-shopping-basket"></i>}
                                                                >
                                                                    <div className="invoice-timeline-mv-content-text">
                                                                        <h4>Order Purchased</h4>
                                                                        <p>Your order purchased on <br/> <span>06/09/2020</span> </p>
                                                                    </div>
                                                                </VerticalTimelineElement>
                                                                {/* Single item */}

                                                                {/* Single item */}
                                                                <VerticalTimelineElement
                                                                    className="vertical-timeline-element--work"
                                                                    contentArrowStyle={{ borderRight: '7px solid  #E52900' }}
                                                                    // date="2011 - present"
                                                                    iconStyle={{ backgroundColor: '#f88422', color: '#fff', textAlign: 'center', paddingTop: '7px', fontSize: '18px' }}
                                                                    icon={<i class="fas fa-shipping-fast"></i>}
                                                                >
                                                                    <div className="invoice-timeline-mv-content-text">
                                                                        <h4>Order Shipped</h4>
                                                                        <p>Your order shipped on <br/> <span>06/09/2020</span> </p>
                                                                    </div>
                                                                </VerticalTimelineElement>
                                                                {/* Single item */}

                                                                {/* Single item */}
                                                                <VerticalTimelineElement
                                                                    className="vertical-timeline-element--work"
                                                                    contentArrowStyle={{ borderRight: '7px solid  #E52900' }}
                                                                    // date="2011 - present"
                                                                    iconStyle={{ backgroundColor: '#f88422', color: '#fff', textAlign: 'center', paddingTop: '7px', fontSize: '18px' }}
                                                                    icon={<i class="fas fa-store-alt"></i>}
                                                                >
                                                                    <div className="invoice-timeline-mv-content-text">
                                                                        <h4>Order Arrived</h4>
                                                                        <p>Your order arrived on <br/> <span>06/09/2020</span> </p>
                                                                    </div>
                                                                </VerticalTimelineElement>
                                                                {/* Single item */}

                                                                {/* Single item */}
                                                                <VerticalTimelineElement
                                                                    className="vertical-timeline-element--work"
                                                                    contentArrowStyle={{ borderRight: '7px solid  #E52900' }}
                                                                    // date="2011 - present"
                                                                    iconStyle={{ backgroundColor: '#f88422', color: '#fff', textAlign: 'center', paddingTop: '7px', fontSize: '18px' }}
                                                                    icon={<i class="fas fa-pause-circle"></i>}
                                                                >
                                                                    <div className="invoice-timeline-mv-content-text">
                                                                        <h4>Order Awaiting for Delivery</h4>
                                                                        <p>Your order is awaiting for delivery to your home </p>
                                                                    </div>
                                                                </VerticalTimelineElement>
                                                                {/* Single item */}

                                                                </VerticalTimeline>
                                                            
                                                            {/* Single History Item */}
                                                        </div>
                                                    </div>
                                                </div>
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
