import React, { Component } from 'react';
import './RequestTestForm.css';

class RequestTestForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      courseName:"",
      professorName:"",
      examStart: 0,
      examLength: 0
    }
      this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

render(){
  return (
    <div className="test-form">
      <h2>Testing Accomdation Form </h2>
        Course Number: <input required name="courseName" onChange={this.onChange} type="string" />
        Name of Professor: <input name="professorName" onChange={this.onChange} type="string" />
        Professor's Email: <input mask="+@hunter.cuny.edu" name="email" onChange={this.onChange} type="email" />
        Exam Start Time: <input name="examStart" onChange={this.onChange} type="time" />
        Length of Exam (in minutes): <input name="examLength" onChange={this.onChange} type="number" />
        {/*Add accomodations*/}
        <button onClick={this.onSubmit}>Request Testing Form</button>
      </div>
  )
}
}
export default RequestTestForm;
