import React, { Component } from "react";
import axios from "axios";

class InseriDado extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      .post("http://localhost:8080/api/aluno", this.state)
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    const { nome, idade } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
export default InseriDado;
