import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Home from './components/home/Home.js'

// Extrasss

// Single product page
import SingleProductPage from './components/singleproductpage/SingleProductPage.js'

// More Review page
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

// Single Category Product two column
import SingleCategoryProductTwoColumn from './components/categorypage/singlecategorytwocolumn/SingleCategoryProductTwoColumn.js'

// Payment with shipping button
import PaymentWithShippingButton from './components/mycartpage/paymentandshipping/PaymentWithShippingButton.js'

// Payment with shipping button
import ShippingAddressForm from './components/shippingaddressform/ShippingAddressForm.js'

// Payment product page
import PaymentProductPage from './components/mycartpage/paymentpage/PaymentProductPage.js'

// Payment proceed page
import PaymentProceed from './components/mycartpage/paymentproceed/PaymentProceed.js'

// Signup and Registration
import SignupAndRegistration from './components/signupandregistration/SignupAndRegistration.js'

// Complete Profile
import CompleteProfile from './components/signupandregistration/completeprofile/CompleteProfile.js'

// Register With Email Page
import RegisterWithEmail from './components/signupandregistration/registerwithemail/RegisterWithEmail.js'

// Card Payment Page
import CardPayment from './components/mycartpage/cardpayment/CardPayment.js'

// Main Account Page
import MyAccountMainPage from './components/accountpage/MyAccountMainPage.js'

// Help and Support Page
import HelpAndSupport from './components/accountpage/helpandsupport/HelpAndSupport.js'

// Privacy Policy Page
import PrivacyAndPolicy from './components/accountpage/privacyandterms/PrivacyAndPolicy.js'

// Terms Conditions Page
import TermsAndConditions from './components/accountpage/privacyandterms/TermsAndConditions.js'

// About Us Page
import AboutUs from './components/accountpage/aboutus/AboutUs.js'

// Forget Password Email Phone Page
import ForgetPasswordEmailOrPhone from './components/signupandregistration/forgotpassword/ForgetPasswordEmailOrPhone'

// Forget Password Page
import ForgetPassword from './components/signupandregistration/forgotpassword/ForgetPassword.js'

// Account Settings Page
import AccountSettings from './components/accountpage/accountsettings/AccountSettings.js'

// Pre Order Page
import PreOrderPage from './components/accountpage/preorder/PreOrderPage.js'

// Manage Review Page
import ManageReview from './components/accountpage/managereview/ManageReview.js'

// Address Book Page
import AddressBook from './components/accountpage/addressbook/AddressBook.js'

// Bkash payment Page
import BkashPayment from './components/mycartpage/bkashpayment/BkashPayment.js'

// Order Confirm Successful Page
import OrderConfirmSuccesful from './components/mycartpage/orderconfirmsuccessfulpage/OrderConfirmSuccesful.js'

// Cancel Order Page
import CancelOrderPage from './components/mycartpage/cancelorderpage/CancelOrderPage.js'

// All Orders Products Page
import AllOrdersProduct from './components/accountpage/allorderspage/allorders/AllOrdersProduct.js'

// Pending Orders Page
import PendingsOrders from './components/accountpage/allorderspage/pendingorders/PendingsOrders.js'

// Awaiting Payment Page
import AwaitingPage from './components/accountpage/allorderspage/awaitingpage/AwaitingPage.js'

// Ready to Ship Page
import ReadytoShip from './components/accountpage/allorderspage/readytoship/ReadytoShip.js'

// Cancelled Order Page
import CancelledOrders from './components/accountpage/allorderspage/cancelled/CancelledOrders.js'

// Invoice Page
import InvoicePage from './components/invoicepage/InvoicePage.js'

// Invoice Page
import MyAccountWithoutLogin from './components/accountpage/myaccountwithoutlogin/MyAccountWithoutLogin.js'

// PreOrder Page Section
import PreHomePage from './components/preorderpagesec/home/PreHomePage.js'
// PreOrder Page Section

// Pre Order Cart Page
import PreOrderCart from './components/preordercart/PreOrderCart.js'

// Grocery Main Page Details
import GroceryAllItems from './components/grocerydetailspage/GroceryAllItems';
import CookingEssentialCategoryDetails from './components/grocerydetailspage/cookingcatdetails/CookingEssentialCategoryDetails';
import SnacksAndConfectionaryCatDetails from './components/grocerydetailspage/snacksandconfectdetails/SnacksAndConfectionaryCatDetails';
import BeverageCatDetails from './components/grocerydetailspage/beveragedetails/BeverageCatDetails';
import HealthAndBeautyCatDetails from './components/grocerydetailspage/healthandbeauty/HealthAndBeautyCatDetails';

