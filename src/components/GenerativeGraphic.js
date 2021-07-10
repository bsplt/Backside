import * as React from "react";
import { useState, useEffect } from "react";
import "./GenerativeGraphic.css";

export default function Graphic(props) {
  const [comp, setComp] = useState();
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    const width = Number(props.width);
    const height = Number(props.height);
    const targetLine = height - 3;
    const targetChars = targetLine * width;
    if (width < 1 || height < 1) return null;
    const charSet = ["\u{00A0}", "\u{2591}", "\u{1FB90}", "\u{2593}"];
    const randomSet = getInitalSetRange(width);
    let newComp = getInitialValue(randomSet, Math.min(charSet.length * 2, 9));
    newComp = getFill(newComp, width, targetLine);
    newComp = getMultiplications(newComp, targetChars / 2, width);
    newComp = getCellulation(newComp, width, charSet.length);
    newComp = getLines(newComp, width, charSet, targetChars - 2);
    setComp(newComp);
  }, [props.width, props.height, refresh]);

  return (
    <div className="blocks graphic">
      {comp}
      <a
        style={{ userSelect: "none" }}
        onClick={() => {
          setRefresh(refresh + 1);
        }}
      >
        {"\u{EC00}\u{EC00}"}
      </a>
    </div>
  );
}

const getInitalSetRange = (width) => {
  return Math.floor(scale(Math.random(), 0, 1, 0.5, 0.9) * width);
};

const getInitialValue = (size, range) => {
  let value = "";
  for (let i = 0; i < size; i++) {
    value += Math.floor(Math.random() * range);
  }
  return value;
};

const getMultiplicationTable = (length, width) => {
  const table = [];
  for (let i = 0; i <= length; i++) {
    const scale =
      Math.random() > 0.75
        ? randomRange(width * 0.15, width * 0.33)
        : randomRange(1, 3);
    table.push(Math.max(Math.floor(Math.random() * scale), 1));
  }
  return table;
};

const getFill = (input, width, lines) => {
  let output = "";
  for (let i = 0; i < lines * (width / input.length); i++) {
    output += input;
  }
  return output;
};

const getMultiplications = (input, target, width) => {
  const table = getMultiplicationTable(8, width);
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    const mult = table[parseInt(char)];
    for (let j = 0; j < mult; j++) {
      output += char;
    }
    if (output.length > target) {
      return output;
    }
  }
  return output;
};

const getCellulation = (input, width, neighborhoods) => {
  let output = "";
  for (let i = 0; i < input.length; i = i + width) {
    let line = input.substring(i, Math.min(i + width, input.length));
    output += line;
    let newLine = "";

    for (let j = 0; j < line.length; j++) {
      if ((i / width) % 2 === 0) {
        newLine += line.charAt(j);
      } else if (
        j > 0 &&
        line.charAt(j - 1) % neighborhoods ===
          (line.charAt(j) + 1) % neighborhoods
      ) {
        newLine += line.charAt(j - 1);
      } else if (
        j < line.length - 1 &&
        line.charAt(j + 1) % neighborhoods ===
          (line.charAt(j) + 1) % neighborhoods
      ) {
        newLine += line.charAt(j + 1);
      } else {
        newLine += line.charAt(j);
      }
    }

    output += newLine;
  }
  return output;
};

const getLines = (_input, width, charSet, target) => {
  const input = _input.substring(0, target);
  let output = "";
  for (let i = 0; i < input.length; i = i + width) {
    let line = "";
    for (let j = i; j < Math.min(i + width, input.length); j++) {
      line += charSet[input.charAt(j) % charSet.length];
    }
    if (i + width - 1 < input.length) {
      line += "\u{0A}";
    }
    output += line;
  }
  return output;
};

const scale = (input, in_min, in_max, out_min, out_max) => {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const randomRange = (min, max) => {
  return scale(Math.random(), 0, 1, min, max);
};
