import React, { Component } from 'react'

class Cell extends Component {
  assignCellRowsAndColumns = () => {
    let theRow = this.props.row
    let theColumn = this.props.column
    this.props.check(theRow, theColumn)
  }

  render() {
    return <td onClick={this.assignCellRowsAndColumns}>{this.props.value}</td>
  }
}

export default Cell
