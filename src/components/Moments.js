import React, { Component } from 'react';
import Moment from './Moment';

export default class Moments extends Component {
    constructor() {
        super();

        this.state = {
            moments: [
                {
                    id: 1,
                    user: {
                        name: "caiocolaiacovo",
                        profile: "http://localhost:3000/users/caiocolaiacovo",
                        avatar: "https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4"
                    },
                    elapsedTime: "25 MINUTES AGO",
                    picture: "https://i1.wp.com/www.k9magazine.com/wp-content/uploads/YuCALM_Dog_Master1_Print.jpg?resize=1000%2C600",
                    reactions: 45,
                    comments: [
                        {
                            user: {
                                name: "user1",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        },
                        {
                            user: {
                                name: "user2",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        },
                        {
                            user: {
                                name: "user3",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        }
                    ]
                },
                {
                    id: 2,
                    user: {
                        name: "caiocolaiacovo",
                        profile: "http://localhost:3000/users/caiocolaiacovo",
                        avatar: "https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4"
                    },
                    elapsedTime: "25 MINUTES AGO",
                    picture: "http://cdn7.viralscape.com/wp-content/uploads/2015/02/Dog-Portrait-15.jpg",
                    reactions: 32,
                    comments: [
                        {
                            user: {
                                name: "user1",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        },
                        {
                            user: {
                                name: "user1",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        },
                        {
                            user: {
                                name: "user1",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        }
                    ]
                },
                {
                    id: 3,
                    user: {
                        name: "caiocolaiacovo",
                        profile: "http://localhost:3000/users/caiocolaiacovo",
                        avatar: "https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4"
                    },
                    elapsedTime: "25 MINUTES AGO",
                    picture: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg",
                    reactions: 19,
                    comments: [
                        {
                            user: {
                                name: "user1",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        },
                        {
                            user: {
                                name: "user1",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        },
                        {
                            user: {
                                name: "user1",
                                profileUrl: "http://localhost:3000/users/caiocolaiacovo",
                            },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod"
                        }
                    ]
                }
            ]
        };

    }

    render() {
        return (
            <div className="app-moments">
                {
                    this.state.moments.map(function (moment) {
                        return (
                            <Moment key={moment.id} moment={moment}/>
                        );
                    })
                }
            </div>
        );
    }
}