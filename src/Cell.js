import React, { Component } from 'react'

class Cell extends Component {
  assignCellRowsAndColumns = () => {
    let selectedCoordinates = this.props.coordinates
    this.props.check(selectedCoordinates)
  }

  render() {
    return <td onClick={this.assignCellRowsAndColumns}>{this.props.value}</td>
  }
}

export default Cell
