import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Jumbotron, Button, Badge} from "react-bootstrap";

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state={
      typeStudent: true,
      typeProfessor: false,
      typeAdmin: false
    };
  }


  render(){
    let typeStudent = this.state.typeStudent
    let typeProfessor = this.state.typeProfessor
    let typeAdmin = this.state.typeAdmin

    let userView = <div></div>
    let scheduledTests= <div></div>

    if(typeStudent){
      userView =
      <div>
        <h1>Hi Stella!</h1>
        <p>
          Badges <Badge>42</Badge>
        </p>
      <ListGroup>
   <ListGroupItem href="#link1">Link 1</ListGroupItem>
   <ListGroupItem href="#link2">Link 2</ListGroupItem>
   <ListGroupItem >Trigger an alert</ListGroupItem>
 </ListGroup>
 <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>;
 </div>
    }

    return(
      <div>
      {userView}
      </div>
    );
  }
}

export default Dashboard;
