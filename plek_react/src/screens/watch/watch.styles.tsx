import { COLORS } from "../../constants/colors";
import { IBaseReactFc } from "../../types/global";

const MainContainer: IBaseReactFc = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: COLORS.DARK_BLUE,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

const Styles = { MainContainer };
export default Styles;