import GroceryProductPage from './components/grocerydetailspage/groceryproductpage/GroceryProductPage';
// Grocery Main Page Details

// Test Extra Page
import TestExtrafile from './components/testextrafile/TestExtrafile.js'

// My Wallet
import MyWallet from './components/accountpage/mywallet/MyWallet';

// Store Details
import StoreDetails from './components/storepages/StoreDetails';
import StoreAllFeaturedProd from './components/storepages/storefeaturedproducts/StoreAllFeaturedProd';
import StoreAllNewArrivalProd from './components/storepages/storenewarivalproducts/StoreAllNewArrivalProd';
// Store Details


function App() {
  return (
    <>
    <div className="main-app-secttnn">
      
      {/* <Home/> */}

    </div>
    

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={SingleProductPage}/>
        <Route path="/more-review-page" component={MoreReviewPage}/>
        <Route path="/empty-cart" component={EmptyCart}/>
        <Route path="/my-cart" component={MyCart}/>
        <Route path="/wishlist" component={WishList}/>
        <Route path="/product-not-found" component={NotFound}/>
        <Route path="/main-category" component={MainCategory}/>
        <Route path="/sub-category" component={SubCategory}/>
        <Route path="/single-category-product" component={SingleCategoryProduct}/>
        <Route path="/single-category-product-two-column" component={SingleCategoryProductTwoColumn}/>
        <Route path="/payment-with-shipping-button" component={PaymentWithShippingButton}/>
        <Route path="/shipping-address" component={ShippingAddressForm}/>
        <Route path="/payment-product-page" component={PaymentProductPage}/>
        <Route path="/payment-proceed" component={PaymentProceed}/>
        <Route path="/signup-registration" component={SignupAndRegistration}/>
        <Route path="/complete-profile" component={CompleteProfile}/>
        <Route path="/register-with-email" component={RegisterWithEmail}/>
        <Route path="/card-payment" component={CardPayment}/>
        <Route path="/my-account-main" component={MyAccountMainPage}/>
        <Route path="/my-wallet" component={MyWallet}/>
        <Route path="/help-and-support" component={HelpAndSupport}/>
        <Route path="/privacy-policy" component={PrivacyAndPolicy}/>
        <Route path="/terms-conditions" component={TermsAndConditions}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/forget-password-email-phone" component={ForgetPasswordEmailOrPhone}/>
        <Route path="/forget-password" component={ForgetPassword}/>
        <Route path="/accounts-settings" component={AccountSettings}/>
        <Route path="/pre-order" component={PreOrderPage}/>
        <Route path="/manage-review" component={ManageReview}/>
        <Route path="/address-book" component={AddressBook}/>
        <Route path="/bkash-payment" component={BkashPayment}/>
        <Route path="/order-confirm-successful" component={OrderConfirmSuccesful}/>
        <Route path="/cancel-order-page" component={CancelOrderPage}/>
        <Route path="/all-orders-product" component={AllOrdersProduct}/>
        <Route path="/pending-orders" component={PendingsOrders}/>
        <Route path="/awaiting-page" component={AwaitingPage}/>
        <Route path="/ready-to-ship" component={ReadytoShip}/>
        <Route path="/cancel-orders" component={CancelledOrders}/>
        <Route path="/invoice-page" component={InvoicePage}/>

        <Route path="/my-account-without-login" component={MyAccountWithoutLogin}/>

        <Route path="/pre-order-cart" component={PreOrderCart}/>

        {/* PreOrder Page Section */}
        <Route path="/pre-order-home-page" component={PreHomePage}/>
        {/* PreOrder Page Section */}

        {/* Grocery Main Page Details  */}
        <Route path="/grocery-all-items" component={GroceryAllItems}/>
        <Route path="/grocery-cooking-essentials-all-items" component={CookingEssentialCategoryDetails}/>
        <Route path="/grocery-snacks-confectionary-all-items" component={SnacksAndConfectionaryCatDetails}/>
        <Route path="/grocery-beverage-all-items" component={BeverageCatDetails}/>
        <Route path="/grocery-health-and-beauty-all-items" component={HealthAndBeautyCatDetails}/>

        <Route path="/grocery-product-page" component={GroceryProductPage}/>
        {/* Grocery Main Page Details  */}

        {/* Store Details */}
        <Route path="/store-details" component={StoreDetails}/>
        <Route path="/store-featured-all" component={StoreAllFeaturedProd}/>
        <Route path="/store-new-arrival-all" component={StoreAllNewArrivalProd}/>
        {/* Store Details */}

        {/* Extra */}
        <Route path="/test-extra" component={TestExtrafile}/>
        {/* Extra */}
      </Switch>

    </>
  );
}

export default App;
