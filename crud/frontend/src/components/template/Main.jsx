import "./Main.css"
import React from "react"
import Header from "./Header"

export default props => 
   //do not create a html element while creating the page
   <React.Fragment>
      <Header {...props}/>
      <main className="content">
         Content
      </main>
   </React.Fragment>