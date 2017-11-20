import React, { Component } from 'react';
import avatar from './avatar.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="app-moments">
            <div className="moment">
                <div className="moment-header">
                    <img src={avatar} alt="" className="avatar-picture"></img>
                    <div className="avatar-name"><a href="#">caiocolaiacovo</a></div>
                </div>
                <div className="moment-picture">
                    {/*<img src="https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"></img>*/}
                    {/*<img src="http://cdn7.viralscape.com/wp-content/uploads/2015/02/Dog-Portrait-15.jpg"></img>*/}
                    <img src="https://i1.wp.com/www.k9magazine.com/wp-content/uploads/YuCALM_Dog_Master1_Print.jpg?resize=1000%2C600"></img>
                </div>
                <div className="interaction">
                    <div className="interaction-icons">
                        <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-comment-o fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
                    </div>
                    <div className="interaction-reactions">
                        <a href="#">10 reactions</a>
                    </div>
                    <div className="interaction-comments">
                        <ul>
                            <li><a href="#">nome</a> teste</li>
                            <li><a href="#">nome</a> teste</li>
                        </ul>
                    </div>
                    <div className="interaction-elapsed-time">
                        HÁ 15 MINUTOS
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;