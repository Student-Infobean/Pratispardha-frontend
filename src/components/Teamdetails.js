import Header from "./Header";
import "../Team.css";
import "../popup.css"
import { useEffect, useState } from "react";
import club from "../images/club-1.webp";
import { useSelector } from "react-redux";
function Teamdetails() {
    const { team } = useSelector((store) => store.teamdetail);
    const baseUrl = 'http://localhost:3001/images/';
    const [popup, setPop] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setPop(!popup)
        },2000);
        return () => clearTimeout(timer);
    }, []);
    console.log(popup);
    const closePopup = () => {
        setPop(false)
    }
    return <>
        <Header />
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={baseUrl + `${team.banner}`} className="d-lg-block w-100 image-responsive" style={{ maxHeight: '550px', overflowX: 'hidden', objectFit: 'cover', opacity: "0.5" }} alt="..." />
                    <div className="carousel-caption  d-md-block " style={{ position: 'absolute', top: 100, left: 0 }}>
                        <h2 style={{ position: 'absolute', marginTop: '5%', color: "danger", marginLeft: '35%', fontSize: '5vw', textTransform: "uppercase" }}>{team.name}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-4">
            <div className="row ">
                <div className="col-lg-12 d-flex justify-content-center col-md-6 col-sm-12 ">
                    <div className="" style={{ width: "35%" }} >
                        <img src={baseUrl + `${team.captain.image}`} alt="" className="img-fluid" />
                    </div>
                    <div className="">
                        <div class="card5">
                            <div class="card5-content">
                                <img src={baseUrl + `${team.logo}`} alt="" style={{ width: "50%", height: "50%", borderRadius: "50%" }} />
                                <h2 >CAPTAIN</h2>
                                <span style={{ textTransform: "uppercase" }}>{team.captain.name}</span>
                                <p>{team.captain.playerType}</p>
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
        <center><button className="btn btn-danger my-5">Add PLayer</button></center>
        <div>
                {popup?<div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <div>
                                   <i class="fa fa-bell ms-5 mt-2" style={{fontSize:"50px" ,color:""}}></i>
                                    <h2 className="mb-2">REMAINDER !</h2>
                                </div>
                                <div>
                                    <p className="text-secondary " style={{marginLeft:"43px"}} onClick={closePopup}><i class="fa fa-close"></i></p>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-center">Please Update Your Profile</h5>
                                <center><button className="btn btn-primary mt-2">Check Now</button></center>
                            </div>
                        </div>
                    </div> :""
}
        </div>
    </>
}
export default Teamdetails;