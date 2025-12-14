import { useEffect, useState } from "react";

const FlipUnit = ({ value, label }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [previousValue, setPreviousValue] = useState(value);
  const [animated, setAnimated] = useState(false);

  const pad = (n) => n.toString().padStart(2, "0");

  useEffect(() => {
    if (value !== currentValue) {
      setPreviousValue(currentValue);
      setCurrentValue(value);
      setAnimated(true);
      const timeout = setTimeout(() => {
        setAnimated(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [value, currentValue]);

  const cardBase =
    "absolute left-0 w-full h-1/2 overflow-hidden backface-hidden";

  // Police : 3xl sur mobile -> 7xl sur desktop
  const numBase =
    "absolute left-1/2 -translate-x-1/2 text-3xl md:text-7xl text-red font-bold leading-none z-10";

  return (
    <div className="flex flex-col items-center gap-3 md:gap-4">
      <div className="relative w-16 h-16 md:w-36 md:h-36 bg-black/20 rounded-lg perspective-container shadow-[0_5px_0px_0px_rgba(18,18,28,1)] md:shadow-[0_10px_0px_0px_rgba(18,18,28,1)]">
        <div
          className={`top-0 rounded-t-lg bg-blue border-b border-navy-950/30 z-0 ${cardBase}`}
        >
          <div className="absolute inset-0 bg-dark-blue/40"></div>
          <span className={`top-full -translate-y-1/2 ${numBase}`}>
            {pad(currentValue)}
          </span>
        </div>
        <div className={`bottom-0 rounded-b-lg bg-blue z-0 ${cardBase}`}>
          <span className={`top-0 -translate-y-1/2 ${numBase}`}>
            {pad(animated ? previousValue : currentValue)}
          </span>
        </div>
        <div
          className={`top-0 rounded-t-lg bg-dark-blue border-b border-navy-950/30 origin-bottom z-10 ${cardBase} ${
            animated ? "animate-fold-top" : "hidden"
          }`}
        >
          <div className="absolute inset-0 bg-dark-blue/40"></div>
          <span className={`top-full -translate-y-1/2 ${numBase}`}>
            {pad(previousValue)}
          </span>
        </div>
        <div
          className={`bottom-0 rounded-b-lg bg-blue origin-top z-20 ${cardBase} ${
            animated ? "animate-unfold-bottom" : "invisible"
          }`}
          style={{ transform: animated ? "" : "rotateX(90deg)" }}
        >
          <span className={`top-0 -translate-y-1/2 ${numBase}`}>
            {pad(currentValue)}
          </span>
        </div>
        <div className="absolute z-30 top-1/2 left-0 w-2 h-2 md:w-3 md:h-3 bg-black rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute z-30 top-1/2 right-0 w-2 h-2 md:w-3 md:h-3 bg-black rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>
      <p className="text-gray-300 text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">
        {label}
      </p>
    </div>
  );
};

export default FlipUnit;
