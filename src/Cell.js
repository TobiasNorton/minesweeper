import React, { Component } from 'react'

class Cell extends Component {
  addClickedClassToCell = () => {
    if (
      this.symbols[this.props.value] === 'F' ||
      this.symbols[this.props.value] === '*' ||
      this.symbols[this.props.value] === '@' ||
      this.symbols[this.props.value] === '_' ||
      this.symbols[this.props.value] === '1' ||
      this.symbols[this.props.value] === '2' ||
      this.symbols[this.props.value] === '3' ||
      this.symbols[this.props.value] === '4' ||
      this.symbols[this.props.value] === '5' ||
      this.symbols[this.props.value] === '6' ||
      this.symbols[this.props.value] === '7' ||
      this.symbols[this.props.value] === '8'
    ) {
      return 'played'
    }
  }

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

  // classNames = {
  //   '*': 'bomb',
  //   F: 'flagged',
  //   '@': 'flagged',
  //   _: 'open',
  //   '1': 'one',
  //   '2': 'two',
  //   '3': 'three',
  //   '4': 'four',
  //   '5': 'five',
  //   '6': 'six',
  //   '7': 'seven',
  //   '8': 'eight'
  // }

  symbols = { '*': '💥', F: '🚩', '@': '🚩', _: '_' }
  render() {
    return (
      <td
        className={this.addClickedClassToCell()}
        onClick={this.tellBoardToCheck}
        onContextMenu={this.tellBoardToFlag}
        // classNames={this.classNames[this.props.value]}
      >
        {this.symbols[this.props.value] || this.props.value}
      </td>
    )
  }
}

export default Cell
