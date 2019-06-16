import { connect } from 'react-redux';
import React, { Component } from 'react';
import Moment from '../Moment';

class Moments extends Component {
  constructor() {
    super();

    this.state = {
      moments: [
        {
          id: 1,
          user: {
            name: 'caiocolaiacovo',
            profile: 'http://localhost:3000/users/caiocolaiacovo',
            avatar:
              'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
          },
          elapsedTime: '25 MINUTES AGO',
          picture:
            'https://i1.wp.com/www.k9magazine.com/wp-content/uploads/YuCALM_Dog_Master1_Print.jpg?resize=1000%2C600',
          reactions: 10,
          comments: [
            {
              user: {
                name: 'caiocolaiacovo',
                profile: 'http://localhost:3000/users/caiocolaiacovo',
                avatar:
                  'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
              },
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod',
            },
            {
              user: {
                name: 'caiocolaiacovo',
                profile: 'http://localhost:3000/users/caiocolaiacovo',
                avatar:
                  'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
              },
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod',
            },
          ],
        },
        {
          id: 1,
          user: {
            name: 'caiocolaiacovo',
            profile: 'http://localhost:3000/users/caiocolaiacovo',
            avatar:
              'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
          },
          elapsedTime: '50 MINUTES AGO',
          picture:
            'http://cdn7.viralscape.com/wp-content/uploads/2015/02/Dog-Portrait-15.jpg',
          reactions: 10,
          comments: [
            {
              user: {
                name: 'caiocolaiacovo',
                profile: 'http://localhost:3000/users/caiocolaiacovo',
                avatar:
                  'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
              },
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod',
            },
            {
              user: {
                name: 'caiocolaiacovo',
                profile: 'http://localhost:3000/users/caiocolaiacovo',
                avatar:
                  'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
              },
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod',
            },
          ],
        },
        {
          id: 1,
          user: {
            name: 'octocat',
            profile: 'http://localhost:3000/users/octocat',
            avatar: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4',
          },
          elapsedTime: '1 HOUR AGO',
          picture:
            'https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg',
          reactions: 10,
          comments: [
            {
              user: {
                name: 'caiocolaiacovo',
                profile: 'http://localhost:3000/users/caiocolaiacovo',
                avatar:
                  'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
              },
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod',
            },
            {
              user: {
                name: 'caiocolaiacovo',
                profile: 'http://localhost:3000/users/caiocolaiacovo',
                avatar:
                  'https://avatars1.githubusercontent.com/u/13860945?s=400&u=2fa35c54ffa45578eaa8d0453d41fab34ef8e8fa&v=4',
              },
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nisi in sapien fermentum euismod',
            },
          ],
        },
      ],
    };
  }

  render() {
    const { moments } = this.state;

    return (
      <div className="app-moments">
        {moments.map(moment => (
          <Moment key={moment.id} moment={moment} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moments: state.moments,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Moments);
