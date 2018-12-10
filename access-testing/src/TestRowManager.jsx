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
    this.sortTests = this.sortTests.bind(this);
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
    this.sortTests();
  }
  sortTests(){
    const { tests } = this.state;
    tests.sort((a,b) => a.test_id > b.test_id);
    this.setState({tests});

  }

  render(){
    const { isStudent, typeProfessor, typeAdmin } = this.props;
    let buttonLabel, submitValidation, userTitle;
    if (isStudent){
      buttonLabel = 'Remind';
      submitValidation = this.onDelete;
      userTitle = 'Professor Name'
    } else if (typeProfessor) {
      buttonLabel = 'Validate';
      submitValidation = this.onValidate;
      userTitle = 'Student Name'
    } else if (typeAdmin) {
      buttonLabel = 'Confirm';
      submitValidation = this.onConfirm;
      userTitle = 'Professor Name'
    }

    const { tests } = this.state;
    return (
      <div className="test-data">
      <Table responsive>
      <thead>
        <tr>
          <th>Course #</th>
          <th>{userTitle}</th>
          <th>{typeAdmin ? 'Student Name' : ''}</th>
          <th>Date</th>
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
               <td>{typeProfessor ? test.student_name : test.prof_name }</td>
               <td>{typeAdmin ? test.student_name : ''}</td>
               <td>{test.date}</td>
               <td>{test.exam_start}</td>
               <td>{test.exam_end}</td>
               <td>{test.validated ? <p>Validated</p> : <p>Not Yet</p>}</td>
               <td>{test.confirmed ? <p>Confirmed</p> : <p>Not Yet</p>}</td>
               <td><Button bsStyle="success" onClick={submitValidation} name={test.id}>{buttonLabel}</Button></td>
          </tr>
        ) : ''}
         </tbody>
         </Table>
      </div>
    );
  }
}

export default TestRowManager;
