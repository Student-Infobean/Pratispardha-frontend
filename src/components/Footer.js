
import '../footer.css'
function Footer() {
    console.log('footer Loaded')
    return <>
        {/* <section>
            <div className="footer  bg-dark mt-5">
                <div className="container-fluid">
                    <div classNameName="container-fluid">
                        <div className="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 row-cols-1">
                            <div className="col">
                                <div className="text-white">
                                    <h5 className="mx-5 mt-3">About</h5>
                                    <div className="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center mt-3 mb-3 border-bottom"></div>
                                    <p  classNameName=" mx-5 w-75">The Falcon Is The Popular And Most Powerful Team In The Tournament. It Is Establish To Provide An Opportunity To Improve Cricketing Skill Of Young Talented Cricketers.</p>
                                    <div className="link">
                                        <ul className="list-unstyled e">
                                            <li><a href="#" className="text-white text-decoration-none"><i className="fa fa-home me-3 p-0 "></i> Polo Ground Indore</a></li>
                                            <li><a href="#" className="text-white text-decoration-none"><i className="fa fa-phone me-3"></i>+91 8827343481</a></li>
                                            <li><a href="#" className="text-white text-decoration-none"><i className="fa fa-envelope mailto:me-3"></i>sb360879@gmail.com</a></li>
                                        </ul>
                                    </div>
                                    <ul className="social-network d-flex align-items-center justify-content-sm-around p-0 list-unstyled">
                                        <li className=""><a href="#"><i className="fab fa-facebook-f "></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram-v"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="last text-white">
                                    <h5 className=" text-center mt-3">Company</h5>
                                    <div className="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center pt-2 pb-2 p-4 mb-1 border-bottom"></div>
                                  
                                    <ul className="link-widget p-0 list-unstyled text-white">
                                        <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                        <li ><a href="#" className="text-white text-decoration-none">Blog</a></li>
                                        <li ><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                                        <li ><a href="#" className="text-white text-decoration-none">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="last text-white">
                                    <h5 className="text-center mt-3">NewsLetter</h5>
                                    <div className="d-flex justify-content-between border-3 flex-wrap flex-md-nowrap border-danger align-items-center pt-2 pb-2 p-4 mb-1 border-bottom"></div>
                                    <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                                    <input type="email" className="form-control++" placeholder="Enter Your Email Here" />
                                    <button type="submit" className="main-btn rounded-2 mt-3 p-1 fs-5 border-white  bg-primary text-white">Submit</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright-section bg-dark ">
            
                <p className="p-0 bg-dark text-white p-3 text-center">Copyright <a href="#" className="text-white">© CODE4EDUCATION.</a> All Rights Reserved</p>
            </div>

        </section> */}
        <footer className="footer">
            <div className="container">
                <div className="row footer-content">
                    <div className="col-md-6 col-lg-3 content_box company">
                        <div className="title">
                            <h3>Company</h3>
                        </div>
                        <div className="links">
                            <ul className="footer-links">
                                <li className="footer-list"><a routerLink="about-us">About us</a></li>
                                <li className="footer-list"><a routerLink="contact">contact us</a></li>
                                <li className="footer-list"><a routerLink="terms">terms and condition</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 content_box host_event">
                        <div className="title">
                            <h3>Host Event</h3>
                        </div>
                        <div className="links">
                            <ul className="footer-links">
                                <li className="footer-list"><a href="#">publish your events</a></li>
                                <li className="footer-list"><a href="#">promote your events</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 content_box discover_event">
                        <div className="title">
                            <h3>discover event</h3>
                        </div>
                        <div className="links">
                            <ul className="footer-links">
                                <li className="footer-list"><a href="#">events for you</a></li>
                                <li className="footer-list"><a href="#">virtrual events</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 content_box contact_data">
                        <div className="title">
                            <h2>Pratispardha</h2>
                        </div>
                        <div className="links">
                            <ul className="footer-links">
                                <li className="footer-list"><i className="fas fa-location-arrow    "></i>Polo Ground, Indore</li>
                                <li className="footer-list"><i className="fa fa-mobile" aria-hidden="true"></i> +91 882743481</li>
                                <li className="footer-list"><i className="fas fa-mail-bulk    "></i>sb360879@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="social-icon">
                    <span>Copyright@Pratispardha  All Copyright Reserved</span>
                    <div className="icons">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            
</footer>

    </>
}
export default Footer;