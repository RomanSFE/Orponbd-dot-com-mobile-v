import React, { Component } from 'react';
import './recentlypurches.css';

class RecentlyPurches extends Component {
    render() {
        return (
            <div className="recently-purches-mobillecs-main-secxxtion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="recently-purchessxc-main-boxxc">
                                <div className="recently-purchesxc-hedd-txt">
                                    <p>Recently purchased</p>
                                </div>

                                {/* <marquee behavior="scroll" direction="up"> */}
                                {/* single item */}
                                <div className="row recently-purccxs-extrazc">
                                    <div className="col-4">
                                        <div className="recentleu-marquesc-imgg-scrtn">
                                            <img src={require('../../../assets/slide-3.jpg')} alt=" orponbd global collections"/>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="recently-purhcese-ttxtrt">
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                            <h3>1750 TK</h3>
                                            <h4>2 hours ago</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* single item */}
                                {/* single item */}
                                <div className="row recently-purccxs-extrazc">
                                    <div className="col-4">
                                        <div className="recentleu-marquesc-imgg-scrtn">
                                            <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global products"/>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="recently-purhcese-ttxtrt">
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                            <h3>1750 TK</h3>
                                            <h4>2 hours ago</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* single item */}
                                {/* single item */}
                                <div className="row recently-purccxs-extrazc">
                                    <div className="col-4">
                                        <div className="recentleu-marquesc-imgg-scrtn">
                                            <img src={require('../../../assets/slide-3.jpg')} alt="orponbd global collections"/>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="recently-purhcese-ttxtrt">
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                            <h3>1750 TK</h3>
                                            <h4>2 hours ago</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* single item */}
                                {/* </marquee> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentlyPurches;
