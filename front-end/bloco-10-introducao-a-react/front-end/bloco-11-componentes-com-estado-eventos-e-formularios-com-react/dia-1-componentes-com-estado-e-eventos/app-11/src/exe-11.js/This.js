import React from 'react';
//Garanta acesso ao objeto this na função que você declarou.
class This extends React.Component {
  constructor() {    
    super();
    this.soma = this.soma.bind(this);
  }
  soma(a, b){
    return a + b;
  }

  render() {
    console.log(this.soma(2, 5));
    return <span>Hello, world!</span>
  }
}

export default This;