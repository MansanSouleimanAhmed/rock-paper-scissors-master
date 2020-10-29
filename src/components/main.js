import React, { Fragment, useState, useEffect } from "react";
import Bonus from "./bonus";
import Regular from "./regular";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import paperIcon from "./buttons/paper-icon";

export default function Main() {
  const [userChoice, setUserChoice] = useState("");
  const [toggle, setToggle] = useState(true);

  //Send the pathname to the main page each time you reload the page.
  window.history.replaceState(null, "Main", "/");
  //////
  let result = 0;
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
      return (training[play1][play2] === 1 ? play1 : play2) + " wins!";

      /*      if (training[play1][play2] === 1) {
        return play1;
      } else {
        result = result + 1;
        return play2;
      } */
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
  console.log(">>>>>>>>>>> " + result);

  var ref = referee();
  ref.learn("rock", "scissors");
  ref.learn("paper", "rock");
  ref.learn("scissors", "paper");

  let choices = ref.getChoices(),
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log("User Choice: " + userChoice);
  console.log("Computer Choice: " + computerChoice);
  function resultFunction() {
    if (userChoice != "") {
      console.log(">>>> " + ref.judge(userChoice, computerChoice));
    }
  }
  resultFunction();
  const changeToggle = (e) => {
    setToggle((state) => !state);
  };
  let display = {};
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
                  computerchoice={computerChoice}
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
