import React, { Fragment, useState, useEffect } from "react";
import Bonus from "./bonus";
import Regular from "./regular";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import paperIcon from "./buttons/paper-icon";
import {useDispatch,connect} from "react-redux";
import SCORE_REGULAR from "../actions/score-regular"
import axios from "axios";
import { set } from "mongoose";
import ResultsRegular from "./results-page/results-regular";
import socketIOClient from "socket.io-client";

function Main({regular}) { 
let dispatch = useDispatch()
const [userChoice, setUserChoice] = useState("");
const [toggle, setToggle] = useState(true);
const [computerChoice, setComputerChoice]=useState("");
const [response, setResponse] = useState("");
const [request, setRequest ] = useState(false);
const [allMessages, setAllMessages] = useState([])

const ENDPOINT = 'http://127.0.0.1:5000';
const io = socketIOClient(ENDPOINT)
const [state, setStaet] = useState({ message: '', name: '' })
const [chat, setChat] = useState([])
  //Send the pathname to the main page each time you reload the page.
  //window.history.replaceState(null, "Main", "/");
  //////




  let result;
  let display = {};
  useEffect(() =>{
const a =() =>{  
  io.on("hello", (arg) => {
    console.log(arg); // world
  });
}
a()
 
  },[])
  function referee() {
    var training = {};
    function learn(winner, loser) {
      if (!training[winner]) training[winner] = {};
      training[winner][loser] = 1;
    }
    function judge(play1, play2) {
      if (play1 === play2) {
        return "tie";
      }
      return (training[play1][play2] === 1 ? 1: 2);
    }
    function validate(choice) {
      return choice in training;
    }
    function choices() {
      return Object.keys(training);
    }
    return {
      learn: learn,
      judge: judge,
      validAction: validate,
      getChoices: choices,
    };
  }
  var ref = referee();
  ref.learn("rock", "scissors");
  ref.learn("paper", "rock");
  ref.learn("scissors", "paper");
  let a;
 
  function resultFunction() {
    if (userChoice != "") {
    //  console.log("User Choice: " + userChoice);
   //   console.log("Computer Choice: " + computerChoice);  
      let regularResult = ref.judge(userChoice, computerChoice);
      if(regularResult ===1){
          var authOptions = {
            method: 'post',
            url: 'http://localhost:5000/api/',
            data: JSON.stringify({"regular": 1}),
            headers: {'Content-Type': 'application/json' },
            json: true
           };
           axios(authOptions)
           .then((response) => {
          // console.log("response axios " + response.data);
         
               })
           .catch((error) => {
              alert(error)
             })
          }
     }   
  }
  resultFunction()
 // console.log('response ' +response)

  const changeToggle = (e) => {
    setToggle((state) => !state);
  };

  const toggleFunction = () => {
    if (toggle) {
      return (display = { display: "block" });
    } else {
      return (display = { display: "none" });
    }
  };
  toggleFunction();

  vtps: return (
    <Fragment>
      <Router>
        <div className={"main"}>
          <nav>
            <ul style={display}>
              <li>
                <Link
                  to={"/regular"}
                  onClick={() => {
                    setToggle((state) => !state);
                  }}
                >
                  {"Regular"}
                </Link>
              </li>
              <li>
                <Link
                  to={"/bonus"}
                  onClick={() => {
                    setToggle((state) => !state);
                  }}
                >
                  {"Bonus"}
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              path={"/regular"}
              render={() => (
                <Regular
                  setuserchoice={setUserChoice}
                  userchoice={userChoice}
                  toggle={toggle}
                  onClick={changeToggle}
                  setcomputerchoice ={setComputerChoice}
                  computerchoice ={computerChoice}
                  referee={ref}
                />
              )}
            />
            <Route
              path={"/bonus"}
              render={() => <Bonus toggle={toggle} onClick={changeToggle} />}
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  regular: state.score
})
const mapDispatchToProps = {
        a : SCORE_REGULAR
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)