import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Board from './Board'

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header/>
        <div id="game">
          <Sidebar/>
          <Board/>
        </div>
      </div>
    )
  }
}

export default App