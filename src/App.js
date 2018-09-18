import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    screen: 'reads'
  }
  render() {
    return (
      <div className="app">
      {this.state.screen === 'reads' && (
          <MyReads 
            onNav={() => {
              this.setState({ screen: 'search' })
            }}
          />
      )}
      {this.state.screen === 'search' && (
          <Search />
      )}
      </div>
    )
  }
}

export default BooksApp
