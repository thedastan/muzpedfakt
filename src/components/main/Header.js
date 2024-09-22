import React, {useEffect, useState} from 'react';
import "../../styles/Header/header.scss"
import logo from "../../images/oshmpu.jpg"
import {Link} from "react-router-dom";
import {api} from "../../http/api";
import BurgerMenu from "./burgerMenu";

const Header = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        api.get("/category")
            .then(({data}) => {
                setData(data)
            })
    }, [])
    console.log(data)
    return (
        <header id="header">
            <div className="container">
                <div className="header__section">
                    <Link to="/">
                        <img src={logo} alt="" style={{width: '10vw', height: '10vw', borderRadius: '50%'}} />
                    </Link>
                    <div className="header__section--items">
                        <span className="header__section--items__nav">
                        <div className="dropdown">
                            <button className="dropbtn">Факультет туралуу маалымат <i className="fa-solid fa-angle-down"/>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/admin">Администрация</Link>
                                <Link to="/teachers">Мугалимдер</Link>
                                {
                                    data.map(el => (
                                        <Link to={`/category/${el.id}`}>{el.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Аккредитация <i className="fa-solid fa-angle-down"/></button>
                            <div className="dropdown-content">
                                <Link to="/tool">
                                    Институциональдык аккредитация
                                </Link>
                                <Link to="/program">
                                    Программалык акккредитация
                                </Link>
                            </div>
                        </div>
                        <Link to="/chronology" className="header__section--items__a">Кафедралар</Link>
                        <Link to="/chronology" className="header__section--items__a">Илимий иштер</Link>
                        <Link to="/chronology" className="header__section--items__a">Окуунун программасы</Link>
                        </span>
                        <BurgerMenu/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
