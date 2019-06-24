import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header/index';
import Axios from 'axios';
import Moments from './components/Moments';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();

    this.state = {
      response: {},
    };
  }

  navegarParaPagina = async (pagina) => {
    const response = await this.servico(pagina);

    this.setState({
      response: response.data,
    });
  };

  async servico(pagina) {
    return Axios.get(`http://localhost:5000/api/moments/1?pagina=${pagina}`);
  }

  render() {
    const { paginaAtual, totalDePaginas } = this.state.response;
    return (
      <div className="app">
        {/* <Header /> */}
        <Pagination
          paginaAtual={paginaAtual}
          totalDePaginas={totalDePaginas}
          navegarParaPagina={this.navegarParaPagina}
        />
        <button type="button" onClick={() => this.navegarParaPagina(1)}>
          consultas páginas na api
        </button>
        <Moments />
      </div>
    );
  }
}

export default App;
