import { useState, useEffect } from "react";

export default function GetPageWidth() {
  const [count, setCount] = useState();
  const [width, setWidth] = useState();
  const [listener, setListener] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!listener) {
      window.addEventListener("resize", handleResize);
      setListener(true);
    }
    setCount(getCount());
  }, [width]);

  return count;
}

const getCount = () => {
  return getComputedStyle(document.documentElement).getPropertyValue("--count");
};
