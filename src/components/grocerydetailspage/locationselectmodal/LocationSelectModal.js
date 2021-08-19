import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
import './locationselectmodal.css';

export default class LocationSelectModal extends Component {

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

    render() {
        return (
                <div className="obd-location-select-modal-main-section">
                    <div className="obd-location-select-modal-main-btnn">
                        <button onClick={() => this.openModal()}>Modal Open When This Page Launch</button>
                    </div>
                    <Modal visible={this.state.visible} width="92%" height="340" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                        <div className="obd-location-select-modal-main-contentt-secctn">
                            <div className="obd-location-select-modal-headingg-main-sec">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="obd-location-select-modal-headingg">
                                            <h4><span><i class="fas fa-map-marker-alt"></i></span> Select your delivery location</h4>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="obd-location-select-close-iconn">
                                            {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}><i class="far fa-times-circle"></i></a> */}
                                            <button onClick={() => this.closeModal()}><i class="far fa-times-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="obd-location-select-modal-main-contentt-select-sbmnt-box">
                                <div className="obd-location-select-modal-main-contentt-select-city text-center">
                                    <select>
                                        <option value="">Select Your City</option>
                                        <option value="">City 2</option>
                                        <option value="">City 3</option>
                                        <option value="">City 4</option>
                                    </select>
                                </div>
                                <div className="obd-location-select-modal-main-contentt-select-area text-center">
                                    <select>
                                        <option value="">Select Your Area</option>
                                        <option value="">Area 2</option>
                                        <option value="">Area 3</option>
                                        <option value="">Area 4</option>
                                    </select>
                                </div>
                                <div className="obd-location-select-modal-main-contentt-select-submit-btn text-center">
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                            <div className="obd-location-select-modal-main-contentt-img-and-footer-txt text-center">
                            <img src={require('../../../assets/location-select-mp-ct.png')} alt="orponbd online shop"/>
                                <p>All groceries are now at your fingertip</p>
                            </div>

                        </div>
                    </Modal>
                </div>
        )
    }
}


