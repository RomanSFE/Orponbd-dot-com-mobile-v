import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './grocerycarticonbox.css';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export default class GroceryCartIconBox extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            visible: false,

            // For Increase Decrease
            value: 1,
            // For Increase Decrease
        };
    }

    // For Modal Cart
    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }
    // For Modal Cart

    // Increace Decreace Section start ---------------------------
    // state = {
    //     value: 0
    //   }
    decrease = () => {
        this.setState({ value: this.state.value - 1 });
      }
      increase = () => {
        this.setState({ value: this.state.value + 1 });
      }
    // Increace Decreace Section end -----------------
    
    render() {
        return (
            <>
            <div className="grocery-zone-all-itm-fix-cart-box-main-section">
                <div className="grocery-zone-all-itm-fix-cart-box-iconn text-right">
                    <span className="grocery-zone-all-itm-fix-cart-box-iconn-count"><p>14</p></span>
                    <button onClick={this.show.bind(this)}>
                        <img src={require('../../../assets/grocery-fix-cart.png')} alt="orponbd Online Shop"/>
                        <div className="grocery-zone-all-itm-fix-cart-box-iconn-price">
                            <p><span>৳</span> 1200</p>
                        </div>
                    </button>
                </div>
                
                <Rodal animation={"slideRight"} visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <div className="grocery-zone-all-itm-fix-cart-box-main-section-content-box">
                        <div className="grocery-zone-all-itm-fix-cart-box-cart-item-img-top-sec">
                            <div className="grocery-cart-modal-top-inner-secc-wwvv">
                                <img src={require('../../../assets/grocery-fix-cart.png')} alt="orponbd Grocery"/>
                                <span>12 Items</span>
                            </div>
                        </div>

                        <div className="grocery-zone-all-itm-fix-cart-box-item-prod-itl-list-mdl-sec">
                            <div className="container">
                                {/* Single Item start */}
                                <div className="row grocery-zone-all-itm-fix-cart-box-single-product-box-pdd">
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-img">
                                            <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd Grocery"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-contnxt">
                                            <h5>Product Name In Two Line mazimum</h5>
                                            <p>150/kg</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-inc-dec">
                                            <div className="def-number-input number-input">
                                                <button className="grocery-cart-dec-singl-prod-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="grocery-cart-inc-dec-singl-prod-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="grocery-cart-incc-singl-prod-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-price">
                                            <p><span>৳</span> 1200</p>
                                        </div>
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-remove-icon">
                                            <button><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Item end */}
                                {/* Single Item start */}
                                <div className="row grocery-zone-all-itm-fix-cart-box-single-product-box-pdd">
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-img">
                                            <img src={require('../../../assets/women-fas-cat-1.png')} alt="orponbd Grocery"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-contnxt">
                                            <h5>Product Name In Two Li mazimum extras</h5>
                                            <p>150/kg</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-inc-dec">
                                            <div className="def-number-input number-input">
                                                <button className="grocery-cart-dec-singl-prod-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="grocery-cart-inc-dec-singl-prod-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="grocery-cart-incc-singl-prod-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-price">
                                            <p><span>৳</span> 1200</p>
                                        </div>
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-remove-icon">
                                            <button><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Item end */}
                                {/* Single Item start */}
                                <div className="row grocery-zone-all-itm-fix-cart-box-single-product-box-pdd">
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-img">
                                            <img src={require('../../../assets/women-fas-cat-4.png')} alt="orponbd Grocery"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-contnxt">
                                            <h5>Product Name In Two Li mazimum extras</h5>
                                            <p>150/kg</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-inc-dec">
                                            <div className="def-number-input number-input">
                                                <button className="grocery-cart-dec-singl-prod-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="grocery-cart-inc-dec-singl-prod-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="grocery-cart-incc-singl-prod-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-price">
                                            <p><span>৳</span> 1200</p>
                                        </div>
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-remove-icon">
                                            <button><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Item end */}
                                {/* Single Item start */}
                                <div className="row grocery-zone-all-itm-fix-cart-box-single-product-box-pdd">
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-img">
                                            <img src={require('../../../assets/women-fas-cat-5.png')} alt="orponbd Grocery"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-contnxt">
                                            <h5>Product Name In Two Li mazimum extras</h5>
                                            <p>150/kg</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-inc-dec">
                                            <div className="def-number-input number-input">
                                                <button className="grocery-cart-dec-singl-prod-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="grocery-cart-inc-dec-singl-prod-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="grocery-cart-incc-singl-prod-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-price">
                                            <p><span>৳</span> 1200</p>
                                        </div>
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-remove-icon">
                                            <button><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Item end */}
                                {/* Single Item start */}
                                <div className="row grocery-zone-all-itm-fix-cart-box-single-product-box-pdd">
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-img">
                                            <img src={require('../../../assets/women-fas-cat-2.png')} alt="orponbd Grocery"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-contnxt">
                                            <h5>Product Name In Two Li mazimum extras</h5>
                                            <p>150/kg</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-inc-dec">
                                            <div className="def-number-input number-input">
                                                <button className="grocery-cart-dec-singl-prod-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="grocery-cart-inc-dec-singl-prod-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="grocery-cart-incc-singl-prod-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-price">
                                            <p><span>৳</span> 1200</p>
                                        </div>
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-remove-icon">
                                            <button><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Item end */}
                                {/* Single Item start */}
                                <div className="row grocery-zone-all-itm-fix-cart-box-single-product-box-pdd">
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-img">
                                            <img src={require('../../../assets/women-fas-cat-6.png')} alt="orponbd Grocery"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-contnxt">
                                            <h5>Product Name In Two Li mazimum extras</h5>
                                            <p>150/kg</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-inc-dec">
                                            <div className="def-number-input number-input">
                                                <button className="grocery-cart-dec-singl-prod-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="grocery-cart-inc-dec-singl-prod-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="grocery-cart-incc-singl-prod-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-price">
                                            <p><span>৳</span> 1200</p>
                                        </div>
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-remove-icon">
                                            <button><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Item end */}
                                {/* Single Item start */}
                                <div className="row grocery-zone-all-itm-fix-cart-box-single-product-box-pdd">
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-img">
                                            <img src={require('../../../assets/women-fas-cat-1.png')} alt="orponbd Grocery"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-contnxt">
                                            <h5>Product Name In Two Li mazimum extras</h5>
                                            <p>150/kg</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-inc-dec">
                                            <div className="def-number-input number-input">
                                                <button className="grocery-cart-dec-singl-prod-wv-btn-in-modal" onClick={this.decrease}><i class="fas fa-minus"></i></button>
                                                <input className="grocery-cart-inc-dec-singl-prod-input-fld-in-modal" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
                                                type="number" />
                                                <button className="grocery-cart-incc-singl-prod-wv-btn-in-modal" onClick={this.increase}><i className="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-price">
                                            <p><span>৳</span> 1200</p>
                                        </div>
                                        <div className="grocery-zone-all-itm-fix-cart-box-single-product-remove-icon">
                                            <button><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Item end */}
                            </div>
                        </div>

                        <div className="grocery-zone-all-itm-fix-cart-box-item-place-odr-ttl-bottm-sec">
                            <ul>
                                <li className="grocery-zone-all-itm-fix-cart-total-left-exx"><Link>Place Order</Link></li>
                                <li className="grocery-zone-all-itm-fix-cart-total-mdl-prc"><p>Total <span>৳ 1200</span></p></li>
                            </ul>
                        </div>

                    </div>
                </Rodal>
            </div>
            </>
        )
    }
}
