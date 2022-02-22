/*
Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
*/


import { click } from '@testing-library/user-event/dist/click';
import React from 'react';

class ParOuImpar extends React.Component{
constructor() {
  super();
  this.state = {
    clickBtn: 0,
  } // fim do state
  this.contClick = this.contClick.bind(this);
}// fim do Constructor

contClick() {
  this.setState(({clickBtn}) => ({
    clickBtn: clickBtn +1,
  }));
} // fim do contclick

render() {  
    const {clickBtn: clickBtn} = this.state;   
  return (
    <div>        
        <button 
            onClick={this.contClick} >
            Botão 1 | Cont = {clickBtn}
        </button>
    </div>
  )// fim do return
} // fim do render
    
    




    
}// fim da classe



export default ParOuImpar;

