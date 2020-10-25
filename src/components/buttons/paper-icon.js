import React, { useEffect, useState, forwardRef } from "react";
import IconPaper from "../svg/icon-paper";

function PaperIcon(props, ref) {
  return (
    <div
      className={"paper-icon icon"}
      onClick={props.onClick}
      id={"paper"}
      ref={ref}
    >
      <IconPaper />
    </div>
  );
}
export default React.forwardRef(PaperIcon);
