import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<div className="container-fluid">
						<h1 className="mx-auto display-3">Matching Game</h1>
					</div>
				</nav>
			</div>
		);
	}
}