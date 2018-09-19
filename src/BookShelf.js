import React, { Component } from 'react'
import Books from './Books'
class BookShelf extends Component {
    render () {
        console.log(this.props.bookList)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.bookList.map(book => 
                        (<li key={book.id}>
                            <Books />
                        </li>))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;