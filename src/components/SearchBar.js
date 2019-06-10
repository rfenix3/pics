import React from 'react';


class SearchBar extends React.Component {
  
  // onInputChange() is a callback function
  // the property 'onChange' is a special property name. Others are 'onClick' and 'onSubmit'.
  // callback naming convention. 'on' then the name of the element 'Input', then the event we are watching 'Change'.
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;