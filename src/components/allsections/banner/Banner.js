import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../banner/banner.css';

export default class Banner extends Component {
    render() {
        return (
            <div className="wen-dot-cmm-banner-section-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-web-dot-cm-image-section">
                            <Link to="/singleproducttopmenu">
                                <div className="banner-dot-cm-image-box">
                                    <img src={require('../../../assets/slide-5.jpg')} alt="orponbd global collections"/>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
