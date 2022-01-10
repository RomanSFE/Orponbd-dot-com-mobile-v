import React, { Component } from 'react'
import './storeproductbox.css'
import { Link } from 'react-router-dom'

export default class StoreProductBox extends Component {
    render() {
        return (
            <div className="obd-mv-store-name-box-wpr">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="obd-mv-store-name-box-txt">
                                <h4>Sold By : <span>Orponbd</span></h4>
                                <h5>Address : Mirpur</h5>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="obd-mv-store-name-box-follw text-right">
                                <button>Follow</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div class="obd-store-product-mv-lk-flow text-center">
                                <ul>
                                    <li><p><span><i class="fas fa-heart"></i></span> 25 Likes</p></li>
                                    <li><div class="store-pg-details-ttl-followrs"><span class="store-pg-details-ttotl-follw-rat-count">125</span><span class="store-pg-details-flw-count-number">Followers</span></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-mv-store-name-view-stor-lnk text-center">
                                <Link to="/store-details">View Store</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
