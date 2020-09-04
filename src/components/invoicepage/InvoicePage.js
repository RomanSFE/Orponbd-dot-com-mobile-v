import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
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
                                                            <div className="jgffff">
                                                                <p>Details Text</p>
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
