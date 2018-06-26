import React from 'react';
import * as BooksAPI from './../services/BooksAPI';
import {Link} from 'react-router-dom';

class SearchBooks extends React.Component {
  
  state = {
    query: '',
    books: []
  };
  
  updateSearch(query) {
    BooksAPI.search(query, 20)
      .then((data) => {
        // console.log(data);
      })
  }
  
  clearSearch() {
  
  }
  
  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>

          <Link className='close-search' to='/'></Link>
          <div className='search-books-input-wrapper'>
            <input type='text' placeholder='Search for Title or by author'/>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'/>
        </div>
      </div>
    )
  }
}

export default SearchBooks