import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <MyReads />
      </div>
    )
  }
}

export default BooksApp
