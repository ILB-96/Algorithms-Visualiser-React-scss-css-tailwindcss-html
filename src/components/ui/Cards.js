import React from "react";
import "./CustomDivs.css";
export function MainCard(props) {
  return <div className="main-card mx-1 p-2">{props.children}</div>;
}
