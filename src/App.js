import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './services/BooksAPI';
import Bookshelf from './components/Bookshelf';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.updatedBookStatus = this.updateBookStatus.bind(this);
  }

  state = {
    bookshelves: [
      {
        displayName: 'Currently Reading',
        id: 'currentlyReading',
      },
      {
        displayName: 'Want to Read',
        id: 'wantToRead',
      },
      {
        displayName: 'Read',
        id: 'read',
      }
    ],
    books: []

  };

  componentDidMount() {
    this.getAllBooks();
  }

  updateBookStatus(book, updatedStatus) {
    if (book.shelf !== updatedStatus) {
      BooksAPI.update(book, updatedStatus)
        .then(() => {
          book.shelf = updatedStatus;
          this.setState((currentState) => ({
            books : currentState.books.filter(b => b.id !== book.id).concat([book])
          }))
        })
    }
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then((bookList) => {
        // console.log('getBookList' + bookList);
        this.setState((currentState) => ({
          books: bookList
        }))
      })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>My Reads</h1>
            </div>

            <div>
              {this.state.bookshelves.map((shelf) => (
                <Bookshelf
                  key={shelf.id}
                  title={shelf.displayName}
                  books={this.state.books.filter((books) => (
                    books.shelf === shelf.id
                  ))}
                  optionsList={this.state.bookshelves}
                  onUpdateBookshelf={this.updatedBookStatus}/>
              ))}
            </div>
            <div className='open-search'>
              <Link to='/search'></Link>
            </div>
          </div>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchBooks optionsList={this.state.bookshelves}
                       onUpdateBookshelf={this.updatedBookStatus}/>
        )}/>
      </div>
    );
  }
}

export default App;
