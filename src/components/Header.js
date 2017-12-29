import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <input type="text" placeholder="Search"/>
            </div>
        );
    }
}