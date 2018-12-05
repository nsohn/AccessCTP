import React, { Component } from 'react';
import './TestRowManager.css';

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
            <button onClick={()=> alert('this will do something')}>Button</button>
          </div>
            </div>
         ) : ''}
      </div>
    );
  }
}

export default TestRowManager;
