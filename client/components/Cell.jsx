import React from 'react'

export default class Cell extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      size: 36,
      x: 0,
      y: 0,
      value: null,
      styles: {
        fill: "white",
        fillOpacity: 1
      }
    }
    this.changeFill = this.changeFill.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    this.setState({
      size: this.props.size,
      x: this.props.x * this.state.size,
      y: this.props.y * this.state.size,
      value: this.props.value,
      styles: {
        fill: this.changeFill(this.props.value),
        fillOpacity: 1,
        stroke: "black",
        strokeWidth: 0
      }
    })
  }

  changeFill(sw){
    let fill = "white"
    switch(sw) {
      case null:
        fill = "lightgrey"
        break;
      case "house":
        fill = "green"
        break;
      case "shop":
        fill = "blue"
        break;
    }
    return fill;
  }

  handleHover() {
    let styles = Object.assign({}, this.state.styles)
    //styles.strokeWidth = 3;
    styles.fillOpacity = 0.7;
    this.setState({styles: styles})
  }

  handleMouseLeave() {
    let styles = Object.assign({}, this.state.styles)
    //styles.strokeWidth = 0;
    styles.fillOpacity = 1;
    this.setState({styles: styles})
  }

  render() {
    return(
      <rect onMouseOver={this.handleHover} onMouseLeave={this.handleMouseLeave} style={this.state.styles} width={this.state.size} height={this.state.size} x={this.state.x} y={this.state.y}/>
    )
  }
}

//fill={this.state.styles.fill}