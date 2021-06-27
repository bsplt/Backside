import React from "react";
import "./navigation.css";
import { Link } from "gatsby";

export default function Navigation(props) {
  const navigation = props.navigation;
  const links = navigation.map((link) => (
    <span className={link.renderAsBlocks ? "blocks" : ""}>
      <Link to={link.page}>{link.content}</Link>
    </span>
  ));

  const fillChar = "\u2591";
  let fill = "";
  for (let i = 0; i < 60; i++) {
    fill += fillChar;
  }

  return (
    <div className="navigation">
      {/*<span className="blocks">{fillChar}{fillChar}&nbsp;</span>*/}
      {links}
      <span className="blocks">{fill}</span>
    </div>
  );
}
