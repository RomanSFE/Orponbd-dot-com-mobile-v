import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './mycart.css';

import MainMenu from '../mainmenu/MainMenu.js';
import { Checkbox, CheckboxGroup } from 'rsuite';

const options = ['A', 'B', 'C', 'D'];

export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          indeterminate: true,
          checkAll: false,
        //   value: ['A', 'C']
        // incress decress
            clicks: 0,
            show: true,
        // incress decress
        };
        this.handleCheckAll = this.handleCheckAll.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleCheckAll(value, checked) {
        const nextValue = checked ? options : [];
        console.log(nextValue, 'handleCheckAll');
        this.setState({
          value: nextValue,
          indeterminate: false,
          checkAll: checked
        });
      }
      handleChange(value) {
        console.log(value, 'handleChange');
        this.setState({
          value,
          indeterminate: value.length > 0 && value.length < options.length,
          checkAll: value.length === options.length
        });
      }

      // Quantity incre decre
        // constructor(props) {
        //     super(props);
        //     this.state = {
        //     clicks: 0,
        //     show: true,
        //     };
        // }
        
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
                                    <span><i className="fa fa-chevron-left"></i> My Cart(5)</span>
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

                            <div className="dhsggh">
                                <div className="shdhghhg">
                                    <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    checked={this.state.checkAll}
                                    onChange={this.handleCheckAll}
                                    >
                                    <span className="my-cart-select-all-x-txtt">Select all</span>
                                    </Checkbox>
                                </div>
                                <hr />
                                <CheckboxGroup
                                inline
                                name="checkboxList"
                                value={this.state.value}
                                onChange={this.handleChange}
                                >
                                <div className="mycart-selectt-all-sec-bbzxc">
                                    {/* Single Cart Item */}
                                    <div className="row my-cart-select-all-ex-ppdnfg">
                                        <div className="col-2">
                                            <div className="my-carrtt-only-single-chect">
                                                <Checkbox value="A"></Checkbox>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="my-cart-select-vvb-immxg">
                                                <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="my-cart-product-vvx-and-text-section">
                                                <p>Product details text...</p>
                                                <h5>Color: Black</h5>
                                                <h4>1250 TK</h4>

                                                <span><i class="far fa-trash-alt" aria-hidden="true"></i></span>
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
                                    {/* Single Cart Item */}
                                    {/* Single Cart Item */}
                                    <div className="row my-cart-select-all-ex-ppdnfg">
                                        <div className="col-2">
                                            <div className="my-carrtt-only-single-chect">
                                                <Checkbox value="B"></Checkbox>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="my-cart-select-vvb-immxg">
                                                <img src={require('../../assets/slide-2.jpg')} alt="OrponBD Online shop"/>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="my-cart-product-vvx-and-text-section">
                                                <p>Product details text...</p>
                                                <h5>Color: Black</h5>
                                                <h4>1250 TK</h4>

                                                <span><i class="far fa-trash-alt" aria-hidden="true"></i></span>
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
                                    {/* Single cart Item */}
                                    {/* Single Cart Item */}
                                    <div className="row my-cart-select-all-ex-ppdnfg">
                                        <div className="col-2">
                                            <div className="my-carrtt-only-single-chect">
                                                <Checkbox value="C"></Checkbox>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="my-cart-select-vvb-immxg">
                                                <img src={require('../../assets/slide-3.jpg')} alt="OrponBD Online shop"/>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="my-cart-product-vvx-and-text-section">
                                                <p>Product details text...</p>
                                                <h5>Color: Black</h5>
                                                <h4>1250 TK</h4>

                                                <span><i class="far fa-trash-alt" aria-hidden="true"></i></span>
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
                                    {/* Single Cart Item */}
                                </div>
                                </CheckboxGroup>
                            </div> 
                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                <Link to="/">Checkout(10)</Link>
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
