import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import Board from './Board'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Home/>
        <div id="game">
          <Sidebar/>
          <Board/>
        </div>
      </React.Fragment>
    )
  }
}

export default App