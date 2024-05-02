
import Header from "./Header";
import "../Team.css";
import { useEffect } from "react";
import banner from "../images/banner.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../images/post.jpg";
import club from "../images/club-1.webp";
import { useSelector ,useDispatch} from "react-redux";
import { getTeamById } from "../redux-config/TeamDetail";
function Teamdetails() {
    const params  = useParams();
    const teamId = params.teamId;
    const playerTeam  = JSON.parse(sessionStorage.getItem('current-user')).team
    const { activePlayer, isLoggedIn } = useSelector((store) => store.player);
    const {team, isLoading} = useSelector((store) => store.teamdetail);
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const baseUrl = 'http://localhost:3000/images/';
    
    useEffect(() =>{
        dispatch(getTeamById(teamId))
    }, [])
    
   
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
                                <p>{team?.captain?.playerType}</p>
                            </div>
                        </div> 
                    </div>

                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <h4 className="mt-4">Players</h4>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div class="cardteam">
                        <div class="icon">
                            <img src={club} alt="" style={{ height: "90%" }} />
                        </div>
                        <p class="title">Player Name</p>
                        <p class="text">sdfgsdgfkdgkfhfk
                            <span>dfdsgsdgkds</span>
                            <h3>ertewtruw</h3>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <center>{playerTeam ==team._id ? <button className="btn btn-danger my-5" onClick={() =>navigate('/filterplayer')}>Add PLayer</button> : ""}</center>

            </div>
        
        }
    </>
}
export default Teamdetails;





















