import React, { Component } from 'react';
import Moment from './Moment';

export default class Moments extends Component {
    render() {
        return (
            <div className="app-moments">
                <Moment/>
                { /* http://cdn7.viralscape.com/wp-content/uploads/2015/02/Dog-Portrait-15.jpg */ }
                { /* https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg */ }
            </div>
        );
    }
}