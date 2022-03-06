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
        /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
        this.setState((estadoAnterio, _props)=>({
            numeroDeCliques: estadoAnterio.numeroDeCliques +1 
        }))
    }// fim da função mudaEstado

    render () {
        return (
            <button onClick={this.mudaEstado}>Numero de Clicks {this.state.numeroDeCliques}</button>
        )
    } // fim do render
} // fim EstEvent
export default EstEvent;