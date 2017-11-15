import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCountdownClock from 'react-countdown-clock';

import Card from './Card';

export default class Game extends Component {
	constructor(props) {
		super(props);

		this.initializeGrid = this.initializeGrid.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleOutOfTime = this.handleOutOfTime.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.renderGrid = this.renderGrid.bind(this);

		this.state = {
			grid: this.initializeGrid(),
			outOfTime: false,
			startingTime: 10,
			numMatched: 0,
			firstCardClicked: false,
			cardClicked: {
				id: 0,
				row: 0,
				col: 0
			},

		};
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
		this.setState({
			grid: this.initializeGrid(),
			outOfTime: false,
			startingTime: 10
		});
	}

	handleOutOfTime() {
		alert('Sorry! You ran out of time. Please, reset the game to play again.');

		this.setState({
			outOfTime: true
		});
	}

	handleClick(id, row, col) {
		const {
			firstCardClicked,
			cardClicked
		} = this.state;

		let grid = this.state.grid,
			numMatched = this.state.numMatched;

		grid[row][col].isTurnedOver = true;
		if (firstCardClicked && id !== cardClicked.id) {
			setTimeout(() => {
				grid[row][col].isTurnedOver = false;
				grid[cardClicked.row][cardClicked.col].isTurnedOver = false;

				this.setState ({
					grid
				});
			}, 500);
		}

		if (firstCardClicked && id === cardClicked.id) {
			grid[cardClicked.row][cardClicked.col].isDisabled = true;
			grid[row][col].isDisabled = true;
			numMatched++;
		}

		this.setState({
			grid,
			numMatched,
			firstCardClicked: !firstCardClicked,
			cardClicked: {
				id,
				row,
				col
			}
		});
	}

	renderGrid() {
		return this.state.grid.map((row, rowIndex) => {
			return (
				<div className="row" key={rowIndex}>
					{
						row.map((card, colIndex) => {
							let handleClick =
								card.isDisabled || this.state.outOfTime
								? () => {}
								: this.handleClick.bind(null, card.id, rowIndex, colIndex);

							return (<Card key={`${rowIndex},${colIndex}`}
							              handleClick={handleClick}
							              {...card} />)
								;
						})
					}
				</div>
			);
		});
	}

	render() {
		if (this.state.numMatched === this.props.numPairs) {
			alert('You won! Yay!');
		}

		let timer = (<ReactCountdownClock seconds={this.state.startingTime}
		                                 color="#000"
		                                 alpha={0.9}
		                                 size={100}
		                                 onComplete={this.handleOutOfTime} />);
		if (this.state.outOfTime) timer = null;

		return (
			<div className="game">
					<div className="row justify-content-center">
							<div className="col">
								<button type="button" className="btn btn-secondary" onClick={this.handleReset}>Reset</button>
							</div>
							<div className="col">
								{ timer }
							</div>
					</div>
					{ this.renderGrid() }
			</div>
		);
	}
};

Game.propTypes = {
	gridLength: PropTypes.number,
	numPairs: PropTypes.number
};

Game.defaultProps = {
	gridLength: 6,
	numPairs: 18
};