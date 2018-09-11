import React from 'react'
import Cell from './Cell'

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cells: [],
      x: 0,
      y: 0,
      size: 1000,
      cellsAcross: 25
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
    let size = this.state.cellsAcross
    let cells = []
    for (let i = 0; i < size; i++){
      for (let j = 0; j < size; j++) {
        cells.push({x: i, y: j, value: this.randomCellType()})
      }
    }
    this.setState({
      cells: cells
    })
  }

  componentDidMount(){
    this.generateCells(10);
    this.setState({
      x: window.innerWidth/2 - this.state.size/2,
      y: window.innerHeight/2 - this.state.size/2
    })
  }

  render() {
    let k = -1
    return (
      <React.Fragment>
        <svg height={this.state.size} width={this.state.size} id="board">
          {this.state.cells.map(cell => {
            k++
            return <Cell key={k} x={cell.x} y={cell.y} value={cell.value} size={this.state.size / this.state.cellsAcross}/>
          })}
        </svg>
      </React.Fragment>
    )
  }
}

export default Board