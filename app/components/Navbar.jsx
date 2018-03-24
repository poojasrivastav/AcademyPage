import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render () {
        return (
            <nav className="navbar">
                <Link className="btn btn-success" to="/students">Students</Link>
                <Link className="btn btn-success" to="/">Campuses</Link>
                <h1>Welcome to Coding Academy</h1>
                <Link className="btn btn-info" to="/students/add">Add Student</Link>
            </nav>
        )
    }
};