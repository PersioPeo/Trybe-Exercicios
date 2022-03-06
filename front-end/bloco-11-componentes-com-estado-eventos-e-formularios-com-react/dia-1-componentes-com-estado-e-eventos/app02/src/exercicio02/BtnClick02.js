import React from 'react';
/**
 * Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .

 */

class BtnClick02 extends React.Component {

handleClick01 = () => {
    console.log('Clicou no botão 01!')
  }
  handleClick02 = () => {
    console.log('Clicou no botão 02!')
  }
  handleClick03 = () => {
    console.log('Clicou no botão 03!')
  }
  

  render() {
    return (
    <>
        <button onClick={this.handleClick01}>botão 01</button>
        <button onClick={this.handleClick02}>botão 02</button>
        <button onClick={this.handleClick03}>botão 03</button> 
    </>    
    )
  }
}

export default BtnClick02;