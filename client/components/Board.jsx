import React from 'react'

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cells: [
        "house",
        "house",
        "road",
        null,
        null,
        "road"
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <ul>
        {this.state.cells.map(cell => {
          return <li key={cell} >{cell}</li>
        })}
        </ul>
      </React.Fragment>
    )
  }
}

export default Board