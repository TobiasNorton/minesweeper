import React, { Component } from 'react'
import Cell from './Cell.js'
import board_sample from './board_sample.json'

class Board extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   'game': 'new'
    // }
  }

  render() {
    return (
      <div>
        <div class="board">
          <table>
            <tr>
              <Cell value={board_sample.board[0][0]} />
              <Cell value={board_sample.board[0][1]} />
              <Cell value={board_sample.board[0][2]} />
              <Cell value={board_sample.board[0][3]} />
              <Cell value={board_sample.board[0][4]} />
              <Cell value={board_sample.board[0][5]} />
              <Cell value={board_sample.board[0][6]} />
              <Cell value={board_sample.board[0][7]} />
            </tr>
            <tr>
              <Cell value={board_sample.board[1][0]} />
              <Cell value={board_sample.board[1][1]} />
              <Cell value={board_sample.board[1][2]} />
              <Cell value={board_sample.board[1][3]} />
              <Cell value={board_sample.board[1][4]} />
              <Cell value={board_sample.board[1][5]} />
              <Cell value={board_sample.board[1][6]} />
              <Cell value={board_sample.board[1][7]} />
            </tr>
            <tr>
              <Cell value={board_sample.board[2][0]} />
              <Cell value={board_sample.board[2][1]} />
              <Cell value={board_sample.board[2][2]} />
              <Cell value={board_sample.board[2][3]} />
              <Cell value={board_sample.board[2][4]} />
              <Cell value={board_sample.board[2][5]} />
              <Cell value={board_sample.board[2][6]} />
              <Cell value={board_sample.board[2][7]} />
            </tr>
            <tr>
              <Cell value={board_sample.board[3][0]} />
              <Cell value={board_sample.board[3][1]} />
              <Cell value={board_sample.board[3][2]} />
              <Cell value={board_sample.board[3][3]} />
              <Cell value={board_sample.board[3][4]} />
              <Cell value={board_sample.board[3][5]} />
              <Cell value={board_sample.board[3][6]} />
              <Cell value={board_sample.board[3][7]} />
            </tr>
            <tr>
              <Cell value={board_sample.board[4][0]} />
              <Cell value={board_sample.board[4][1]} />
              <Cell value={board_sample.board[4][2]} />
              <Cell value={board_sample.board[4][3]} />
              <Cell value={board_sample.board[4][4]} />
              <Cell value={board_sample.board[4][5]} />
              <Cell value={board_sample.board[4][6]} />
              <Cell value={board_sample.board[4][7]} />
            </tr>
            <tr>
              <Cell value={board_sample.board[5][0]} />
              <Cell value={board_sample.board[5][1]} />
              <Cell value={board_sample.board[5][2]} />
              <Cell value={board_sample.board[5][3]} />
              <Cell value={board_sample.board[5][4]} />
              <Cell value={board_sample.board[5][5]} />
              <Cell value={board_sample.board[5][6]} />
              <Cell value={board_sample.board[5][7]} />
            </tr>
            <tr>
              <Cell value={board_sample.board[6][0]} />
              <Cell value={board_sample.board[6][1]} />
              <Cell value={board_sample.board[6][2]} />
              <Cell value={board_sample.board[6][3]} />
              <Cell value={board_sample.board[6][4]} />
              <Cell value={board_sample.board[6][5]} />
              <Cell value={board_sample.board[6][6]} />
              <Cell value={board_sample.board[6][7]} />
            </tr>
            <tr>
              <Cell value={board_sample.board[7][0]} />
              <Cell value={board_sample.board[7][1]} />
              <Cell value={board_sample.board[7][2]} />
              <Cell value={board_sample.board[7][3]} />
              <Cell value={board_sample.board[7][4]} />
              <Cell value={board_sample.board[7][5]} />
              <Cell value={board_sample.board[7][6]} />
              <Cell value={board_sample.board[7][7]} />
            </tr>

            {/* <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr> */}
          </table>
        </div>
      </div>
    )
  }
}

export default Board
