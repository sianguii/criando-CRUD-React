import React, { Component } from "react";
import axios from "axios";

class BuscaDado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/aluno").then((response) => {
      this.setState({
        posts: response.data,
      });
      console.log(response.data);
    });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Retorno dos dados</h1>
        {posts.map((post) => (
          <div key={post.codigo}>
            {post.codigo}
            {post.nome}
            {post.idade}
          </div>
        ))}
      </div>
    );
  }
}
export default BuscaDado;
