import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { IBaseReactFc } from "../../types/global";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const MainDiv: IBaseReactFc = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        height: "100vh",
        backgroundColor: COLORS.DARK_BLUE, // Set the background color
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
      marginBottom: "20px",
      color: "white", // Set the text color to white
    }}
  >
    Welcome to my test assessment. Please select which one you want to see
    first.
  </h1>
);

const ButtonContainer: IBaseReactFc = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      {children}
    </div>
  );
};
const CleanLink = ({ children, to }: LinkProps) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
        fontFamily: "Jost, sans-serif",
        fontStyle: "normal",
      }}
      to={to}
    >
      {children}
    </Link>
  );
};
const Styles = { MainDiv, Title, ButtonContainer, CleanLink };

export default Styles;
