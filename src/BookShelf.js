import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {
    render () {
        let title = [
            {name: 'Currently Reading '}, 
            {name: 'Want To Read '}, 
            {name:'Read'}
        ]
        let shelfTitle = title.filter(title => title.name.length > 15).map(title => title.name, title.index)
        console.log(this.props.bookList)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*written by Maeva NAP https://www.youtube.com/watch?v=i6L2jLHV9j8 */}
                        {this.props.bookList.filter(book => book.shelf === 'read').map(book => 
                        (<li key={book.id}>
                            <Books
                                name = {book.name}
                            />
                        </li>))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;