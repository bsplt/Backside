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

  const fillChar = "\u2550";
  let fill = "";
  for (let i = 0; i < 60; i++) {
    fill += fillChar;
  }

  return (
    <div className="navigation">
      <span className="blocks">{"\u{1fbc1}\u{1fbc2}\u{1fbc3}"} </span>
      {links}
      <span className="blocks">{fill}</span>
    </div>
  );
}
