import React, { Component } from 'react'

class Cell extends Component {
  tellBoardToCheck = () => {
    let theRow = this.props.row
    let theColumn = this.props.column
    this.props.check(theRow, theColumn)
  }

  tellBoardToFlag = event => {
    let theRow = this.props.row
    let theColumn = this.props.column
    event.preventDefault()
    this.props.flag(theRow, theColumn)
  }

  classNames = {
    '*': 'bomb',
    F: 'flagged',
    '@': 'flagged',
    _: 'open',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight'
  }

  symbols = { '*': '💥', F: '⛳️', '@': '⛳️', _: ' ' }
  render() {
    return (
      <td onClick={this.tellBoardToCheck} onContextMenu={this.tellBoardToFlag}>
        {this.symbols[this.props.value] || this.props.value}
      </td>
    )
  }
}

export default Cell
