import React, { Component } from 'react'
import Allnews from './components/Allnews'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Allnews/>
      </div>
    )
  }
}
