import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './groceryproductalltext.css';

// Modal
import 'react-responsive-modal/styles.css';
// Modal


export default class GroceryProductAllText extends Component {
    // Quantity incre decre
    constructor(props) {
        super(props);
        this.state = {
          // For Increase Decrease
          value: 1,
          // For Increase Decrease
        };
      }
    
    decrease = () => {
        this.setState({ value: this.state.value - 1 });
      }
    
      increase = () => {
        this.setState({ value: this.state.value + 1 });
      }
    // Increace Decreace Section end

    render() {
        return (
            <>
            <div className="single-product-page-mobile-product-main-wrpp-sec">
                {/* Product Name */}
                <div className="single-product-page-mobile-product-name-grocery-section">
                    <h4>CocaCola</h4>
                    <p>2.25 liter</p>
                </div>
                {/* Product Name */}
                {/* Price section */}
                <div className="single-product-page-mobile-price-section-grocery">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <div className="single-product-price-xtt-left-sec-groceryy">
                                    <p> <span>1250 - 1520 TK</span> <del><span className="old-price-xxc-grocery">1500 - 1600 TK</span></del></p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="single-product-price-xtt-right-sec-offer-groceryy">
                                    <p>17% off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Price section */}

                {/* Quantity */}
                <div className="obd-grocery-all-itxm-details-overly-con-in-dec-grocery-product-pg">
                    <div className="def-number-input number-input">
                        <button className="grocery-cart-dec-wv-btn" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                        <input className="quantity grocery-cart-inc-dec-input-fld only-grocry" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                        type="number" />
                        <button className="grocery-cart-incc-wv-btn" onClick={this.increase}><i className="fas fa-plus"></i></button>
                    </div>
                </div>
                {/* Quantity */}

                {/* Product details text */}
                <div className="single-product-page-mobile-product-details-text-and-review-grocerryy">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="single-product-page-mobile-product-details-text-box-grocerryy">
                                    <p>Coca-Cola is the most popular and biggest-selling soft drink in history,
                                        as well as one of the most recognizable brands in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product details text */}

                <div className="after-product-details-exx-ddv-mv"></div>
    
                {/* Buy Now and Add to cart Butto single product page */}
                <div className="buy-now-and-add-to-cart-page-mobile-v-single-prodcpg-only-groc-prodct-pg">
                    <div className="container">
                        <div className="row buy-now-and-add-to-cart-page-mobile-extra-ppxdc-only-groc-prodct-pg">
                            <div className="col-5">
                            <div className="buy-now-and-add-to-cart-page-mobile-buy-now-bbtn-only-groc-prodct-pg text-center">
                                <Link to="/payment-product-page">
                                        Buy Now
                                </Link>
                                </div> 
                            </div>
                            <div className="col-5">
                                <div className="buy-now-and-add-to-cart-page-mobile-addto-ccrt-bbtn-only-groc-prodct-pg text-center">
                                <Link to="/my-cart">
                                        Add To Cart
                                </Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="buy-now-and-add-to-cart-page-mobile-cart-icon-bbtn-only-groc-prodct-pg">
                                <Link to="#">
                                        <img src={require('../../../../assets/supermarket.svg')} alt="orponbd online shop"/>
                                </Link>
                                <p>17</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Buy Now and Add to cart Butto single product page */}
            </div>
            </>
        )
    }
}
