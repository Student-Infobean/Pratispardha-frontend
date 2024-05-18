import Header from "./Header";
import view from "../images/create.jpg";
import first from "../images/1.jpg"
import sec from "../images/2.jpg"
import third from "../images/3.jpg"
import forth from "../images/4.jpg"
import fifth from "../images/5.jpg"
import sixth from "../images/6.jpg"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Api from "./Webapi";
import axios from "axios";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from "react-toastify";
function Createteam() {
    const {activePlayer,isLoggedIn}=useSelector((store)=>store.player);
    let currentPlayer = JSON.parse(sessionStorage.getItem('current-user'));
    console.log(currentPlayer);
    const teamnameInput = useRef();
    const bannerInput = useRef();
    const logoInput = useRef();
    const perplayerInput = useRef();
    const navigate = useNavigate();

    const createTeam = async () => {
        const formData = new FormData();
        formData.append('name', teamnameInput.current.value);
        formData.append('personalPlayers', perplayerInput.current.value);
        formData.append('logo', logoInput.current.files[0]);
        formData.append('banner', bannerInput.current.files[0]);
        formData.append("captain",currentPlayer._id);
        try {
            const response = await axios.post(Api.createTeam, formData);
            console.log(response.data);
            toast(response.data.result);
            
            
        } catch (error) {
            console.error('Error:', error);
            toast("Oops Something wents wrong");
        }
    }

    return <>
        <ToastContainer/>
        <div id="carouselExampleDark" className="carousel carousel-dark slide my-5 mt-5 " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={view} className="d-lg-block w-100  image-responsive" style={{ overflowX: 'hidden', objectFit: 'cover', height: "70vh" }} alt="..." />
                    <div className="carousel-caption h-100 d-md-block w-100" style={{ position: 'absolute', top: 0, left: 0, backgroundImage: " linear-gradient(to top, rgb(17, 17, 17) 40%, rgb(251, 192, 45))", opacity: "0.8" }}>
                        <h1 style={{ position: 'absolute', marginTop: '30vh', marginLeft: '35vw', color: 'white', fontSize: '5vw' }}>Create Team </h1>
                        <p className="text-light"></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <fieldset className="">
                <div class="row mt-2  d-flex justify-content-center">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label className="fs-5">Team Name</label>
                            <input ref={teamnameInput} name="name" class="form-control border border-danger" type="text" required="" pattern="[A-Za-z\s]{1,32}" />
                        </div>
                    </div>
                </div>
                <div className="row mt-4  d-flex justify-content-center">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label className="fs-5">Team Banner</label>
                            <input ref={bannerInput} name="logo" class="form-control border border-danger" type="file" required="" />
                        </div>
                    </div>
                </div>
                <div className="row mt-4  d-flex justify-content-center">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label className="fs-5">Team Logo</label>
                            <input ref={logoInput} name="logo" class="form-control border border-danger" type="file" required="" />
                        </div>
                    </div>
                </div>
                <div class="row mt-4  d-flex justify-content-center">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label className="fs-5">Personal Players Quantity</label>
                            <input ref={perplayerInput} name="number" min={0} class="form-control border border-danger" type="number" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" required="" />
                        </div>
                    </div>
                </div>
                <center><button onClick={createTeam} className="mt-4 rounded-pill click" style={{ backgroundColor: "#F01E51" }}> Create</button></center>

            </fieldset>
        </div>
        <div className="container-fluid mt-5">
            <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-xs-1">
                <div className="col"><img className="img-fluid" src={first} /></div>
                <div className="col"><img src={sec} className="img-fluid" /></div>
                <div className="col"><img src={third} className="img-fluid" /></div>
                <div className="col"><img src={forth} className="img-fluid" /></div>
                <div className="col"><img src={fifth} className="img-fluid" /></div>
                <div className="col"><img src={sixth} className="img-fluid" /></div>
            </div>
        </div>
    </>
}
export default Createteam;