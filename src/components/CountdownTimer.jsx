import { useEffect, useState } from "react";

import FlipUnit from "./FlipUnit";
import hills from "/images/pattern-hills.svg";
import stars from "/images/bg-stars.svg";
import SocialMediaIcons from "./SocialMediaIcons";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full z-10 font-red-hat min-h-screen bg-navy-900 flex flex-col items-center justify-center">
      <h1 className="text-white uppercase tracking-[0.3em] text-xl mb-24 font-bold text-center">
        We're launching soon
      </h1>

      <div className="flex gap-4 md:gap-8 w-10/12 mx-auto justify-center">
        <FlipUnit value={timeLeft.days} label="Days" />
        <FlipUnit value={timeLeft.hours} label="Hours" />
        <FlipUnit value={timeLeft.minutes} label="Minutes" />
        <FlipUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="absolute -z-30 top-0 w-full">
        <img
          src={stars}
          className="w-full object-contain  bg-black h-screen"
          alt="top background image"
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <img
          src={hills}
          className="w-full object-cover"
          alt="bottom background image"
        />
      </div>
      <SocialMediaIcons />
    </div>
  );
};

export default CountdownTimer;
