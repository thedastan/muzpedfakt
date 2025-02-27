import React, { useEffect, useState } from "react";
import "../../styles/Header/header.scss";
import logo from "./../../images/logo-music.png"
import { Link } from "react-router-dom";
import { api } from "../../http/api";
import BurgerMenu from "./burgerMenu";

const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get("/category").then(({ data }) => {
      setData(data);
    });
  }, []);
  console.log(data);
  return (
    <header id="header">
      <div className="container">
        <div className="header__section">
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </Link>
          <div className="header__section--items">
            <span className="header__section--items__nav">
              <div className="dropdown">
                <button className="dropbtn">
                  Факультет туралуу маалымат{" "}
                  <i className="fa-solid fa-angle-down" />
                </button>
                <div className="dropdown-content">
                  <Link to="/admin">Факультет</Link>
                  <Link to="/teachers">Окутуучулар</Link>
                  {/* {data.map((el) => (
                    <Link to={`/category/${el.id}`}>{el.name}</Link>
                  ))} */}
                </div>
              </div>
              
              <Link to="/tool" className="header__section--items__a">
              Аккредитация
              </Link>
              <Link to="/chronology" className="header__section--items__a">
                Кафедралар
              </Link>
              <Link to="/science" className="header__section--items__a">
                Илимий-изилдөө иштери
              </Link>
              <Link to="/curriculum" className="header__section--items__a">
              Билим берүү программасы
              </Link>
            </span>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;