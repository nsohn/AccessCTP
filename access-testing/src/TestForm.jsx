import React, { Component } from 'react';
import './TestForm.css';
class TestForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: {},
      time: {},
      professor: '',
      course: '',
      lenOfTest: 0
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
          Professor's Hunter Email: <input type="email" name="professor" onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

export default TestForm;
