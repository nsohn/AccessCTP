import React, { Component } from 'react';
import './TestRowManager.css';
import { Table, Button} from "react-bootstrap";

class TestRowManager extends Component {
  constructor(props){
    super(props);
    this.state = {
      tests: []
    }
    this.onValidate = this.onValidate.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
  fetch('/test/tests')
    .then(res =>  res.json())
    .then(tests => this.setState({ tests: tests }));
  }
  onValidate(e) {
    // const testID = e.target.name
    const jsonBody = {
      test_id: e.target.name
    }
    fetch('/test/validateTest/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then((res) => {
      fetch('/test/tests')
      .then(res =>  res.json())
      .then(tests => this.setState({ tests: tests }));
    });
  }
  onDelete(e) {
    const testID = e.target.name
    // fetch('/test/validateTest/', {
    //   const jsonBody = {
    //     test_id: [e.target.name]
    //   }
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(jsonBody)
    // }).then((res) => console.log(res));
  }
  onConfirm(e) {
    const jsonBody = {
      test_id: e.target.name
    }
    fetch('/test/confirmTest/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then((res) => {
      fetch('/test/tests')
      .then(res =>  res.json())
      .then(tests => this.setState({ tests: tests }));
    });
  }


  render(){
    const { isStudent, typeProfessor, typeAdmin } = this.props;
    let buttonLabel, submitValidation;
    if (isStudent){
      buttonLabel = 'Delete';
      submitValidation = this.onDelete;
    } else if (typeProfessor) {
      buttonLabel = 'Validate';
      submitValidation = this.onValidate;
    } else if (typeAdmin) {
      buttonLabel = 'Confirm';
      submitValidation = this.onConfirm;
    }

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
               <td><Button bsStyle="danger" onClick={submitValidation} name={test.id}>Delete</Button></td>
          </tr>
         ) : ''}
         </tbody>
         </Table>
      </div>
    );
  }
}

export default TestRowManager;
