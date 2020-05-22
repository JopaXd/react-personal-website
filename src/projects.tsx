import React from 'react';
import 'bulma/css/bulma.css'
import Navigation from './Navigation'
import FooterBot from './Footer'
import { Title, Subtitle } from 'bloomer';
import './projects.css'

//Still thinking about the design for this one.

function Projects(){
    return (
        <div className="main">
        	<Navigation />
        	<div className="pcontent">
            	<Title isSize={1}>Projects</Title>
            	<Subtitle isSize={2}>Here's what i've been working on:</Subtitle>
            </div>
            <FooterBot />
        </div>
    )
}

export default Projects;