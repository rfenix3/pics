import React from 'react';
import './App.css';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container">
        <header className="App">
          <SearchBar onSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
       </header>
     </div>
   );
  }
}

export default App;
