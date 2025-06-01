import React from 'react'
import './navBar.css'
import { NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navBar'>
     <ul className='navitems'>
        <li><NavLink to="/">Home</NavLink>  </li>
        <li><NavLink to="/bmicalculator" >bmicalculator</NavLink></li>
        <li><NavLink to="/todolist">ToDoList</NavLink></li>
        <li><NavLink to="/weather" >weather</NavLink></li>
        <li><NavLink to="/stopwatch">stopwatch</NavLink></li>
        <li><NavLink to="/Quotes Generator">Quotes Generator</NavLink></li>
     </ul>
    </nav>
  )
}

export default NavBar