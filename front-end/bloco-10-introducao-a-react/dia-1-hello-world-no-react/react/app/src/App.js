import React from 'react';
import './App.css';
import Ola from '../src/componets/Ola';
import Greeting from './componets/Greeting';
import Imagem from './componets/Imagem';

function App() {
  return (
  <>  
   <Ola />
   <Greeting name = "Pérsio" lastName = "Pereira" /> 
   <Imagem source = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText = "Imagem de um gatinho cinza "/>

  </> 
  );
}

export default App;
