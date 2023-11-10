import { COLORS } from "../../constants/colors";

const navbarStyle = {
  backgroundColor: "white",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const ulStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  display: "flex",
};

const liStyle = {
  margin: "0 10px",
};

const linkStyle = {
  textDecoration: "none",
  color: COLORS.DARK_BLUE,
};

const imgStyle = {
  height: "50px",
  width: "100px",
  border: "0",
};

export { imgStyle, liStyle, linkStyle, navbarStyle, ulStyle };
