 /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/


import React from 'react';

class EstEvent extends React.Component {
    constructor () {
        super ()
        this.state = {
            numeroDeCliques: 0
        } // fim do obj
    }// fim do constructor
    mudaEstado = () => {
        this.setState({
            numeroDeCliques: 1
        })
    }// fim da função mudaEstado

    render () {
        return (
            <button onClick={this.mudaEstado}>{this.state.numeroDeCliques}</button>
        )
    } // fim do render
} // fim EstEvent
export default EstEvent;