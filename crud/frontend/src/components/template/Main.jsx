import "./Main.css"
import React from "react"
import Header from "./Header"

export default props => 
   //do not create a html element while creating the page
   <React.Fragment>
      <Header />
      <main className="content">
         Content
      </main>
   </React.Fragment>