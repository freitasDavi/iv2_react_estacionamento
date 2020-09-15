import React, { Component } from "react";
import "./style.css";

export default class Patio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carrosEstacionados: [],
    };
  }

  render() {
    return (
      <div id="patioCarrosEstacionados">
        <div>
          <h4>Carros Estacionados</h4>
        </div>
        <div>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Placa</th>
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
                <th scope="col">Cor</th>
                <th scope="col">Data/Hora de Entrada</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}
