import React, { Component } from 'react'
import { Router } from '@reach/router';
import Home from './Home'
import MenuBar from './MenuBar'
import '../styles/main.scss'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuBar />
        <Router>
          <Home path="/" />
        </Router>
      </React.Fragment>
    )
  }
}

export default App
