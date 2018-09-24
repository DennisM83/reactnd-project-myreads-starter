import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class Search extends Component {

  state = {
    query: '',
    rummageBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateRummageBooks(query);
  }

  updateRummageBooks = (query) => {
    if (query){
      BooksAPI.search(query).then((rummageBooks) => {
        rummageBooks.error ?
          this.setState({ rummageBooks: [] })
        :
          this.setState({ rummageBooks: rummageBooks })
      })
    } else {
      this.setState({ rummageBooks: [] })
    }
  }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(e) =>
                    this.updateQuery(e.target.value)
                  }
                  />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {this.state.rummageBooks.map(rummageBooks => {
                    let defaultShelf = "none";

                    this.props.booklist.map(book => (
                      book.id === rummageBooks.id ? 
                      defaultShelf = book.shelf
                      :
                      ''
                    )); 

                    return (
                        <li key={rummageBooks.id}>
                          <Books
                            book={rummageBooks}
                            presentShelf={defaultShelf}
                            changeShelf={this.props.changeShelf}
                          />
                        </li>
                      );
                    }) 
                  }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;

