import About from "./About-Home";
import BestPlayer from "./BestPlayers";

import Carousel from "./Carousel"
import EntityInfo from "./EntityInfo";
import Header from "./Header";
import RecentChampion from "./Recent-Champions";
import Schedule from "./Schedule";
import TournamentList from "./tournamentList";

function Home(){
    
    return <>
        <Carousel/>
        <About/>
        <TournamentList/>
        <BestPlayer/>
        <Schedule/>
        <EntityInfo/>
        <RecentChampion/>
    </>
}

export default Home;