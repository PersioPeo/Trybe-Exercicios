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
      </div>
    );
  }
}
export default App;