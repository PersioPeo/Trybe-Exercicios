import React from 'react';



class FunctionInClass extends React.Component {
    handleClick() {
        console.log('Clicou no botão!');
       }       
    render() {
        return <button onClick={this.handleClick}>Meu botão</button>        
    }
}
export default FunctionInClass;