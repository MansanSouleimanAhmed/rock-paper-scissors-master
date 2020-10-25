import React, { Fragment, useState, useEffect, useRef } from "react";
import Logo from "./svg/logo";
import BgTriangle from "./svg/bg-triangle";
import IconRock from "./svg/icon-rock";
import IconScissors from "./svg/icon-scissors";
import IconPaper from "./svg/icon-paper";
import RockIcon from "./buttons/rock-icon";
import ScissorsIcon from "./buttons/scissors-icon";
import PaperIcon from "./buttons/paper-icon";

export default function Regular(props) {
  const [toggleRegular, setToggleRegular] = useState(false);
  const paper = useRef(null);
  const rock = useRef(null);
  const scissors = useRef(null);

  const changeToggleRegular = (e) => {
    setToggleRegular((state) => !state);
    switch (e.target.getAttribute("id")) {
      case "paper":
        scissors.current.style.zIndex = "0";
        rock.current.style.zIndex = "0";
        paper.current.style.zIndex = "3";
        return;
        break;
      case "rock":
        paper.current.style.zIndex = "0";
        scissors.current.style.zIndex = "0";
        rock.current.style.zIndex = "3";
        break;
      case "scissors":
        paper.current.style.zIndex = "0";
        rock.current.style.zIndex = "0";
        scissors.current.style.zIndex = "3";
        break;
      default:
        console.log("test");
    }
  };
  console.log(props.userchoice);
  let displayTriangle = {};
  const bgTriangleFunction = () => {
    if (!toggleRegular) {
      return (displayTriangle = { display: "block" });
    } else {
      return (displayTriangle = { display: "none" });
    }
  };
  bgTriangleFunction();
  let displayResult = {};
  const resultFunction = () => {
    if (!toggleRegular) {
      return (displayResult = { display: "none" });
    } else {
      return (displayResult = { display: "block" });
    }
  };
  resultFunction();
  return (
    <Fragment>
      <section className={"common-style"}>
        <div className={"logo-score"}>
          <div className={"logo"}>
            <a href={"/"}>
              <Logo />
            </a>
          </div>
          <div className={"score"}></div>
        </div>
        <div className={"bg-triangle"} style={displayTriangle}>
          <BgTriangle />
          <RockIcon
            toggleRegular={toggleRegular}
            onClick={changeToggleRegular}
          />
          <ScissorsIcon
            toggleRegular={toggleRegular}
            onClick={changeToggleRegular}
          />
          <PaperIcon
            toggleRegular={toggleRegular}
            onClick={changeToggleRegular}
          />
        </div>
        <div className={"regular-result"} style={displayResult}>
          <div className={"container-icons"}>
            <PaperIcon ref={paper} /> <RockIcon ref={rock} />
            <ScissorsIcon ref={scissors} />
          </div>
          <div className={"play-again"}>
            <p>{"YOU WIN"}</p>
            <p>{"YOU LOSE"}</p>
            <p onClick={changeToggleRegular}>{"Play again"}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
