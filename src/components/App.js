import React from 'react'
import '../styles/App.css'
import ButtonAppBar from './ButtonAppBar'
import history from '../history'
import Projects from './Projects'
import Contact from './Contact'
import { Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Router history={history}>
            <div>
                <ButtonAppBar />
                <h1>I am Joey 2 Slice</h1>
                <Switch>
                    <Route exact path='/projects' component={Projects}></Route>
                    <Route exact path='/contact' component={Contact}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
