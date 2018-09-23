import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {
    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*written by Maeva NAP https://www.youtube.com/watch?v=i6L2jLHV9j8 */}
                        {this.props.bookList.filter(book => book.shelf === 'currentlyReading').map(book => 
                        (<li key={book.id}>
                            <Books
                                book={book}
                                changeShelf={this.props.changeShelf}
                                presentShelf='currentlyReading'
                            />
                        </li>))}
                    </ol>
                </div>
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*written by Maeva NAP https://www.youtube.com/watch?v=i6L2jLHV9j8 */}
                        {this.props.bookList.filter(book => book.shelf === 'wantToRead').map(book =>
                            (<li key={book.id}>
                                <Books
                                    book={book}
                                    changeShelf={this.props.changeShelf}
                                    presentShelf='wantToRead'
                                />
                            </li>))}
                    </ol>
                </div>
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*written by Maeva NAP https://www.youtube.com/watch?v=i6L2jLHV9j8 */}
                        {this.props.bookList.filter(book => book.shelf === 'read').map(book =>
                            (<li key={book.id}>
                                <Books
                                    book={book}
                                    changeShelf={this.props.changeShelf}
                                    presentShelf='read'
                                />
                            </li>))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;