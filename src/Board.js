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

  check = () => {
    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.state.games.id}/check`)
      .then(response => {
        console.log(response.data)
      })
  }

  render() {
    return (
      <div>
        {this.gameDescription()}
        <div className="board">
          <table>
            <tbody>
              <tr>
                <Cell
                  onClick={this.check}
                  oncontextmenu={this.flag}
                  value={this.state.game.board[0][0]}
                />
                <Cell value={this.state.game.board[0][1]} />
                <Cell value={this.state.game.board[0][2]} />
                <Cell value={this.state.game.board[0][3]} />
                <Cell value={this.state.game.board[0][4]} />
                <Cell value={this.state.game.board[0][5]} />
                <Cell value={this.state.game.board[0][6]} />
                <Cell value={this.state.game.board[0][7]} />
              </tr>
              <tr>
                <Cell value={this.state.game.board[1][0]} />
                <Cell value={this.state.game.board[1][1]} />
                <Cell value={this.state.game.board[1][2]} />
                <Cell value={this.state.game.board[1][3]} />
                <Cell value={this.state.game.board[1][4]} />
                <Cell value={this.state.game.board[1][5]} />
                <Cell value={this.state.game.board[1][6]} />
                <Cell value={this.state.game.board[1][7]} />
              </tr>
              <tr>
                <Cell value={this.state.game.board[2][0]} />
                <Cell value={this.state.game.board[2][1]} />
                <Cell value={this.state.game.board[2][2]} />
                <Cell value={this.state.game.board[2][3]} />
                <Cell value={this.state.game.board[2][4]} />
                <Cell value={this.state.game.board[2][5]} />
                <Cell value={this.state.game.board[2][6]} />
                <Cell value={this.state.game.board[2][7]} />
              </tr>
              <tr>
                <Cell value={this.state.game.board[3][0]} />
                <Cell value={this.state.game.board[3][1]} />
                <Cell value={this.state.game.board[3][2]} />
                <Cell value={this.state.game.board[3][3]} />
                <Cell value={this.state.game.board[3][4]} />
                <Cell value={this.state.game.board[3][5]} />
                <Cell value={this.state.game.board[3][6]} />
                <Cell value={this.state.game.board[3][7]} />
              </tr>
              <tr>
                <Cell value={this.state.game.board[4][0]} />
                <Cell value={this.state.game.board[4][1]} />
                <Cell value={this.state.game.board[4][2]} />
                <Cell value={this.state.game.board[4][3]} />
                <Cell value={this.state.game.board[4][4]} />
                <Cell value={this.state.game.board[4][5]} />
                <Cell value={this.state.game.board[4][6]} />
                <Cell value={this.state.game.board[4][7]} />
              </tr>
              <tr>
                <Cell value={this.state.game.board[5][0]} />
                <Cell value={this.state.game.board[5][1]} />
                <Cell value={this.state.game.board[5][2]} />
                <Cell value={this.state.game.board[5][3]} />
                <Cell value={this.state.game.board[5][4]} />
                <Cell value={this.state.game.board[5][5]} />
                <Cell value={this.state.game.board[5][6]} />
                <Cell value={this.state.game.board[5][7]} />
              </tr>
              <tr>
                <Cell value={this.state.game.board[6][0]} />
                <Cell value={this.state.game.board[6][1]} />
                <Cell value={this.state.game.board[6][2]} />
                <Cell value={this.state.game.board[6][3]} />
                <Cell value={this.state.game.board[6][4]} />
                <Cell value={this.state.game.board[6][5]} />
                <Cell value={this.state.game.board[6][6]} />
                <Cell value={this.state.game.board[6][7]} />
              </tr>
              <tr>
                <Cell value={this.state.game.board[7][0]} />
                <Cell value={this.state.game.board[7][1]} />
                <Cell value={this.state.game.board[7][2]} />
                <Cell value={this.state.game.board[7][3]} />
                <Cell value={this.state.game.board[7][4]} />
                <Cell value={this.state.game.board[7][5]} />
                <Cell value={this.state.game.board[7][6]} />
                <Cell value={this.state.game.board[7][7]} />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="new-game">
          <button onClick={this.newGame}>New Game</button>
        </div>
      </div>
    )
  }
}

export default Board
