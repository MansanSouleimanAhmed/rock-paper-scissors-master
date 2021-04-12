import React, { Fragment } from "react";
import LogoBonus from "./svg/logo-bonus";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import BgPentagon from "./svg/bg-pentagon";
import PaperIcon from "./butons/paper-icon";
import ScissorsIcon from "./butons/scissors-icon";
import RockIcon from "./butons/rock-icon";
import LizardIcon from "./butons/lizard-icon";
import SpockIcon from "./butons/spock-icon";
const navDispear = { display: "none" };
export default function Bonus(props) {
  return (
    <Fragment>
      <section className={"common-style"}>
        <div className={"logo-score"}>
          <div className={"logo"}>
            <a href={"/"}>
              <LogoBonus />
            </a>
          </div>
          <div className={"score"}></div>
        </div>
        <div className={"bg-pentagone"}>
          <BgPentagon />
          <RockIcon />
          <ScissorsIcon />
          <PaperIcon />
          <LizardIcon />
          <SpockIcon />
        </div>
      </section>
    </Fragment>
  );
}
