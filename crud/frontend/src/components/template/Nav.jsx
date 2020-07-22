import "./Nav.css"
import React from "react"

export default props => 
   <aside className="menu-area">
      {/* Refactoring: Need to create a menu component to manage this links */}
      <a href="#/">
         <i className="fa fa-home"></i>Initial
      </a>
      <a href="#/users">
         <i className="fa fa-users"></i>Users
      </a>
   </aside>