import React from 'react';

class Clicou extends React.Component {
    handleClick(btn) {
        alert(btn);
    }
 

  render() {
      const {btn} = this.props
    return <button onClick={this.handleClick.bind(btn)}>Meu botão</button>

  }
}

export default Clicou;