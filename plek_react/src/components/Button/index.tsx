import { COLORS } from "../../constants/colors";

type IButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
};
export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "white",
        border: "none",
        borderRadius: 3,
        color: COLORS.DARK_BLUE,
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
};
