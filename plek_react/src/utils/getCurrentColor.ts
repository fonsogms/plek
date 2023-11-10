export const getCurrentColor = (s: number) =>
  s % 15 ? (s % 5 ? (s % 3 ? "black" : "red") : "blue") : "purple";
