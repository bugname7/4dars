import React from "react";
import "./index.css";

function Header({ logo }) {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="hello" />
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Vakansiyalar</a>
                </li>
                <li>
                  <a href="#">Kandidatlar</a>
                </li>
                <li>
                  <a href="#">Kompaniyalar</a>
                </li>
                <li>
                  <a href="#">Xizmatlar</a>
                </li>
                <li>
                  <a href="#">Ta’lim</a>
                </li>
              </ul>
            </nav>
            <div className="register">
              <select className="language" id="language" name="language">
                <option value="uzbek">O'zb</option>
                <option value="kazakh">Qozog'cha</option>
                <option value="english">Inglizcha</option>
                <option value="russian">Ruscha</option>
              </select>
              <button className="btn">Boshlash</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
