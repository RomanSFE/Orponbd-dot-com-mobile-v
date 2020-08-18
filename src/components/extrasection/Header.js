import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="header-main">
                <div className="container">
                    <div className="row">
                        <div className="col my-auto">
                            <div className="mainmenu">
                                <ul>
                                    {/* <li><Link to="/">Home</Link></li>
                                    <li><Link to="/singleproducttopmenu">Single Product</Link></li> */}
                                    {/* <li><Link to="/website-sections">Website Sections</Link></li>
                                    <li><Link to="/react">React</Link></li>
                                    <li><Link to="/react-native">React Native</Link></li>
                                    <li><Link to="/uiux-design">UI/UX Design</Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}