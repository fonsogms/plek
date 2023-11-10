export const getMillisecondsToTime = (milliseconds: number) => {
  const date = new Date(milliseconds);

  const hour = date.getUTCHours();
  const min = date.getUTCMinutes();
  const sec = date.getUTCSeconds();

  const time = { hour, min, sec };

  return time;
};
