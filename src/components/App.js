import React from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID b11b27b5346cfdf271be1228d9f5b74a47e7b2492d0705cdef895743825ba8a5'
      }
    });
  }

  render() {
    return (
      <div className="ui container">
        <header className="App">
          <SearchBar onSubmit={this.onSearchSubmit}/>
       </header>
     </div>
   );
  }
}

export default App;
