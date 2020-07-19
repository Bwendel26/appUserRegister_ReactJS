import "./Header.css"
import React from "react"

export default props => 
                  //Header will no appear in mobile //if its a middle gadget will be flex mode
   <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
         <i className={`fa fa-${props.icon}`}></i> {props.title}
      </h1>
      <p className="lead text-muted">{props.subtitle}</p>
   </header>