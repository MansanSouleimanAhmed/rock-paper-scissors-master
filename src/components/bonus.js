import React, { Fragment } from "react";
import LogoBonus from "./svg/logo-bonus";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const navDispear = { display: "none" };
export default function Bonus(props) {
  return (
    <Fragment>
      <section className={"bonus"}>
        <div className={"logo-bonus"}>
          <a href={"/"}>
            <LogoBonus />
          </a>
        </div>
      </section>
    </Fragment>
  );
}
