import React from "react"
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation