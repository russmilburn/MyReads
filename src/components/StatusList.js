import React from 'react';
import PropTypes from 'prop-types';

class StatusList extends React.Component {
  
  static propTypes = {
    optionsList: PropTypes.array.isRequired,
    book : PropTypes.object.isRequired,
    onUpdateBookshelf: PropTypes.func.isRequired
  };

  isValid(param) {
    if (param !== null && typeof param !== 'undefined' && param !== '' ){
      return true;
    } else {
      return false;
    }
  };

  checkShelf(){
    if(this.isValid(this.props.book.shelf)){
      return this.props.book.shelf;
    }
    return 'none';
  }
  
  render() {
    const {optionsList, book, onUpdateBookshelf} = this.props;
    return (
      <div className='book-shelf-changer'>
        <select value={this.checkShelf()} onChange={(event)=>{
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