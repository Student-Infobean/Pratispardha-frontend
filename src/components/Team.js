import Header from "./Header";
import view from "../images/viewAll.jpg";
import photo from "../images/0.png"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeams } from "../redux-config/TeamSlice";
function Team() {
    const { teamList, isLoading, error } = useSelector((store) => store.team);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teamStatus = !!JSON.parse(sessionStorage.getItem('current-user')).team
    console.log(teamStatus)
    useEffect(() => {
        dispatch(getTeams());
    }, []);
    const baseUrl = 'http://localhost:3001/images/';
    return <>
        {isLoading ? <div className="spinner d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
            <span>
                <div class="spinner-grow text-muted"></div>
            </span></div> : <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={view} className="d-lg-block w-100 image-responsive" style={{ maxHeight: '550px', overflowX: 'hidden', objectFit: 'cover' }} alt="..." />
                    {teamStatus ?  "" : 
                    <div className="carousel-caption d-md-block mt-5 w-100 " style={{ position: 'absolute', top: 100, left: 0, height: "25vh", backgroundColor: "rgba(0,0, 0, .5)" }}>
                        <h1 style={{ position: 'absolute', marginTop: '', marginLeft: '10%', color: 'white', fontSize: '5vw' }}>TEAM </h1>
                        <p className="text-light  text-center fs-2 ">Create your own <i className="fa fs-2 fa-angle-right text-light"> Team</i></p>
                        <button onClick={() => navigate("/Createteam")} className="btn btn-danger mx-5 click">Create Team</button>
                    </div>}
                </div>
            </div>
        </div>
        /* <div className="container">
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <div className="container"><div className="row border border-dark  rounded" style={{ height: "40vh" }}>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={photo} className=" border border-danger  mx-3 mt-2 img-fluid" width="120vw" height="100vh" style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="col-lg-8 mt-2 col-md-6 col-sm-12">
                            <div className="fs-4 mt-5 fw-bolder">Desafio CD Escorial</div>
                            <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-2 border-bottom"></div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ms-2 mt-1 fs-5"><i className="fa fa-map-marker ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kolkata,India</div>
                            <span className="ms-2 fs-5 text-danger"> <i className="fa fa-trophy ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;Participated in 5 Events</span>
                        </div>
                        <div class="d-flex justify-content-between border-2 flex-wrap flex-md-nowrap border-dark align-items-center  mb-2 border-bottom"></div>
                        <center><button className="btn fw-bolder  rounded-pill w-25 me-4 text-light" style={{ backgroundColor: "#F01E51" }}>Request</button></center>
                    </div></div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <div className="container"><div className="row border border-dark  rounded" style={{ height: "40vh" }}>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={photo} className=" border border-danger  mx-3 mt-2 img-fluid" width="120vw" height="100vh" style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="col-lg-8 mt-2 col-md-6 col-sm-12">
                            <div className="fs-4 mt-5 fw-bolder">Desafio CD Escorial</div>
                            <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-2 border-bottom"></div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ms-2 mt-1 fs-5"><i className="fa fa-map-marker ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kolkata,India</div>
                            <span className="ms-2 fs-5 text-danger"> <i className="fa fa-trophy ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;Participated in 5 Events</span>
                        </div>
                        <div class="d-flex justify-content-between border-2 flex-wrap flex-md-nowrap border-dark align-items-center  mb-2 border-bottom"></div>
                        <center><button className="btn fw-bolder  rounded-pill w-25 me-4 text-light" style={{ backgroundColor: "#F01E51" }}>Request</button></center>
                    </div></div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <div className="container"><div className="row border border-dark  rounded" style={{ height: "40vh" }}>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={photo} className=" border border-danger  mx-3 mt-2 img-fluid" width="120vw" height="100vh" style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="col-lg-8 mt-2 col-md-6 col-sm-12">
                            <div className="fs-4 mt-5 fw-bolder">Desafio CD Escorial</div>
                            <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-2 border-bottom"></div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ms-2 mt-1 fs-5"><i className="fa fa-map-marker ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kolkata,India</div>
                            <span className="ms-2 fs-5 text-danger"> <i className="fa fa-trophy ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;Participated in 5 Events</span>
                        </div>
                        <div class="d-flex justify-content-between border-2 flex-wrap flex-md-nowrap border-dark align-items-center  mb-2 border-bottom"></div>
                        <center><button className="btn fw-bolder  rounded-pill w-25 me-4 text-light" style={{ backgroundColor: "#F01E51" }}>Request</button></center>
                    </div></div>
                </div>

            </div>
</div> */}
        {<div className="container">
            <div className="row d-flex justify-content-evenly" >
                {teamList.map((team, index) => {
                    let { logo, name,personalPlayers, _id } = team;
                    logo= baseUrl +logo;
                    return (<div key={team} className="col-lg-4 col-md-6 col-sm-12 mt-5" >
                        <div className="container" onClick={() => navigate(`/myteam/${_id}`)}>
                            <div className="row border border-dark rounded" style={{ height: "40vh" }}>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <img src={logo} className=" border border-danger  mx-3 mt-2 img-fluid" width="120vw" height="100vh" style={{ borderRadius: "50%" }} />
                                </div>
                                <div className="col-lg-8 mt-2 col-md-6 col-sm-12">
                                    <div className="fs-4 mt-5 fw-bolder">{name}</div>
                                    <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-2 border-bottom"></div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="ms-2 mt-1 fs-5"><i className="fa fa-map-marker ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{personalPlayers}</div>
                                    <span className="ms-2 fs-5 text-danger"> <i className="fa fa-trophy ms-4" style={{ fontSize: "28px" }}></i>&nbsp;&nbsp;&nbsp;Participated in 5 Events</span>
                                </div>
                                <div class="d-flex justify-content-between border-2 flex-wrap flex-md-nowrap border-dark align-items-center  mb-2 border-bottom"></div>
                                <center><button className="btn fw-bolder  rounded-pill w-25 me-4 text-light" style={{ backgroundColor: "#F01E51"}}>Request</button></center>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>}
    </>
}
export default Team;
