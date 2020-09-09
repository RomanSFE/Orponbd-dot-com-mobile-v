import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './wishlist.css';

import MainMenu from '../mainmenu/MainMenu.js'

// Modal
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// Modal


export default class WishList extends Component {
    // Quantity incre decre
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true,
        };
      }
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
    // Quantity incre decre

    // Select Modal
    state = {
        ProductOptionOpen: false,
      };

    //   wishlist options open
      onOpenModalWishlist = () => {
        this.setState({ WishlistOptionOpen: true });
      };
     
      onCloseModalWishlist = () => {
        this.setState({ WishlistOptionOpen: false });
      };
      //  wishlist options open
    
    // Select Modal

    render() {

        // Select Modal
        const { WishlistOptionOpen } = this.state;
        // Select Modal

        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Wishlist</span>
                                    <div className="maincategory-topmenu-wishlist-mv-ccrt-bbx text-right">
                                        <Link to="/my-cart">
                                            <img src={require('../../assets/supermarket.svg')} alt="orponbd Online Shop"/>
                                            <span className="maincategory-topmenu-wishlist-mv-ccrt-item-nmbr">4</span>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mywishlist-page-main-mobile-v-sec">
                <div className="container">

                    {/* Single Wishlist Item */}
                    <div className="gfsfddd">

                    <Link to="/">
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

                                <div className="wishlstt-delete-iconn">
                                    <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </Link>

                    <div className="hhhhhh">
                        <button onClick={this.onOpenModalWishlist}><h5>Add To Cart</h5></button>

                        {/* Modal section */}
                        <div className="sfsjgfj">
                        <Modal open={WishlistOptionOpen} onClose={this.onCloseModalWishlist} >
                            {/* Image and price section */}
                            <div className="wishlist-ffg-mob-product-imgg-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="wishlist-product-open-modal-image-immg-mbl">
                                                <img src={require('../../assets/slide-1.jpg')} alt="orponbd global collections"/>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="wishlistt-pp-product-open-modal-image-txctt">
                                                <h3>1750 TK <del><span className="single-pro-pr-old-pprc-xs">2100 TK</span></del></h3>
                                                <p>Selected: <span>Black</span></p>
                                            </div>
                                            <div className="wishlist-instock-and-offer-box">
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
                            <div className="wishlist-ppx-products-options-section-size-color-quant">
                                {/* color with img */}
                                <div className="wishlist-products-options-section-color-with-immg">
                                    <div className="wishlist-products-options-section-color-ttxtt">
                                        <p>Color: <span>Black</span></p>
                                    </div>
                                    <div className="wishlist-ppcx-products-options-section-iimmg-bbox">
                                        <ul>
                                        <li><Link to="#"><img src={require('../../assets/slide-1.jpg')} alt="orponbd global collections"/></Link></li>   
                                        <li><Link to="#"><img src={require('../../assets/slide-2.jpg')} alt="orponbd global collections"/></Link></li>   
                                        <li><Link to="#"><img src={require('../../assets/slide-3.jpg')} alt="orponbd global collections"/></Link></li>   
                                        </ul>
                                    </div>
                                </div>
                                {/* color with img */}

                                {/* Size */}
                                <div className="wishlist-ppr-products-options-section-sizexx">
                                    <div className="wishlist-ppr-products-options-section-sizeext-ttxtt">
                                        <p>Size: <span>M</span></p>
                                    </div>
                                    <div className="wishlist-ppr-products-options-section-sizzx-bbox">
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
                                <div className="wishlist-ppr-products-options-section-quantity">
                                    <div className="wishlist-ppxc-products-options-section-quantity-ttxtt">
                                        <p>Quantity:</p>
                                    </div>
                                    <div className="wishlist-ppr-products-options-section-quantity-bbox">
                                        <ul>
                                            <li><button onClick={this.DecreaseItem}>-</button></li>
                                            <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                            <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Quantity */}
                            </div>
                            {/* single product options section */}

                            {/* Single product  Buy Now section button */}
                            <div className="wishlist-ppxc-product-buy-now-open-modal-mobile-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="wishlist-bvf-product-buy-now-open-modal-mobile-section-box text-center">
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single product  Buy Now section button */}
                        </Modal>
                        </div>
                        {/* Modal section */}
                        </div>
                    </div>
                    {/* Single Wishlist Item */}

                    {/* Single Wishlist Item */}
                    <Link to="/">
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

                                <div className="wishlstt-delete-iconn">
                                    <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                </div>
                                <Link to="/">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    </Link>
                    {/* Single Wishlist Item */}

                    {/* Single Wishlist Item */}
                    <Link to="/">
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

                                <div className="wishlstt-delete-iconn">
                                    <img src={require('../../assets/delete-zz.svg')} alt="OrponBD Online shop"/>
                                </div>
                                <Link to="/">Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    </Link>
                    {/* Single Wishlist Item */}
                </div>
            </div>
            <MainMenu/>
            </>
        )
    }
}
