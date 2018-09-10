import React from 'react'
import FrontPage from './FrontPage'
import Home from './Home'
import Board from './Board'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <FrontPage/> */}
        <Home/>
        <Board/>
      </React.Fragment>
    )
  }
}

export default App