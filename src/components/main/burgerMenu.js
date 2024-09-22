import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../http/api";
import logo from "./../../images/oshmpu.jpg";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const [data, setData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Для загрузки категорий
  useEffect(() => {
    api.get("/category")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.log(err)); // Ловим возможные ошибки
  }, []);

  // Функция для открытия/закрытия бокового меню
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  // Функция для открытия/закрытия выпадающего меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        {/* Иконка для бокового меню */}
        <div className="menu-bars" onClick={toggleSidebar}>
          <div className={`menu-btn ${menuOpen ? "open" : "closed"}`} onClick={toggleMenu}>
            <div className="burger" />
          </div>
        </div>

        {/* Боковое меню */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <span onClick={toggleSidebar}>
              <Link to="/">
                <img
                  src={logo}
                  alt="img"
                  style={{ width: "50px", height: "50px" }}
                  className="nav__logo"
                />
              </Link>
            </span>

            <div className="header__section--items__2">
              {/* Выпадающее меню "Негизги маалымат" */}
              <div className="dropdown__2">
                <button className="dropbtn__2">
                  Негизги маалымат <i className="fa-solid fa-angle-down" />
                </button>
                <div className="dropdown-content__2">
                  <Link to="/admin">Администрация</Link>
                  <Link to="/teachers">Мугалимдер</Link>
                  {data.map((el) => (
                    <Link key={el.id} to={`/category/${el.id}`}>
                      {el.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Выпадающее меню "Аккредитация" */}
              <div className="dropdown__2">
                <button className="dropbtn__2">
                  Аккредитация <i className="fa-solid fa-angle-down" />
                </button>
                <div className="dropdown-content__2">
                  <Link to="/tool">Институциональдык аккредитация</Link>
                  <Link to="/program">Программалык аккредитация</Link>
                </div>
              </div>

              {/* Дополнительные ссылки */}
              <Link to="/chronology" className="header__section--items__a__2">
                Кафедра
              </Link>
              <Link to="/chronology" className="header__section--items__a__2">
                Окуунун программасы
              </Link>
              <Link to="/chronology" className="header__section--items__a__2">
                Илимий иштер
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
