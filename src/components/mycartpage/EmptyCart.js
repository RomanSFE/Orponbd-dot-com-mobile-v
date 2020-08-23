import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './emptycart.css';
import SingleProductTopMenu from '../singleproductpage/SingleProductTopMenu.js'

import MainMenu from '../mainmenu/MainMenu.js'

export default class EmptyCart extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="my-empty-cart-mobile-v-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="my-empty-cart-mobile-v-main-section-booxc text-center">
                                <div className="my-empty-cart-mobile-v-main-section-booxc-img">
                                    <img src={require('../../assets/empty-cart.png')} alt="OrponBD Online shop"/>
                                </div>
                                <div className="my-empty-cart-mobile-v-main-section-booxc-texttc">
                                    <h3>Your Cart is Empty</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Ducimus, repudiandae.</p>
                                </div>
                                <div className="my-empty-cart-mobile-v-main-section-booxc-back-bbtnn mx-auto">
                                    <Link to="/">
                                        Back to Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MainMenu/>
            </>
        )
    }
}
