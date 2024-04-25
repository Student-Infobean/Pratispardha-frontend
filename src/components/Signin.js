import TextField from "@mui/material/TextField";
import logo from "../images/logo.jpg"
import cric from "../images/signinimage.jpg"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Api from "./Webapi";
import "./css"
import { useRef } from "react";
import axios from "axios";

import { toast,ToastContainer } from "react-toastify";
function Signin() {
    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();
    const signin = async () => {
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        console.log(email, password);
        try {
            let response = await axios.post(Api.PlayerSignin, { email, password });
            let player = response.data.player;
            delete player.password;
            saveplayer(player);
            navigate("/");
        }catch(err){
            console.log(err);
            toast.error("Oops something went wrong");
        }
    }
    const saveplayer =(player)=>{
          sessionStorage.setItem("current-user",JSON.stringify(player));
        }
    return <>
        <Header />
        <ToastContainer/>
        <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
            <div className="container py-1 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div classNameName="col-lg-12">
                                    <div className="text-center">
                                        <img src={logo}
                                            style={{ height: "160px", width: "185px" }} alt="logo" />
                                        <h4 className="mt-1 mb-5 pb-1">WELCOME</h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body mx-md-4">

                                        <p>Please login to your account</p>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input ref={emailInput} type="email" id="form2Example11" className="form-control"
                                                placeholder="Phone number or email address" />
                                            <label className="form-label mt-2" >Username</label>
                                        </div>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input ref={passwordInput} type="password" className="form-control" />
                                            <label className="form-label" >Password</label>
                                        </div>

                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <button onClick={signin} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 me-4" type="button">Login</button>
                                            <a className="text-muted" href="#!">Forgot password?</a>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Don't have an account?</p>
                                            <button onClick={() => navigate("/Signup")} type="button" className="btn btn-outline-danger">Create new</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="signin" className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white me-3">
                                        <img src={cric} alt="" className="img-fluid border rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}
export default Signin;