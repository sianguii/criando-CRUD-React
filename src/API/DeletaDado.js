import React, { Component } from "react";
import axios from "axios";
class DeletaDado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.delete("http://localhost:8080/api/aluno/17").then((response) => {
      console.log(response);
    });
  };
  
  render() {
    const { codigo } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Código</label>
            <input
              type="text"
              name="codigo"
              value={codigo}
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
export default DeletaDado;
