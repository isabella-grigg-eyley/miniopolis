import React from 'react'

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name || "Geraldine",
      icon: this.props.icon || "Icon",
      x: this.props.x * this.props.width || 0,
      y: this.props.y * this.props.height || 0
    }
  }

  componentDidMount(){
    this.setState({
      name: this.props.name,
      icon: this.props.icon,
      x: this.props.x * this.props.width,
      y: this.props.y * this.props.height
    })
  }

  render(){
    return (
      <div className="menuIcon" onClick={() => {
        this.props.updateSelected(this.state.name)
      }
    } >
        <h3>{this.props.icon}</h3>
      </div>
      // <rect x={this.state.x} y={this.state.y} height={this.state.height} width={this.state.width} fill={"white"} stroke="black" strokeWidth="3px"/>
    )
  }
}