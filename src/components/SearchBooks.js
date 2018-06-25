import React from 'react';
import * as BooksAPI from './../services/BooksAPI';

class SearchBooks extends React.Component {
  
  state = {
    query: '',
    books: []
  };
  
  updateSearch(query) {
    BooksAPI.search(query, 20)
      .then((data) => {
        console.log(data);
      })
  }
  
  clearSearch() {
  
  }
  
  render() {
    return (
      <div>Search page
        <button onClick={() => {
          this.updateSearch('Android')
        }}>Search</button>
      </div>
    )
  }
}

export default SearchBooks