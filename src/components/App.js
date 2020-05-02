import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  </Router>
)

export default App
