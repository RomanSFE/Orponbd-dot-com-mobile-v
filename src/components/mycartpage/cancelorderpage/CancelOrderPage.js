import React, { Component } from 'react';
import './cancelorderpage.css';

import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';

export default class CancelOrderPage extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="cancel-order-page-mv-topp-collr-sec">
                <div className="cancel-order-page-mvv-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cancell-order-secttn-mv-mn-bbox">
                                    <div className="cancell-order-secttn-mv-mn-choos-rxs-hed">
                                        <h4>Please Choose a Reason</h4>
                                    </div>

                                    {/* radio check */}
                                    <div className="cancel-order-raddox">
                                        <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                        <label htmlFor="exampleRadios1">I have made wrong orders.</label>
                                    </div>
                                    <div className="cancel-order-raddox">
                                        <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked/>
                                        <label htmlFor="exampleRadios2">I will pick another product.</label>
                                    </div>
                                    <div className="cancel-order-raddox">
                                        <input type="radio" name="exampleRadios" id="exampleRadios3" value="option3" checked/>
                                        <label htmlFor="exampleRadios3">I forgot to use the coupon.</label>
                                    </div>
                                    <div className="cancel-order-raddox">
                                        <input type="radio" name="exampleRadios" id="exampleRadios4" value="option4" checked/>
                                        <label htmlFor="exampleRadios4">I have been waiting too long.</label>
                                    </div>
                                    <div className="cancel-order-raddox">
                                        <input type="radio" name="exampleRadios" id="exampleRadios5" value="option5" checked/>
                                        <label htmlFor="exampleRadios5">I placed a duplicate order.</label>
                                    </div>
                                    <div className="cancel-order-raddox">
                                        <input type="radio" name="exampleRadios" id="exampleRadios6" value="option6" checked/>
                                        <label htmlFor="exampleRadios6">Others reason.</label>
                                    </div>
                                    {/* radio check */}
                                </div>
                                {/* hh */}
                                <div className="cancel-order-cancel-submt-bbtnn-mvv text-center">
                                        <div className="row cancel-order-cancel-submt-bbtnn-exx-pdd">
                                            <div className="col-6">
                                                <div className="cancel-order-cancel-submt-bbtnn-bbx text-center">
                                                    <button type="submit">Cancel</button>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="cancel-order-cancel-submt-bbtnn-bbxx text-center">
                                                    <button type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/* hh */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
