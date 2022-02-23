import React from 'react';
import Titulo from './componets/Titulo';
import Cards from './componets/Cards';
import './App.css'; 

function App() {
  return (
  <> 
  <main className= 'container border border-primary'>
    <Titulo />    
    <Cards />        
    
  </main>
  </> 
  );
}

export default App;