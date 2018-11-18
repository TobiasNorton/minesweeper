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
