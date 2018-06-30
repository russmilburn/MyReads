import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = ({title, books, optionsList, onUpdateBookshelf}) => {
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
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  optionsList: PropTypes.array.isRequired,
  onUpdateBookshelf : PropTypes.func.isRequired
};

export default Bookshelf