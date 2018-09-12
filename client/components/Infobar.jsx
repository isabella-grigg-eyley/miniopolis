import React from 'react'

export default class Infobar extends React.Component {
  render() {
    return (
      <div>
        <p id="infobar">
          <span id="infobar-left">Miniopolis</span>
          <span id="infobar-centre">Funds: $100000</span>
          <span id="infobar-right">Selected: {this.props.selected}</span>
        </p>
      </div>
    )
  }
}