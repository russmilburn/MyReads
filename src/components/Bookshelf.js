import React from 'react';
import PropTypes from 'prop-types';
import StatusList from './StatusList'
import Book from './Book';

class Bookshelf extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    optionsList: PropTypes.array.isRequired,
    onUpdateBookshelf : PropTypes.func.isRequired
  };
  
  render() {
    const {title, books, optionsList, onUpdateBookshelf} = this.props;
    
    return (
      <div>
        <h2 className='bookshelf-title'>{title}</h2>
        <ol className='books-grid'>
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book}
                    optionsList={optionsList}
                    onUpdateBookshelf={onUpdateBookshelf}/>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Bookshelf