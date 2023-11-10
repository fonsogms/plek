import { Button } from "../../components/Button";
import { PATHS } from "../../constants/paths";
import Styles from "./home.styles";
const HomeScreen = () => {
  return (
    <Styles.MainDiv>
      <Styles.Title />
      <Styles.ButtonContainer>
        <Button>
          <Styles.CleanLink to={PATHS.WATCH}>Watch</Styles.CleanLink>
        </Button>
        <Button>
          <Styles.CleanLink to={PATHS.TIMER}>Timer</Styles.CleanLink>
        </Button>
      </Styles.ButtonContainer>
    </Styles.MainDiv>
  );
};

export default HomeScreen;
