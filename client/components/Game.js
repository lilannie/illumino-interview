import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default class Game extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			grid: this.initializeGrid()
		};
	}

	initializeGrid() {
		let grid = [];
		let gridLength = 6;

		for (let i = 0; i < gridLength; i++) {
			grid.push([]);
		}

		return grid;
	}

	handleClick(id) {

	}

	render() {
		return (
			<div className="game">
				Home!
			</div>
		);
	}
};

Game.propTypes = {};
