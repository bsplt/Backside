import React from "react";
import "/node_modules/modern-normalize/modern-normalize.css";
import "./layout.css";

export default function Layout({ children }) {
  return <div className="layout">{children}</div>;
}
