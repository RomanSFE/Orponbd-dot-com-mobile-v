import React, { Component } from 'react'
import './groceryproductpage.css'

import GroceryProductTopMenu from './GroceryProductTopMenu'
import GroceryProductSlide from '../groceryproductpage/groceryproductslide/GroceryProductSlide'
import GroceryProductAllText from './groceryproductalltext/GroceryProductAllText'

export default class GroceryProductPage extends Component {
    render() {
        return (
            <>
            <div className="single-product-page-web-ddcm-main-section">
                
                <GroceryProductTopMenu/>
                <GroceryProductSlide/>
                <GroceryProductAllText/>

            </div>
            </>
        )
    }
}