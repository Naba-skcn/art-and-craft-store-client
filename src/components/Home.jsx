import React, { useState } from 'react';
import Slider from './Slider';
import CraftItemSection from './CraftItemSection';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import SubCategories from './SubCategories';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItemSection></CraftItemSection>
            <SubCategories></SubCategories>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;