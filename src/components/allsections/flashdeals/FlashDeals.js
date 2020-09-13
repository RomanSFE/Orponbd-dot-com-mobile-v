import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flashdeals/flashdeals.css';
import TimeCount from '../../preorderpagesec/timecounter/TimeCount.js';

export default class FlashDeals extends Component {
    render() {
        return (
            <>
            <div className="flash-deals-doot-com-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="flash-deal-wexv-dot-main-sec-bboxx">
                                <div className="flash-dott-ccm-dealmmnnff-bb">
                                    <p>Flash Deals</p>
                                    <span className="timmmcnt-bbox-ex-sec"><TimeCount/></span>
                                    <Link to="/#"><span>View More <i className="fa fa-angle-right"></i></span></Link>
                                </div>

                                <div className="row flash-dott-com-delproj-rww">
                                    <div className="col-md-3 col-3">
                                        <div className="flash-deal-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-1.jpg')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="flash-ddll-doot-com-ooffwr">
                                                        <p>15% off</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <div className="flash-deal-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-2.jpg')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="flash-ddll-doot-com-ooffwr">
                                                        <p>15% off</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <div className="flash-deal-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-3.jpg')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="flash-ddll-doot-com-ooffwr">
                                                        <p>15% off</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <div className="flash-deal-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-4.jpg')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="flash-deal-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="flash-ddll-doot-com-ooffwr">
                                                        <p>15% off</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
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
