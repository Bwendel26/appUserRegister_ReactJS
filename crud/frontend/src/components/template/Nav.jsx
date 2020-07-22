import "./Nav.css"
import React from "react"
import { Link } from "react-router-dom"

export default props => 
   <aside className="menu-area">
      {/* Re
      factoring: Need to create a menu component to manage this links */}
      <Link to="/">
         <i className="fa fa-home"></i>Initial
      </Link>
      <Link to="/users">
         <i className="fa fa-users"></i>Users
      </Link>
   </aside>