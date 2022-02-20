import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import Caracteristicas from './Caracteristicas';
import data from './data';

class Cards extends React.Component {
  render() {
    return (
      <section className= 'border border-secondary' id='id-pokemons'>  
        {data.map(pokemons => (
            <div id='id-cards'>
             <Caracteristicas informacao = {pokemons} />
            </div>
            ))}
                          
            </section>
        )
    }
    
}
export default Cards;