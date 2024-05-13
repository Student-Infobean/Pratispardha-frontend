
import Header from "./Header";
import "../Team.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { getTeamById } from "../redux-config/TeamDetail";
import { compose } from "@reduxjs/toolkit";
import Footer from "./Footer";
function Teamdetails() {
    const params  = useParams();
    const teamId = params.teamId;
    const playerTeam  = JSON.parse(sessionStorage.getItem('current-user')).team
    const { activePlayer, isLoggedIn } = useSelector((store) => store.player);
    const {team, isLoading} = useSelector((store) => store.teamdetail);
    
    console.log(team?.players)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const baseUrl = 'http://localhost:3000/images/';
    useEffect(() =>{
        dispatch(getTeamById(teamId))
    }, [])
    console.log(team)
   
    return <>
        {isLoading ? <div className="loader"></div> : 
            <div>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={baseUrl +`${team && team.banner}`} className="d-lg-block w-100 image-responsive" style={{ maxHeight: '550px', overflowX: 'hidden', objectFit: 'cover', opacity: "0.5" }} alt="..." />
                    <div className="carousel-caption  d-md-block " style={{ position: 'absolute', top: 100, left: 0 }}>
                        <h2 style={{ position: 'absolute', marginTop: '5%',color:"danger", marginLeft: '35%', fontSize: '5vw',textTransform:"uppercase" }}>{team?.name}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-4">
            <div className="row ">
                <div className="col-lg-12 d-flex justify-content-center col-md-6 col-sm-12 ">
                    <div className="" style={{ width: "35%" }} >
                        <img src={baseUrl+`${team && team?.captain?.image}`} alt="" className="img-fluid" />
                    </div>
                    <div className="">
                        <div class="card5">
                            <div class="card5-content">
                                <img src={baseUrl+`${team && team.logo}`}  alt="" style={{ width: "50%", height: "50%",borderRadius:"50%"}} />
                                <h2 >CAPTAIN</h2>
                                <span style={{textTransform:"uppercase" }}>{team?.captain?.name}</span>
                                <p>{team?.captain?.playingStyle.bowlingStyle}</p>
                                <p>{team?.captain?.playingStyle.battingPosition}</p>
                            </div>
                        </div> 
                    </div>

                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <h4 className="mt-4">Batsman</h4>
                {team.players?.filter((player, index) =>player.playerId.playerType == "Batsman").map((item,index) =><div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="cardteam">
                        <div className="icon" style={{width : '250px'}}>
                            
                            <img src={baseUrl+item.playerId.image} alt="" style={{ height: "100%", borderRadius : '50%' }} />
                        </div>
                        
                        <p className="title">{item.playerId.name}</p>
                        <p className="text">{item.playerId.playingStyle.battingHand} Handed Bat <br></br>
                            <span></span>
                            <h6 className="fs-5 mt-lg-2">{item.playerId.playingStyle.battingPosition =="Opener" ? "Top Order Batsman" : item.playerId.playingStyle.battingPosition =="middle" ? 'Middle Order Batsman' : 'Finisher'}</h6>
                        </p>
                    </div>
                </div>)}
            </div>

            <div className="row">
                <h4 className="mt-4">Bowlers</h4>
                {team.players?.filter((player, index) =>player.playerId.playerType == "Bowler").map((item,index) =><div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="cardteam">
                        <div className="icon" style={{width : '250px'}}>
                            
                            <img src={baseUrl+item.playerId.image} alt="" style={{ height: "100%", borderRadius : '50%' }} />
                        </div>
                        
                        <p className="title">{item.playerId.name}</p>
                        <p className="text">{item.playerId.playingStyle.bowlingArm} Arm Bowler <br></br>
                            <span></span>
                            <h6 className="fs-5 mt-lg-2">{item.playerId.playingStyle.bowlingStyle}</h6>
                        </p>
                    </div>
                </div>)
                    
                }
            </div>

            <div className="row">
                <h4 className="mt-4">All-Rounders</h4>
                {team.players?.filter((player, index) =>player.playerId.playerType == "All-Rounder").map((item,index) =><div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="cardteam">
                        <div className="icon" style={{width : '250px'}}>
                            
                            <img src={baseUrl+item.playerId.image} alt="" style={{ height: "100%", borderRadius : '50%' }} />
                        </div>
                        
                        <p className="title">{item.playerId.name}</p>
                        <p className="text">{item.playerId.playingStyle.bowlingArm} Arm Bowler <br></br>
                            <span></span>
                            <h6 className="fs-5 mt-lg-2">{item.playerId.playingStyle.bowlingStyle}</h6>
                        </p>
                    </div>
                </div>)
                    
                }
            </div>
        </div>
        <center>{playerTeam?._id ==team?._id ? <button className="btn btn-danger my-5" onClick={() =>navigate('/filterplayer')}>Add PLayer</button> : ""}</center>
        <Footer/>
         </div>
       
        }
    </>
}
export default Teamdetails;





















