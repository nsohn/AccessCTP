import React, { Component } from 'react';
import RequestTestForm from './RequestTestForm';
import './Dashboard.css';
import { Modal, ListGroup, ListGroupItem, Jumbotron, Button, Badge} from "react-bootstrap";

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state={
      typeStudent: true,
      typeProfessor: false,
      typeAdmin: false,
      requestForm: false
    };
    this.onCloseForm = this.onCloseForm.bind(this);
    this.onOpenForm = this.onOpenForm.bind(this);
    this.onSwitchUser = this.onSwitchUser.bind(this);
    this.onSwitchProfessor = this.onSwitchProfessor.bind(this);
    this.onSwitchAdmin = this.onSwitchAdmin.bind(this);
  }
    onOpenForm(){
      this.setState({
        requestForm: true
      });
    }

    onCloseForm(){
      this.setState({
        requestForm: false
      });
    }

    onSwitchUser(){
      this.setState({
        typeStudent: true,
        typeProfessor: false,
        typeAdmin: false
      });
    }

    onSwitchAdmin(){
      this.setState({
        typeStudent: false,
        typeProfessor: false,
        typeAdmin: true
      });
    }

    onSwitchProfessor(){
      this.setState({
        typeStudent: false,
        typeProfessor: true,
        typeAdmin: false
      });
    }

  render(){
    let typeStudent = this.state.typeStudent
    let typeProfessor = this.state.typeProfessor
    let typeAdmin = this.state.typeAdmin
    let requestForm = this.state.requestForm

    let userView = <div></div>
    let professorView = <div></div>
    let adminView = <div></div>
    let scheduledTests= <div></div>
    let testForm = <div></div>

    let permissions =
    <div>
    <Button onClick={this.onSwitchUser}>Student</Button>
    <Button onClick={this.onSwitchProfessor}>Professor</Button>
    <Button onClick={this.onSwitchAdmin}>Admin</Button>
    </div>

    if (requestForm){
      testForm =
      <div className="static-modal">
        <Modal.Dialog bsSize="large">
        <Modal.Header>
          <Modal.Title>Testing Accomdation Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RequestTestForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onCloseForm}>Close</Button>
        </Modal.Footer>
        </Modal.Dialog>
      </div>
    }

    if(typeStudent){
      userView =
      <div>
        <Jumbotron>
          <h1>Hi Stella!</h1>
          <Button bsStyle="primary" onClick={this.onOpenForm}>Request Test Form</Button>

          <ListGroup>
            <ListGroupItem href="#link1">Link 1</ListGroupItem>
            <ListGroupItem href="#link2">Link 2</ListGroupItem>
            <ListGroupItem >Trigger an alert</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
    }

    if (typeProfessor){
      professorView =
      <div>
        <Jumbotron>
          <h1>Hi Professor!</h1>
          <p>Verify tests below</p>
          <Button bsStyle="primary" onClick={this.onOpenForm}>Request Test Form</Button>

          <ListGroup>
            <ListGroupItem href="#link1">Link 1</ListGroupItem>
            <ListGroupItem href="#link2">Link 2</ListGroupItem>
            <ListGroupItem >Trigger an alert</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
    }

    if (typeAdmin){
      adminView =
      <div>
        <Jumbotron>
          <h1>Hi Access Staff!</h1>
          <p>Confirm the tests below</p>
          <Button bsStyle="primary" onClick={this.onOpenForm}>Request Test Form</Button>

          <ListGroup>
            <ListGroupItem href="#link1">Link 1</ListGroupItem>
            <ListGroupItem href="#link2">Link 2</ListGroupItem>
            <ListGroupItem >Trigger an alert</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
    }

    return(
      <div>
      {permissions}
      {userView}
      {professorView}
      {adminView}
      {testForm}
      </div>
    );
  }
}

export default Dashboard;
