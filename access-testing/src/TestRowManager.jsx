import React, { Component } from 'react';
import './TestRowManager.css';
import { Table, Button} from "react-bootstrap";

class TestRowManager extends Component {
  constructor(props){
    super(props);
    this.state = {
      tests: []
    }
  }
  componentDidMount() {
  fetch('/test/tests')
    .then(res =>  res.json())
    .then(tests => this.setState({ tests: tests }));
  }
  render(){
    const { tests } = this.state;
    return (
      <div className="test-data">
      <Table responsive>
      <thead>
        <tr>
          <th>Course #</th>
          <th>Professor's Name</th>
          <th>Exam Start</th>
          <th>Exam End</th>
          <th>Validated by Professor</th>
          <th>Confirmed by Office</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {tests ? tests.map(test =>
        <tr key={test.course_number}>
               <td>{test.course_number}</td>
               <td>{test.prof_name}</td>
               <td>{test.exam_start}</td>
               <td>{test.exam_end}</td>
               <td>{test.validated ? <p>yes</p> : <p>no</p>}</td>
               <td>{test.confirmed ? <p>yes</p> : <p>no</p>}</td>
               <td><Button bsStyle="danger" onClick={()=> alert('this will do something')}>Delete</Button></td>
          </tr>
         ) : ''}
         </tbody>
         </Table>
      </div>
    );
  }
}

export default TestRowManager;
