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
        <h3 className="header-text">Access Your Test</h3>
        <button onClick={() => {alert('clicked')}}>Click Here</button>
     </div>

     );
}

export default Header;
