import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<div className="container-fluid">
						<h3 className="mx-auto">Matching Game</h3>
					</div>
				</nav>
			</div>
		);
	}
}