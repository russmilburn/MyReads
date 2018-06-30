import React from 'react';
import PropTypes from 'prop-types';
import {isValid} from "../utils/helpers";

const StatusList = ({optionsList, book, onUpdateBookshelf}) =>{
  // const {optionsList, book, onUpdateBookshelf} = this.props;

  function checkShelf(){
    console.log('shelf' + isValid(book.shelf));
    if(isValid(book.shelf)){
      return book.shelf;
    }
    return 'none';
  }

  return (
    <div className='book-shelf-changer'>
      <select value={checkShelf()} onChange={(event)=>{
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
};

// class StatusList extends React.Component {
//
//   static
//
//
//
//   render() {
//
//
//   }
// }

StatusList.propTypes = {
  optionsList: PropTypes.array.isRequired,
  book : PropTypes.object.isRequired,
  onUpdateBookshelf: PropTypes.func.isRequired
};

export default StatusList;