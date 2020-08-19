import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singleproductalltext.css';

export default class SingleProductAllText extends Component {
    render() {
        return (
            <>
            <div className="single-product-page-mobile-price-section">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="single-product-price-xtt-left-sec">
                                <p>price <span>1250 TK</span> <del><span className="old-price-xxc">1500 TK</span></del></p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="single-product-price-xtt-right-sec-offer">
                                <p>17% off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
