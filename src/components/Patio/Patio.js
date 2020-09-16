import React, { Component } from "react";
import "./style.css";

export default class Patio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carrosEstacionados: [],
    };
  }

  componentDidMount() {
    this.loadApi()
  }

  loadApi() {
    fetch('http://localhost:3001/carrosEstacionados')
      .then(res => res.json())
      .then(res => this.setState({
        carrosEstacionados: res
      }))
  }

  renderCars() {
    let carrosEstacionados = this.state.carrosEstacionados

    console.log(carrosEstacionados)
    return carrosEstacionados.map((index) => {
        return (
          <tr>
            <td>{index.placa}</td>
            <td>{index.modelo}</td>
            <td>{index.marca}</td>
            <td>{index.cor}</td>
            <td>{index.dataHoraEntrada}</td>
            <td><button className="btn btn-success">Saída</button></td>
          </tr>
        )
    })
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
            <tbody>
            {this.renderCars()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
