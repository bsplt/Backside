import { useState, useEffect } from "react";

export default function GetPageSize() {
  const [cols, setCols] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rows, setRows] = useState(0);
  const [listener, setListener] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (!listener) {
      window.addEventListener("resize", handleResize);
      setListener(true);
    }
    setCols(getCols());
    setRows(getRows(cols));
  }, [width, height]);

  const out = [parseInt(cols), parseInt(rows)];
  return out;
}

const getCols = () => {
  return getComputedStyle(document.documentElement).getPropertyValue("--count");
};

const getRows = (cols) => {
  const width = document.querySelector(".layout").offsetWidth;
  const height = window.innerHeight;
  return Math.floor(height / (width / cols) / 2);
};
