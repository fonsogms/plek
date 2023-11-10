type IStringifyTime = { hour: number; min: number; sec: number };

export const stringifyTime = ({ hour, min, sec }: IStringifyTime) => {
  return `${hour}:${min}:${sec}`;
};
