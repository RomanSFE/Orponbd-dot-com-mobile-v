import React, { Component } from 'react';
import './prehomepage.css';

// Slider
import SliderCompo from '../slidersec/SliderCompo.js'
import SliderCategory from '../slidersec/SliderCategory.js'

// Sections
import SuperDealSec from '../sections/SuperDealSec.js';
import TopPicksSection from '../sections/TopPicksSection.js';
import UsePointsSec from '../sections/UsePointsSec.js';
import RecentlyPurches from '../sections/RecentlyPurches.js';
import JustForYouSection from '../sections/JustForYouSection.js';

import MainMenu from '../../mainmenu/MainMenu.js';

class PreHomePage extends Component {
    render() {
        return (
            <div className="homepage-mainn-sseectionx">
                <SliderCompo/>
                <SliderCategory/>
                <SuperDealSec/>
                <TopPicksSection/>
                <UsePointsSec/>
                <RecentlyPurches/>
                <JustForYouSection/>

                <MainMenu/>
            </div>
        );
    }
}

export default PreHomePage;
