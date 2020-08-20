import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singleproductalltext.css';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class SingleProductAllText extends Component {
    // Quantity incre decre
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
      }
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
    //   ToggleClick = () => {
    //     this.setState({ show: !this.state.show });
    //   }
    // Quantity incre decre

    // Select Modal
    state = {
        open: false,
      };
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
    // Select Modal

    render() {

        // Select Modal
        const { open } = this.state;
        // Select Modal

        return (
            <>
            {/* Price section */}
            <div className="single-product-page-mobile-price-section">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="single-product-price-xtt-left-sec">
                                <p> <span>1250 - 1520 TK</span> <del><span className="old-price-xxc">1500 - 1600 TK</span></del></p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="single-product-price-xtt-right-sec-offer">
                                <p>17% off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Price section */}

            {/* Product details text */}
            <div className="single-product-page-mobile-product-details-text-and-review">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-product-page-mobile-product-details-text-box">
                                <p>2018 Mens Polarized Night Driving Sunglasses Men Brand
                                    Designer Yellow Lens Night Vision</p>
                            </div>
                            <div className="single-product-page-mobile-product-details-text-box-review">
                               <ul>
                                   <li className="singll-pro-rat-revvx">
                                        <p>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </p>
                                   </li>
                                   <li className="singll-pro-rat-revvx-no-rev-txt">
                                       <p>No Review</p>
                                   </li>
                                   <li className="singll-pro-rat-revvx-one-orrdr-ttxt">
                                       <p>1 Order</p>
                                   </li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product details text */}

            {/* Single product color size quantity option select */}
            <div className="single-product-color-option-select-main-mobl">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-product-select-color-sizzx">
                                <button onClick={this.onOpenModal}>Products Options <p>Color, Size</p></button>
                                <button onClick={this.onOpenModal}><h5>Select</h5></button>
                                <Modal open={open} onClose={this.onCloseModal} >
                                    {/* Image and price section */}
                                    <div className="modal-singg-mob-product-imgg-section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="single-product-open-modal-image-immg-mbl">
                                                        <img src={require('../../../assets/slide-1.jpg')} alt="orponbd global collections"/>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="single-product-open-modal-image-txctt">
                                                        <h3>1750 TK <del><span className="single-pro-pr-old-pprc-xs">2100 TK</span></del></h3>
                                                        <p>Selected: <span>Black</span></p>
                                                    </div>
                                                    <div className="instock-and-offer-box">
                                                        <ul>
                                                            <li><h6>In Stock</h6></li>
                                                            <li><p>17% off</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image and price section */}

                                    {/* single product options section */}
                                    <div className="single-products-options-section-size-color-quant">
                                        {/* color with img */}
                                        <div className="single-products-options-section-color-with-immg">
                                            <div className="single-products-options-section-color-ttxtt">
                                                <p>Color: <span>Black</span></p>
                                            </div>
                                            <div className="single-products-options-section-iimmg-bbox">
                                                <ul>
                                                   <li><Link to="#"><img src={require('../../../assets/slide-1.jpg')} alt="orponbd global collections"/></Link></li>   
                                                   <li><Link to="#"><img src={require('../../../assets/slide-2.jpg')} alt="orponbd global collections"/></Link></li>   
                                                   <li><Link to="#"><img src={require('../../../assets/slide-3.jpg')} alt="orponbd global collections"/></Link></li>   
                                                </ul>
                                            </div>
                                        </div>
                                        {/* color with img */}

                                        {/* Size */}
                                        <div className="single-products-options-section-sizexx">
                                            <div className="single-products-options-section-sizeext-ttxtt">
                                                <p>Size: <span>M</span></p>
                                            </div>
                                            <div className="single-products-options-section-sizzx-bbox">
                                                <ul>
                                                   <li><Link to="#"><p>M</p></Link></li>
                                                   <li><Link to="#"><p>L</p></Link></li>
                                                   <li><Link to="#"><p>XL</p></Link></li>
                                                   <li><Link to="#"><p>XXL</p></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Size */}

                                        {/* Quantity */}
                                        <div className="single-products-options-section-quantity">
                                            <div className="single-products-options-section-quantity-ttxtt">
                                                <p>Quantity:</p>
                                            </div>
                                            <div className="single-products-options-section-quantity-bbox">
                                                <ul>
                                                    <li><button onClick={this.DecreaseItem}>-</button></li>
                                                    <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                    <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                </ul>
                                                
                                                {/* <button onClick={this.ToggleClick}>
                                                { this.state.show ? 'Hide number' : 'Show number' }
                                                </button> */}
                                            </div>
                                        </div>
                                        {/* Quantity */}
                                    </div>
                                    {/* single product options section */}

                                    {/* Single product  Buy Now section button */}
                                    <div className="single-product-buy-now-open-modal-mobile-section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-product-buy-now-open-modal-mobile-section-box text-center">
                                                        <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single product  Buy Now section button */}
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single product color size quantity option select */}

            {/* Single Products Highlights sections */}
            <div className="single-product-highlight-section-mobile-main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-product-highlight-section-mobile-main-booxs">
                            <button onClick={this.onOpenModal}>Products Highlights </button>
                                <button onClick={this.onOpenModal}><h5>Select</h5></button>
                                <Modal open={open} onClose={this.onCloseModal} >
                                    <h2>Products highlights text</h2>
                                </Modal>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Products Highlights sections */}
            </>
        )
    }
}
