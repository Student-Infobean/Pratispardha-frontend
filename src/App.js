import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Routes,Route } from "react-router-dom";
import Teamrequest from "./components/Teamrequest";
import Team from "./components/Team";
import Createteam from "./components/Createteam";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>} />
      <Route  path="/Teamrequest" element={<Teamrequest/>}/>
      <Route path="/Teamdetails" element={<Team/>} />
      <Route path="/Createteam" element={<Createteam/>}/>
    </Routes>
  </>
};
export default App;

