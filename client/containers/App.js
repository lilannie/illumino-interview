import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Game from '../components/Game';
import Header from '../components/common/Header';

import '../scss/app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.handleReset = this.handleReset.bind(this);
		this.initializeGrid = this.initializeGrid.bind(this);

		this.state = {
			grid: this.initializeGrid()
		}
	}

	initializeGrid() {
		let grid = [];
		const {
			gridLength,
			numPairs
		} = this.props;

		// Initialize 2D array
		for (let i = 0; i < gridLength; i++) {
			grid.push([]);
		}

		// Place pairs of pictures to grid randomly
		for (let i = 1; i <= numPairs; i++) {
			let randRow = Math.floor(Math.random() * gridLength);
			let randCol = Math.floor(Math.random() * gridLength);
			while (grid[randRow][randCol] !== undefined) {
				randRow = Math.floor(Math.random() * gridLength);
				randCol = Math.floor(Math.random() * gridLength);
			}

			grid[randRow][randCol] = {
				id: i,
				image: `/images/${i}.jpg`,
				isTurnedOver: false,
				disabled: false
			};

			randRow = Math.floor(Math.random() * gridLength);
			randCol = Math.floor(Math.random() * gridLength);
			while (grid[randRow][randCol] !== undefined) {
				randRow = Math.floor(Math.random() * gridLength);
				randCol = Math.floor(Math.random() * gridLength);
			}

			grid[randRow][randCol] = {
				id: i,
				image: `/images/${i}.jpg`,
				isTurnedOver: false,
				disabled: false
			};
		}

		return grid;
	}

	handleReset() {
		console.log('handleReset');
		this.setState({
			grid: this.initializeGrid()
		});
	}

  render() {
    return (
    	<div className="main">
		    <Header handleReset={this.handleReset}/>
		    <Game grid={this.state.grid} />
	    </div>
    );
  }
}

App.propTypes = {
	gridLength: PropTypes.number,
	numPairs: PropTypes.number
};

App.defaultProps = {
	gridLength: 6,
	numPairs: 18
};