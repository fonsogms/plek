import { Route, Routes } from "react-router-dom";
import "./App.css";
import WatchScreen from "./screens/watch";
import TimerScreen from "./screens/timer";
import HomeScreen from "./screens/home";
import { PATHS } from "./constants/paths";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path={PATHS.HOME} element={<HomeScreen />} />
        <Route path={PATHS.WATCH} element={<WatchScreen />} />
        <Route path={PATHS.TIMER} element={<TimerScreen />} />
      </Routes>
    </div>
  );
}

export default App;
