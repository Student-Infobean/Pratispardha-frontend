import img from "../images/footer.jpg"
function Footer() {
    return <>
        <section>
            <div class="footer  bg-dark mt-5">
                <div style={{ width: "99vw", backgroundImage: `url('${img}')`, backgroundRepeat: "no-repeat" }}>
                    <div class="container-fluid" style={{ backgroundColor: "rgba(0,0, 0, .6)" }}>
                        <div class="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 row-cols-1 d-flex justify-content-around align-items-">
                            <div class="col">
                                <div class="text-white">
                                    <h5 class="mx-5 mt-3 fs-4 text-center">About Us</h5>
                                    <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-3 border-bottom"></div>
                                    <p className=" mx-5 w-75">The Falcon Is The Popular And Most Powerful Team In The Tournament. It Is Establish To Provide An Opportunity To Improve Cricketing Skill Of Young Talented Cricketers.</p>

                                    <ul class="social-network d-flex justify-content-start ms-5 p-0 list-unstyled mt-5">
                                        <li><div style={{ width: "45px", height: "45px", border: "1px solid red", borderRadius: "50%", backgroundColor: "#DE1515", textAlign: "center" }}><i class="fa fa-facebook-f" style={{ fontSize: "30px", marginTop: "7px" }}></i></div></li>
                                        <li><div style={{ width: "45px", height: "45px", border: "1px solid red", borderRadius: "50%", backgroundColor: "#DE1515", textAlign: "center", marginLeft: "12px" }}><i class="fa  fa-instagram" style={{ fontSize: "30px", marginTop: "7px" }}></i></div></li>
                                        <li><div style={{ width: "45px", height: "45px", border: "1px solid red", borderRadius: "50%", backgroundColor: "#DE1515", textAlign: "center", marginLeft: "12px" }}><i class="fa fa-twitter" style={{ fontSize: "30px", marginTop: "7px" }}></i></div></li>
                                        <li><div style={{ width: "45px", height: "45px", border: "1px solid red", borderRadius: "50%", backgroundColor: "#DE1515", textAlign: "center", marginLeft: "12px" }}><i class="fa fa-linkedin" style={{ fontSize: "30px", marginTop: "7px" }}></i></div></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="last text-white ">
                                    <h5 class=" text-center fs-4 mt-3">Usefull Links</h5>
                                    <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-3 border-bottom"></div>
                                    <div className="d-flex justify-content-around">
                                    <ul class="link-widget p-0 text-white">
                                        <li><a href="#" class="text-white text-decoration-none">About Us</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">Blog</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">Contact Us</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">FAQs</a></li>
                                    </ul>
                                    <ul class="link-widget p-0 list-unstyled text-white">
                                        <li><a href="#" class="text-white text-decoration-none">About Us</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">Blog</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">Contact Us</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">FAQs</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="last text-white">
                                    <h5 class="text-center fs-4 mt-3">Contact Info</h5>
                                    <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-3 border-bottom"></div>
                                    <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                                    <input type="email" class="form-control++" placeholder="Enter Your Email Here" />
                                    <button type="submit" class="main-btn rounded-2 mt-3 p-1 fs-5 border-white  bg-primary text-white">Submit</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container-fluid copyright-section bg-dark ">

                <p class="p-0 bg-dark text-white p-3 text-center">Copyright <a href="#" class="text-white">© CODE4EDUCATION.</a> All Rights Reserved</p>
            </div>

        </section>

    </>
}
export default Footer;