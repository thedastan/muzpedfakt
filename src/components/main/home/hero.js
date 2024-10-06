import React from 'react';
import {media} from "../../media";

const Hero = () => {
    return (
        <section id="hero" style={{paddingTop: media(0, 70),backgroundImage:"url('https://i.pinimg.com/originals/00/08/06/0008069a050ade9ecf214d6ddd18021d.jpg')"}}>
            <div style={{width:"100%", height:"92vh", background:"rgba(0, 34, 84, 0.61)", position:"absolute", top:"0px"}}></div>
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
                        {/* <img src={home} alt="img" className="hero-general__img"/> */}
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