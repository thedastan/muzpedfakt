import React, {useState, useEffect} from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom"
import {api} from "../../http/api";
import logo from "./../../images/oshmpu.jpg"

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    function showSideMenu() {
        setSidebar(!sidebar);
    }
    const [data, setData] = useState([])
    useEffect(() => {
        api.get("/category")
            .then(({data}) => {
                setData(data)
            })
    }, [])
    console.log(data)
    const [menuOpen, setMenuOpen] = React.useState(false);
    function handleOpenMenu() {
        setMenuOpen(!menuOpen);
    }
    const [menuClose, setMenuClose] = useState(true)
    return (
        <>
            <div className="navbar">
                <div to="#" className="menu-bars" onClick={showSideMenu}>
                    <div
                        className={`menu-btn ${menuOpen ? "open" : "closed"}`}
                        onClick={handleOpenMenu}
                    >
                        <div className="burger"
                             onClick={() => setMenuClose(false)}
                        />
                    </div>
                </div>

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <span onClick={() => setSidebar(false)}><Link to="/"> <img src={logo} alt="img"
                                                                                  style={{width:'100px', height:'100px'}} className="nav__logo"/></Link></span>
                        <div className="header__section--items__2">
                            <div className="dropdown__2">
                                <button className="dropbtn__2">Негизги маалымат <i className="fa-solid fa-angle-down"/>
                                </button>
                                <div className="dropdown-content__2">
                                    <Link to="/admin">Администрация</Link>
                                    <Link to="/teachers"
                                    >Мугалимдер</Link>
                                    {
                                        data.map(el => (
                                            <Link to={`/category/${el.id}`}
                                            >{el.name}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="dropdown__2">
                                <button className="dropbtn__2">Аккредитация <i className="fa-solid fa-angle-down"/>
                                </button>
                                <div className="dropdown-content__2">
                                    <Link to="/tool">
                                        Институциональдык аккредитация
                                    </Link>
                                    <Link to="/program">
                                        Программалык акккредитация
                                    </Link>
                                </div>
                            </div>
                            <Link to="/chronology" className="header__section--items__a__2">Кафедра</Link>
<Link to="/chronology" className="header__section--items__a__2">Окуунун программасы</Link>
<Link to="/chronology" className="header__section--items__a__2">Наука</Link>


                        </div>

                    </ul>

                </nav>
            </div>
        </>
    );
}

export default Navbar;
