import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageButton from './PageButton';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantidadeMaximaDePaginas: 5,
      primeiroBotaoDePaginaVisivel: 1,
      ultimoBotaoDePaginaVisivel: 1,
    };
  }

  componentDidUpdate(prevProps) {
    const { paginaAtual, totalDePaginas } = this.props;

    if (
      paginaAtual === prevProps.paginaAtual
      && totalDePaginas === prevProps.totalDePaginas
    ) {
      return;
    }

    const { quantidadeMaximaDePaginas } = this.state;
    let primeiroBotaoDePaginaVisivel;
    let ultimoBotaoDePaginaVisivel;

    if (totalDePaginas <= quantidadeMaximaDePaginas) {
      primeiroBotaoDePaginaVisivel = 1;
      ultimoBotaoDePaginaVisivel = totalDePaginas;

      this.setState({
        primeiroBotaoDePaginaVisivel,
        ultimoBotaoDePaginaVisivel,
      });

      return;
    }

    if (paginaAtual <= 3) {
      primeiroBotaoDePaginaVisivel = 1;
      ultimoBotaoDePaginaVisivel = quantidadeMaximaDePaginas;

      this.setState({
        primeiroBotaoDePaginaVisivel,
        ultimoBotaoDePaginaVisivel,
      });

      return;
    }

    if (paginaAtual >= totalDePaginas - 2) {
      primeiroBotaoDePaginaVisivel = totalDePaginas - 4;
      ultimoBotaoDePaginaVisivel = totalDePaginas;

      this.setState({
        primeiroBotaoDePaginaVisivel,
        ultimoBotaoDePaginaVisivel,
      });

      return;
    }

    primeiroBotaoDePaginaVisivel = paginaAtual - 2;
    ultimoBotaoDePaginaVisivel = paginaAtual + 2;

    this.setState({
      primeiroBotaoDePaginaVisivel,
      ultimoBotaoDePaginaVisivel,
    });
  }

  possuiPaginaAnterior() {
    const { paginaAtual } = this.props;
    return paginaAtual > 1;
  }

  possuiProximaPagina() {
    const { paginaAtual, totalDePaginas } = this.props;
    return paginaAtual < totalDePaginas;
  }

  obterBotaoDePrimeiraPagina() {
    return (
      this.possuiPaginaAnterior() && (
        <PageButton
          texto="Primeira página"
          onClick={() => this.props.navegarParaPagina(1)}
        />
      )
    );
  }

  obterBotaoDePaginaAnterior() {
    return (
      this.possuiPaginaAnterior() && (
        <PageButton
          texto="Página anterior"
          onClick={() => this.props.navegarParaPagina(this.props.paginaAtual - 1)
          }
        />
      )
    );
  }

  obterBotaoDeProximaPagina() {
    return (
      this.possuiProximaPagina() && (
        <PageButton
          texto="Próxima página"
          onClick={() => this.props.navegarParaPagina(this.props.paginaAtual + 1)
          }
        />
      )
    );
  }

  obterBotaoDeUltimaPagina() {
    return (
      this.possuiProximaPagina() && (
        <PageButton
          texto="Última página"
          onClick={() => this.props.navegarParaPagina(this.props.totalDePaginas)
          }
        />
      )
    );
  }

  render() {
    const botoes = [];
    const {
      primeiroBotaoDePaginaVisivel,
      ultimoBotaoDePaginaVisivel,
    } = this.state;
    const { navegarParaPagina, totalDePaginas, paginaAtual } = this.props;

    for (
      let index = primeiroBotaoDePaginaVisivel;
      index <= ultimoBotaoDePaginaVisivel;
      index++
    ) {
      let elemento = (
        <button
          key={index}
          type="button"
          onClick={() => navegarParaPagina(index)}
        >
          {index}
        </button>
      );

      if (index === paginaAtual) {
        elemento = (
          <button type="button" style={{ color: 'red' }}>
            {index}
          </button>
        );
      }

      botoes.push(elemento);
    }

    return (
      <div>
        {this.obterBotaoDePrimeiraPagina()}
        {this.obterBotaoDePaginaAnterior()}
        {botoes}
        {this.obterBotaoDeProximaPagina()}
        {this.obterBotaoDeUltimaPagina()}
      </div>
    );
  }
}

Pagination.propTypes = {
  navegarParaPagina: PropTypes.func,
  paginaAtual: PropTypes.number,
  totalDePaginas: PropTypes.number,
};

Pagination.defaultProps = {
  navegarParaPagina: () => {},
  paginaAtual: 1,
  totalDePaginas: 1,
};

export default Pagination;
