import React from "react"
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
                <li><NavLink NavLink exact activeClassName="current" to='/search'>Search</NavLink></li>
                <li><NavLink NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation