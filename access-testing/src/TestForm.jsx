import React, { Component } from 'react';
import './TestForm.css';
class TestForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: {},
      altDate: '',
      time: 0,
      altTime: 0,
      professor: '',
      course: '',
      lenOfTest: 0,
      conflictTime: false,
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    console.log(this.state.date);
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render(){
    return (
      <div className="test-modal">
        <div className="test-input">
        Date: <input type="date" onChange={this.onChange}/>
        Time: <input type="time"/>
        Course: <input placeholder="EX: Eng-120" name="course" onChange={this.onChange}/>
        Length of Test: <input type="number" name="lenOfTest" onChange={this.onChange} />

        Does the test conflict with your schedule? <input type="checkbox" name="conflictTime" onChange={this.onChange} />

        { this.state.conflictTime &&
          <div>
          Alternative Date: <input type="date" name="altDate" onChange={this.onChange}/>
          Alternative Time: <input type="time" name="altTime" onChange={this.onChange}/>
          </div>
        }
        </div>
      </div>
    )
  }
}

export default TestForm;
