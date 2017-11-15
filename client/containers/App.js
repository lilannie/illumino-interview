import React, { Component } from 'react';

import Game from '../components/Game';
import Header from '../components/common/Header';

import '../scss/app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
    	<div className="main">
		    <Header/>
		    <Game/>
	    </div>
    );
  }
}

