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
			<div className="col card" onClick={handleClick.bind(null, this.props.id)}>
				{ content }
			</div>
		);
	}
};

Card.propTypes = {
	id: PropTypes.number,
	isTurnedOver: PropTypes.bool,
	image: PropTypes.string,
	handleClick: PropTypes.func
};

