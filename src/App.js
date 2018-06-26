import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './services/BooksAPI';
import Bookshelf from './components/Bookshelf';
import {Link} from 'react-router-dom';

class App extends Component {
  
  
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
    // console.log('componentDidMount');
    this.getAllBooks();
  }
  
  updateBookStatus(book, updatedStatus) {
    BooksAPI.update(book, updatedStatus)
      .then(() => {
        //TODO REFACTOR this is inefficient app will call the server after every change
        this.getAllBooks();
      })
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
                  onUpdateBookshelf={this.updateBookStatus.bind(this)}/>
              ))}
            </div>
            <div className='open-search'>
              <Link to='/search'></Link>
            </div>
          </div>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchBooks/>
        )}/>
      </div>
    );
  }
}

export default App;
