import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarDivider, NavbarLink, NavbarDropdown, NavbarEnd} from 'bloomer'

interface NProps{}
interface NStates{
  isMounted: boolean;
  dateTime: string;
  isActive: boolean;
}

//Turned this into a class in hope to stop the issue with "updating a component that does not exist anymore" after switching to another page.

class Navigation extends React.Component<NProps, NStates>{
 Brand = "https://bloomer.js.org/dist/07990594.png"
 constructor(props: NProps){
   super(props);
   this.state = {isMounted : false, dateTime : "", isActive : false}
 }

  componentDidMount(){
    this.setState({ isMounted : true });
    let scope:this = this;
    const id = setInterval(function () {
     if (scope.state.isMounted){
       let dateObj:Date = new Date()
       let month:number = dateObj.getMonth() + 1
       let date:string = dateObj.getDate().toString() + "/" + month.toString() + "/" + dateObj.getFullYear().toString();
       let time:string = dateObj.getHours().toString() + ":" + dateObj.getMinutes().toString() + ":" + dateObj.getSeconds().toString();
       scope.setState({dateTime : date + " " + time})
     }
     else{
       clearInterval(id);
     }
     }, 1000)
  }

  componentWillUnmount(){
    this.setState({ isMounted : false });
  }

  render(){
    return(
      <div className="Navbar">
        <Navbar>
        <NavbarBrand>
            <NavbarItem>
                <img src={this.Brand} style={{ marginRight: 5 }} /> Pavle Milanov
            </NavbarItem>
            <NavbarBurger onClick={() => {
                    this.setState({ isActive : !this.state.isActive })
                  }} />
        </NavbarBrand>
        <NavbarMenu className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}>
            <NavbarStart>
                <NavbarItem><Link className="navbar-item" to="/">Home</Link></NavbarItem>
                <NavbarItem><Link className="navbar-item" to="/projects">Projects</Link></NavbarItem>
                <NavbarItem hasDropdown isHoverable>
                    <NavbarLink href='#/'>More</NavbarLink>
                    <NavbarDropdown>
                        <NavbarItem href='#/'>About</NavbarItem>
                        <NavbarDivider />
                        <NavbarItem href='#/'>Contact</NavbarItem>
                    </NavbarDropdown>
                </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
                <NavbarItem>
                    <span>{this.state.dateTime}</span>
                </NavbarItem>
            </NavbarEnd>
        </NavbarMenu>
        </Navbar>
      </div>
    )
  }
}

//THIS IS THE FUNCTION EQUIVALENT.
//THE ADVANTAGE OF CLASSES IS THAT I CAN SPECIFY STATES LIKE COMPONENTDIDMOUNT OR COMPONENTWILLUNMOUNT

//function Navigation() {
//  let [dateTime, setDateTime] = useState("")
//  const [isActive, setisActive] = React.useState(false);
//  useEffect(() => {
//    setInterval(function () {
//      let dateObj:Date = new Date()
//      let month:number = dateObj.getMonth() + 1
//      let date:string = dateObj.getDate().toString() + "/" + month.toString() + "/" + dateObj.getFullYear().toString();
//      let time:string = dateObj.getHours().toString() + ":" + dateObj.getMinutes().toString() + ":" + dateObj.getSeconds().toString();
//      let dateTime:string = date + " " + time
//      setDateTime(dateTime);
//    }, 1000)
//  }, []);
//  let brand:string = "https://bloomer.js.org/dist/07990594.png";
//  return (
//    <div className="Navbar">
//      <Navbar>
//      <NavbarBrand>
//          <NavbarItem>
//              <img src={brand} style={{ marginRight: 5 }} /> Pavle Milanov
//          </NavbarItem>
//          <NavbarBurger onClick={() => {
//                  setisActive(!isActive);
//                }} />
//      </NavbarBrand>
//      <NavbarMenu className={`navbar-menu ${isActive ? "is-active" : ""}`}>
//          <NavbarStart>
//              <NavbarItem><Link className="navbar-item" to="/">Home</Link></NavbarItem>
//              <NavbarItem><Link className="navbar-item" to="/projects">Projects</Link></NavbarItem>
//              <NavbarItem hasDropdown isHoverable>
//                  <NavbarLink href='#/>More</NavbarLink>
//                  <NavbarDropdown>
//                      <NavbarItem href='#/'>About</NavbarItem>
//                      <NavbarDivider />
//                      <NavbarItem href='#/'>Contact</NavbarItem>
//                  </NavbarDropdown>
//              </NavbarItem>
//          </NavbarStart>
//          <NavbarEnd>
//              <NavbarItem>
//                  <span>{dateTime}</span>
//              </NavbarItem>
//          </NavbarEnd>
//      </NavbarMenu>
//      </Navbar>
//    </div>
//  );
//}

export default Navigation;