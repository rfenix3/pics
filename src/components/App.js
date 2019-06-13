import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
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
