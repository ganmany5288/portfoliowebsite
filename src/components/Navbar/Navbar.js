import React, { Component } from 'react'
import { isTemplateSpan } from 'typescript'
import './Navbar.css'
import { MenuItems } from './MenuItems/MenuItems'

export class Navbar extends Component {
  state= {clicked: false}



  render() {
    return (
      <nav className="navbar">
       <div className='navbar-list'>
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
       </div>
      </nav>
    )
  }
}

export default Navbar