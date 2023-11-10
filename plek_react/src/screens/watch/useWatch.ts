import { useEffect, useState } from "react";
import { getCurrentTime } from "../../utils/getCurrentTime";
import { getCurrentColor } from "../../utils/getCurrentColor";

export const useWatch = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getCurrentTime();
      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { time, color: getCurrentColor(time.sec) };
};
