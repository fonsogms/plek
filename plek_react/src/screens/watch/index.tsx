import { useWatch } from "./useWatch";
import Clock from "../../components/Clock";
import Styles from "./watch.styles";
import { stringifyTime } from "../../utils/stringifyTime";
import { COLORS } from "../../constants/colors";
const WatchScreen = () => {
  const { time, color } = useWatch();

  return (
    <Styles.MainContainer>
      <Clock
        time={stringifyTime(time)}
        color={color}
        backgroundColor={COLORS.WHITE}
      />
    </Styles.MainContainer>
  );
};

export default WatchScreen;
