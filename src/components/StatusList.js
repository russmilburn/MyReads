import React from 'react';
import PropTypes from 'prop-types';

class StatusList extends React.Component {
  
  static propTypes = {
    optionsList: PropTypes.array.isRequired,
    book : PropTypes.object.isRequired,
    onUpdateBookshelf: PropTypes.func.isRequired
  };
  
  render() {
    const {optionsList, book, onUpdateBookshelf} = this.props;
    return (
      <div className='book-shelf-changer'>
        <select value={book.shelf} onChange={(event)=>{
          onUpdateBookshelf(book, event.target.value);
        }}>
          <option value='move' disabled >Move to...</option>
          {optionsList.map((option) => (
            <option key={option.id} value={option.id}>{option.displayName}</option>
          ))}
          <option value='none'>None</option>
        </select >
      </div>
    )
  }
}

export default StatusList;