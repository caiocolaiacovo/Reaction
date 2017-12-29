import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Moments from './components/Moments';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Moments/>
      </div>
    );
  }
}

export default App;