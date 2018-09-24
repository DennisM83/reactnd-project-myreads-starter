import React, { Component } from 'react'

class Books extends Component {
    render() {
        const eachBook = this.props
        const bookImage = eachBook.book.imageLinks ? eachBook.book.imageLinks.thumbnail : '';
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => this.props.changeShelf (
                            this.props.book, e.target.value
                        )}
                        value={this.props.presentShelf}
                        >
                            <option value="move">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{eachBook.book.title}</div>
                <div className="book-authors">{eachBook.book.authors}</div>
            </div>
        );
    }

}

export default Books;