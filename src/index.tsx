import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation'
import 'font-awesome/css/font-awesome.css'
import { Title, Subtitle, Columns, Column, Box, Icon } from 'bloomer'
import * as serviceWorker from './serviceWorker';

//TODO: The current font-awesome css does not include the icons that i need. I will either install the react components or find another way.
//TODO: For god's sake please fix navbar on phone devices.

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
      <br>
       </br>
       <div className="content">
         <Title>About Me</Title>
         <br>
         </br>
         <Columns isCentered>
           <Column></Column>
           <Column isSize='1/3'><Box><Title isSize={4}>Hello! My name is Pavle Milanov. I am a 16 year old developer who has big interest in technology. I've been into coding for two and a half years now and have a lot of experience in the technologies mentioned later.</Title></Box></Column>
           <Column></Column>
           <Column isSize='1/3'>
              <img src="/image4.png" className="profilePicture"></img>
           </Column>
           <Column></Column>
         </Columns>
         <br>
         </br>
         <Title>Technologies i have experience with:</Title>
         <br>
         </br>
         <Columns isCentered>
           <Column><Icon isSize='large' className='fab fa-python' /></Column>
         </Columns>
       </div>
  	</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();