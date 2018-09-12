import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Board from './Board'
import Infobar from './Infobar';

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header/>
        <div id="game-wrapper">
          <Infobar/>
          <div id="game">
            <Sidebar/>
            <Board/>
          </div>
        </div>
      </div>
    )
  }
}

export default App