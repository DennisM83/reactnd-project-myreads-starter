import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to="/search" /*onClick={this.props.onNav() => this.setState({ showSearchPage: true })}*/>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default myReads;