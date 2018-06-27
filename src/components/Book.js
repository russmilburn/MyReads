import React from 'react';
import PropTypes from 'prop-types';
import StatusList from './StatusList'

class Book extends React.Component{

  static propTypes = {
    book: PropTypes.object.isRequired,
    optionsList: PropTypes.array.isRequired,
    onUpdateBookshelf : PropTypes.func.isRequired
  };

  isValid(param) {
    if (param !== null && typeof param !== 'undefined' && param !== '' ){
      return true;
    } else {
      return false;
    }
  };

  getAuthorList(){
    const authorList = this.props.book.authors;
    if (this.isValid(authorList)){
      return (
        authorList.map((author) => (
          <div key={author} className='book-authors'>{author}</div>
        ))
      )
    }
  }

  getBookCover(){
    if (this.isValid(this.props.book.imageLinks)) {
      return this.props.book.imageLinks.thumbnail;
    }
  }

  render() {

    const {book, optionsList, onUpdateBookshelf} = this.props;

    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{
            width: 123,
            height: 193,
            backgroundImage: `url(${this.getBookCover()})`
          }}/>
          <StatusList optionsList={optionsList}
                      book={book}
                      onUpdateBookshelf={onUpdateBookshelf}/>
        </div>
        <div className='book-title'>{book.title}</div>
        {
          this.getAuthorList()
        }
      </div>
    )
  }
}

export default Book