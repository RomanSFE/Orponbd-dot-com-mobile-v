import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './mycart.css';

import SingleProductTopMenu from '../singleproductpage/SingleProductTopMenu.js'

import MainMenu from '../mainmenu/MainMenu.js'

export default class MyCart extends Component {
    render() {
        return (
            <>
            <SingleProductTopMenu/>
            <div className="mycart-mobile-viexw-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <div className="mycart-select-all-sectopnxscs">

                                    <label className="containers checkmarkCheck">
                                    <input type="checkbox" name="all_box" class="checkmark_all" checked=""></input>
                                    <span className="checkmark "></span>
                                    <span>  Select All</span>
                                    </label> 
                                    
                                    
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="mycart-select-all-sectopnxscs">
                                <span className="text-right">gg</span>
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
