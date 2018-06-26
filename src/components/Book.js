import React from 'react';
import PropTypes from 'prop-types';
import StatusList from './StatusList'

class Book extends React.Component{

  static propTypes = {
    book: PropTypes.object.isRequired,
    optionsList: PropTypes.array.isRequired,
    onUpdateBookshelf : PropTypes.func.isRequired
  };

  render() {

    const {book, optionsList, onUpdateBookshelf} = this.props;

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{
            width: 123,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}/>
          <StatusList optionsList={optionsList}
                      book={book}
                      onUpdateBookshelf={onUpdateBookshelf}/>
        </div>
        <div className='book-title'>{book.title}</div>
        {
          book.authors.map((author) => (
            <div key={author} className='book-authors'>{author}</div>
          ))
        }
      </div>
    )
  }
}

export default Book