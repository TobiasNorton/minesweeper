import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Minesweeper</h1>
        <Board />
        <div class="new-game">
          <button>New Game</button>
        </div>
      </div>
    )
  }
}

export default App
