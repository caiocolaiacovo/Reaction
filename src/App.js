import React, { Component } from 'react';
import avatar from './avatar.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="top">
            <input type="text" placeholder="Buscar"/>
        </div>
        <div className="app">
            <div className="post">
                <div className="header">
                    <img src={avatar} alt="" className="avatar"></img>
                    <div className="avatar-name">caiocolaiacovo</div>
                </div>
                <div className="photo">
                    <img src="https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg" />
                </div>
                <div className="interaction">
                    <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                    <i className="fa fa-comment-o fa-lg" aria-hidden="true"></i>
                    <div className="likes-quantity">10 curtidas</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
