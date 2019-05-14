import React, { Component } from 'react';
import '../../App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passAgain: "",
      regiser: "",
      newUser: ""
    }
    this.emailChange = this.emailChange.bind(this);
    this.passChange = this.passChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);
    this.setStorage = this.setStorage.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.userCreated = this.userCreated.bind(this);
    this.registerAccount = this.registerAccount.bind(this)

  }
  nameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  emailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  passChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  passwordChange(e) {
    this.setState({
      passAgain: e.target.value
    })
  }

  login() {
    const { email, password } = this.state;
    const users = this.props.users;
    users.map((value) => { value.email === email && value.password === password && this.setStorage(value) })
  }
  setStorage(user) {
    localStorage.setItem("user", JSON.stringify(user))
    this.props.userSet(user);
  }
  register() {
    this.setState({
      regiser: true
    })
  }
  registerAccount() {
    const { email, password, passAgain, name, newUser } = this.state;
    if (passAgain === password) {
      const users = this.props.users;
      users.map((value) => {
        if (value.email !== email) {
          this.setState({
            newUser: { name: name, email: email, password: password, attemptedQuizes: [{ type: "", level: "", result: "", date: "", }], }
          })
        }
        else {
          alert("email already taken")
        }
      })

    }
    else {
      alert("passwords not same")
    }
  }
  userCreated() {

    const { newUser, email, password } = this.state;
    let users = this.props.users;
    users.push(newUser)
    this.props.updateUsers(users)
    this.setState({ newUser: false, regiser: false })

  }

  loginRender() {
    return (


      <div className="containerlogin ">
        <div className=" logindiv">
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.emailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="password" onChange={this.passChange} />
          </div>
          <button className="btn btn-default" onClick={this.login}>login</button>
          <br />
        </div>
      </div>

    )
  }
  backtologin() {
    window.location.reload();
  }
  signUpRender() {
    return (
      <div className="containerlogin">

        <div className="signupdiv">
          <h1>Register</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.nameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.emailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd1">Password:</label>
            <input type="password" className="form-control" id="pwd1" placeholder="password" onChange={this.passChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password Again:</label>
            <input type="password" className="form-control" id="pwd" placeholder="password" onChange={this.passwordChange} />
          </div>
          <button className="btn btn-default" onClick={this.registerAccount}>Create Account</button>
          <br />
          <br />
        </div>
      </div>
    )
  }

  render() {
    const { regiser, newUser } = this.state;
    return (
      <div className="App">
        {newUser && this.userCreated()}
        <div className="loginsignupdiv">
          {
            this.loginRender()}{
            this.signUpRender()
          }
        </div>
      </div>
    );
  }
}

export default Login;
