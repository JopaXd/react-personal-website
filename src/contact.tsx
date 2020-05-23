import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'
import Navigation from './Navigation'
import FooterBot from './Footer'

function Contact(){
	return (
		<div>
        	<Navigation />
        	<h1>Contact page</h1>
        	<FooterBot />
        </div>
    )
}

export default Contact;