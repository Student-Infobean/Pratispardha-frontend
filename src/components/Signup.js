import Css from "./css"
import TextField from '@mui/material/TextField';
import { MenuItem } from "@mui/material";
function Signup() {
  const playerType = ["Bowler","Batter","Wicketkipper","All-Rounder"];
  return <>
    <section className="">
      <div className="container-fluid h-custom mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 me-5 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 w-50">

            <form class="form ">
              <p class="text-info fw-bolder fs-3">Register </p>
              <div class="mt-5">
                <TextField id="outlined-basic" label="Name" variant="outlined" className="w-100 form-control mb-3" />
                <div className="mb-3">
                  <TextField className="me-3" type="email" id="" label="Email" variant="outlined" />
                  <TextField className="me-3" type="text" id="" label="Password" variant="outlined" />
                  <TextField type="text" id="" label="Contact Number" variant="outlined" />
                </div>
                <div className="mb-3">
                  <TextField className="me-3" type="number" id="" label="Age" variant="outlined" />
                  <TextField type="number" id="" label="height" variant="outlined" />
                </div>
                <div className="mb-3">
                  <TextField id="filled-select-currency" select label="Select Your Player Type" defaultValue="Boller"  variant="filled" className=" w-25 me-5">
                    {playerType.map((type,option) => (
                      <MenuItem key={option} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField id="filled-select-currency" select label="Select Your Player Type" defaultValue="Boller"  variant="filled" className=" w-25 me-5">
                    {playerType.map((type,option) => (
                      <MenuItem key={option} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              <button class="btn btn-info w-100 rounded-pill fs-5 mt-4">Submit</button>
              <p class="signin">Already have an acount ? <a >Signin</a> </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
}
export default Signup;