import React, { Component } from 'react';

import Game from '../components/Game';
import Header from '../components/Header';

import '../scss/app.scss';

export default class App extends Component {
  render() {
    return (
    	<div className="app">
		    <Header/>
		    <Game/>
	    </div>
    );
  }
}

