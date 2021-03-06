import React from 'react';
import hunterLogo from './hunterLogo.png';
import "./Header.css";

/*
ToDo:
  * get header content aligned
  * Add button for "Create Test/Validate Test/Login/Register Depending on the status of the user"
 */

function Header() {
  return (
     <div className="header">
        <img src={hunterLogo} alt="Hunter Logo" id="header-logo"/>
        <h1 className="header-text">Access Your Test</h1>
        <button className="button" onClick={() => {alert('You Caught Us')}}>Log out</button>
     </div>

     );
}

export default Header;
