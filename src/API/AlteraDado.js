import React, { Component } from "react";
import axios from "axios";
class AlteraDado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "",
      nome: "",
      idade: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/aluno", this.state)
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    const { codigo, nome, idade } = this.state;
    return (
      <div>
        <h1>Altera dos dados</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Código</label>
            <input
              type="number"
              name="codigo"
              value={codigo}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Idade</label>
            <input
              type="number"
              name="idade"
              value={idade}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AlteraDado;
