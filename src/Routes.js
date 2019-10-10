import React from "react"
import {Switch, Route} from "react-router-dom"
import About from "./Components/About/About.js"
import Landing from "./Components/Landing/Landing.js"

export default (
    <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path= "/About" component={About}/>
    </Switch>
)