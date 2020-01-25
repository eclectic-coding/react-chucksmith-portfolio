import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Bulma</h1>
        <p className="subtitle">
          Modern CSS framework based on{' '} <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"> Flexbox </a>
        </p>
      </div>
    )
  }
}

export default Home
