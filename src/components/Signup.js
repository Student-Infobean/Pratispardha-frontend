import Css from "./css"
import TextField from '@mui/material/TextField';
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState, useRef } from "react";
import axios from "axios";
import Api from "./Webapi";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
function Signup() {

  const nameInput = useRef();
  const emailInput = useRef();
  const pwdInput = useRef();
  const contactInput = useRef();
  const heightInput = useRef();
  const ageInput = useRef();
  const fileInput = useRef();
  const playerTypeInput = useRef();
  const playerType = ["Bowler", "Batsman", "Wicketkeeper", "All-Rounder"];
  const navigate = useNavigate();

  const signUpPlayer = async () => {
    const isFormValid = validateAllFields();
    if (isFormValid) {
      try {
        const formData = new FormData();
        formData.append('image', fileInput.current.files[0]); // Append file to form data
        formData.append('name', nameInput.current.value);
        formData.append('mobile', contactInput.current.value);
        formData.append('password', pwdInput.current.value);
        formData.append('email', emailInput.current.value);
        formData.append('age', ageInput.current.value);
        formData.append('height', heightInput.current.value);
        formData.append('playerType', playerTypeInput.current.value);

        const response = await axios.post(Api.PlayerSignup, formData);
        console.log(response.data);
        toast.success("Sign Up successful");
        navigate("/");
      } catch (error) {
        console.error(error);
        toast.error("Oops! Something went wrong");
      }
    }
  }
  const validateName = () => {
    const name = nameInput.current.value.trim(); // Get the value of the name input and remove leading/trailing spaces
    if (name === '') {
      document.getElementById("display").innerHTML = "Name is required";
      return false;
    }

    // Check if the name contains only letters and spaces
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to match only letters and spaces
    if (!namePattern.test(name)) {
      document.getElementById("display").innerHTML = "Name should contain only letters and spaces";
      return false;
    }
    document.getElementById("display").innerHTML = "";
    return true;
  };

  const validateEmail = () => {
    const email = emailInput.current.value.trim();

    if (email === '') {
      document.getElementById("emailError").innerHTML = "Email is required";
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email address";
      return false;
    }
    document.getElementById("emailError").innerHTML = "";
    return true;
  };

  const validatePassword = () => {
    const password = pwdInput.current.value.trim();
    if (password === '') {
      document.getElementById("passwordError").innerHTML = "Password is required";
      return false;
    }
    if (password.length < 8) {
      document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long";
      return false;
    }
    document.getElementById("passwordError").innerHTML = "";
    return true;
  };
  const heightValue = () => {
    const heightValue = heightInput.current.value;
    if (!heightValue || isNaN(heightValue) || heightValue <= 3) {
      alert('Please enter a valid height.');
      return;
    }
  }
  const validateContact = () => {
    const contact = contactInput.current.value.trim();
    if (contact === '') {
      document.getElementById("contacterror").innerHTML = "Contact number is required";
      return false;
    }
    const contactPattern = /^[6789][0-9]{9}$/;
    if (!contactPattern.test(contact)) {
      document.getElementById("contacterror").innerHTML = "Invalid contact number";

      return false;
    }
    document.getElementById("contacterror").innerHTML = "";
    return true;
  };

  // Add similar validation functions for other input fields

  const validateAllFields = () => {
    const isContactValid = validateContact();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    return isNameValid && isEmailValid && isPasswordValid && isContactValid;
  };

  return <>
    <ToastContainer />
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
                <TextField inputRef={nameInput} onChange={validateName} id="outlined-basic" label="Name" variant="outlined" className="w-50 mb-3  me-3 form-control" />
                <TextField inputRef={contactInput} onKeyUp={validateContact} type="number" className=" " label="Contact Number" variant="outlined" />
                <div style={{ color: "red" }} id="display">{ }</div> <div style={{ color: "red" }} id="contacterror">{ }</div>
              </div>
              <div className="mb-3">
                <TextField inputRef={emailInput} onChange={validateEmail} className="me-3 w-50" type="email" id="" label="Email" variant="outlined" />
                <TextField inputRef={pwdInput} onChange={validateEmail} className="me-3 " type="text" id="" label="Password" variant="outlined" />
                <div style={{ color: "red" }} id="emailError">{ }</div> <div style={{ color: "red" }} id="passwordError">{ }</div>
              </div>
              <div className="mb-3 d-flex">
                <input ref={ageInput} className="m form-control border border-secondary w-25 me-4" style={{ height: "7vh" }} min={0} type="number" id="" placeholder="Age" />
                <input ref={heightInput} type="number" className=" border border-secondary form-control w-25" placeholder="height" style={{ height: "7vh" }} />

              </div>
              <div className="mb-3 d-flex">
                <div className=" w-100 d-flex">
                  <label className="fs-5 p-3">Profile</label>
                  <TextField inputRef={fileInput} type="file" accept="image/*" className="me-3 " />
                  <TextField inputRef={playerTypeInput} id="filled-select-currency" select label="Select Your Player Type" variant="filled" className=" w-50">
                    {playerType.map((type, option) => (
                      <MenuItem key={option} value={type} >
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div style={{ color: "red" }} id="display">{ }</div> <div style={{ color: "red" }} id="heighterror">{ }</div>
              </div>
            </div>
            <button onClick={signUpPlayer} class="btn bg-info w-75 ms-5 rounded-pill fs-5 mt-4">Submit</button>
            <p class="mt-3 ms-3 fs-5">Already have an acount ? <a href="" onClick={() => navigate("/signin")} style={{ cursor: "pointer" }}> sign In</a> </p>
          </div>
        </div>
      </div>
    </section>
  </>
}
export default Signup;

