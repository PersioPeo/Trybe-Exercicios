import React from 'react';

function handleClick() {
    alert('Clicou no botão!')
  }

class Exercicio01 extends React.Component {
    render() {
        return <button onClick={handleClick}>Meu botão</button>        
    }
}
export default Exercicio01;