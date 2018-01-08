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
        <div className="popover">
          <div className="background"></div>
          <div className="reactions">
            <img src={process.env.PUBLIC_URL + '/emoticons/laughing.png'} alt="teste"></img>
            <img src={process.env.PUBLIC_URL + '/emoticons/in-love.png'} alt="teste"></img>
            <img src={process.env.PUBLIC_URL + '/emoticons/crying.png'} alt="teste"></img>
            <img src={process.env.PUBLIC_URL + '/emoticons/rich.png'} alt="teste"></img>
            <img src={process.env.PUBLIC_URL + '/emoticons/angry.png'} alt="teste"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default App;