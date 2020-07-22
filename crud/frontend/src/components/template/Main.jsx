import "./Main.css"
import React from "react"
import Header from "./Header"

export default props => 
   //do not create a html element while creating the page
   <React.Fragment>
      <Header {...props}/>    {/* bootstrap class*/}
      <main className="content container-fluid">
         <div className="p-3 mt-3">
            {props.children}
         </div>
      </main>
   </React.Fragment>