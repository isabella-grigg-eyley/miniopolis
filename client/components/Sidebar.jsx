import React from 'react'
import MenuIcon from './MenuIcon'

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      menuIcons: [
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "residential",
          icon: "Res",
          x: 0,
          y: 0
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "commercial",
          icon: "Comm",
          x: 1,
          y: 0
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "industrial",
          icon: "Ind",
          x: 0,
          y: 1
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "road",
          icon: "Road",
          x: 1,
          y: 1
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "powerline",
          icon: "Power",
          x: 0,
          y: 2
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "bulldoze",
          icon: "B",
          x: 1,
          y: 2
        },
      ]
    }
  }
  render(){
    return (
      <div className="sidebar">
        {/* <svg id="sidebar-svg">
          {this.state.menuIcons.map(icon => {
            return <MenuIcon key={icon.name} name={icon.name} x={icon.x} y={icon.y} width={icon.iconWidth} height={icon.iconHeight}/>
          })}
        </svg> */}
        {this.state.menuIcons.map(icon => {
            return <MenuIcon updateSelected={this.props.updateSelected} key={icon.name} name={icon.name} icon={icon.icon} x={icon.x} y={icon.y}/>
          })}
      </div>
    )
  }
}