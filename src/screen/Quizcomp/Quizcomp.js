import React, { Component } from 'react';
import '../../App.css';


class Quizcomp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: { name: "", email: "", password: "", attemptedQuizes: [{ type: "", level: "", result: "", date: "", }], },
      proctoringKey: "",
      proctoringKeys: [{ value: "111" }],
      index: "",
      proctoringKeyvalue: "",
      display: {
        0: false,
        1: false,
        2: false,
      },
      exams: [
        { name: "JavaScript", level:[{name:"Quz 1"}, {name:"Quz 2"},{name:"Quz 3"} ,{name:"Quz 4"}] },
        { name: "HTML", level: [{name:"Quz 1"}, {name:"Quz 2"},{name:"Quz 3"} ,{name:"Quz 4"}] },
        { name: "CSS", level: [{name:"Quz 1"}, {name:"Quz 2"},{name:"Quz 3"} ,{name:"Quz 4"}] },
      ],
      selectedQuizName: "",
      quizStarted: ""
      ,
      rightAnsers: 0
      ,
      quizindex: "",
      timeleft: "",
      counter: 0,
      quizlist: [

        {
          name: "JavaScript0",
          level: 1,
          type: "javascript",
          time: "10 min",
          totalquestions: 4,
          questions:
            [
              {
                question: "1)Inside which HTML element do we put the JavaScript?",
                options: ["<js>", "<script>", "<scripting>", "<javascript>"],
                ans: "<script>"
              }, {
                question: "2)Where is the correct place to insert a JavaScript?",
                options: ["Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section"],
                ans: "The <body> section"
              }, {
                question: '3)What is the correct syntax for referring to an external script called "xxx.js"',
                options: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">', '<script srcs="xxx.js">'],
                ans: '<script src="xxx.js">'
              }, {
                question: "4)The external JavaScript file must contain the <script> tag.",
                options: ["True", "False"],
                ans: "False"
              },
            ]
        },
        {
          name: "JavaScript1",
          level: 2,
          type: "javascript",
          time: "10 min",
          totalquestions: 7,
          questions:
            [
              {
                question: "1)How do you write 'Hello World' in an alert box?",
                options:['msg("Hello World");','alert("Hello World");','alertBox("Hello World");','msgBox("Hello World");'],
                ans: 'alert("Hello World");'
              },
              {
                question: "2)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
                question: "3)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "4)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "5)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '6)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "7)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            ]
        },
        {
          name: "JavaScript2",
          level: 3,
          type: "javascript",
          time: "12 min",
          totalquestions: 6,
          questions:
            [
              {
                question: "1)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
                question: "2)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "3)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "4)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '5)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "6)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            
            
            
            ]
        },
        {
          name: "JavaScript3",
          level: 4,
          type: "javascript",
          time: "12 min",
          totalquestions: 6,
          questions:
            [
              {
                question: "1)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
                question: "2)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "3)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "4)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '5)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "6)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            
            
            
            ]
        },
        {
          name: "HTML3",
          level: 4,
          type: "HTML",
          time: "12 min",
          totalquestions: 6,
          questions:
            [
              {
                question: "1)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
                question: "2)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "3)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "4)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '5)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "6)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            
            
            
            ]
        },
        {
          name: "CSS3",
          level: 4,
          type: "CSS",
          time: "12 min",
          totalquestions: 6,
          questions:
            [
              {
                question: "1)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
                question: "2)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "3)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "4)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '5)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "6)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            
            
            
            ]
        },
        {
          name: "HTML0",
          type: "HTML",
          time: "10 min",
          level: 1,
          totalquestions: 5,
          questions:
            [
              {
                question: "1)What does HTML stand for?",
                options:["Home Tool Markup Language","Hyperlinks and Text Markup Language","Hyper Text Markup Language"],
                ans: "Hyper Text Markup Language"
              },
               {
               question: "2)Inside which HTML element do we put the JavaScript?",
               options:["<js>","<script>","<scripting>","<javascript>"],
               ans: "<script>"
             },{
               question: "3)Where is the correct place to insert a JavaScript?",
               options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
               ans: "The <body> section"
             },{
               question: '4)What is the correct syntax for referring to an external script called "xxx.js"',
               options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
               ans: '<script src="xxx.js">'
             },{
               question: "5)The external JavaScript file must contain the <script> tag.",
               options:["True","False"],
               ans: "False"
             },
            ]
        },
        {
          name: "HTML1",
          type: "HTML",
          time: "14 min",
          level: 2,
          totalquestions: 7,
          questions:
            [
              {
                question: "1)Who is making the Web standards?",
                options:['Mozilla','Microsoft','Google','The World Wide Web Consortium'],
                ans: 'The World Wide Web Consortium'
              },
              {
                question: "2)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
                question: "3)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "4)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "5)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '6)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "7)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            ]
        },
        {
          name: "HTML2",
          type: "HTML",
          time: "12 min",
          level: 3,
          totalquestions: 6,
          questions:
            [
              {
                question: "1)Choose the correct HTML element for the largest heading:",
                options:["<h1>","<h6>","<heading>"],
                ans: "<h1>"
              },
              {
                question: "2)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "3)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "4)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '5)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "6)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            ]
        },
        {
          name: "CSS0",
          type: "CSS",
          time: "8 min",
          level: 1,
          totalquestions: 4,
          questions:
            [
              {
                question: "1)What does CSS stand for?",
                options:["Computer Style Sheets","Cascading Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
                ans: "Cascading Style Sheets"
              },{
                question: "2)Where is the correct place to insert a JavaScript?",
                options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
                ans: "The <body> section"
              },{
                question: '3)What is the correct syntax for referring to an external script called "xxx.js"',
                options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
                ans: '<script src="xxx.js">'
              },{
                question: "4)The external JavaScript file must contain the <script> tag.",
                options:["True","False"],
                ans: "False"
              },
            ]
        },
        {
          name: "CSS1",
          type: "CSS",
          time: "14 min",
          level: 2,
          totalquestions: 7,
          questions:
            [
              {
                question: "1)What is the correct HTML for referring to an external style sheet?",
                options:['<stylesheet>mystyle.css</stylesheet>','<link rel="stylesheet" type="text/css" href="mystyle.css">','<style src="mystyle.css">'],
                ans: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
              },
              {
                question: "2)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
                question: "3)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "4)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "5)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '6)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "7)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            ]
        },
        {
          name: "CSS2",
          type: "CSS",
          time: "14 min",
          level: 3,
          totalquestions: 7,
          questions:
            [
              {
                question: "1)How do you create a function in JavaScript?",
                options:["function:myFunction()","function = myFunction()","function myFunction()"],
                ans: "function myFunction()"
              },
              {
               question: "2)What is the correct HTML for referring to an external style sheet?",
               options:['<stylesheet>mystyle.css</stylesheet>','<link rel="stylesheet" type="text/css" href="mystyle.css">','<style src="mystyle.css">'],
               ans: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
             },
              {
                question: "3)How do you call a function named 'myFunction'?",
                options:["myFunction()","call function myFunction()","call back function myFunction()","call myFunction()"],
                ans: "myFunction()"
              },
              {
              question: "4)Inside which HTML element do we put the JavaScript?",
              options:["<js>","<script>","<scripting>","<javascript>"],
              ans: "<script>"
            },{
              question: "5)Where is the correct place to insert a JavaScript?",
              options:["Both the <head> section and the <body> section are correct","The <body> section","The <head> section"],
              ans: "The <body> section"
            },{
              question: '6)What is the correct syntax for referring to an external script called "xxx.js"',
              options:['<script name="xxx.js">','<script href="xxx.js">','<script src="xxx.js">','<script srcs="xxx.js">'],
              ans: '<script src="xxx.js">'
            },{
              question: "7)The external JavaScript file must contain the <script> tag.",
              options:["True","False"],
              ans: "False"
            },
            ]
        }
      ]

    }
    this.quizDetailsRender = this.quizDetailsRender.bind(this)
    this.proctoringKeyChange = this.proctoringKeyChange.bind(this)
    this.proctoringKeyCheck = this.proctoringKeyCheck.bind(this)
  }

  proctoringKeyChange(e) {
    this.setState({
      proctoringKeyvalue: e.target.value
    })
  }
  selectedQuiz(name, index) {
    this.setState({
      selectedQuizName: name + index,
    })
  }
  expandLevels(index) {

    let new_state = Object.assign({}, this.state);
    let a = new_state.display;
    let original = a[index];
    (a[0] = false, a[1] = false, a[2] = false)
    a[index] = (original) ? false : true;
    this.setState({ display: a });
  }
  logOut() {
    this.props.removeUser()
    localStorage.removeItem("user")

  }
  proctoringKey(a) {
    this.props.changeClass("App-header")
    const { quizlist } = this.state;
    localStorage.setItem("quizStarted", JSON.stringify(quizlist[a]))

    localStorage.setItem("proctoringKey", JSON.stringify(false))
    this.setState({
      proctoringKey: false, index: a,
    })
  }
  startQuiz() {
    localStorage.setItem("proctoringKey", true);
    localStorage.removeItem("distance");
    localStorage.setItem("counter", 0)
    localStorage.setItem("rightAnsers", 0)
    const quizStarted = JSON.parse(localStorage.getItem("quizStarted"));
    this.setState({
      quizStarted: quizStarted, proctoringKey: true
    })

  }

  answerUpdate() {
    // const { counter, quizStarted, rightAnsers } = this.state;
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");
    var checkbox4 = document.getElementById("checkbox4");
    var text;
    const rightAnsers = parseInt(localStorage.getItem("rightAnsers"));
    const quizStarted = JSON.parse(localStorage.getItem("quizStarted"));
    const counter = parseInt(localStorage.getItem("counter"));

    switch (true) {
      case (checkbox1.checked):
        text = 0;
        break;
      case (checkbox2.checked):
        text = 1;
        break;
      case (checkbox3.checked):
        text = 2;
        break;
      case (checkbox4.checked):
        text = 3;
        break;
      default:
        text = 4;
    }
    if (checkbox1)
      checkbox1.checked = false
    if (checkbox2)
      checkbox2.checked = false
    if (checkbox3)
      checkbox3.checked = false
    if (checkbox4)
      checkbox4.checked = false

    if (quizStarted.questions[counter].options[text] === quizStarted.questions[counter].ans) {
      // console.log("if")
      localStorage.setItem("rightAnsers", rightAnsers + 1)
      localStorage.setItem("counter", counter + 1)

      this.setState({
        rightAnsers: rightAnsers + 1, counter: counter + 1
      })

    }
    else if (text === 4) {
      alert("select any option");
    }
    else {
      // console.log("else");

      console.log(quizStarted.questions[counter].options[text]);
      console.log(quizStarted.questions[counter].ans);

      localStorage.setItem("counter", counter + 1)
      this.setState({
        counter: counter + 1
      })

      if (checkbox1)
        checkbox1.checked = false
      if (checkbox2)
        checkbox2.checked = false
      if (checkbox3)
        checkbox3.checked = false
      if (checkbox4)
        checkbox4.checked = false
    }
  }
  clearLocalStorage() {
    localStorage.removeItem("proctoringKey");
    localStorage.removeItem("quizStarted");
    localStorage.removeItem("distance");
    localStorage.removeItem("counter");
    localStorage.removeItem("quizStarted")
    localStorage.removeItem("rightAnsers")
    window.location.reload();
  }
  startQuizRender() {

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();



    const quizStarted = JSON.parse(localStorage.getItem("quizStarted"));
    const counter = parseInt(localStorage.getItem("counter"))
    const totalquestions = parseInt(quizStarted.totalquestions);
    const rightAnsers = parseInt(localStorage.getItem("rightAnsers"));
    if (counter === totalquestions) {
      localStorage.setItem("distance", "end");

      var user = JSON.parse(localStorage.getItem("user"))
      var users = JSON.parse(localStorage.getItem("users"))
      // console.log(users[2])
      // console.log(user);
      users.filter((item, index) => {
        if (item.email == user.email) {
          users.splice(index, 1);
          // for( var i = 0 ; i<(user.attemptedQuizes).length ;i++ ){
          var attemptedQuizesElement = { type: quizStarted.type, level: quizStarted.level, result: (rightAnsers / totalquestions) * 100 + "%", date: datetime, }
          // }
          user.attemptedQuizes.push(attemptedQuizesElement);
          users.push(user)
          localStorage.setItem("users", JSON.stringify(users))
          localStorage.setItem("user", JSON.stringify(user))

        }
      })

      return (
        <div> <h1>{quizStarted.type + " level " + quizStarted.level + " quiz completed marks obtained " + Math.ceil((rightAnsers / totalquestions) * 100) + "%"}</h1>

          {localStorage.setItem("distance", "end")}
          <button className="btn btn-default" onClick={this.clearLocalStorage}>Back to home</button>
        </div>
      )
    }
    else {


      return (
        <div>
          <h3>{quizStarted.questions[counter].question}</h3>
          <div className="block">
            <div>{quizStarted.questions[counter].options[0] && <label htmlFor="checkbox1">
              <input className="" type="radio" name="quiz" id="checkbox1" />{quizStarted.questions[counter].options[0]}
            </label>}</div>

            <div>{quizStarted.questions[counter].options[1] && <label htmlFor="checkbox2">
              <input className="" type="radio" name="quiz" id="checkbox2" />{quizStarted.questions[counter].options[1]}
            </label>}</div>

            <div>{quizStarted.questions[counter].options[2] && <label htmlFor="checkbox3">
              <input className="" type="radio" name="quiz" id="checkbox3" />{quizStarted.questions[counter].options[2]}
            </label>}</div>

            <div>{quizStarted.questions[counter].options[3] && <label htmlFor="checkbox4">
              <input className="" type="radio" name="quiz" id="checkbox4" />{quizStarted.questions[counter].options[3]}
            </label>}</div>

            

          </div>
          <button className="btn btn-warning" onClick={this.answerUpdate.bind(this)}>NEXT</button>
        </div>
      )
    }

  }

  quizDetailsRender() {
    const { selectedQuizName, quizlist } = this.state;
    var user = JSON.parse(localStorage.getItem("user"));
    var index;
    var itemObj = "hgl";  
    quizlist.map((value, indexx) => {
      if (value.name === selectedQuizName) {
        index = indexx
      }
    })
    if (user.attemptedQuizes.filter((item) => {

      if (item.level === quizlist[index].level && item.type === quizlist[index].type) {
        itemObj = item
        return item
      }
    }).length !== 0
    ) {
      return (
        <div>

                Quiz Name:   {quizlist[index].type }  { quizlist[index].level + "  "} 
                Attempted on:    {itemObj.date+" "}
                Marks obtained: {itemObj.result+" "}
        </div>
      )
    }

    else {

      return (
        <div>
         <div>
           {
            <div>
               Quiz Name:   {quizlist[index].type }  { quizlist[index].level + "  "} 

                 Total time:    { "  "+quizlist[index].time}
                 Total questions:  {quizlist[index].totalquestions}
            </div>
           }

         </div >
          <button  className="btn btn-default" onClick={this.proctoringKey.bind(this, index)} >Start QUIZ</button>
        </div>

      )
    }
  }

  mainRender() {
    const { exams, display, selectedQuizName } = this.state;
    return (
      <div >
        <div className="containerSide">
          <ul>
            {
              exams.map((value, index) => {
                const valuelevel=value.level;
                return (
                  <div key={value + index}>
                    <h4 onClick={this.expandLevels.bind(this, index)} >{value.name}</h4>
                    <div className="containerstyled">{
                      display[index] &&
                      <div >
                      {
                      valuelevel.map((name,indexx)=>{
                        return(
                          <li onClick={this.selectedQuiz.bind(this, value.name, indexx)} >Quiz {indexx+1}</li>
                        )
                      })
                        }
                      

                      </div>
                    }
                    </div>
                  </div>
                )
              })
            }
          </ul>
        </div>
        <button className="btn btn-default" style={{ position: "absolute", right: "20px", top: "20px" }} onClick={this.logOut.bind(this)} >Logout</button>
        <div className="container">
          <h3 >{"Login From " + this.props.currenetUser.email}</h3>
          {selectedQuizName && this.quizDetailsRender()}
        </div>
      </div>
    );
  }
  timerFuncRender() {
    const quizStarted = JSON.parse(localStorage.getItem("quizStarted"));
    var str = quizStarted.time;
    var n = str.indexOf(" ");
    var res = str.substring(0, n);
    var timeleft = res * 60000;
    var countDownDate = new Date().getTime();
    var storedTime = parseInt(localStorage.getItem("distance"));

    if (storedTime !== "end" && storedTime) {
      countDownDate = countDownDate + storedTime;
    }
    else {
      countDownDate = countDownDate + timeleft;
    }

    const that = this;
    var x = setInterval(function () {

      var storedTime = localStorage.getItem("distance");



      var now = new Date().getTime();

      var distance = countDownDate - now;

      if (localStorage.getItem("distance") !== "end")
        localStorage.setItem("distance", distance)

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML = + hours + "h "
        + minutes + "m " + seconds + "s ";


      if (distance < 0 || storedTime === "end") {
        clearInterval(x);
        const totalquestions = parseInt(quizStarted.totalquestions);
        that.setState({})
        localStorage.setItem("counter",totalquestions);

        document.getElementById("demo").innerHTML = "Quiz time completed";

      }
    }, 1000);

    return (
      <h2 id="demo"></h2>
    )
  }

  proctoringKeyRender() {
    const quizStarted = JSON.parse(localStorage.getItem("quizStarted"));
    return (
      <div>
        <br />
        <br />
        Enter Proctoring Key for {quizStarted.type} quiz level {quizStarted.level}
        <br />
        <br />
        <div className="form-group">
          <input className="form-control" onChange={this.proctoringKeyChange} type="text" style={{ margin: "0 auto", width: "70%", }} placeholder="enter proctoring key" />
        </div>
        <button className="btn btn-default" onClick={this.proctoringKeyCheck}>Start</button>


        <button className="btn btn-default" style={{marginLeft:"20px"}} onClick={this.dashboard.bind(this)} >Back</button>

      </div>
    )
    }
  dashboard() {
    localStorage.removeItem("proctoringKey");
    localStorage.removeItem("quizStarted");
    this.props.changeClass("App-header2");
    this.setState({})

  }
  proctoringKeyCheck() {
    const { proctoringKeyvalue, proctoringKeys } = this.state;


    if (!!(proctoringKeys.filter(item => item.value === proctoringKeyvalue)).length) {
      this.startQuiz()
      this.props.changeClass("App-header");
    }
    else {

      alert("Incorrect proctoring key")

    }
  }

  render() {
    const proctoringKey = JSON.parse(localStorage.getItem("proctoringKey"));
    const quizStarted = JSON.parse(localStorage.getItem("quizStarted"));
    // quizStarted = (JSON.parse(localStorage.getItem("quizStarted"))) ? JSON.parse(localStorage.getItem("quizStarted")) : this.state.quizStarted;
    var timeleft = parseInt(localStorage.getItem("timeleft"));
    return (
      <div>
        <div>{proctoringKey === null && !quizStarted && this.mainRender()}</div>

        <div>{proctoringKey === false && quizStarted && this.proctoringKeyRender()}</div>

        <div>{proctoringKey === true && quizStarted && this.timerFuncRender()}</div>
        <div>{proctoringKey === true && quizStarted && this.startQuizRender()}</div>
      </div>
    )
  }
}

export default Quizcomp;
