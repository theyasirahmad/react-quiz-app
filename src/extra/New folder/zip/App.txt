import React, { Component } from 'react';
import Login from './screen/login/login';
import Quizcomp from './screen/Quizcomp/Quizcomp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const initialUsers=[
      { name: "zaman", age: 21, email: "zaman@gmail.com", password: "zaman" },
      { name: "khan", age: 23, email: "khan@gmail.com", password: "khan" }
    ];
    const user = JSON.parse(localStorage.getItem("user"));
    const users = JSON.parse(localStorage.getItem("users"));
    this.state = {
      users:(users) ? users : initialUsers,
      currenetUser: user,
      admin: { name: "admin", username: "admin", password: "admin" },
      appClass:"App-header",
    }
    this.updateUsers=this.updateUsers.bind(this);
  }

  updateUsers(users){
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users))
  }
  userSet(user) {
    this.setState({
      currenetUser: user,
    })
  }
  removeUser(){
    this.setState({
      currenetUser:""
    })
  }
  changeClass(a){
    this.setState({
      appClass:a
    })
  }
  render() {
    const { currenetUser, users , appClass } = this.state;
    const quizStarted = localStorage.getItem("quizStarted")
    const proctoringKey = localStorage.getItem("proctoringKey")

    // if (currenetUser )
    // this.setState({
    //   appClass:"App-header2"
    // })
    if (currenetUser && appClass !=="App-header2"  && !proctoringKey)
    this.setState({
      appClass:"App-header2"
    })
    
    return (
      <div className="App">
          <h1 className="App-title">QUIZ APP</h1>
        <div>{!currenetUser && <Login updateUsers={this.updateUsers} userSet={this.userSet.bind(this)} users={users} />}</div>
        <div>{currenetUser && <Quizcomp  changeClass={this.changeClass.bind(this)}  currenetUser={currenetUser} removeUser={this.removeUser.bind(this)} />}</div>

      </div>
    );
  }
}
// && <Login users={users} />
export default App;
