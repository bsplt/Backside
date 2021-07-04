import React from "react";
import "./navigation.css";
import { Link } from "gatsby";

export default function Navigation(props) {
  const navigation = props.navigation;
  const links = navigation.map((link) => (
    <span className={link.renderAsBlocks ? "blocks" : ""}>
      <Link to={link.page}>{link.content}</Link>&nbsp;
    </span>
  ));

  return <div className="navigation">{links}</div>;
}
