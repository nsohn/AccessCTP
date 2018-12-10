import React, { Component } from 'react';
import RequestTestForm from './RequestTestForm';
import TestRowManager from './TestRowManager';
import './Dashboard.css';
import { Table, Modal, ListGroup, ListGroupItem, Jumbotron, Button, Badge} from "react-bootstrap";

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state={
      typeStudent: true,
      typeProfessor: false,
      typeAdmin: false,
      isStudent: false,
      validateForm: false
    };
    this.onCloseTest = this.onCloseTest.bind(this);
    this.onCloseValidate = this.onCloseValidate.bind(this);
    this.onOpenTest = this.onOpenTest.bind(this);
    this.onOpenValidate = this.onOpenValidate.bind(this);
    this.onSwitchUser = this.onSwitchUser.bind(this);
    this.onSwitchProfessor = this.onSwitchProfessor.bind(this);
    this.onSwitchAdmin = this.onSwitchAdmin.bind(this);
  }
    onOpenTest(){
      this.setState({
        isStudent: true
      });
    }

    onCloseTest(){
      this.setState({
        isStudent: false
      });
    }
    onOpenValidate(){
      this.setState({
        validateForm: true
      });
    }
    onCloseValidate(){
      this.setState({
        validateForm: false
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
    const { typeStudent, typeProfessor, typeAdmin, isStudent } = this.state;

    const testForm =
    <div className="static-modal">
      <Modal.Dialog Size="large">
      <Modal.Header>
        <Modal.Title>Testing Accomdation Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RequestTestForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.onCloseTest}>Close</Button>
      </Modal.Footer>
      </Modal.Dialog>
    </div>

    let name;
    let onClick;
    if (typeStudent){
      name = 'Student View';
      onClick = this.onOpenTest
    } else if (typeProfessor){
      name = 'Professor View';
      onClick = this.onOpenValidate;
    } else if (typeAdmin){
      name = 'Admin View'
      onClick = this.onConfirmAvailable;
    }
      const userView =
      <div>
        <Jumbotron>
          <h1>{name}</h1>
          {typeStudent ? <Button bsStyle="primary" onClick={onClick}>Request Test Form</Button> : ''}
          <ListGroup>
            <ListGroupItem>
              <TestRowManager
              isStudent={typeStudent}
              typeProfessor={typeProfessor}
              typeAdmin={typeAdmin}
              />
            </ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>

    return(
      <div>
        <div>
          <Button onClick={this.onSwitchUser}>Student</Button>
          <Button onClick={this.onSwitchProfessor}>Professor</Button>
          <Button onClick={this.onSwitchAdmin}>Admin</Button>
        </div>
      {userView}
      {isStudent ? testForm : ''}
      </div>
    );
  }
}

export default Dashboard;
