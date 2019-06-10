import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className="ui container">
      <header className="App">
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
