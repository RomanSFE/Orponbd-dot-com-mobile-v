import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './singlecategoryproduct.css';

import SingleProductTopMenu from '../../singleproductpage/SingleProductTopMenu.js';

import MainMenu from '../../mainmenu/MainMenu.js';

class SingleCategoryProduct extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="single-category-product-item-mobile-top-section">
                <div className="container">
                    <div className="row single-category-prod-ex-pdd">
                        <div className="col-9">
                            <div className="single-category-product-left-best-match-section">
                                <select>
                                    <option value="" selected>Best match</option>
                                    <option value="">Orders</option>
                                    <option value="">Price(high to low)</option>
                                    <option value="">Price(low to high)</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="single-category-product-right-filter-sec-mobli">
                                <ul>
                                    <li className="single-cat-prr-iitm-left-icn"><span><i class="fas fa-grip-horizontal"></i></span></li>
                                    <li className="single-cat-prr-iitm-filter-iicn"><span><i class="fas fa-filter"></i></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MainMenu/>
            </>
        );
    }
}

export default SingleCategoryProduct;
