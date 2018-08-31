import React from 'react'

export default class FrontPage extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      startGame: false
    }
    this.handleStart = this.handleStart.bind(this)
  }

  handleStart(e) {
    e.preventDefault();
    this.setState({
      startGame: true
    })
  }

  render() {
    return (
      <div className="page">
        <div className="front-page-box">
          <h1>Miniopolis</h1>
          <form onSubmit={this.handleStart}>
            <button>Start New City</button>
          </form>
          {this.state.startGame ? <h2>you thot was game</h2> : <h2>not game</h2>}
        </div>
      </div>
    )
  }
}