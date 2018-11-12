import React from 'react';
import "./Header.css";

/*
ToDo:
  * get header content aligned
  * Add button for "Create Test/Validate Test/Login/Register Depending on the status of the user"
 */

function Header() {
  return (
     <div className="header">
        <img src="./hunterLogo.png" alt="Hunter Logo" />
        <h3 className="header-text">Access Your Test</h3>
        <button onClick={() => {alert('clicked')}}>Click Here</button>
     </div>

     );
}

export default Header;
