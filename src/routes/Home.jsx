import React from 'react';
import Hero from '../components/Hero'
import Collection from '../components/StylishCollection'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Products from './Products';

function Home() {
    return <>
        <Navbar />
        <div className="hero">
            <Hero />
        </div>

        <div className="stylish-collection">
            <Collection />
        </div>
        <Products />
        <Footer />
    </>;
}

export default Home;