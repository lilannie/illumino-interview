import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
	render() {
		const {
			image,
			isTurnedOver,
			handleClick
		} = this.props;

		let content = isTurnedOver ? (<img src={image} />) : null ;
		return (
			<div className="col" onClick={handleClick}>
				<div className="card">
					{ content }
				</div>
			</div>
		);
	}
};

Card.propTypes = {
	image: PropTypes.string,
	isTurnedOver: PropTypes.bool,
	handleClick: PropTypes.func
};

