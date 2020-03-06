import React, { Component } from 'react';
import Header from './Component-Folder/Header';
import Main from './Component-Folder/Main';


import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
