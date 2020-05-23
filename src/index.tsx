import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation'
import 'font-awesome/css/font-awesome.css'
import { Title, Subtitle, Columns, Column, Box } from 'bloomer'
import * as serviceWorker from './serviceWorker';
import FooterBot from './Footer'
import Projects from './projects'
import More from './more'
import Contact from './contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const languageIconsList:Array<string> = ["/git.svg", "/javascript.svg", "/linux.svg" ,"/csharp.svg", "/react.svg", "/python.svg" ,"/vuejs.svg", "/docker.svg", "/typescript.svg"]

const Home = () => (
  <div>
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
         {languageIconsList.map((icon, index) => {
              return <Column key={index}><img src={icon} height="87" width="100" /></Column>
          })}
       </Columns>
       <br>
       </br>
       <FooterBot />
    </div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/more" component={More} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();