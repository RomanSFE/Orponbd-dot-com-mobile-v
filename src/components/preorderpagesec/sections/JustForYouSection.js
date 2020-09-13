import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './justforyou.css'

class JustForYouSection extends Component {
    render() {
        return (
            <div className="just-for-you-mainnx-secttixon">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="just-for-you-main-secccton-bbooxcx">
                                <div className="just-for-yooxuu-hedd-txt">
                                    <p>Just for you</p>
                                </div>
                                {/* Single item */}
                                <div className="row just-for-ex-padd">
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-img">
                                                    <img src={require('../../../assets/slide-1.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-img">
                                                    <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-img">
                                                    <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                {/* Single item */}
                                <div className="row just-for-ex-padd">
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-img">
                                                    <img src={require('../../../assets/slide-2.jpg')} alt="Orponbd global"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-img">
                                                    <img src={require('../../../assets/slide-3.jpg')} alt="Orponbd global collections"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-ttxt">
                                                    <p>Product details text here...</p>
                                                    <h4>1250 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="just-for-ypou-snggl-prodct">
                                            <Link to="/#">
                                                <div className="just-for-ypou-snggl-prodct-img">
                                                    <img src={require('../../../assets/slide-1.jpg')} alt="orpon bd global items"/>
                                                </div>
                                                <div className="just-for-ypou-snggl-prodcthg-ttxt">
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
        );
    }
}

export default JustForYouSection;
