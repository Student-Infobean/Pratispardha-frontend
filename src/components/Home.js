import { useEffect, useState } from "react";
import About from "./About-Home";
import BestPlayer from "./BestPlayers";

import Carousel from "./Carousel"
import EntityInfo from "./EntityInfo";
import Footer from "./Footer";
import Header from "./Header";
import RecentChampion from "./Recent-Champions";
import Schedule from "./Schedule";
import TournamentList from "./tournamentList";

function Home(){
    const [popup, setPop] = useState(false);
    const player = JSON.parse(sessionStorage.getItem('current-user'));
    console.log(player)
    useEffect(()=>{
        const timer = setTimeout(() => {
                player && player.hasOwnProperty('playingStyle') ? setPop(false) : setPop(true)
        },2000);
        return () => clearTimeout(timer);
    }, []);
    const closePopup = () => {
        setPop(false)
    }
    return <>
        <Carousel/>
        <About/>
                {popup?<div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <div>
                                   <i class="fa fa-bell mt-3" style={{fontSize:"50px" ,marginLeft : '60px' }}></i>
                                    <h2 className="mb-3 mt-3">REMAINDER !</h2>
                                </div>
                                <div>
                                    <p className="text-secondary " style={{marginLeft:"45px", marginTop: '8px'}} onClick={closePopup}><i class="fa fa-close"></i></p>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-center">Please Add Your playingStyle to participate in the teams</h5>
                                <center><button className="btn btn-primary mt-3">Check Now</button></center>
                            </div>
                        </div>
                    </div> :""
}
        <TournamentList/>
        <BestPlayer/>
        <Schedule/>
        <EntityInfo/>
        <RecentChampion/>
        <Footer/>
        
    </>
}

export default Home;