import { useState, useEffect } from "react";

export default function Animation() {
  const label = "home";
  const [comp, setComp] = useState(label);
  const [seconds, setSeconds] = useState(0);
  const replace = "replace";

  useEffect(() => {
    const charSet = [replace, "\u{2591}", "\u{1FB90}", "\u{2593}"];

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    let newComp = "";
    for (let i = 0; i < 4; i++) {
      const scale = 3.14 / (label.length + 1);
      const value = Math.round(
        Math.sin(seconds * -scale + i * scale * 2) *
          ((charSet.length - 1) / 2) +
          (charSet.length - 1) / 2
      );
      const result = charSet[value];
      newComp += result === replace ? label.substring(i, i + 1) : result;
    }
    setComp(newComp);
    return () => clearInterval(interval);
  }, [seconds]);

  return comp;
}
