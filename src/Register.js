import React, { Component } from 'react'
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAVgGfPWlYUQCHaIZhE-mLP_dwxsWfx_x8",
//   authDomain: "daj-pivo.firebaseapp.com",
//   databaseURL: "https://daj-pivo.firebaseio.com",
//   projectId: "daj-pivo",
//   storageBucket: "daj-pivo.appspot.com",
//   messagingSenderId: "394721960944",
//   appId: "1:394721960944:web:573483f68351325f"
// };

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.state = {
      username: "",
      password: ""
    }
  }
  handleUsernameInput(event) {
    this.setState({ username: event.target.value })
  }
  handlePasswordInput(event) {
    this.setState({ password: event.target.value })
  }
  render() {
    return (
      <div>
        <p>Register</p>
        <p>USERNAME</p>
        <input onChange={this.handleUsernameInput} value={this.state.username} />
        <p>PASSWORD</p>
        <input onChange={this.handlePasswordInput} value={this.state.password} type="password" />
        <br />
        <br />
        <button onClick={() => { this.props.registerHandler(this.state.password, this.state.username) }} >Register</button>
        <button onClick={() => { this.props.goToRegisterPage(false) }}>GO TO LOGIN</button>

      </div>
    )
  }
}
