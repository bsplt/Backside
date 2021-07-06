import { useState, useEffect } from "react";

export default function GetPageSize() {
  const [cols, setCols] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rows, setRows] = useState(0);
  const [listener, setListener] = useState(false);
  const [out, setOut] = useState([null]);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (!listener) {
      window.addEventListener("resize", handleResize);
      setListener(true);
      handleResize();
    }
    setCols(getCols());
    setRows(getRows(cols));
  }, [width, height]);

  useEffect(() => {
    setOut([cols, rows]);
  }, [cols, rows]);

  return out;
}

const getCols = () => {
  return parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--count")
  );
};

const getRows = (cols) => {
  const width = document.querySelector(".layout").offsetWidth;
  const height = window.innerHeight;
  const out = Math.floor(height / (width / cols) / 2);
  console.log(out);
  return out;
};
