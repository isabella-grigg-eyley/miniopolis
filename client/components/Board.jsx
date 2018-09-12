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
  }
  randomCellType(){
    let result = Math.floor(Math.random() * 3)
    let value;
    switch(result) {
      case 0:
        value = null;
        break;
      case 1:
        value = "house";
        break;
      case 2:
        value = "shop";
        break;
    }
    return value;
  }

  generateCells(){
    let width = this.state.cellsWide
    let height = this.state.cellsHigh
    let cells = []
    for (let x = 0; x < width; x++){
      for (let y = 0; y < height; y++) {
        cells.push({x: x, y: y, value: this.randomCellType()})
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
    console.log({boardHeight, boardWidth})
    this.setState({
      boardWidth: boardWidth,
      boardHeight: boardHeight
    })
  }

  render() {
    return (
      <React.Fragment>
        <svg height={this.state.boardHeight} width={this.state.boardWidth} id="board">
          {this.state.cells.map((cell, i) => {
            return <Cell key={i} x={cell.x} y={cell.y} value={cell.value} size={this.state.cellSize}/>
          })}
        </svg>
      </React.Fragment>
    )
  }
}

export default Board