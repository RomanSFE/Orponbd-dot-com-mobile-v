import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './superdealsec.css';
import TimeCountBox from '../timecounter/TimeCountBox.js';

class SuperDealSec extends Component {
    render() {
        return (
            <div className="super-deal-mobile-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="super-deal-mobile-main-sec-bboxx">
                                <div className="super-dealmmnnff-bb">
                                    <p>Super Deals</p>
                                    <Link to="/#"><span>View More <i className="fa fa-angle-right"></i></span></Link>
                                </div>

                                <div className="row super-delproj-rww">
                                    <div className="col-md-4 col-4">
                                        <div className="super-deal-mobile-cattfg-box">
                                            <div className="super-deal-mobile-cattfg-box-overlay">
                                                <div className="super-deal-mobile-cattfg-box-overlay-icon text-center">
                                                    <p><i className="fa fa-shopping-cart"></i></p>
                                                    <h3>Super <br/> Deals</h3>
                                                </div>
                                                <div className="super-ddcvl-tmmcnt-bbox-c text-center">
                                                    <TimeCountBox/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="super-deal-mobile-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="super-deal-mobile-snnggl-prodct-img">
                                                    <img src={require('../../../assets/slide-1.jpg')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="super-deal-mobile-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="super-ddll-ooffwr">
                                                        <p>15% off</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="super-deal-mobile-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="super-deal-mobile-snnggl-prodct-img">
                                                    <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global"/>
                                                </div>
                                                <div className="super-deal-mobile-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="super-ddll-ooffwr">
                                                        <p>15% off</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="super-deal-mobile-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="super-deal-mobile-snnggl-prodct-img">
                                                    <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="super-deal-mobile-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="super-ddll-ooffwr">
                                                        <p>15% off</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="super-deal-mobile-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="super-deal-mobile-snnggl-prodct-img">
                                                    <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global collections"/>
                                                </div>
                                                <div className="super-deal-mobile-snnggl-prodct-ttxt">
                                                    <p>Product details..</p>
                                                    <h4>1250 TK</h4>
                                                    <div className="super-ddll-ooffwr">
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
        );
    }
}

export default SuperDealSec;
