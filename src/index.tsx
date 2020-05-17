import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation'
import { Title, Subtitle } from 'bloomer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  	<div className="main">
  		<section className="hero is-primary is-fullheight header-image">
  			<Navigation />
        	<div className="hero-body">
        	    <div className="container has-text-centered">
        	        <Title isSize={1}>Pavle Milanov</Title>
        	        <Subtitle isSize={2}>Home Page</Subtitle>
        	    </div>
        	</div>
  		</section>
  	</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
