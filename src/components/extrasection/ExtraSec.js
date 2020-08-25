import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ExtraSec extends Component {
    render() {
        return (
            <div className="extraax-sess">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ghgghh">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/singleproductpage">Single product page</Link></li>
                                    <li><Link to="/more-review-page">More Review Page</Link></li>
                                    <li><Link to="/empty-cart">Empty Cart</Link></li>
                                    <li><Link to="/my-cart">My Cart</Link></li>
                                    <li><Link to="/wishlist">My Wishlist</Link></li>
                                    <li><Link to="/product-not-found">Product Not Found</Link></li>
                                    <li><Link to="/main-category">Main category</Link></li>
                                    <li><Link to="/sub-category">Main category</Link></li>
                                    <li><Link to="/single-category-product">Single Category Product</Link></li>
                                    <li><Link to="/single-category-product-two-column">Single Category Product two column</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
