import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Titre */}
        <a className="navbar-brand" href="#">
          Blog Nom Artiste
        </a>

        {/* Menu principal */}
        <ul className="navbar-links">
          <li className="navbar-item dropdown">
            <a href="#" className="navbar-link">
              Dessins
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/dessins/dessins-et-croquis">Dessins et Croquis</a>
              </li>
              <li>
                <a href="/dessins/paysages">Paysages</a>
              </li>
              <li>
                <a href="/dessins/carnets-de-voyages">Carnets de Voyages</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item dropdown">
            <a href="#" className="navbar-link">
              Performances
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/performances/gilles">Gilles</a>
              </li>
              <li>
                <a href="/performances/volgane">Volgane</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="/curiosites" className="navbar-link">
              Curiosités
            </a>
          </li>
        </ul>

        {/* Icônes à droite */}
        <div className="navbar-icons">
          <span className="icon">🔍</span>
          <span className="icon">❤️</span>
          <span className="icon">🔔</span>
          <span className="icon">⚙️</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
