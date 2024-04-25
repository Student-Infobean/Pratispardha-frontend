import Css from "./css"
import TextField from '@mui/material/TextField';
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef } from "react";
import axios from "axios";
import Api from "./Webapi";
import {toast,ToastConatiner} from "react-toastify";
function Signup() {
  const nameInput = useRef();
  const emailInput = useRef();
  const pwdInput = useRef();
  const contactInput = useRef();
  const heightInput = useRef();
  const ageInput = useRef();
  const playerTypeInput = useRef();
  const profileInput = useRef();
  const playerType = ["Bowler", "Batsman", "Wicketkeeper", "All-Rounder"];
  const navigate = useNavigate();

  const signUpPlayer = async () => {
    try {
      let name = nameInput.current.value;
      let mobile = contactInput.current.value;
      let password = pwdInput.current.value;
      let email = emailInput.current.value;
      let age = ageInput.current.value;
      let height = heightInput.current.value;
      let type = playerTypeInput.current.value;
      console.log(name,mobile,email,password,age,height,type);
      let response = await axios.post(Api.PlayerSignup,{name,email,password,mobile,age,height,type});
      console.log(response.data);
      toast("sign Up successful");
      navigate("/");
    } catch (error) {
        console.log(error);
        toast.error("Oops! Something went wrong");
    }
  }

  return <>
    <Header />
    <section className="">
      <div className="container h-custom mt-3 border border-dark rounded">
        <div className="row d-flex h-100">
          <div className="col-md-9 col-lg-6 col-xl-5  ms-5">
            <div class="home"></div>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 w-50">

            <p class="text-info text-center fw-bolder fs-3 mt-3">
              <div class="text">
                <h5>Welcome To</h5>
                <h4><span>Pratispardha</span></h4>
              </div>
            </p>
            <div class="mt-5 ">
              <div>
                <TextField inputRef={nameInput} id="outlined-basic" label="Name" variant="outlined" className="w-50 mb-3  me-3 form-control" />
                <TextField inputRef={contactInput} type="text" className=" " label="Contact Number" variant="outlined" />
              </div>
              <div className="mb-3">
                <TextField inputRef={emailInput} className="me-3 w-50" type="email" id="" label="Email" variant="outlined" />
                <TextField inputRef={pwdInput} className="me-3" type="text" id="" label="Password" variant="outlined" />
              </div>
              <div className="mb-3">
                <TextField inputRef={ageInput} className="me-3" type="number" id="" label="Age" variant="outlined" />
                <TextField inputRef={playerTypeInput} id="filled-select-currency" select label="Select Your Player Type" variant="filled" className=" w-50 me-5">
                  {playerType.map((type, option) => (
                    <MenuItem key={option} value={type} >
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="mb-3 d-flex">
                <div className=" w-100">
                  <label className="fs-5 p-3 w-100">Profile</label>
                  <TextField inputRef={profileInput} type="file" className="me-3" />
                  <TextField inputRef={heightInput} type="number" className="me-3" label="height" variant="outlined" /></div>
              </div>
            </div>
            <button onClick={signUpPlayer} class="btn bg-info w-75 ms-5 rounded-pill fs-5 mt-4">Submit</button>
            <p class="mt-3 ms-3 fs-5">Already have an acount ? <a href="" onClick={() => navigate("/")} style={{ cursor: "pointer" }}> sign In</a> </p>

          </div>
        </div>
      </div>
    </section>
  </>
}
export default Signup;

