import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Routes,Route } from "react-router-dom";
import Teamrequest from "./components/Teamrequest";
import Team from "./components/Team";
import Createteam from "./components/Createteam";
import Home from './components/Home'
import Events from './components/Events'
import EventInfo from './components/EventInfo'
import Players from './components/FilterPlayer'
import Auth from "./components/Auth";
import Teamdetails from "./components/MyTeam";
import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() =>{
    Aos.init();
  },[]);
  return <>
  <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>} />
      <Route  path="/Teamrequest" element={<Auth><Teamrequest/></Auth>}/>
      <Route path="/Teamdetails" element={<Auth><Team/></Auth>} />
      <Route path="/Createteam" element={<Auth><Createteam/></Auth>}/>
      
      <Route path='/event' element={<Auth><Events/></Auth>}></Route>
      <Route path='/event-info/:eventId' element={<Auth><EventInfo/></Auth>}></Route>
      <Route path='/filterplayer' element={<Players/>}></Route>
      <Route path='/myteam/:teamId' element={<Auth><Teamdetails/></Auth>}></Route>
    </Routes>
  </>
};
export default App;

