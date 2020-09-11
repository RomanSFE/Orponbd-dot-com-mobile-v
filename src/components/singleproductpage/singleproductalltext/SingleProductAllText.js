import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singleproductalltext.css';

// Modal
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// Modal

// Recommended component
import RecommendedProducts from '../recomendedproducts/RecommendedProducts.js'

export default class SingleProductAllText extends Component {
    // Quantity incre decre
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true,
        //   View more Button
          ViewMore: false,
        //   View more Button

        //   More Review Button
          MoreReviewButton: false,
        //   More Review Button
        };
      }
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
    // Quantity incre decre

    
    // View More Button
    ToggleClick = () => {
        this.setState({ ViewMore: !this.state.ViewMore });
    }
    // View More Button

    // More Review Button
    ToggleClickX = () => {
        this.setState({ MoreReviewButton: !this.state.MoreReviewButton });
    }
    // More Review Button

    // Select Modal
    state = {
        ProductOptionOpen: false,
        ProductHighlightsOpen: false,
      };

    //   Product options open
      onOpenModal = () => {
        this.setState({ ProductOptionOpen: true });
      };
     
      onCloseModal = () => {
        this.setState({ ProductOptionOpen: false });
      };
      //   Product options open

    //   Product Highlights open
      onOpenModalHighlights = () => {
        this.setState({ ProductHighlightsOpen: true });
      };
     
      onCloseModalHighlights = () => {
        this.setState({ ProductHighlightsOpen: false });
      };
      //   Product Highlights open

    // Select Modal

    render() {

        // Select Modal
        const { ProductOptionOpen } = this.state;
        const { ProductHighlightsOpen } = this.state;
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
                                <div className="row">
                                    <div className="col-8">
                                        <button onClick={this.onOpenModal}>Products Options <p>Color, Size</p></button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.onOpenModal}><h5>Select</h5></button>
                                    </div>
                                </div>
                                {/* <button onClick={this.onOpenModal}>Products Options <p>Color, Size</p></button>
                                <button onClick={this.onOpenModal}><h5>Select</h5></button> */}
                                <Modal open={ProductOptionOpen} onClose={this.onCloseModal}>
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
                                                   <li><img src={require('../../../assets/slide-1.jpg')} alt="orponbd online shop"/></li>   
                                                   <li><img src={require('../../../assets/slide-2.jpg')} alt="orponbd online shop"/></li>   
                                                   <li><img src={require('../../../assets/slide-3.jpg')} alt="orponbd online shop"/></li>   
                                                </ul>
                                            </div>
                                            {/* OR */}
                                            <div className="single-products-options-section-var-colr-bbox">
                                                <ul>
                                                   <li><p>Color Opt 1</p></li>  
                                                   <li><p>Color Opt 2</p></li>  
                                                   <li><p>Color Opt 3</p></li>  
                                                </ul>
                                            </div>
                                            {/* OR */}
                                        </div>
                                        {/* color with img */}

                                        {/* Size */}
                                        <div className="single-products-options-section-sizexx">
                                            <div className="single-products-options-section-sizeext-ttxtt">
                                                <p>Size: <span>M</span></p>
                                            </div>
                                            <div className="single-products-options-section-sizzx-bbox">
                                                <ul>
                                                   <li><p>M</p></li>
                                                   <li><p>L</p></li>
                                                   <li><p>XL</p></li>
                                                   <li><p>XXL</p></li>
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
                                                        <Link to="/payment-with-shipping-button">
                                                            <button>Buy Now</button>
                                                        </Link>
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
                                <div className="row">
                                    <div className="col-8">
                                        <button onClick={this.onOpenModalHighlights}>Products Highlights </button>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={this.onOpenModalHighlights}><h5>Select</h5></button>
                                    </div>
                                </div>
                                {/* <button onClick={this.onOpenModalHighlights}>Products Highlights </button>
                                <button onClick={this.onOpenModalHighlights}><h5>Select</h5></button> */}
                                <Modal open={ProductHighlightsOpen} onClose={this.onCloseModalHighlights} >
                                    <div className="products-highlights-prod-details-txztxt">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="products-highlights-prod-details-txztxt-heading text-center">
                                                        <h5>Products Highlights</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="products-highlights-prod-details-txztxt-bboxc">
                                                        <ul>
                                                            <li><p>Product details text 1</p></li>
                                                            <li><p>Product details text 2</p></li>
                                                            <li><p>Product details text 3</p></li>
                                                            <li><p>Product details text 4</p></li>
                                                            <li><p>Product details text 5</p></li>
                                                            <li><p>Product details text 6</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single product  Buy Now section button */}
                                    <div className="single-product-buy-now-open-modal-mobile-section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-product-buy-now-open-modal-mobile-section-box text-center">
                                                        <Link to="/payment-with-shipping-button">
                                                            <button>Buy Now</button>
                                                        </Link>
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
            {/* Single Products Highlights sections */}

            {/* Customer Review Section */}
            <div className="single-product-page-customer-review-section-main-mobbil">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-product-page-customer-review-section-main-mobbil-box"> 
                                <div className="row custtomxm-rrvu">
                                    <div className="col-6">
                                        <div className="customer-revv-heddnngx-ttxt">
                                            <h5>Customer Reviews</h5>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="customer-revvxx-revveeu">
                                            <p>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="customer-revvuuzx-ccount">
                                            <p>0/5 <span>(0)</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Customer Review Section */}
            {/* Customer Review Provide by customer section start */}
            <div className="customer-review-provide-by-customer-revvxu-sec">
                <div className="container">
                    <div className="row customer-review-provide-by-customer-eecx">
                        <div className="col-3">
                            <div className="customer-review-provide-by-customer-revvxu-sec-pro-img">
                                <img src={require('../../../assets/product-9.jpg')} alt="orponbd global collections"/>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="customer-review-provide-by-customer-revvxu-sec-rating-name">
                                <p><strong>First Name</strong> 
                                    <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </span> 
                                </p>
                                <h6>10/09/2020</h6>
                            </div>
                        </div>
                        <div className="customer-review-provide-by-customer-revvxu-sec-texxtc">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, soluta? </p>
                        </div>
                        
                    </div>
                </div>
                <div className="customer-review-provide-by-customer-revvxu-sec-texxt-social-likke text-right">
                    <ul text-right>
                        <li><i className="far fa-comment-dots"></i></li>
                        <li>0</li>
                        <li><i className="far fa-thumbs-up"></i></li>
                        <li>5</li>
                    </ul>
                </div>

                <div className="customer-review-provide-by-customer-revvxu-view-more-review text-center">
                {/* View More Review Content */}
                    <Link to="/more-review-page">More Review</Link>
                {/* View More Review Content */}
                </div>
            </div>
            
            {/* Customer Review Provide by customer section end */}

            {/* Products Details Section */}
            <div className="single-products-product-details-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-products-product-details-heading-ttxt">
                                <h4>Product Details</h4>
                            </div>
                            <div className="single-products-product-details-immgg-prt">
                                <img src={require('../../../assets/slide-1.jpg')} alt="orponbd online shop"/>
                            </div>
                            <div className="singlle-mrr-whiitt-space-seexctn"></div>
                            <div className="single-products-product-details-view-mmortc-bbtx text-center">
                                {/* View More Button Content */}
                                { this.state.ViewMore ?
                                <>
                                <div className="view-more-bbtn-inside-ttxxtx-mmobbl">
                                    <div className="single-product-inside-view-more-buttom-details text-left">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere.</p>
                                        
                                        <p className="single-product-inside-view-more-buttom-deta-para-second">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, voluptate.</p>
                                    </div>
                                    <div className="single-product-inside-view-more-buttom-details-images-all">
                                        <img src={require('../../../assets/slide-2.jpg')} alt="orponbd online shop"/>
                                        <img src={require('../../../assets/slide-3.jpg')} alt="orponbd online shop"/>
                                    </div>
                                </div>
                                </>
                                : '' }
                                {/* View More Button Content */}

                                <button onClick={this.ToggleClick}>
                                    { this.state.ViewMore ? 'View Less' : 'View More' }
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Products Details Section */}

            <div className="after-product-details-exx-ddv-mv"></div>

            {/* Recommended for you section */}
            <div className="single-products-recommended-peoodect-sec">
                <RecommendedProducts/>
            </div>
            {/* Recommended for you section */}

            {/* Buy Now and Add to cart Butto single product page */}
            <div className="buy-now-and-add-to-cart-page-mobile-v-single-prodcpg">
                <div className="container">
                    <div className="row buy-now-and-add-to-cart-page-mobile-extra-ppxdc">
                        <div className="col-5">
                           <div className="buy-now-and-add-to-cart-page-mobile-buy-now-bbtn text-center">
                               <Link to="/payment-product-page">
                                    Buy Now
                               </Link>
                            </div> 
                        </div>
                        <div className="col-5">
                            <div className="buy-now-and-add-to-cart-page-mobile-addto-ccrt-bbtn text-center">
                               <Link to="/my-cart">
                                    Add To Cart
                               </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="buy-now-and-add-to-cart-page-mobile-cart-icon-bbtn">
                               <Link to="#">
                                    <img src={require('../../../assets/supermarket.svg')} alt="orponbd online shop"/>
                               </Link>
                               <p>17</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Buy Now and Add to cart Butto single product page */}
            </>
        )
    }
}
