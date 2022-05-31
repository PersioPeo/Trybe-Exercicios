import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input id="id-email" type="email" />
        </label>
        <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
        <input id="btn-back" type="button" value="Voltar" />
      </div>
    );
  }
}
export default App;