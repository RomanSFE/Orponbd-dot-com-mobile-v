import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../topcategory/topcategoryitem.css';

export default class TopCategoryItem extends Component {
    render() {
        return (
            <>
            <div className="top-category-tiem-doot-com-main-sectionx">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-cattgry-xes-wexv-dot-main-sec-bboxx">
                                {/* Single row */}
                                <div className="row top-cattgryxz-dott-com-delproj-rww">
                                    <div className="col-md-3 col-3">
                                        <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="top-catgrtcy-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Category Name</p>
                                                </div>
                                                <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-1.jpg')} alt="orponbd global collections"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="top-catgrtcy-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Category Name</p>
                                                </div>
                                                <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-5.jpg')} alt="orponbd global collections"/>
                                                </div> 
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="top-catgrtcy-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Cat Name</p>
                                                </div>
                                                <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-7.jpg')} alt="orponbd global collections"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct">
                                            <Link to="/#">
                                                <div className="top-catgrtcy-web-ddot-cmm-snnggl-prodct-ttxt">
                                                    <p>Category Name</p>
                                                </div>
                                                <div className="top-caggtog-sn-web-ddot-cmm-snnggl-prodct-img">
                                                    <img src={require('../../../assets/product-6.jpg')} alt="orponbd global collections"/>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single row */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
