import React from "react";
import { FONTS } from "../../constants/fonts";
import { clockStyle } from "./clock.styles";
const Clock: React.FC<{
  time: string;
  color?: string;
  backgroundColor?: string;
}> = ({ time, color, backgroundColor }) => {
  return (
    <div style={clockStyle(backgroundColor)}>
      <div
        style={{
          display: "flex",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: FONTS.DIGITAL, color, fontSize: 100 }}>
          {time}
        </p>
      </div>
    </div>
  );
};

export default Clock;
