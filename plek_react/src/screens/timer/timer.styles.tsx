import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { IBaseReactFc } from "../../types/global";

const MainContainer: IBaseReactFc = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

const Title = () => (
  <h1
    style={{
      fontFamily: FONTS.REGULAR,
      fontSize: "24px",
      margin: "20px",
      color: COLORS.DARK_BLUE,
    }}
  >
    Move the cursor above or below the line in the middle to add or substract
    time
  </h1>
);

const Styles = { MainContainer, Title };

export default Styles;
