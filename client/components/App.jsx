import React from 'react'
import FrontPage from './FrontPage'
import Home from './Home'
import Board from './Board'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FrontPage/>
        {/* <h1>App</h1>
        <Home/>
        <Board/> */}
      </React.Fragment>
    )
  }
}

export default App