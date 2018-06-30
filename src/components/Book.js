import React from 'react';
import PropTypes from 'prop-types';
import StatusList from './StatusList';
import {isValid} from "../utils/helpers";


const Book = ({book, optionsList, onUpdateBookshelf}) => {
  const {imageLinks, title, authors} = book;

  const bookCover =  imageLinks ? imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover';

  function getAuthorList(){
    if (isValid(authors)){
      return (
        authors.map((author) => (
          <div key={author} className='book-authors'>{author}</div>
        ))
      )
    }
  }

  return (
    <div className='book'>
      <div className='book-top'>
        <div className='book-cover' style={{
          width: 123,
          height: 193,
          backgroundImage: `url(${bookCover})`
        }}/>
        <StatusList optionsList={optionsList}
                    book={book}
                    onUpdateBookshelf={onUpdateBookshelf}/>
      </div>
      <div className='book-title'>{title}</div>
      {getAuthorList()}
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  optionsList: PropTypes.array.isRequired,
  onUpdateBookshelf : PropTypes.func.isRequired
};

export default Book