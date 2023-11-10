const mockF = (time) =>
  new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, time);
  });

//first task
const timeOut = (time) =>
  new Promise((_, rej) => {
    setTimeout(() => rej("Timeout sorry"), time);
  });

const doInTime = async (call, limit) => {
  const result = await Promise.race([call(), timeOut(limit)]);
  return result;
};

//second task
const talkToMe = async (bool) => {
  switch (bool) {
    case true:
      return "Hello";
    case false:
      throw "World";
    default:
      break;
  }
};

//Third task
/* 
Option b should be the most convenient to avoid unnnecesary renders.
<MyContext.Provider value={useMemo(() => value,
[value])}>{children}</MyContext.Provider>

Since the value is using useMemo this value will only be computed if "value" changes.
Children will still be re-rendered if parent component re-renders.
In order to avoid that we should need to wrap the child component in React.memo

*/

//Fourth task
/* the memoization will be based on the reference of the object instead of the value. If you change a property within the object (e.g., firstName or givenName), but the reference to the object itself remains the same, the memoization will not trigger a re-render.
 */
