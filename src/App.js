import React, { Component } from 'react';
import Pokecard from './Pokecard';
import Pokegame from './Pokegame';
import "./App.css"


class App extends Component {
	render() {
		return (
			<div >
                <Pokegame/>
			</div>
		);
	}
}

export default App;