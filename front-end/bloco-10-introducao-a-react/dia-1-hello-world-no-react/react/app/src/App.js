import React from 'react';
import './App.css';
import Futebol from './componets/Futebol';

function App() {
  return (
  <>  
   <Futebol time = 'Bahia'/>
   <Futebol time = 'Corinthians'/>
   <Futebol time = 'Vitoria'/>
   <Futebol time = 'São Paulo'/>

  </> 
  );
}

export default App;
