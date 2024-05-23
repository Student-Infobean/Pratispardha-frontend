import { useSelector } from "react-redux";
import logo from "../images/logo.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTeamById } from "../redux-config/TeamDetail";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux-config/PlayerSlice";
import { current } from "@reduxjs/toolkit";
const css=`
.nav-link{
        color:#102C57;
    }
    .nav-link:hover{d
        color:#FFC107;
    }
`
function Header() {
    let { activePlayer } = useSelector((store) => store.player);
    let isLoggedIn  = !!JSON.parse(sessionStorage.getItem('current-user'))
    // let { team, isLoading } = useSelector((store) => store.teamdetail);
    
    let navigate=useNavigate();
    const dispatch = useDispatch();
    const currentUser = JSON.parse(sessionStorage.getItem('current-user'));
    const teamId = isLoggedIn && currentUser.team?._id
   
    // useEffect(() => {
    //     if (activePlayer && activePlayer._id) {
    //         dispatch(getTeamById(teamId));
    //     }
    // }, []);
    const isCaptain = currentUser && currentUser.team?.captain == currentUser._id;

    const handleLogOut = () =>{
    
        if(window.confirm("Are You sure !")){
            dispatch(logOut())
        }
        navigate('/')
    }
    return <>
        <div className="container-fluid d-flex align-items-center " style={{ backgroundColor: "#102C57" }}>
            <div className="d-flex justify-content-center row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 " >
                <div className="col ms-5 mt-2 mb-2">
                    <i className="fa fa-facebook text-light px-3" style={{ fontSize: "22px" }}></i>
                    <i className="fa fa-instagram text-light px-3" style={{ fontSize: "22px" }}></i>
                    <i className="fa fa-twitter text-light  px-3" style={{ fontSize: "22px" }}></i>
                    <i className="fa fa-youtube-play text-light  px-3" style={{ fontSize: "22px" }}></i>
                    <i className="fa fa-linkedin-square text-light  px-3" style={{ fontSize: "22px" }}></i>
                </div>
            </div>
            {/* {isLoggedIn ? <h5 className="text-white" style={{marginLeft : '6s2rem', marginTop : '0.4rem'}}>Hello &nbsp;&nbsp;&nbsp;{currentUser.name}</h5> : ""} */}
        </div>
        <div class="container-fliud bg-white">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid  d-flex justify-content">
                    <div class="row ">
                        <div class="col-lg-12 col-md-6 col-sm-12 col-12  " style={{ marginRight: "170px" }}>
                            <center><img src={logo} alt="" width="70px" height="70px" /></center>
                        </div>
                    </div>
                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <div className=" me-5 pe-5">
                        <ul class="navbar-nav text-center text-dark fs-bolder" style={{ fontSize: "18px", fontWeight: "350"}}>
                            <li class="nav-item dropdown" >
                            <a class="nav-link  fw-bold px-4" href="/" id="navbarDropdownMenuLink" >
                                    Home
                                </a>
                            </li>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link  fw-bold px-4" href="/point-table">
                                        Standings
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link  fw-bold px-4"   href="/filterplayer" id="navbarDropdownMenuLink">
                                        Players
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link fw-bold  px-4"   href="/Teamdetails" id="navbarDropdownMenuLink">
                                        Teams
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link fw-bold px-4"   href="/event" id="navbarDropdownMenuLink" >
                                        Events
                                    </a>
                                </li>
                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link fw-bold px-4"   href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link fw-bold px-4" href="#"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contact
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center ">
                                <li class="nav-item dropdown">
                                    <a class="nav-link text-dark fw-bold px-3"  href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {isLoggedIn ? <span><i className="fs-3 fa fa-user-circle "  style={{color:"#102C57"}} ></i></span> : ""}
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{cursor:"pointer",color:"#102C57"}}  >
                                        <li><a onClick={() => navigate(`/getplayerinfo/${currentUser._id}`)} class="dropdown-item" >{isLoggedIn ? <i className="fs-5 fa fa-sign-out me-2"  style={{color:"#102C57"}} >&nbsp;&nbsp;&nbsp;My Profile</i> : ''}</a></li>
                                        <li><a class="dropdown-item" >{teamId != null ? <i className="fs-5 fa fa-group me-2"  style={{color:"#102C57"}}  onClick={()=>navigate(`/myteam/${teamId}`)}>&nbsp;&nbsp;&nbsp;My Team </i> : <button className="btn btn-outline-warning" na>Create team</button>}</a></li>
                                        <li onClick={handleLogOut}><a class="dropdown-item" >{isLoggedIn ? <i className="fs-5 fa fa-sign-out me-2"  style={{color:"#102C57"}} >&nbsp;&nbsp;&nbsp;Logout</i> : ''}</a></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                            <ul class="navbar-nav text-center d-flex justify-content-end">
                                <li class="nav-item dropdown">
                                    <a class="nav-link fw-bold px-3"  style={{color:"#102C57"}} onClick={() => isCaptain ? alert('redirect to playerRequest') : navigate('/teamrequest')} id="navbarDropdownMenuLink">
                                      {isLoggedIn ? <span><i className="fs-3 fa fa-bell text-warning" ></i></span> :  'Signin'}    
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6" >

                                        </span>
                                    </a>
                                </li>
                            </ul>
                            
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <style>{css}</style>
    </>
}
export default Header;