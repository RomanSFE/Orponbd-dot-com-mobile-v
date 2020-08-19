import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ExtraSec extends Component {
    render() {
        return (
            <div className="extraax-sess">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ghgghh">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/singleproductpage">Single product page</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
