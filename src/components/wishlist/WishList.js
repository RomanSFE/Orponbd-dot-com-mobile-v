import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './wishlist.css';

import SingleProductTopMenu from '../singleproductpage/SingleProductTopMenu.js'

import MainMenu from '../mainmenu/MainMenu.js'

export default class WishList extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="mywishlist-page-main-mobile-v-sec">
                <div className="container">
                    {/* Single Wishlist Item */}
                    <div className="row my-wishlisst-ex-ppdnfg">
                        <div className="col-4">
                            <div className="hgffhhfg">
                                <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="wishlist-product-and-text-section">
                                <p>Product details text...</p>
                                <h5>Shoe</h5>
                                <h4>1250 TK</h4>

                                <span><i class="far fa-trash-alt" aria-hidden="true"></i></span>
                                <Link to="/">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    {/* Single Wishlist Item */}
                    {/* Single Wishlist Item */}
                    <div className="row my-wishlisst-ex-ppdnfg">
                        <div className="col-4">
                            <div className="hgffhhfg">
                                <img src={require('../../assets/product-2.jpg')} alt="OrponBD Online shop"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="wishlist-product-and-text-section">
                                <p>Product details text...</p>
                                <h5>Shoe</h5>
                                <h4>1250 TK</h4>

                                <span><i class="far fa-trash-alt"></i></span>
                                <Link to="/">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    {/* Single Wishlist Item */}
                    {/* Single Wishlist Item */}
                    <div className="row my-wishlisst-ex-ppdnfg">
                        <div className="col-4">
                            <div className="hgffhhfg">
                                <img src={require('../../assets/product-5.jpg')} alt="OrponBD Online shop"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="wishlist-product-and-text-section">
                                <p>Product details text...</p>
                                <h5>Shoe</h5>
                                <h4>1250 TK</h4>

                                <span><i class="far fa-trash-alt"></i></span>
                                <Link to="/">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    {/* Single Wishlist Item */}
                </div>
            </div>
            <MainMenu/>
            </>
        )
    }
}
