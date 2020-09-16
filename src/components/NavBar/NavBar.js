import React from "react";
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import Patio from "../Patio/Patio";
import PatioEntrada from "../PatioEntrada/PatioEntrada";

export default () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          React Estacio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/entrada">
                Entrada <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Saída
              </Link>
            </li>
          </ul>
        </div>
      </nav>


      <Route exact path="/" component={Patio} />
      <Route path="/entrada" component={PatioEntrada} />
    </Router>
  );
};
