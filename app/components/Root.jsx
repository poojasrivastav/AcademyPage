import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Campus from './Campus.jsx';
import Student from './Student.jsx';
import Navbar from './Navbar.jsx';
import AddStudent from './AddStudent.jsx';
import SingleStudent from './SingleStudent.jsx';
import EditStudent from './EditStudent.jsx'; 

export default class Root extends Component {
    
    render () {
        return (
            <Router>
                <div>
                    <Navbar />
                    <div className="mainBody">
                        <Route exact path='/campus/:campusId' component={Campus} />
                        <Route exact path='/students/add' component={AddStudent} />
                        <Route exact path='/student/:studentId' component={SingleStudent} />
                        <Route exact path='/student/edit/:studentId' component={EditStudent} />
                        <Route exact path='/students' component={Student} />
                        <Route exact path='/' component={Home} />
                    </div>
                </div>
            </Router>
        )
    }
}