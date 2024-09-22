import React from 'react';
import home from "./../../../images/heroImage.png";
import {media} from "../../media";

const Hero = () => {
    return (
        <section id="hero" style={{paddingTop: media(0, 70)}}>
            <div className="container">
                <div className="hero-general">
                    <div>
                        <h1 className="hero-general__title" style={{fontSize: media(30, 45), marginBottom: media(20, 60)}}>Математика жана  Компьютердик <br/> Технологиялар факультети. </h1>
                        <p className="hero-general__desc" style={{fontSize: media(15, 20)}}>Келечегинди биз менен башта!</p>

                        <a href="#onas" className="hero-general__block">
                            <div/>
                            <h1>Биздин факультет</h1>
                            <span><i className="fa-solid fa-arrow-right-long"/></span>
                        </a>

                    </div>
                    <div>
                        <img src={home} alt="img" className="hero-general__img"/>
                    </div>
                    <a href="#info">
                        <button className="hero-general__btn" style={{width: media(200, 343), fontSize: media(18,23), height: media(50,65)}}>Биздин факультет</button>
                    </a>
                </div>
                <div id="onas"/>
            </div>
        </section>
    );
};

export default Hero;