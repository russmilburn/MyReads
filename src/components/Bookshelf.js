import React from 'react';
import PropTypes from 'prop-types';
import StatusList from './StatusList'

class Bookshelf extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    optionsList: PropTypes.array.isRequired,
  };
  
  render() {
    const {title, books, optionsList} = this.props;
    
    return (
      <div>
        <h2 className='bookshelf-title'>{title}</h2>
        <ol className='books-grid'>
          {books.map((book) => (
            //TODO break out to component
            <li key={book.id}>
              <div className='book'>
                <div className='book-top'>
                  <div className='book-cover' style={{
                    width: 123,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}/>
                  <StatusList optionsList={optionsList}/>
                </div>
                <div className='book-title'>{book.title}</div>
                {
                  book.authors.map((author) =>(
                    <div className='book-authors'>{author}</div>
                  ))
                }
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Bookshelf