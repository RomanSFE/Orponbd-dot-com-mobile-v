import React from 'react';
// import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Slider Main section
import SlideMain from './components/slider/SlideMain.js'

// Search box
import Search from './components/search/Search.js'

// Category Menu
import CategoryMenu from './components/categorymenu/CategoryMenu.js'

// Flash deals
import FlashDeals from './components/allsections/flashdeals/FlashDeals.js'

// PreOrder
import PreOrder from './components/allsections/preorder/PreOrder.js'

// Top Category Item
import TopCategoryItem from './components/allsections/topcategory/TopCategoryItem.js'

// New Arrival Section
import NewArrivalSec from './components/allsections/newarrival/NewArrivalSec.js'

// Top Brands
import TopBrands from './components/allsections/topbrands/TopBrands.js'

// Top Picks
import TopPicks from './components/allsections/toppicks/TopPicks.js'

function App() {
  return (
    <div className="main-app-secttnn">
      
      <Search/>
      <SlideMain/>
      <CategoryMenu/>
      <FlashDeals/>
      <PreOrder/>
      <TopCategoryItem/>
      <NewArrivalSec/>
      <TopBrands/>
      <TopPicks/>

    </div>
  );
}

export default App;
