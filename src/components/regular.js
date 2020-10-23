import React, { Fragment } from "react";
import Logo from "./svg/logo";
import BgTriangle from "./svg/bg-triangle";
import IconRock from "./svg/icon-rock";
import IconScissors from "./svg/icon-scissors";
import IconPaper from "./svg/icon-paper";
import RockIcon from "./buttons/rock-icon";
import ScissorsIcon from "./buttons/scissors-icon";
import PaperIcon from "./buttons/paper-icon";

export default function Regular() {
  return (
    <Fragment>
      <section className={"common-style "}>
        <div className={"logo-score"}>
          <div className={"logo"}>
            <a href={"/"}>
              <Logo />
            </a>
          </div>
          <div className={"score"}></div>
        </div>
        <div className={"bg-triangle "}>
          <BgTriangle />
          <RockIcon />
          <ScissorsIcon />
          <PaperIcon />
        </div>
      </section>
    </Fragment>
  );
}
