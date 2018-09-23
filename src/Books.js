import React, { Component } from 'react'

class Books extends Component {

    render() {
        const eachBook = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${eachBook.book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => this.props.changeShelf(
                            this.props.book, e.target.value
                        )}
                        value={this.props.book.shelf}
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