import React, {useEffect} from 'react';
import Hero from "./../home/hero"
import Info from "./../home/info"
import Teachers from "./Teachers";
import Gallery from "./gallery";
import Services from "./services";


const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div>
            <Hero/>
            <Info/>
            <Teachers/>
            <Gallery/>
            <Services/>
        </div>
    );
};

export default Home;