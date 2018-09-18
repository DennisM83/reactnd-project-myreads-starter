import React, { Component } from 'react'
import Search from './Search'
import BookShelf from './BookShelf'
class myReads extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf />
                        <BookShelf />
                        <BookShelf />
                    </div>
                </div>
                <div className="open-search">
                    <a href="#search" onClick={this.props.onNav/*() => this.setState({ showSearchPage: true })*/}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default myReads;