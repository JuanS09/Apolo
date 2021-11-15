import React from 'react';
import Cards from './cards';
import Footer from './footer';
import HeroSection from './heroSection';

export const Home = () => {
    return (
        <>
            <div className= 'Home'>
                <HeroSection />
            </div>
            <div>
            <Cards/>
            </div>
            <div>
            <Footer/>
            </div>
        </>
           
    );
}