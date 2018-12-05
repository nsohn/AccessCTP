import React, { Component } from 'react';
import './TestRowManager.css';

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
      {tests ? tests.map(test =>
           <div key={test.course_number} className="test-row">
             <div className="test-data">
               {test.course_number}
             </div>
               <div className="test-data">
                 {test.prof_name}
                </div>
               <div className="test-data">
                 {test.exam_start}
                </div>
                <div className="test-data">
                  {test.exam_end}
              </div>
              <div className="test-data">
                {test.validated ? <p>yes</p> : <p>no</p>}
            </div>
            <div className="test-data">
              {test.confirmed ? <p>yes</p> : <p>no</p>}
          </div>
          <div className="test-data">
            <button onClick={submitValidation} name={test.id}>{buttonLabel}</button>
          </div>
          </div>
         ) : ''}
      </div>
    );
  }
}

export default TestRowManager;
