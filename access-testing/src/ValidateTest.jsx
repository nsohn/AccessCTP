import React, { Component } from 'react';
import Select from 'react-select';
import './ValidateTest.css';

class ValidateTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickup: null,
      dropoff: null,
      notes: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onChangePickup = this.onChangePickup.bind(this);
    this.onChangeDropoff = this.onChangeDropoff.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangePickup(pickup){
    this.setState({ pickup });
  }
  onChangeDropoff(dropoff){
    this.setState({ dropoff });
  }
  onSubmit(){
    const { pickup, dropoff, notes } = this.state;
    if (!pickup && !dropoff){
      alert('Please fill in the pickup and dropoff information');
    }
    const jsonBody = {
      pickup: pickup,
      dropoff: dropoff,
      notes: notes
    }
    fetch('/validate-test', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then((res) => console.log(res))
  }
  render(){
    const options = [
      {value: 'email', label: 'Email'},
      {value: 'deliver', label: 'Deliver'},
      {value: 'pickup', label: 'Pick up'}
    ]
    const { pickup, dropoff } = this.state;
    return (
      <div className="validate-test">
        Dropoff Method:
        <Select
          options={options}
          onChange={this.onChangeDropoff}
          value={dropoff}
          placeholder="Select a Delivery option"
          name="dropoff"
          />
        Pickup Method:
          <Select
            options={options}
            onChange={this.onChangePickup}
            value={pickup}
            placeholder="Select a Pickup option"
            name="dropoff"
            />
          Additional Notes:
          <div>
            <textarea onChange={this.onChange} name="notes" rows="4" cols="20"/>
          </div>
        <button onClick={this.onSubmit}>Validate Test</button>
      </div>
    )
  }
}

export default ValidateTest;
