import React from 'react'
import { Route } from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads />
        )}/>
        <Route path="/search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp
