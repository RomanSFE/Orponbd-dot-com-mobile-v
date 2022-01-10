import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './mycart.css';

import MainMenu from '../mainmenu/MainMenu.js';

export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          indeterminate: true,
        //   value: ['A', 'C']
        // incress decress
            clicks: 0,
            show: true,
        // incress decress
        };
      }
        
        IncrementItem = () => {
            this.setState({ clicks: this.state.clicks + 1 });
        }
        DecreaseItem = () => {
            this.setState({ clicks: this.state.clicks - 1 });
        }
    // Quantity incre decre
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> My Cart (5)</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mycart-all-item-check-mobile-viexw-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mycart-select-all-sectopnxscs">

                                <div className="bobd-cart-page-main-content-regular-order-ssc-cart">
                                    <h3><span><i class="fas fa-truck"></i></span> Regular Delivery</h3>
                                </div>

                                <div className="dhsggh">
                                    <div className="shdhghhg">
                                        <span className="obd-mv-crt-ck-bbx"><input type="checkbox" /></span>
                                        <span className="my-cart-select-all-x-txtt">Select all</span>
                                    </div>
                                    <hr />
                                    <div className="mycart-selectt-all-sec-bbzxc">
                                        {/* Single Cart Item */}
                                        <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                            <div className="row my-cart-select-all-ex-ppdnfg">
                                                <div className="col-1">
                                                    <div className="my-carrtt-only-single-chect">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="my-cart-select-vvb-immxg">
                                                        <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="my-cart-product-vvx-and-text-section">
                                                        <p>Product details text...</p>
                                                        <h5>Color: Black</h5>
                                                        <h4>1250 TK</h4>

                                                        <div className="my-cartproduct-vvx-delete-iixcn">
                                                            <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                                        </div>
                                                        {/* incress decress */}
                                                        <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                            <ul>
                                                                <li><button onClick={this.DecreaseItem}>-</button></li>
                                                                <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                                <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        {/* incress decress */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Cart Item */}
                                        {/* Single Cart Item */}
                                        <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                            <div className="row my-cart-select-all-ex-ppdnfg">
                                                <div className="col-1">
                                                    <div className="my-carrtt-only-single-chect">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="my-cart-select-vvb-immxg">
                                                        <img src={require('../../assets/slide-2.jpg')} alt="OrponBD Online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="my-cart-product-vvx-and-text-section">
                                                        <p>Product details text...</p>
                                                        <h5>Color: Black</h5>
                                                        <h4>1250 TK</h4>

                                                        <div className="my-cartproduct-vvx-delete-iixcn">
                                                            <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                                        </div>
                                                        {/* incress decress */}
                                                        <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                            <ul>
                                                                <li><button onClick={this.DecreaseItem}>-</button></li>
                                                                <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                                <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        {/* incress decress */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single cart Item */}
                                        {/* Single Cart Item */}
                                        <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                            <div className="row my-cart-select-all-ex-ppdnfg">
                                                <div className="col-1">
                                                    <div className="my-carrtt-only-single-chect">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="my-cart-select-vvb-immxg">
                                                        <img src={require('../../assets/slide-3.jpg')} alt="OrponBD Online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="my-cart-product-vvx-and-text-section">
                                                        <p>Product details text...</p>
                                                        <h5>Color: Black</h5>
                                                        <h4>1250 TK</h4>

                                                        <div className="my-cartproduct-vvx-delete-iixcn">
                                                            <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                                        </div>
                                                        {/* incress decress */}
                                                        <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                            <ul>
                                                                <li><button onClick={this.DecreaseItem}>-</button></li>
                                                                <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                                <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        {/* incress decress */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Cart Item */}
                                    </div>
                                </div> 
                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pre Order Section Start */}
            <div className="mycart-all-item-check-mobile-viexw-main-section only-for-in-stockkxz">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mycart-select-all-sectopnxscs">

                                <div className="bobd-cart-page-main-content-regular-order-ssc-cart">
                                    <h3><span><i class="fas fa-shopping-basket"></i></span> Pre Order</h3>
                                </div>

                                <div className="dhsggh">
                                    <div className="shdhghhg">
                                        <span className="obd-mv-crt-ck-bbx"><input type="checkbox" /></span>
                                        <span className="my-cart-select-all-x-txtt">Select all</span>
                                    </div>
                                    <hr />
                                    <div className="mycart-selectt-all-sec-bbzxc">
                                        {/* Single Cart Item */}
                                        <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                            <div className="row my-cart-select-all-ex-ppdnfg">
                                                <div className="col-1">
                                                    <div className="my-carrtt-only-single-chect">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="my-cart-select-vvb-immxg">
                                                        <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="my-cart-product-vvx-and-text-section">
                                                        <p>Product details text...</p>
                                                        <h5>Color: Black</h5>
                                                        <h4>1250 TK</h4>

                                                        <div className="my-cartproduct-vvx-delete-iixcn">
                                                            <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                                        </div>
                                                        {/* incress decress */}
                                                        <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                            <ul>
                                                                <li><button onClick={this.DecreaseItem}>-</button></li>
                                                                <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                                <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        {/* incress decress */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Cart Item */}
                                        {/* Single Cart Item */}
                                        <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                            <div className="row my-cart-select-all-ex-ppdnfg">
                                                <div className="col-1">
                                                    <div className="my-carrtt-only-single-chect">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="my-cart-select-vvb-immxg">
                                                        <img src={require('../../assets/slide-2.jpg')} alt="OrponBD Online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="my-cart-product-vvx-and-text-section">
                                                        <p>Product details text...</p>
                                                        <h5>Color: Black</h5>
                                                        <h4>1250 TK</h4>

                                                        <div className="my-cartproduct-vvx-delete-iixcn">
                                                            <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                                        </div>
                                                        {/* incress decress */}
                                                        <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                            <ul>
                                                                <li><button onClick={this.DecreaseItem}>-</button></li>
                                                                <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                                <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        {/* incress decress */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single cart Item */}


                                        {/* Pre Order Blar Section Start */}
                                        <div className="instock-cart-page-blar-section-mmoversn">
                                            {/* Single Cart Item */}
                                        <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                            <div className="row my-cart-select-all-ex-ppdnfg">
                                                <div className="col-1">
                                                    <div className="my-carrtt-only-single-chect">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="my-cart-select-vvb-immxg">
                                                        <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="my-cart-product-vvx-and-text-section">
                                                        <p>Product details text...</p>
                                                        <h5>Color: Black</h5>
                                                        <h4>1250 TK</h4>

                                                        <div className="my-cartproduct-vvx-delete-iixcn">
                                                            <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                                        </div>
                                                        {/* incress decress */}
                                                        <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                            <ul>
                                                                <li><button onClick={this.DecreaseItem}>-</button></li>
                                                                <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                                <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        {/* incress decress */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Cart Item */}
                                        {/* Single Cart Item */}
                                        <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                            <div className="row my-cart-select-all-ex-ppdnfg">
                                                <div className="col-1">
                                                    <div className="my-carrtt-only-single-chect">
                                                        <input type="checkbox" />
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="my-cart-select-vvb-immxg">
                                                        <img src={require('../../assets/slide-2.jpg')} alt="OrponBD Online shop"/>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="my-cart-product-vvx-and-text-section">
                                                        <p>Product details text...</p>
                                                        <h5>Color: Black</h5>
                                                        <h4>1250 TK</h4>

                                                        <div className="my-cartproduct-vvx-delete-iixcn">
                                                            <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                                        </div>
                                                        {/* incress decress */}
                                                        <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                            <ul>
                                                                <li><button onClick={this.DecreaseItem}>-</button></li>
                                                                <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                                <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        {/* incress decress */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single cart Item */}
                                        </div>
                                        {/* Pre Order Blar Section End */}
                                    </div>
                                </div> 
                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pre Order Section End */}

            {/* My cart total price section */}
            <div className="my-cart-total-price-main-section">
                <div className="container">
                    <div className="row my-cart-total-price-main-section-exx-pdd">
                        <div className="col-6">
                            <div className="my-cart-total-price-section-bbox">
                                <p>Total <strong>1475 TK</strong></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="my-cart-total-price-buttxcn-section-bbox">
                                <Link to="/payment-product-page">Checkout (10)</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* My cart total price section */}

            <MainMenu/>
            </>
        )
    }
}
