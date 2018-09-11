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
          x: 0,
          y: 0
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "commercial",
          x: 1,
          y: 0
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "industrial",
          x: 0,
          y: 1
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "road",
          x: 1,
          y: 1
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "powerline",
          x: 0,
          y: 2
        },
        {
          iconWidth: 100,
          iconHeight: 60,
          name: "bulldoze",
          x: 1,
          y: 2
        },
      ]
    }
  }
  render(){
    return (
      <div className="sidebar">
        <svg id="sidebar-svg">
          {this.state.menuIcons.map(icon => {
            return <MenuIcon key={icon.name} name={icon.name} x={icon.x} y={icon.y} width={icon.iconWidth} height={icon.iconHeight}/>
          })}
        </svg>
      </div>
    )
  }
}