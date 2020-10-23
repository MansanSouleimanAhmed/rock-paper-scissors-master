import React, { Fragment } from "react";
import Logo from "./svg/logo";
import BgTriangle from "./svg/bg-triangle";
import IconRock from "./svg/icon-rock";
import IconScissors from "./svg/icon-scissors";
import IconPaper from "./svg/icon-paper";
export default function Regular() {
  return (
    <Fragment>
      <section className={"regular"}>
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
          <div className={"rock-icon icon"}>
            <IconRock />
          </div>
          <div className={"scissors-icon icon"}>
            <IconScissors />
          </div>
          <div className={"paper-icon icon"}>
            <IconPaper />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
