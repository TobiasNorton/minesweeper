import React, { Component } from 'react'
import './App.css'
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Minesweeper</h1>
        <Board />
      </div>
    )
  }
}

export default App
