import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import UseRef from './forwardRef/useRef'
import ErrorMainPage from './errorBoundries/index'
import PortalReact from './portalReact'

var Home = lazy(() => import('./components/Home'))
var About = lazy(() => import('./components/About'))
function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div> Loading.........</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ref" component={UseRef} />
          <Route exact path="/error_boundries_demo" component={ErrorMainPage} />
          <Route exact path="/portal_react_demo" component={PortalReact} />



        </Suspense>
      </Switch>
    </Router>
  )
}

export default App
