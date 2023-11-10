import React from "react";
import { useTimer } from "./useTimer";
import Styles from "./timer.styles";
import Clock from "../../components/Clock";
const TimerScreen = () => {
  const { time } = useTimer();
  return (
    <Styles.MainContainer>
      <Styles.Title />
      <Clock time={time} />
      <hr
        style={{
          position: "absolute",
          width: "100%",
          bottom: "50%",
          borderTop: "1px solid #000",
        }}
      />
    </Styles.MainContainer>
  );
};

export default TimerScreen;
