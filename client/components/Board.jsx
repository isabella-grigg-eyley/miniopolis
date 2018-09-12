import React from 'react'
import Cell from './Cell'

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cells: [],
      boardWidth: 900,
      boardHeight: 720,
      // size: 720,
      cellSize: 36,
      cellsWide: 29,
      cellsHigh: 19
    }
    this.generateCells = this.generateCells.bind(this)
    this.updateCell = this.updateCell.bind(this)
  }
  // randomCellType(){
  //   let result = Math.floor(Math.random() * 3)
  //   let value;
  //   switch(result) {
  //     case 0:
  //       value = null;
  //       break;
  //     case 1:
  //       value = "house";
  //       break;
  //     case 2:
  //       value = "shop";
  //       break;
  //   }
  //   return value;
  // }
  /* INIT */
  generateCells(){
    let width = this.state.cellsWide
    let height = this.state.cellsHigh
    let cells = []
    for (let x = 0; x < width; x++){
      for (let y = 0; y < height; y++) {
        cells.push({x: x, y: y, value: null})
      }
    }
    this.setState({
      cells: cells
    })
  }

  componentDidMount(){
    this.generateCells();
    let boardWidth = this.state.cellSize * this.state.cellsWide
    let boardHeight = this.state.cellSize * this.state.cellsHigh
    this.setState({
      boardWidth: boardWidth,
      boardHeight: boardHeight
    })
  }

  /* END INIT */

  updateCell(x, y, value){
    console.log("updating cell in board")
    let cells = this.state.cells
    cells.map(cell => {
      if (cell.x === x && cell.y === y) {
        console.log(`Found! X: ${cell.x}, Y: ${cell.y}. Old value: ${cell.value}. New value: ${value}`)
        cell.value = value
      }
    })
    this.setState({
      cells: cells
    })
  }

  render() {
    return (
      <React.Fragment>
        <svg height={this.state.boardHeight} width={this.state.boardWidth} id="board">
          {this.state.cells.map((cell, i) => {
            return <Cell key={i}  selected={this.props.selected} x={cell.x} y={cell.y} value={cell.value} size={this.state.cellSize} updateCell={this.updateCell}/>
          })}
        </svg>
      </React.Fragment>
    )
  }
}

export default Board