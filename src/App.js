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

  changeShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(() => {
        this.setState(state => ({ books: state.booklist.filter(b => b.id !== book).concat(book)}))
    })
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <MyReads
            />
            <BookShelf 
              bookList={this.state.booklist} 
              changeShelf={this.changeShelf}
            />
          </div>
        )}/>
        <Route path="/search" render={() => (
          <Search 
            changeShelf={this.changeShelf}
            booklist={this.state.booklist}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
