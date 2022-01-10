import React, { Component } from 'react'
import MainMenu from '../mainmenu/MainMenu'
import Search from '../search/Search'
import './storedetails.css'
import StoreFeaturedProductSec from './storefeaturedproducts/StoreFeaturedProductSec'
import StoreNewArrivalProd from './storenewarivalproducts/StoreNewArrivalProd'

export default class StoreDetails extends Component {
    render() {
        return (
            <>
            <Search/>
            
            <div className="obd-mv-store-details-main-top-wrp">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="obd-mv-store-details-main-wrp-txt">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="obd-mv-store-details-main-rt-banner">
                                            <img src={require('../../assets/slide-4.jpg')} alt="orponbd store"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="obd-logo-main-bxx-mv">
                                            <div className="row obd-stor-mv-exz-pd">
                                                <div className="col-3">
                                                    <div className="obd-mv-store-details-st-logo">
                                                        <img src={require('../../assets/confirm-order-2.png')} alt="store logo"/>
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <div className="obd-mv-store-details-st-nm-cnt">
                                                        <h4>Store Name</h4>
                                                        <p>Total <span>115</span> products found</p>
                                                    </div>
                                                    <div class="obd-store-product-det-mv-lk-flow">
                                                        <ul>
                                                            <li><p><span><i class="fas fa-heart"></i></span> 25 Likes</p></li>
                                                            <li><div class="store-pg-det-ttl-followrs"><span class="store-pg-det-ttotl-follw-rat-count">125</span><span class="store-pg-details-flw-count-number">Followers</span></div></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div class="obd-store-mv-dtls-followus-and-love-btn">
                                                        <ul>
                                                            <li class="obd-store-mv-dtls-followus-bbtn"><button type="submit">Follow</button></li>
                                                            <li class="obd-store-mv-dtls-love-bbtn"><button type="submit"><i class="fas fa-heart"></i></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Store Featured Product */}
            <div className="store-featured-product-hm-wrp">
                <StoreFeaturedProductSec/>
            </div>
            {/* Store Featured Product */}

            {/* Store New Arrival Product */}
            <div className="store-new-arrival-product-hm-wrp">
                <StoreNewArrivalProd/>
            </div>
            {/* Store New Arrival Product */}

            <MainMenu/>
            </>
        )
    }
}
