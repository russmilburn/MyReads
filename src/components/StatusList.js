import React from 'react';
import PropTypes from 'prop-types';

class StatusList extends React.Component {
  
  static propTypes = {
    optionsList: PropTypes.array.isRequired
  };
  
  render() {
    const {optionsList} = this.props;
    return (
      <div className='book-shelf-changer'>
        <select>
          <option value='move' disabled='true'>Move to...</option>
          {optionsList.map((option) => (
            <option value={option.id}>{option.displayName}</option>
          ))}
          <option value='none'>None</option>
        </select>
      </div>
    )
  }
}

export default StatusList;