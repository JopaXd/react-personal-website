import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.css'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'
import 'bulma/css/bulma.css'

class FooterBot extends React.Component {
  render() {
  	const year:string = new Date().getFullYear().toString();
    return (
    	<Footer id='footer'>
    	    <Container>
    	        <Content>
    	            <Columns>
    	                <Column >
    	                    <p>
    	                        Made with<Icon hasTextColor="danger" className="fa fa-heart"></Icon> 
    	                        by Pavle Milanov
    	                    </p>
    	                </Column>
    	            </Columns>
    	            <Content isSize='small'>
    	                <p>© {year} Pavle Milanov</p>
    	            </Content>
    	        </Content>
    	    </Container>
    	</Footer>
   	);
  }
}

export default FooterBot;