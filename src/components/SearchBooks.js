import React from 'react';
import * as BooksAPI from './../services/BooksAPI';
import {Link} from 'react-router-dom';
import Book from "./Book";
import PropTypes from "prop-types";
import {isValid} from "../utils/helpers";

class SearchBooks extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    optionsList: PropTypes.array.isRequired,
    onUpdateBookshelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    searchResults: [],
    books: this.props.books,
  };

  updateSearch(query) {
    this.setState(() => ({
      query: query
    }));

    if (query === '') {
      this.clearSearch();
    } else {
      BooksAPI.search(query, 20)
        .then((data) => {
          console.log(data);
          if (data.error === 'empty query') {
            return;
          } else {
            data.forEach((item) => {
              let shelf = this.getBookshelf(item.id, item.title);
              item.shelf = shelf;
            });
            this.setState(() => ({
              searchResults: data
            }))
          }
        })
    }
  }

  getBookshelf(id, title) {
    const books = this.state.books;
    console.log(id, title);
    const book = books.find((b) => (b.id === id));
    if (!isValid(book)) {
      return 'none'
    } else {
      return book.shelf
    }
  }

  clearSearch() {
    this.setState(() => ({
      searchResults: []
    }))
  }

  render() {
    const {searchResults} = this.state;

    const {optionsList, onUpdateBookshelf} = this.props;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>

          <Link className='close-search' to='/'></Link>
          <div className='search-books-input-wrapper'>
            <input type='text' value={this.state.query}
                   onChange={(event) => {
                     this.updateSearch(event.target.value)
                   }}
                   placeholder='Search for Title or by author'/>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {searchResults.map((book) => (
              <li key={book.id}>
                <Book book={book}
                      optionsList={optionsList}
                      onUpdateBookshelf={onUpdateBookshelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks