import React from "react";
import "/node_modules/modern-normalize/modern-normalize.css";
import "./layout.css";
import Navigation from "./navigation.js";
import Animation from "./navAnimation.js";

export default function Layout(props) {
  const animation = Animation();
  const navigation = [
    { page: "/", content: animation, renderAsBlocks: true },
    { page: "/", content: "Projects" },
    { page: "/about", content: "About" },
  ];

  return (
    <div className={["wrap", props.style].join(" ")}>
      <div className={"layout"}>
        <Navigation navigation={navigation} />
        {props.children}
      </div>
    </div>
  );
}
