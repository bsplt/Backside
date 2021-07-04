import React from "react";
import "/node_modules/modern-normalize/modern-normalize.css";
import "./layout.css";
import Navigation from "./navigation.js";

export default function Layout(props) {
  const navigation = [
    { page: "/", content: "/" },
    { page: "/", content: "Work" },
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
