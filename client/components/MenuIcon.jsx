import React from 'react'

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name || "Geraldine",
      x: this.props.x * this.props.width || 0,
      y: this.props.y * this.props.height || 0,
      width: this.props.width || 100,
      height: this.props.height || 60
    }
  }

  componentDidMount(){
    this.setState({
      name: this.props.name,
      x: this.props.x * this.props.width,
      y: this.props.y * this.props.height,
      width: this.props.width,
      height: this.props.height
    })
  }

  render(){
    return (
      <rect x={this.state.x} y={this.state.y} height={this.state.height} width={this.state.width} fill={"white"} stroke="black" strokeWidth="3px"/>
    )
  }
}