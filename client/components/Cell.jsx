import React from 'react'

export default class Cell extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      size: 36,
      x: 0,
      y: 0,
      value: null,
      hasBuilding: false,
      styles: {
        fill: "white",
        fillOpacity: 1
      },
      hasBuildingStyles: {
        font: "bold 36px sans-serif"
      }
    }
    this.changeFill = this.changeFill.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleClick = this.handleClick.bind(this)
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
        strokeWidth: 0.1
      }
    })
  }

  changeFill(sw = null){
    let fill = "white"
    switch(sw) {
      case "residential":
        fill = "lightgreen"
        break;
      case "commercial":
        fill = "lightblue"
        break;
      case "industrial":
        fill = "orange"
        break;
      case "road":
        fill = "grey"
        break;
      case "powerline":
        fill = "yellow"
        break;
      case "nothing":
        fill = "lightgrey"
        break;
      case "bulldoze":
        fill = "lightgrey"
        this.setState({
          hasBuilding: false
        })
        break;
      case null:
        fill = "lightgrey"
        break;
    }
    return fill;
  }

  /* Hover Effect */

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

  /* END Hover Effect */

  handleClick(){
    let selected = this.props.selected
    console.log(selected)
    let styles = Object.assign({}, this.state.styles)
    styles.fill = this.changeFill(selected)
    this.setState({
      value: selected == "nothing" ? this.state.value : selected,
      styles: styles
    }, () => {
      this.props.updateCell(this.state.x, this.state.y, this.state.value)
      this.zonedRandomSpawn(this.state.value)
      }
    )
  }

  zonedRandomSpawn(value){
    if (value == "residential" || value == "commercial" || value == "industrial" ) {
      let int = setInterval(() => {
        if (Math.random() > 0.9) {
          this.setState({
            hasBuilding: true
          }, () => {
            clearInterval(int)
          })
        }
      } ,3000)
    }
  }

  render() {
    return(
      <React.Fragment>
        <rect onMouseOver={this.handleHover} onMouseLeave={this.handleMouseLeave} onMouseDown={this.handleClick} style={this.state.styles} width={this.state.size} height={this.state.size} x={this.state.x} y={this.state.y}/>

        {/* if hasBuilding, add "B" */}
        {this.state.hasBuilding ? 
          <text x={this.state.x} y={this.state.y + 18} styles={this.state.hasBuildingStyles}>B</text>
          : null
        }
      </React.Fragment>
    )
  }
}

//fill={this.state.styles.fill}