import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css"

class Pokedex extends Component {
  render() {
    let Title;
    if (this.props.isWinner) {
      Title = <h1 className='Pokedex-Winner'>Winner!</h1>
    } else {
      Title = <h1 className='Pokedex-Loser'>Loser</h1>
    }
    return (
      <div>
        <p>{Title}</p>
        <h4 className="exp">Total Exp: {this.props.exp}</h4>
        <div className="Pokedex">
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}



export default Pokedex;