import React from "react";
import "/node_modules/modern-normalize/modern-normalize.css";
import "./Layout.css";
import Navigation from "./Navigation.js";

export default function Layout(props) {
  const navigation = [
    { page: "/", content: "home" },
    { page: "/", content: "work" },
    { page: "/about", content: "about" },
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
