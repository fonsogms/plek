import { useEffect, useRef, useState } from "react";
import { getMillisecondsToTime } from "../../utils/formatTime";
import { stringifyTime } from "../../utils/stringifyTime";

const TIMER_DELAY = 100;

export const useTimer = () => {
  const [time, setTime] = useState(stringifyTime({ hour: 0, min: 0, sec: 0 }));

  const getIsMouseInLowerHalf = (mouseY: number) => {
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return mouseY > viewportHeight / 2;
  };

  const startTime = useRef(new Date());
  const stopTime = useRef(new Date());
  const timeout = useRef<NodeJS.Timeout>();
  const isMoving = useRef(false);
  const currentCount = useRef(0);
  const isMouseInLowerHalf = useRef<boolean>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseY = event.clientY;

      if (timeout.current) clearTimeout(timeout.current);

      if (!isMoving.current) {
        isMoving.current = true;
        startTime.current = new Date();
      } else {
        stopTime.current = new Date();

        const timeDifference =
          (stopTime.current.valueOf() - startTime.current.valueOf()) *
          (isMouseInLowerHalf.current ? -1 : 1);

        currentCount.current = currentCount.current + timeDifference;

        isMouseInLowerHalf.current = getIsMouseInLowerHalf(mouseY);

        startTime.current = new Date();
      }

      timeout.current = setTimeout(() => {
        isMoving.current = false;
        currentCount.current = currentCount.current - TIMER_DELAY;

        let newTime = stringifyTime(
          getMillisecondsToTime(Math.abs(currentCount.current))
        );

        if (currentCount.current < 0 && newTime !== "0:0:0") {
          newTime = `-${newTime}`;
        }
        setTime(newTime);
      }, TIMER_DELAY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { time };
};
