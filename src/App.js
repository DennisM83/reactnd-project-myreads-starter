import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads';
import Search from './Search';
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    booklist: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((booklist) => {
      this.setState({ booklist })
    }) 
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <MyReads
            />
            <BookShelf 
              bookList={this.state.booklist} 
            />
          </div>
        )}/>
        <Route path="/search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp
