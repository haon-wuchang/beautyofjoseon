import React from 'react';
import MainTopSlide from './main/MainTopSlide';
import MainBestProducts from './main/MainBestProducts';
import MainCategory from './main/MainCategory';
import MainSunCare from './main/MainSunCare';

export default function Home() {
    return (
        <div className='main-wrap'>
            <MainTopSlide />
            <MainBestProducts />
            <MainCategory />
            <MainSunCare />
            <div className='main-bottom-wrap'>
                <img className='main-bottom-img' src="images/main_membership.jpg" alt="main_membership" />
                <img className='main-bottom-img' src="images/main_sns.jpg" alt="main_sns" />
            </div>
        </div>
    );
}

