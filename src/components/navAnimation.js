import { useState, useEffect } from "react";

export default function Animation() {
  const [comp, setComp] = useState("home");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const charSet = [
      "\u{1FB70}",
      "\u{1FB71}",
      "\u{1FB72}",
      "\u{1FB73}",
      "\u{1FB74}",
      "\u{1FB75}",
    ];

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    let newComp = "";
    for (let i = 0; i < 4; i++) {
      newComp +=
        charSet[
          Math.round(
            Math.sin(seconds * 1.256 * 2 + i * 1.256 * 2) *
              ((charSet.length - 1) / 2) +
              (charSet.length - 1) / 2
          )
        ];
    }
    setComp(newComp);
    return () => clearInterval(interval);
  }, [seconds]);

  return comp;
}
