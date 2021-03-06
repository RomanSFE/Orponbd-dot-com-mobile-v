import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './morereviewpage.css';

import Modal from 'react-awesome-modal';

export default class MoreReviewPage extends Component {
    // Comment Modal
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
    // Comment Modal
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/singleproductpage">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> More Reviews</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="singge-product-more-review-page-mobile-main-section-color-wrp">
                <div className="singge-product-more-review-page-mobile-main-section">
                    <div className="container">
                        <div className="row single-pro-rev-pagg-ex-row-ccls">
                            <div className="col-4">
                                <div className="singge-product-more-review-page-mobile-main-section-total-rat-ccnt text-center">
                                    <h3>4.8</h3>

                                    <p> 
                                        <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                        </span> 
                                    </p>
                                    <h6>257 Reviews</h6>
                                </div>
                            </div>
                            <div className="col-8">
                                {/* single review */}
                                <div className="singge-product-more-review-page-mobile-main-section-total-rat-ccnt-right-part">
                                    <div className="hshsgdf-five-starx">
                                        <ul>
                                            <li>
                                                <p> 
                                                    <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc">
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <span className="progress-bar-ex-cclss">
                                                    <div class="progress-bar blue stripes">
                                                        <span style={{width: '90%'}}></span>
                                                    </div>
                                                </span>
                                            </li>
                                            <li>
                                                <span>178</span>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                                {/* single review */}
                                {/* single review */}
                                <div className="singge-product-more-review-page-mobile-main-section-total-rat-ccnt-right-part extradcax">
                                    <div className="hshsgdf-five-starx">
                                        <ul>
                                            <li>
                                                <p> 
                                                    <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc">
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <span className="progress-bar-ex-cclss">
                                                    <div class="progress-bar blue stripes">
                                                        <span style={{width: '20%'}}></span>
                                                    </div>
                                                </span>
                                            </li>
                                            <li>
                                                <span>32</span>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                                {/* single review */}
                                {/* single review */}
                                <div className="singge-product-more-review-page-mobile-main-section-total-rat-ccnt-right-part extradcax">
                                    <div className="hshsgdf-five-starx">
                                        <ul>
                                            <li>
                                                <p> 
                                                    <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc">
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <span className="progress-bar-ex-cclss">
                                                    <div class="progress-bar blue stripes">
                                                        <span style={{width: '10%'}}></span>
                                                    </div>
                                                </span>
                                            </li>
                                            <li>
                                                <span>15</span>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                                {/* single review - */}
                                {/* single review */}
                                <div className="singge-product-more-review-page-mobile-main-section-total-rat-ccnt-right-part extradcax">
                                    <div className="hshsgdf-five-starx">
                                        <ul>
                                            <li>
                                                <p> 
                                                    <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc">
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star "></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <span className="progress-bar-ex-cclss">
                                                    <div class="progress-bar blue stripes">
                                                        <span style={{width: '6%'}}></span>
                                                    </div>
                                                </span>
                                            </li>
                                            <li>
                                                <span>7</span>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                                {/* single review */}
                                {/* single review */}
                                <div className="singge-product-more-review-page-mobile-main-section-total-rat-ccnt-right-part extradcax">
                                    <div className="hshsgdf-five-starx">
                                        <ul>
                                            <li>
                                                <p> 
                                                    <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc">
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star "></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <span className="progress-bar-ex-cclss">
                                                    <div class="progress-bar blue stripes">
                                                        <span style={{width: '3%'}}></span>
                                                    </div>
                                                </span>
                                            </li>
                                            <li>
                                                <span>4</span>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                                {/* single review */}
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* review count section all box */}
                <div className="all-review-count-box-mobile-vv-xsec">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="all-review-count-box-mobile-vv-xsec-alll">
                                    <p>All <span>(257)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* review count section all box */}

                {/* Customer Review Provide by customer section start */}
                <div className="customer-review-provide-by-customer-revvxu-sec-details-page-all">
                    <div className="container">
                        {/* single Review */}
                        <div className="row customer-review-provide-by-customer-eecx-details-pgg">
                            <div className="col-3">
                                <div className="customer-review-provide-by-customer-revvxu-sec-pro-img-details-pp">
                                    <img src={require('../../../assets/product-9.jpg')} alt="orponbd online shop"/>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="customer-review-provide-by-customer-revvxu-sec-rating-name-details-ppg">
                                    <p><strong>First Name</strong> 
                                        <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc-details-ppg">
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
                            <div className="customer-review-provide-by-customer-revvxu-sec-texxtc-details-ppg">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, soluta?</p>
                            </div>
                        </div>
                        <div className="row sociall-xxcc-bodr">
                            <div className="col-12">
                                <div className="customer-review-provide-by-customer-revvxu-sec-texxt-social-likke-detl-pgg text-right">
                                    <ul>
                                        <li>
                                            <div className="ggffdssaa">
                                                <button onClick={() => this.openModal()}><i className="far fa-comment-dots"></i></button>
                                                <Modal visible={this.state.visible} width="320" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                                    <div className="comment-modal-secc text-center">
                                                        <input type="text" placeholder="your comment..."/>
                                                        <div className="comment-subbmt-bbtn">
                                                            <button type="submit">Submit</button>
                                                        </div>
                                                        {/* <Link to="javascript:void(0);" onClick={() => this.closeModal()}>Close</Link> */}
                                                        <div className="cpmment-close-bbxtn">
                                                            <button onClick={() => this.closeModal()}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                                                        </div>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </li>
                                        <li>0</li>
                                        <li><i className="far fa-thumbs-up"></i></li>
                                        <li>5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* single Review */}
                        {/* single Review */}
                        <div className="row customer-review-provide-by-customer-eecx-details-pgg">
                            <div className="col-3">
                                <div className="customer-review-provide-by-customer-revvxu-sec-pro-img-details-pp">
                                    <img src={require('../../../assets/product-9.jpg')} alt="orponbd online shop"/>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="customer-review-provide-by-customer-revvxu-sec-rating-name-details-ppg">
                                    <p><strong>First Name</strong> 
                                        <span className="customer-review-provide-by-customer-revvxu-sec-rating-bbxc-details-ppg">
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
                            <div className="customer-review-provide-by-customer-revvxu-sec-texxtc-details-ppg">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, soluta? </p>
                            </div>
                        </div>
                        <div className="row sociall-xxcc-bodr">
                            <div className="col-12">
                                <div className="customer-review-provide-by-customer-revvxu-sec-texxt-social-likke-detl-pgg text-right">
                                    <ul>
                                        <li>
                                            <i className="far fa-comment-dots"></i>
                                        </li>
                                        <li>0</li>
                                        <li><i className="far fa-thumbs-up"></i></li>
                                        <li>5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* single Review */}
                    </div>
                </div>
                {/* Customer Review Provide by customer section start */}
            </div>
            </>
        )
    }
}
