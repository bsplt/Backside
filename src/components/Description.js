import * as React from "react";
import "./description.css";

const Description = (props) => {
  return (
    <div className={"description"}>
      <div className={"descriptionContent"}>
        {props.title}
        <br />
        {props.date}
      </div>
      <div className="descriptionBackground" />
    </div>
  );
};

export default Description;
