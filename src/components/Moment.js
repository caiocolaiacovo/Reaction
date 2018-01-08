import React, { Component } from 'react';
//import avatar from '../avatar.png';

export default class Moment extends Component {

    componentWillMount() {
        
    }

    countReactions() {
        if (this.props.moment.reactions === 0)
            return "No reactions yet. Be the first to react to this!";
        
        return `${this.props.moment.reactions} reaction` + (this.props.moment.reactions > 1 ? "s" : "");
    }

    render() {
        console.log('render');
        return (
            <div className="moment">
                <div className="moment-header">
                    <img src={this.props.moment.user.avatar} alt="" className="avatar-picture"></img>
                    <div className="avatar-name"><a href="#">{this.props.moment.user.name} </a></div>
                </div>
                <div className="moment-picture">
                    <img src={this.props.moment.picture} alt=""></img>
                </div>
                <div className="interaction">
                    <div className="interaction-icons">
                        <button><img src={process.env.PUBLIC_URL + '/emoticons/no-reaction.png'} alt="logo"></img></button>
                        <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
                    </div>
                    <div className="interaction-reactions">
                        <a href="#">{this.countReactions()}</a>
                    </div>
                    <div className="interaction-comments">
                        <ul>
                            {
                                this.props.moment.comments.map(function(comment, index) {
                                    return (
                                        <li key={comment.user.name + index}>
                                            <a href={comment.user.profile}>{comment.user.name}</a> {comment.text}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="interaction-elapsed-time">
                        {this.props.moment.elapsedTime}
                    </div>
                    <div className="interaction-new-comment">
                        <textarea placeholder="Leave your message..."></textarea>
                    </div>
                </div>
            </div>
        );
    }
}