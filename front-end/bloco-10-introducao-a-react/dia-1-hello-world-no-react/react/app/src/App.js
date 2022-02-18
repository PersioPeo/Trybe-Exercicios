import React from 'react';
import './App.css';

const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

function App () {
  return (
    <div>
    {element}
    </div>
  )
}

export default App;
