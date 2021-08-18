import React from "react"
import { NavLink, Switch, Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Search from "./Search"

function Main() {
    return (
        <Switch>
            <Route path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/search' component={Search}></Route>
        </Switch> 
    )
}

export default Main