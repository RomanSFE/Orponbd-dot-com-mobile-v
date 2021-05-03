import React, { Component } from 'react'

import Search from '../search/Search.js'

import SlideMain from '../slider/SlideMain.js'
import CategoryMenu from '../categorymenu/CategoryMenu.js'
import FlashDeals from '../allsections/flashdeals/FlashDeals.js'
import PreOrder from '../allsections/preorder/PreOrder.js'
import Banner from '../allsections/banner/Banner.js'
import TopCategoryItem from '../allsections/topcategory/TopCategoryItem.js'
import NewArrivalSec from '../allsections/newarrival/NewArrivalSec.js'
import TopBrands from '../allsections/topbrands/TopBrands.js'
import TopPicks from '../allsections/toppicks/TopPicks.js'
import JustForYou from '../allsections/justforyou/JustForYou.js'
import MainMenu from '../mainmenu/MainMenu.js'
import GroceryZoneSlide from '../allsections/homegroceryzoneslide/GroceryZoneSlide.js'
import HotCategories from '../allsections/hotcategories/HotCategories.js'

export default class home extends Component {
    render() {
        return (
            <div className="main-homepage-section-dot-com">
                
                <Search/>
                <SlideMain/>
                <CategoryMenu/>
                <FlashDeals/>
                <PreOrder/>
                <GroceryZoneSlide/>
                <Banner/>
                <TopCategoryItem/>
                <NewArrivalSec/>
                <TopBrands/>
                <HotCategories/>
                <TopPicks/>
                <JustForYou/>
                <MainMenu/>

                

            </div>
        )
    }
}
