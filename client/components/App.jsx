import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Board from './Board'
import Infobar from './Infobar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "nothing"
    }
    this.updateSelected = this.updateSelected.bind(this)
  }

  updateSelected(selected) {
    this.setState({
      selected: selected
    })
  }

  render() {
    return (
      <div id="wrapper">
        <Header/>
        <div id="game-wrapper">
          <Infobar selected={this.state.selected}/>
          <div id="game">
            <Sidebar updateSelected={this.updateSelected}/>
            <Board/>
          </div>
        </div>
      </div>
    )
  }
}

export default App