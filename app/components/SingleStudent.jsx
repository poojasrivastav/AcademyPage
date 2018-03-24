import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {
    
    constructor() {
        super();
        this.state = {
            studentInfo: {}
        }
    }
    
    componentDidMount() {
        const studentId = this.props.match.params.studentId;
        
        axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(studentInfo => this.setState({ studentInfo }))
    }
    
    render() {
        const studentInfo = this.state.studentInfo;

        return (
            <section className="container">
                {studentInfo.campusId && 
                    <div className="studentBody">
                         <h1  style={{margin: '5px 0 5px 0'}}> Welcome to student page for</h1><h1>{studentInfo.firstName}</h1>
                         <h3> Student's Campus Id:
                             <Link to={`/campus/${studentInfo.campusId}`}> {studentInfo.campusId}</Link></h3>
                         <h3> Email Address: {studentInfo.email}</h3>
                        <div className="editBody" id="editStudent">
                            <h1>Update student information: 
                                <button type="button" className="btn btn-success"><Link to={`/student/edit/${studentInfo.id}`}>Edit</Link></button>
                            </h1>
                        </div>       
                    </div>
                }
            </section>
        )        
    }
}