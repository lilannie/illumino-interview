import React, { Component } from 'react';
import Card from './Card';

export default class Game extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.renderGrid = this.renderGrid.bind(this);

		this.state = {
			grid: this.props.grid,
			firstCardClicked: false,
			numMatched: 0,
			cardClicked: {
				id: 0,
				row: 0,
				col: 0
			},
		};
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
			firstCardClicked: !firstCardClicked,
			numMatched,
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
							let handleClick = card.isDisabled ? () => {} : this.handleClick.bind(null, card.id, rowIndex, colIndex);
							return (<Card key={`${rowIndex},${colIndex}`}
							              handleClick={handleClick}
							              {...card} />
							);
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

		return (
			<div className="game">
					{ this.renderGrid() }
			</div>
		);
	}
};
