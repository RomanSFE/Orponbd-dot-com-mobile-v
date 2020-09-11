import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../justforyou/justforyou.css';

export default class JustForYou extends Component {
    render() {
        return (
            <>
             <div className="just-for-you-mainnx-secttixon-web-ddtx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="just-for-you-main-secccton-web-ddt-ccm-bbooxcx">
                                <div className="just-for-yooxuu-hedd-txt-web-ddxdt-cm">
                                    <p>Just for you</p>
                                    {/* <Link to="/#"><span>View More <i className="fa fa-angle-right"></i></span></Link> */}
                                </div>
                                {/* Single item */}
                                <div className="row just-for-ex-padd-web-ddt-ccom">
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct-web-ddtx-ocm">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-web-ddtcm-img">
                                                    <img src={require('../../../assets/product-6.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-web-ddt-xcvm-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct-web-ddtx-ocm">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-web-ddtcm-img">
                                                    <img src={require('../../../assets/product-4.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-web-ddt-xcvm-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct-web-ddtx-ocm">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-web-ddtcm-img">
                                                    <img src={require('../../../assets/product-3.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-web-ddt-xcvm-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                {/* Single item */}
                                <div className="row just-for-ex-padd-web-ddt-ccom">
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct-web-ddtx-ocm">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-web-ddtcm-img">
                                                    <img src={require('../../../assets/product-2.jpg')} alt="Orponbd global"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-web-ddt-xcvm-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct-web-ddtx-ocm">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-web-ddtcm-img">
                                                    <img src={require('../../../assets/product-1.jpg')} alt="Orponbd global collections"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-web-ddt-xcvm-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct-web-ddtx-ocm">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-web-ddtcm-img">
                                                    <img src={require('../../../assets/product-8.jpg')} alt="orpon bd global items"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-web-ddt-xcvm-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
