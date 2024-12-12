import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Blog Gaëlle Boucherit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dessinsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dessins
              </a>
              <ul className="dropdown-menu" aria-labelledby="dessinsDropdown">
                <li>
                  <a className="dropdown-item" href="/dessins/dessins-et-croquis">
                    Dessins et Croquis
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/dessins/paysages">
                    Paysages
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/dessins/carnets-de-voyages">
                    Carnets de Voyages
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="performancesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Performances
              </a>
              <ul className="dropdown-menu" aria-labelledby="performancesDropdown">
                <li>
                  <a className="dropdown-item" href="/performances/gilles">
                    Gilles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/performances/volgane">
                    Volgane
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/curiosites">
                Curiosités
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
