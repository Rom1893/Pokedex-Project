import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokecard.css'


const PokeImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let pad23 = (number) => (number <= 999 ? `00${number}`.slice(-3): number); 
  
class Pokecard extends Component {
	render() {
		const imgSrc = `${PokeImg}${pad23(this.props.id)}.png`
		return (
			<div className="Pokecard" >
                <h1 className='Name'>{this.props.name}</h1>
				<img src={imgSrc} alt={this.props.name}/>
				<p>{this.props.type}</p>
				<p>{this.props.exp}</p>
			</div>
		);
	}
}

export default Pokecard;