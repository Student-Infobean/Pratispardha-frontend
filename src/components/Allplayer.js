import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Api from "./Webapi"
import "../Main.css";
import player from "../images/player.webp"
import { ToastContainer, toast } from "react-toastify";
function Allplayer() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios.get(Api.getPlayersWithJoinStatus).then((response) => {
            setData(response.data.result);
        }).catch((error) => console.log("Server error", error));
    }, []);
    console.log(Data)
    const baseUrl = 'http://localhost:3001/images/';
    const handlerequest=()=>{
        toast("Sucesss");
    }
    return <>
        <Header />
        <ToastContainer/>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={player} className="d-lg-block w-100 image-responsive" style={{ maxHeight: '550px', overflowX: 'hidden', objectFit: 'cover' }} alt="..." />

                    <div className="carousel-caption d-md-block mt-5 w-100 " style={{ position: 'absolute', top: 100, left: 0, height: "25vh", backgroundColor: "rgba(0,0, 0, .5)" }}>
                        <h1 style={{ position: 'absolute', marginTop: '', marginLeft: '10%', color: 'white', fontSize: '5vw' }}>Player</h1>        
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5 border mb-2">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-1">
                {Data.map((player, index) => (<div className="col">
                    <div class="card-container">
                        <div class="card border-bottom-0">
                            <div class="front-content">
                                <p><img src={baseUrl + player.image} alt="" style={{ height: "340px", width: "350px" }} />
                                    <center className="mt-3"><h3>{player.name}</h3></center>
                                </p>
                            </div>
                            <div class="content  ">
                                <p class="heading">{player.name}</p>
                                <p>{player.playerType}</p>
                                <p>Age : {player.age} Height : {player.height}</p>
                                {/* <p>{player.stats.totalMatches}</p> */}
                            </div>
                        </div>
                    </div>
                    <a onClick={handlerequest}  style={{width:"85%",background: "linear-gradient(-45deg,#1cc6e3 0%, #020338 100%)"}}>Request</a>
                
                </div>)
                )}
            </div>
        </div>


    </>
}
export default Allplayer;