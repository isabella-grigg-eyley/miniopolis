import React from 'react'

export default class Infobar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: "nothing"
    }
  }
  render() {
    return (
      <div>
        <p id="infobar">
          <span id="infobar-left">Miniopolis</span>
          <span id="infobar-centre">Funds: $100000</span>
          <span id="infobar-right">Selected: {this.state.selected}</span>
        </p>
      </div>
    )
  }
}