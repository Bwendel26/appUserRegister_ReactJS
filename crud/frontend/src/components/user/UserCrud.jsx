import React, { Component } from "react"
import Main from "./../template/Main"

const headerProps = {
   icon: "users",
   title: "Users",
   subtitle: "User sign up: Include, List, Change and delete"
}

// A class component
export default class UserCrud extends Component {
   render() {
      return (
         <Main {...headerProps}>
            User Sign Up
         </Main>
      )
   }
}
