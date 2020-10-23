import React, { Fragment, useState } from "react";
import Bonus from "./bonus";
import Regular from "./regular";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Main() {
  //Send the pathname to the main page each time you reload the page.
  window.history.replaceState(null, "Main", "/");
  //////
  const [toggle, setToggle] = useState(true);
  const changeToggle = () => {
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
  //https://stackoverflow.com/questions/17976883/rock-paper-scissors-in-javascript
  /*  do {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
  } while (!ref.validAction(userChoice));
  var choices = ref.getChoices(),
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log("User Choice: " + userChoice);
  console.log("Computer Choice: " + computerChoice);
  console.log(ref.judge(userChoice, computerChoice)); */
  toggleFunction();

  return (
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
              render={() => <Regular toggle={toggle} onClick={changeToggle} />}
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
