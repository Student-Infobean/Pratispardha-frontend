import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Routes,Route } from "react-router-dom";
import Teamrequest from "./components/Teamrequest";
import Team from "./components/Team";
import Createteam from "./components/Createteam";
import Teamdetails from "./components/Teamdetails";
import { createContext } from "react";
import Allplayer from "./components/Allplayer";
import PointTable from "./components/PointTable";
export const PlayerContext=createContext();
function App() {

  return <>
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>} />
      <Route  path="/Teamrequest" element={<Teamrequest/>}/>
      <Route path="/Team" element={<Team/>} />
      <Route path="/Createteam" element={<Createteam/>}/>
      <Route path="/Teamdetails" element={<Teamdetails/>}/>
      <Route path="/Allplayers" element={<Allplayer/>}/>
      <Route path="/Pointtable" element={<PointTable/>}/>
    </Routes>

  </>
};
export default App;

