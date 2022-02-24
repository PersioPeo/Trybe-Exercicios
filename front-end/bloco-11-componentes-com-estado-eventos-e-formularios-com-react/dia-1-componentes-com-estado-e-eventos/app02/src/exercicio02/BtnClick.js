import React from 'react';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class BtnClick extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  constructor() {
      super()
      this.handleClick = this.handleClick.bind(this);
  }
handleClick() {
    
    console.log('Clicou no botão!')
  }
  render() {
      console.log(this);
    return <button onClick={this.handleClick}>Botão</button>
  }
}

export default BtnClick;