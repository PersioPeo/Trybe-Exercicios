import React from 'react';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class BtnClick extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
handleClick = () => {
    alert('Clicou no botão!')
  }
  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default BtnClick;