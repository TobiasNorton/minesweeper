import React, { Component } from 'react'
import Cell from './Cell.js'
import axios from 'axios'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: {
        id: 0,
        board: [
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ],
        state: 'new',
        mines: 10
      }
    }
  }

  newGame = () => {
    axios.post('https://minesweeper-api.herokuapp.com/games').then(response => {
      console.log(response.data)
      this.setState({
        game: response.data
      })
    })
  }

  gameDescription = () => {
    if (this.state.game.id > 0) {
      return <p>You are playing game {this.state.game.id}</p>
    } else {
      return <p>Press the New Game button to start</p>
    }
  }

  check = (row, column) => {
    console.log(`Cell [${row}, ${column}] was checked`)
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.game.id}/check`, {
        row: row,
        col: column
      })
      .then(response => {
        console.log(`Game status: ${response.data.state}`)
        this.setState({
          game: response.data
        })
      })
  }

  flag = (row, column) => {
    console.log(`Cell [${row}, ${column}] was flagged`)
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.game.id}/flag`, {
        row: row,
        col: column
      })
      .then(response => {
        console.log(`Game status: ${response.data.state}`)
        this.setState({
          game: response.data
        })
      })
    console.log(this.state.game.state)
  }

  gameResults = () => {
    if (this.state.game.state === 'won') {
      console.log('Game won!')
      return <h3 className="game-results">You Did It!</h3>
    }
    if (this.state.game.state === 'lost') {
      console.log('Game lost!')
      return <h3 className="game-results">Game Over!</h3>
    }
  }

  render() {
    return (
      <div>
        {this.gameResults()}
        <div className="board">
          <table>
            <tbody>
              {this.state.game.board.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {row.map((value, columnIndex) => {
                      return (
                        <Cell
                          value={value}
                          row={rowIndex}
                          column={columnIndex}
                          key={columnIndex}
                          id={this.state.id}
                          check={this.check}
                          flag={this.flag}
                        />
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {this.gameDescription()}
        <div className="new-game">
          <button onClick={this.newGame}>New Game</button>
        </div>
      </div>
    )
  }
}

export default Board
