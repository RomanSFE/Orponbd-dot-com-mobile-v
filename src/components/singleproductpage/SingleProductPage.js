import React, { Component } from 'react'

import SingleProductTopMenu from './SingleProductTopMenu.js'
import SingleProductSlide from './singleproductslide/SingleProductSlide.js'
import SingleProductAllText from './singleproductalltext/SingleProductAllText.js'

export default class SingleProductPage extends Component {
    render() {
        return (
            <>
            <div className="single-product-page-web-ddcm-main-section">
                
                <SingleProductTopMenu/>
                <SingleProductSlide/>
                <SingleProductAllText/>

            </div>
            </>
        )
    }
}
