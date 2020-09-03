import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './allordersproduct.css';

import SingleProductTopMenu from '../../../../components/singleproductpage/SingleProductTopMenu.js';

import AllOrderSlide from '../allorderslider/AllOrderSlide.js'

export default class AllOrdersProduct extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <AllOrderSlide/>
            <div className="all-orders-products-all-orders-pro-mainpage-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {/* Single Pre Order Item */}
                            <div className="all-orderssxz-main-bboox-mmainn">
                                <div className="all-orders-cx-ppag-main-bbox">
                                    <div className="all-orderxz-ppg-idd-rpp-bx">
                                        <div className="row all-oorder-ttp-id-ex-pdd">
                                            <div className="col-8">
                                                <div className="all-orderxc-ttop-order-id-sec">
                                                    <h4>Order No: <span>021458</span></h4>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="all-oordzr-ttop-order-id-pending">
                                                    <p>Pending</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="all-oordexr-singgle-product-sec">
                                        <div className="row all-oodercr-snn-immg-eezx-pdd">
                                            <div className="col-4">
                                                <div className="all-ordxer-single-immg">
                                                    <img src={require('../../../../assets/product-2.jpg')} alt="orponbd global collections"/>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="all-oorpdervc-single-tteexct">
                                                    <p>product details text, product details text..</p>
                                                    <h4>1250 TK <span>X3</span></h4>
                                                    <div className="all-order-oordr-color-sz">
                                                        <ul>
                                                            <li><p>Color: Black</p></li>
                                                            <li><p>Size: M</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="all-order-pendngpartially-paid-mv">
                                                        <p>Paid</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* bbb */}
                                    <div className="all-orderxz-cancel-veu-det-rpp-bx">
                                        <div className="row all-oorder-ttp-id-ex-pdd-can-v-ddlt">
                                            <div className="col-6">
                                                <div className="all-orderxc-cancll-der-v">
                                                    <button type="submit">Cancel Order</button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="all-oordzr-view-ddeetl-lnk">
                                                    <Link to="/">
                                                        View Details <span><i className="fas fa-angle-right"></i></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* bbb */}
                                </div>
                            </div>
                            {/* Single Pre Order Item */}
                            {/* Single Pre Order Item */}
                            <div className="all-orderssxz-main-bboox-mmainn">
                                <div className="all-orders-cx-ppag-main-bbox">
                                    <div className="all-orderxz-ppg-idd-rpp-bx">
                                        <div className="row all-oorder-ttp-id-ex-pdd">
                                            <div className="col-8">
                                                <div className="all-orderxc-ttop-order-id-sec">
                                                    <h4>Order No: <span>475125</span></h4>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="all-oordzr-ttop-order-id-pending">
                                                    <p>Delivered</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="all-oordexr-singgle-product-sec">
                                        <div className="row all-oodercr-snn-immg-eezx-pdd">
                                            <div className="col-4">
                                                <div className="all-ordxer-single-immg">
                                                    <img src={require('../../../../assets/product-5.jpg')} alt="orponbd global collections"/>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="all-oorpdervc-single-tteexct">
                                                    <p>product details text, product details text..</p>
                                                    <h4>1250 TK <span>X3</span></h4>
                                                    <div className="all-order-oordr-color-sz">
                                                        <ul>
                                                            <li><p>Color: Black</p></li>
                                                            <li><p>Size: M</p></li>
                                                        </ul>
                                                    </div>
                                                    <div className="all-order-pendngpartially-paid-mv">
                                                        <p>Paid</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* bbb */}
                                    <div className="all-orderxz-cancel-veu-det-rpp-bx">
                                        <div className="row all-oorder-ttp-id-ex-pdd-can-v-ddlt">
                                            <div className="col-6">
                                                <div className="all-orderxc-cancll-der-v">
                                                    <button type="submit">Cancel Order</button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="all-oordzr-view-ddeetl-lnk">
                                                    <Link to="/">
                                                        View Details <span><i className="fas fa-angle-right"></i></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* bbb */}
                                </div>
                            </div>
                            {/* Single Pre Order Item */}

                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
