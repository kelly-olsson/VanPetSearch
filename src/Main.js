import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Search from "./Search"

function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/search' component={Search}></Route>
            <Route exact path='/about' component={About}></Route>
        </Switch> 
    )
}

export default Main