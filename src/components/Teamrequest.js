import team from "../images/team.jpg"
import Header from "./Header";
import club1 from "../images/club.webp"
import post from "../images/post.jpg"
import post1 from "../images/post1.jpg"
import "./css"
function Teamrequest() {
    return <>
        <Header />
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={team} className="d-lg-block w-100 image-responsive" style={{ maxHeight: '550px', overflowX: 'hidden', objectFit: 'cover' }} alt="..." />

                    <div className="carousel-caption  d-md-block " style={{ position: 'absolute', top: 100, left: 0 }}>

                        <h1 style={{ position: 'absolute', marginTop: '5%', marginLeft: '35%', color: 'white', fontSize: '5vw' }}>TEAM REQUEST</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container  fluid mt-5 mb-5 ">
            <div className="row d-flex">
                <div id="card" className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="d-flex border border-secondary mt-3" style={{ boxShadow: "10px 10px 5px gray", height: "40vh" }}>
                        <div className="w-50">
                            <img src={club1} className=" border border-danger rounded mx-4 mt-4 img-fluid h-75 p-2" />
                        </div>
                        <div className="w-75">
                            <div className="fs-1 mt-4  fw-bolder">Desafio CD Escorial</div>
                            <div>Current Player : 5</div>
                            <div>The Falcon is the popular and most powerful team in the Tournament........</div>
                            <div className="fw-bolder fs-2">____________________</div>
                            <div className="d-flex justify-content-end p-4">
                                <button className="btn btn-outline-warning rounded-pill w-25 me-4">Accept</button>
                                <button className="btn btn-outline-danger rounded-pill w-25 me-5" style={{ fontSize: "20px" }}>Reject</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex border border-secondary mt-3" style={{ boxShadow: "10px 10px 5px gray", height: "40vh" }}>
                        <div className="w-50">
                            <img src={club1} className=" border border-danger rounded mx-4 mt-4 img-fluid h-75 p-2" />
                        </div>
                        <div className="w-75">
                            <div className="fs-1 mt-4  fw-bolder">Desafio CD Escorial</div>
                            <div>Current Player : 5</div>
                            <div>The Falcon is the popular and most powerful team in the Tournament........</div>
                            <div className="fw-bolder fs-2">____________________</div>
                            <div className="d-flex justify-content-end p-4">
                                <button className="btn btn-outline-warning rounded-pill w-25 me-4">Accept</button>
                                <button className="btn btn-outline-danger rounded-pill w-25 me-5" style={{ fontSize: "20px" }}>Reject</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex border border-secondary mt-3" style={{ boxShadow: "10px 10px 5px gray", height: "40vh" }}>
                        <div className="w-50">
                            <img src={club1} className=" border border-danger rounded mx-4 mt-4 img-fluid h-75 p-2" />
                        </div>
                        <div className="w-75">
                            <div className="fs-1 mt-4  fw-bolder">Desafio CD Escorial</div>
                            <div>Current Player : 5</div>
                            <div>The Falcon is the popular and most powerful team in the Tournament........</div>
                            <div className="fw-bolder fs-2">____________________</div>
                            <div className="d-flex justify-content-end p-4">
                                <button className="btn btn-outline-warning rounded-pill w-25 me-4">Accept</button>
                                <button className="btn btn-outline-danger rounded-pill w-25 me-5" style={{ fontSize: "20px" }}>Reject</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex border border-secondary mt-3" style={{ boxShadow: "10px 10px 5px gray", height: "40vh" }}>
                        <div className="w-50">
                            <img src={club1} className=" border border-danger rounded mx-4 mt-4 img-fluid h-75 p-2" />
                        </div>
                        <div className="w-75">
                            <div className="fs-1 mt-4  fw-bolder">Desafio CD Escorial</div>
                            <div>Current Player : 5</div>
                            <div>The Falcon is the popular and most powerful team in the Tournament........</div>
                            <div className="fw-bolder fs-2">____________________</div>
                            <div className="d-flex justify-content-end p-4">
                                <button className="btn btn-outline-warning rounded-pill w-25 me-4">Accept</button>
                                <button className="btn btn-outline-danger rounded-pill w-25 me-5" style={{ fontSize: "20px" }}>Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slider" className="col border border-dark h-50 ms-5  mt-3">
                    <h5 className="fs-3 p-4 ms-3 fw-bolder">Search</h5>
                    <div className="p-2 mt-2 ms-4 border border-dark rounded-pill w-75 ">
                        <i className="fa fa-search ms-2" style={{ color: "grey", fontSize: "20px" }} />
                        <input placeholder=" Search ....." className="ms-3 border-0" />
                    </div >
                    <div class="contain mt-5 w-100" style={{ height: "500px", marginLeft: "-1px" }}>
                        <ul class="dynamic-text ">
                            <li class="item"><img src={post} className="img-fluid" style={{ width: "85%" }} /></li>
                            <li class="item"><img src={post1} className="img-fluid" style={{ width: "85%" }} /></li>
                            <li class="item"><img src={post} className="img-fluid" style={{ width: "85%" }} /></li>
                            <li class="item"><img src={post1} className="img-fluid" style={{ width: "85%" }} /></li>
                            <li class="item"><img src={post} className="img-fluid" style={{ width: "85%" }} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Teamrequest;