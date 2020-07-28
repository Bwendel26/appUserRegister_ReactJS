import React, { Component } from "react"
import axios from "axios"
import Main from "./../template/Main"

const headerProps = {
   icon: "users",
   title: "Users",
   subtitle: "User sign up: Include, List, Change and delete"
}

const baseUrl = "http://localhost:3001/Users"
const initialState = {
   user = { name: "", email: "" },
   list: []
}

// A class component
export default class UserCrud extends Component {

   state = { ...initialState }

   clear() {
      this.setState({ user: initialState.user })
   }

   save() {
      const user = this.state.user
                        // change or include 
      const method = user.id ? "put" : "post"
      const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
      axios[method](url, user)
         .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list })
         })
   }

   getUpdatedList(user) {
      const list = this.state.list.filter(u => u.id !== user.id)
      list.unshift(user)
      return list
   }

   updateField(event){
      const user = { ...this.state.user }
      user[event.target.name] = event.target.value
      this.setState({ user })
   }

   renderForm() {
      return (
         <div className="form">
            <div className="row">
               <div className="col-12 col-md-6">
                  <div className="form-group">
                     <label>Nome</label>
                     <input type="text" className="form-control"
                        name="name"
                        value={this.state.user.name}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o nome..."/>
                  </div>
               </div>
            </div>
         </div>
      )
   }

   render() {
      return (
         <Main {...headerProps}>
            User Sign Up
         </Main>
      )
   }
}
