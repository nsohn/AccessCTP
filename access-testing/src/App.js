import React, { Component } from 'react';
import Modal from 'react-modal';
import TestForm from './TestForm';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      testModal : false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal(){
    this.setState({
      testModal: false
    })
  }
  openModal(){
    this.setState({
      testModal : true
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.openModal}>Add a test</button>
        <Modal
        isOpen={this.state.testModal}
        onRequestClose={this.closeModal}
      >
        <TestForm />
        <button onClick={this.closeModal}>CloseModal</button>
      </Modal>
      </div>
    );
  }
}

export default App;
