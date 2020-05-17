import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarDivider, NavbarLink, NavbarDropdown, NavbarEnd} from 'bloomer'

function Navigation() {
  let [dateTime, setDateTime] = useState("")
  useEffect(() => {
    setInterval(function () {
      let dateObj:Date = new Date()
      let month:number = dateObj.getMonth() + 1
      let date:string = dateObj.getDate().toString() + "/" + month.toString() + "/" + dateObj.getFullYear().toString();
      let time:string = dateObj.getHours().toString() + ":" + dateObj.getMinutes().toString() + ":" + dateObj.getSeconds().toString();
      let dateTime:string = date + " " + time
      setDateTime(dateTime);
    }, 1000)
  }, []);
  let brand:string = "https://bloomer.js.org/dist/07990594.png";
  return (
    <div className="Navbar">
      <Navbar>
      <NavbarBrand>
          <NavbarItem>
              <img src={brand} style={{ marginRight: 5 }} /> Pavle Milanov
          </NavbarItem>
          <NavbarBurger />
      </NavbarBrand>
      <NavbarMenu >
          <NavbarStart>
              <NavbarItem href='#/'>Home</NavbarItem>
              <NavbarItem href="#/">Projects</NavbarItem>
              <NavbarItem hasDropdown isHoverable>
                  <NavbarLink href='#/documentation'>More</NavbarLink>
                  <NavbarDropdown>
                      <NavbarItem href='#/'>About</NavbarItem>
                      <NavbarDivider />
                      <NavbarItem href='#/'>Contact</NavbarItem>
                  </NavbarDropdown>
              </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
              <NavbarItem>
                  <span>{dateTime}</span>
              </NavbarItem>
          </NavbarEnd>
      </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Navigation;