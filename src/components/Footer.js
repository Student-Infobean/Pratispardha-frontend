function Footer() {
    return <>
        <section>
            <div class="footer  bg-dark mt-5">
                <div class="container-fluid">
                    <div className="container-fluid">
                        <div class="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 row-cols-1">
                            <div class="col">
                                <div class="text-white">
                                    <h5 class="mx-5 mt-3">About</h5>
                                    <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-3 border-bottom"></div>
                                    <p  className=" mx-5 w-75">The Falcon Is The Popular And Most Powerful Team In The Tournament. It Is Establish To Provide An Opportunity To Improve Cricketing Skill Of Young Talented Cricketers.</p>
                                    <div class="link">
                                        <ul class="list-unstyled e">
                                            <li><a href="#" class="text-white text-decoration-none"><i class="fa fa-home me-3 p-0 "></i> Polo Ground Indore</a></li>
                                            <li><a href="#" class="text-white text-decoration-none"><i class="fa fa-phone me-3"></i>+91 8827343481</a></li>
                                            <li><a href="#" class="text-white text-decoration-none"><i class="fa fa-envelope mailto:me-3"></i>sb360879@gmail.com</a></li>
                                        </ul>
                                    </div>
                                    <ul class="social-network d-flex align-items-center justify-content-sm-around p-0 list-unstyled">
                                        <li class=""><a href="#"><i class="fab fa-facebook-f "></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram-v"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="last text-white">
                                    <h5 class=" text-center mt-3">Company</h5>
                                    <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center pt-2 pb-2 p-4 mb-1 border-bottom"></div>
                                  
                                    <ul class="link-widget p-0 list-unstyled text-white">
                                        <li><a href="#" class="text-white text-decoration-none">About Us</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">Blog</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">Contact Us</a></li>
                                        <li ><a href="#" class="text-white text-decoration-none">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="last text-white">
                                    <h5 class="text-center mt-3">NewsLetter</h5>
                                    <div class="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center pt-2 pb-2 p-4 mb-1 border-bottom"></div>
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