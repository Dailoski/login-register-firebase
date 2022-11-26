import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default class Homepage extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.goToRegisterPage = this.goToRegisterPage.bind(this)
    this.handleRegister = this.handleRegister.bind(this)

    this.state = {
      isLoggedIn: false,
      isLoginBad: false,
      isRegisterPage: false
    }
  }
  handleLogin(userPassword, userUsername) {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, userUsername, userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        this.setState({ isLoggedIn: true })
      })
      .catch((error) => {
        console.log("GRESKA");
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  }
  handleRegister(userPassword, userUsername) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userUsername, userPassword)
      .then((userCredential) => {
        // Signed in 
        console.log("USPESNO")
        const user = userCredential.user;
        console.log(user);
        this.setState({ isRegisterPage: false })

      })
      .catch((error) => {
        console.log("NIJE USPESNO")
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  }
  goToRegisterPage(boolean) {
    this.setState({ isRegisterPage: boolean })
  }
  render() {
    return (
      <div>
        <div>Homepage</div>
        {this.state.isLoggedIn && <div>Great Success!!! YOU ARE LOGGED IN!!!</div>}
        {this.state.isLoginBad && <div>BAD USERNAME OR PASSWORD</div>}
        {!this.state.isLoggedIn && (this.state.isRegisterPage ? <Register registerHandler={this.handleRegister} goToRegisterPage={this.goToRegisterPage} /> : <Login goToRegisterPage={this.goToRegisterPage} loginHandler={this.handleLogin} />)}
      </div>
    )
  }
}
