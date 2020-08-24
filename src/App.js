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

// Single product page
import SingleProductPage from './components/singleproductpage/SingleProductPage.js'

// Single product page
import MoreReviewPage from './components/singleproductpage/morereviewpage/MoreReviewPage.js'

// Empty Cart page
import EmptyCart from './components/mycartpage/EmptyCart.js'

// My Cart page
import MyCart from './components/mycartpage/MyCart.js'

// My Wishlist page
import WishList from './components/wishlist/WishList.js'

// Not Found page
import NotFound from './components/notfoundpage/NotFound.js'

// Main Category page
import MainCategory from './components/categorypage/MainCategory.js'

// Sub Category page
import SubCategory from './components/categorypage/subcategory/SubCategory.js'

// Single Category Product
import SingleCategoryProduct from './components/categorypage/singlecategoryproduct/SingleCategoryProduct.js'


function App() {
  return (
    <>
    <div className="main-app-secttnn">
      
      {/* <Home/> */}

    </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/singleproductpage" component={SingleProductPage}/>
        <Route path="/more-review-page" component={MoreReviewPage}/>
        <Route path="/empty-cart" component={EmptyCart}/>
        <Route path="/my-cart" component={MyCart}/>
        <Route path="/wishlist" component={WishList}/>
        <Route path="/product-not-found" component={NotFound}/>
        <Route path="/main-category" component={MainCategory}/>
        <Route path="/sub-category" component={SubCategory}/>
        <Route path="/single-category-product" component={SingleCategoryProduct}/>
      </Switch>

    </>
  );
}

export default App;
