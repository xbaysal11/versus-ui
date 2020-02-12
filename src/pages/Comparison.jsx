import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Comparison extends Component {
    render() {
        return (
            <div>
                comparison
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">products</NavLink>
                <NavLink to="/comparison">comparison</NavLink>
            </div>
        );
    }
}
