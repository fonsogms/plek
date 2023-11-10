import { COLORS } from "../../constants/colors";

const clockStyle = (backgroundColor?: string) => {
  return {
    fontSize: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: backgroundColor || COLORS.DARK_BLUE,
    width: "80%",
    height: "100px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    letterSpacing: "2px",
  };
};

export { clockStyle };
