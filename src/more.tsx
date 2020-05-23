import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'
import Navigation from './Navigation'
import FooterBot from './Footer'

function More(){
	return (
		<div>
        	<Navigation />
        	<h1>More page</h1>
        	<FooterBot />
        </div>
    )
}

export default More;