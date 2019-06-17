import { connect } from 'react-redux';
import React, { Component } from 'react';
import Moment from '../Moment';
import getMoments from '../../actions/momentsActions';

class Moments extends Component {
  componentDidMount() {
    getMoments();
  }

  render() {
    const { moments } = this.props;

    return (
      <div className="app-moments">
        {moments.length
          ? moments.map(moment => <Moment key={moment.id} moment={moment} />)
          : "Ops.. there's nothing to show here =("}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moments: state.moments,
});

const mapDispatchToProps = dispatch => ({
  getMoments: dispatch(getMoments()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Moments);
