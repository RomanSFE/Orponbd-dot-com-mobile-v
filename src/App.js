import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// // Slider Main section
// import SlideMain from './components/slider/SlideMain.js'

// // Search box
// import Search from './components/search/Search.js'

// // Category Menu
// import CategoryMenu from './components/categorymenu/CategoryMenu.js'

// // Flash deals
// import FlashDeals from './components/allsections/flashdeals/FlashDeals.js'

// // PreOrder
// import PreOrder from './components/allsections/preorder/PreOrder.js'

// // Banner image
// import Banner from './components/allsections/banner/Banner.js'

// // Top Category Item
// import TopCategoryItem from './components/allsections/topcategory/TopCategoryItem.js'

// // New Arrival Section
// import NewArrivalSec from './components/allsections/newarrival/NewArrivalSec.js'

// // Top Brands
// import TopBrands from './components/allsections/topbrands/TopBrands.js'

// // Top Picks
// import TopPicks from './components/allsections/toppicks/TopPicks.js'

// // Just for you
// import JustForYou from './components/allsections/justforyou/JustForYou.js'

// // Main Menu
// import MainMenu from './components/mainmenu/MainMenu.js'

import Home from './components/home/Home.js'


// Extrasss
import SingleProductPage from './components/singleproductpage/SingleProductPage.js'
// import Header from './components/extrasection/Header.js'

function App() {
  return (
    <>
    <div className="main-app-secttnn">
      
      {/* <Home/> */}

    </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/singleproductpage" component={SingleProductPage}/>
        {/* <Route path="/website-sections" component={WebsiteSections}/>
        <Route path="/react" component={ReactScreen}/>
        <Route path="/react-native" component={ReactNativeScr}/>
        <Route path="/uiux-design" component={UiuxScreen}/> */}
      </Switch>

    </>
  );
}

export default App;
