import React from "react";
import NavBar from "./NavBar/NavBar";
import Patio from "./Patio/Patio";
import "./style.css";

export default () => {
  return (
    <div className="aplicacaoPrincipal">
      <NavBar />
      <Patio />
    </div>
  );
};
