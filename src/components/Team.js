import Header from "./Header";
import view from "../images/viewAll.jpg";
import photo from "../images/0.png"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeams } from "../redux-config/TeamSlice";
import Footer from "./Footer";
import axios from "axios";
import Webapi from "./Webapi";
import { ToastContainer, toast } from "react-toastify";
const css = `
    #teamCards{
        display: flex;
    overflow: hidden;
    transition: transform 0.3s;
    }
    #teamCards:hover{
        transform:scale(1.1);
    }
`;
function Team() {
    const { teamList, isLoading, error } = useSelector((store) => store.team);
    const playerId = JSON.parse(sessionStorage.getItem('current-user'))._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teamStatus = !!JSON.parse(sessionStorage.getItem('current-user')).team
    console.log(teamStatus)
    useEffect(() => {
        dispatch(getTeams());
    }, []);
    const baseUrl = 'http://localhost:3000/images/';
    const handleSendRequest = async (event, teamId) => {
        event.stopPropagation();
        try {
            let response = await axios.post(Webapi.sendRequestToTeam, { teamId, playerId });
            console.log(response)
            toast.success(response.data.result)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.result)
        }
    }

    return <>
        <ToastContainer />
        {isLoading ? <div className="spinner d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
            <span>
                <div class="spinner-grow text-muted"></div>
            </span></div> : <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={view} className="d-lg-block w-100 image-responsive" style={{ maxHeight: '550px', overflowX: 'hidden', objectFit: 'cover' }} alt="..." />

                    <div className="carousel-caption d-md-block mt-5 w-100 " style={{ position: 'absolute', top: 100, left: 0, height: "25vh", backgroundColor: "rgba(0,0, 0, .5)" }}>
                        <h1 style={{ position: 'absolute', marginTop: '', marginLeft: '10%', color: 'white', fontSize: '5vw' }}>TEAM </h1>
                        {teamStatus ? "" : <div><p className="text-light  text-center fs-2 ">Create your own <i className="fa fs-2 fa-angle-right text-light"> Team</i></p>
                            <button onClick={() => navigate("/Createteam")} className="btn btn-danger mx-5 click">Create Team</button></div>}
                    </div>
                </div>
            </div>
        </div>
        }
        {<div className="container">
            <div className="row d-flex justify-content-evenly" >
                {teamList.map((team, index) => {
                    let { logo, name, personalPlayers, players, captain, _id } = team;
                    console.log(baseUrl + logo)
                    return (<div key={team} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 " data-aos='flip-up' >
                        <div className="container border shadow" id="teamCards" onClick={() => navigate(`/myteam/${_id}`)} >
                            <div className="row border-5 rounded border-bottom " style={{ height: "40vh", borderImage: "linear-gradient(45deg,red,blue) 10" }}>
                                <div className="d-flex">
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                        <img src={baseUrl + logo} className=" mx-2 mt-2 img-fluid" width="120vw" style={{ borderRadius: "50%" }} />
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-sm-6 col-xs-6 ">
                                        <div className="fs-4 mt-5 ms-3 fw-bolder ">{name}</div>
                                        <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 border-bottom"></div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="mx-5 fs-4 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Captain :&nbsp;&nbsp;{captain.name}</div>
                                    {/* <div className="ms-5 mt-1 fs-5">Current player: {personalPlayers}</div> */}
                                    <span className="ms-2 fs-5 text-danger"> <i className="fa fa-trophy ms-4 " style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;Participated in 5 Events</span>
                                </div>
                                {!teamStatus ? <div><div class="d-flex justify-content-between border-2 flex-wrap flex-md-nowrap border-dark align-items-center  mb-2 border-bottom"></div>
                                    <center> <button className="btn fw-bolder  rounded-pill w-25 me-4 text-light" style={{ backgroundColor: "#F01E51" }} onClick={(event) => handleSendRequest(event, team._id)} >Request</button> </center>
                                </div> : ""}
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>}
        <Footer />
        <style>{css}</style>
    </>
}
export default Team;
