import React from 'react'
import '../styles/App.css'
import ButtonAppBar from './ButtonAppBar'
import history from '../history'
import Projects from './Projects'
import { Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Router history={history}>
            <div>
                <ButtonAppBar />
                <Switch>
                    <Route exact path='/projects' component={Projects}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
