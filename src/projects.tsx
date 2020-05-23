import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css'
import Navigation from './Navigation'
import FooterBot from './Footer'
import { Title, Subtitle, Container ,Columns, Column, Box, Panel, PanelHeading, PanelBlock, Control, Input, Icon, PanelTab, PanelTabs, Button, PanelIcon } from 'bloomer';
import './projects.css'

interface Dictionary<T>{
    [Key : string]: T;
}

function Projects(){
    const result : string[] = []
    let [projects, setProjects] = useState(result)
    useEffect(() => {
        let projectList:Array<string> = ["project1", "project2"];
        fetch("https://api.github.com/users/JopaXd/repos")
        .then(res => res.json())
        .then((result) =>{
            result.forEach( (project:Dictionary<any>) =>{
                projectList.push(project.name)
            })
        });
        //here will be the logic for search feature.
        //This returns an empty list... Dont question.
        setProjects(projectList);
    }, []);
    return (
        <div className="main">
            <section className="hero is-primary is-fullheight header-image-p">
              <Navigation />
                <div className="hero-body">
                    <div className="container has-text-centered">
                       <Title isSize={1}>Projects</Title>
                       <Subtitle isSize={2}>Here's what i've been working on:</Subtitle>
                    </div>
                </div>
            </section>
            <div className="spacer" />
        	<div className="pcontent">
                <Columns isCentered>
                    <Column/>
                    <Column isSize='1/3'><Box><Title isSize={4}>JBot is a multipurpose bot for discord. Its very customizable and easy to get going. Written in Python with the help of discord.py library. I wrote this when i started programming actually. Visit page <a href="https://jopaa.xyz/JBot">here.</a></Title></Box></Column>
                    <Column/>
                    <Column isSize='1/3'><img className="images" src="/LogoCircle.png"></img></Column>
                    <Column/>
                </Columns>
                <br/>
                <Columns isCentered>
                    <Column/>
                    <Column isSize='1/3'><img className="images" src="/react.svg"/></Column>
                    <Column/>
                    <Column isSize='1/3'><Box><Title isSize={4}>Did you know that this page is written in React? It indeed is. This is my newest project. It's also written using Typescript. Interesting framework not gonna lie. In fact, you're looking at the same page as we speak!</Title></Box></Column>
                    <Column/>
                </Columns>
                <br/>
                <Title isSize={1}>GitHub Repositories</Title>
                <Subtitle isSize={2}>Here's a list of all the forks because i don't keep my repositories over on GitHub.</Subtitle>
                <br/>
                <Container isFluid>
                    <Panel className="repos">
                        <PanelHeading>Repositories</PanelHeading>
                        <PanelBlock>
                            <Control hasIcons='left'>
                                <Input isSize='small' placeholder='Search' />
                                <Icon isSize='small' isAlign='left'>
                                    <span className='fa fa-search' aria-hidden='true' />
                                </Icon>
                            </Control>
                        </PanelBlock>
                        <PanelTabs>
                            <PanelTab isActive>All</PanelTab>
                        </PanelTabs>
                        {projects.map(function(project:string, index:number){
                            return(
                                <PanelBlock key={index}>
                                    <PanelIcon className="fa fa-code-fork" />
                                    {project}
                                </PanelBlock>
                            );
                        })}
                    </Panel>
                </Container>
            </div>
            <FooterBot />
        </div>
    )
}

export default Projects;