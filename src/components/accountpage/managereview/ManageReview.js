import React, { Component } from 'react';
import './managereview.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import HyperModal from 'react-hyper-modal';


import SingleProductTopMenu from '../../../components/singleproductpage/SingleProductTopMenu.js';
import MainMenu from '../../mainmenu/MainMenu.js';

export default class ManageReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false,
        };
      }

      openModalA() {
        this.setState({
            isModalOpen : true
        });
    }

      closeModal() {
        this.setState({
            isModalOpen : false
        });
    }

    render() {

        return (
            <>
            <SingleProductTopMenu/>
            <div className="manage-review-toopp-coll-section">
                <div className="manage-review-main-section-mv">
                    <div className="container">
                        <div className="row manage-revv-mmain-ex-padd">
                            <div className="col-12">
                                <div className="need-rev-and-prevv-rev-sec-main-content-bbox">
                                    <Tabs defaultActiveKey="nedrev" id="uncontrolled-tab-example">
                                        <Tab eventKey="nedrev" title="Need to Review">
                                            {/* Single review Item */}
                                            <div className="manage-rreevvu-main-bboox-mmainn">
                                                <div className="manage-rreevvu-main-pgg-bbox">

                                                    <div className="manage-revvu-singgle-product-sec">
                                                        <div className="row manng-rev-snn-immg-eezx-pdd">
                                                            <div className="col-4">
                                                                <div className="manage-rrvu-single-immg">
                                                                    <img src={require('../../../assets/product-2.jpg')} alt="orponbd global collections"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="manage-revvuu-single-tteexct">
                                                                    <p>product details text, product details text..</p>
                                                                    <h4>1250 TK <span>X3</span></h4>
                                                                    <div className="manage-revvu-color-sz">
                                                                        <ul>
                                                                            <li><p>Color: Black</p></li>
                                                                            <li><p>Size: M</p></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="manage-revv-wrt-bbtn">
                                                            <HyperModal
                                                                renderOpenButton={(requestOpen) => {
                                                                    return (
                                                                    <button onClick={requestOpen}>Write a Review</button>
                                                                        );
                                                                    }
                                                                }
                                                                    >
                                                                <div className="manage-revvv-moddxl-connt">
                                                                    <form action="">
                                                                        <div className="manage-revv-wrtt-rev-input">
                                                                            <input type="text" placeholder="Write a Review"/>
                                                                        </div>
                                                                        <div className="manage-rev-wrt-rev-save-bbtn">
                                                                            <button type="submit">Save</button>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </HyperModal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single review Item */}
                                            {/* Single review Item */}
                                            <div className="manage-rreevvu-main-bboox-mmainn">
                                                <div className="manage-rreevvu-main-pgg-bbox">

                                                    <div className="manage-revvu-singgle-product-sec">
                                                        <div className="row manng-rev-snn-immg-eezx-pdd">
                                                            <div className="col-4">
                                                                <div className="manage-rrvu-single-immg">
                                                                    <img src={require('../../../assets/product-2.jpg')} alt="orponbd global collections"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="manage-revvuu-single-tteexct">
                                                                    <p>product details text, product details text..</p>
                                                                    <h4>1250 TK <span>X4</span></h4>
                                                                    <div className="manage-revvu-color-sz">
                                                                        <ul>
                                                                            <li><p>Color: Black</p></li>
                                                                            <li><p>Size: M</p></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="manage-revv-wrt-bbtn">
                                                            <HyperModal
                                                                renderOpenButton={(requestOpen) => {
                                                                    return (
                                                                    <button onClick={requestOpen}>Write a Review</button>
                                                                        );
                                                                    }
                                                                }
                                                                    >
                                                                <div className="manage-revvv-moddxl-connt">
                                                                    <form action="">
                                                                        <div className="manage-revv-wrtt-rev-input">
                                                                            <input type="text" placeholder="Write a Review"/>
                                                                        </div>
                                                                        <div className="manage-rev-wrt-rev-save-bbtn">
                                                                            <button type="submit">Save</button>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </HyperModal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single review Item */}
                                            {/* Single review Item */}
                                            <div className="manage-rreevvu-main-bboox-mmainn">
                                                <div className="manage-rreevvu-main-pgg-bbox">

                                                    <div className="manage-revvu-singgle-product-sec">
                                                        <div className="row manng-rev-snn-immg-eezx-pdd">
                                                            <div className="col-4">
                                                                <div className="manage-rrvu-single-immg">
                                                                    <img src={require('../../../assets/product-2.jpg')} alt="orponbd global collections"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="manage-revvuu-single-tteexct">
                                                                    <p>product review details text, product review details text..</p>
                                                                    <h4>1250 TK <span>X4</span></h4>
                                                                    <div className="manage-revvu-color-sz">
                                                                        <ul>
                                                                            <li><p>Color: Black</p></li>
                                                                            <li><p>Size: M</p></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="manage-revv-wrt-bbtn">
                                                            <HyperModal
                                                                renderOpenButton={(requestOpen) => {
                                                                    return (
                                                                    <button onClick={requestOpen}>Write a Review</button>
                                                                        );
                                                                    }
                                                                }
                                                                    >
                                                                <div className="manage-revvv-moddxl-connt">
                                                                    <form action="">
                                                                        <div className="manage-revv-wrtt-rev-input">
                                                                            <input type="text" placeholder="Write a Review"/>
                                                                        </div>
                                                                        <div className="manage-rev-wrt-rev-save-bbtn">
                                                                            <button type="submit">Save</button>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                            </HyperModal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single review Item */}
                                        </Tab>
                                        

                                        {/* Previous Review */}
                                        <Tab eventKey="prevrev" title="Prev Reviews">
                                             {/* Single review Item */}
                                             <div className="manage-rreevvu-main-bboox-mmainn">
                                                <div className="manage-rreevvu-main-pgg-bbox-revvu">

                                                {/* user review sec star */}
                                                    <div className="manage-rev-prev-xcv-rpp-rt-bx">
                                                        <div className="row manage-rev-prev-xcv-ex-pdd">
                                                            <div className="col-12">
                                                                <div className="manage-rev-prev-xcv-rpp-ttext-sec">
                                                                    <h4>Date: 2/09/2020</h4>
                                                                    <p>user review text, user review text user review text, user review text..</p>
                                                                </div>
                                                                <div className="manage-review-user-rrvew-prv-rev">
                                                                    <p> 
                                                                        <span className="manage-revvu-prov-prev-rattng-bbox">
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                        </span>
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* user review sec star */}

                                                    <div className="manage-revvu-singgle-product-sec-prevx-star">
                                                        <div className="row manng-rev-snn-immg-eezx-pdd-prevx">
                                                            <div className="col-4">
                                                                <div className="manage-rrvu-single-immg-prev-star">
                                                                    <img src={require('../../../assets/product-6.jpg')} alt="orponbd global collections"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="manage-revvuu-single-tteexct-prev-revvz">
                                                                    <p>product details text, product details text..</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single review Item */}
                                             {/* Single review Item */}
                                             <div className="manage-rreevvu-main-bboox-mmainn">
                                                <div className="manage-rreevvu-main-pgg-bbox-revvu">

                                                   {/* user review sec star */}
                                                   <div className="manage-rev-prev-xcv-rpp-rt-bx">
                                                        <div className="row manage-rev-prev-xcv-ex-pdd">
                                                            <div className="col-12">
                                                                <div className="manage-rev-prev-xcv-rpp-ttext-sec">
                                                                    <h4>Date: 2/09/2020</h4>
                                                                    <p>user review text, user review text user review text, user review text..</p>
                                                                </div>
                                                                <div className="manage-review-user-rrvew-prv-rev">
                                                                    <p> 
                                                                        <span className="manage-revvu-prov-prev-rattng-bbox">
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                            <span class="fa fa-star checked"></span>
                                                                        </span>
                                                                    </p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* user review sec star */}
                                                    
                                                    <div className="manage-revvu-singgle-product-sec-prevx-star">
                                                        <div className="row manng-rev-snn-immg-eezx-pdd-prevx">
                                                            <div className="col-4">
                                                                <div className="manage-rrvu-single-immg-prev-star">
                                                                    <img src={require('../../../assets/product-6.jpg')} alt="orponbd global collections"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="manage-revvuu-single-tteexct-prev-revvz">
                                                                    <p>product details text, product details text..</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Single review Item */}
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                                      
            </div>
            <MainMenu/>
            </>
        )
    }
}
