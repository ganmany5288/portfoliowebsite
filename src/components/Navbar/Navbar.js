import React, { Component } from 'react'
import { isTemplateSpan } from 'typescript'
import './Navbar.css'
import { MenuItems } from './MenuItems/MenuItems'

export class Navbar extends Component {
  state= {clicked: false}



  render() {
    return (
      <nav className="NavbarItems">
       {/* <h1 className='navbar-logo'>React</h1> */}
       {/* <div classname='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times'}></i>
       </div> */}
       <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
       </ul>
      </nav>
    )
  }
}

export default Navbar