import Header from "./Header";
import view from "../images/create.jpg"
function PointTable() {
    return <>
        <Header />
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="overlay"></div>
                    <img src={view} className="d-lg-block w-100  image-responsive" style={{ overflowX: 'hidden', objectFit: 'cover', height: "50vh" }} alt="..." />
                    <div className="carousel-caption h-100 d-md-block w-100" style={{ position: 'absolute', top: 0, left: 0, backgroundImage: " linear-gradient(to top, rgb(17, 17, 17) 40%, rgb(251, 192, 45))", opacity: "0.8" }}>
                        <h1 style={{ position: 'absolute', marginTop: '20vh', marginLeft: '35vw', color: 'white', fontSize: '5vw', textTransform: "uppercase" }}>Point Table</h1>
                        <p className="text-light"></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="row">
                <h1 className="ms-5">TEAM RATINGS</h1>
                <div className="col-lg-12 mt-5">
                    <div class="table-responsive" style={{ position: "relative", height: "700px" }}>
                        <table class="table  mb-0">
                            <thead style={{backgroundColor:"#393939",position:"sticky",top:"0"}}>
                                <tr>
                                    <th scope="col">Class name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Hours</th>
                                    <th scope="col">Trainer</th>
                                    <th scope="col">Spots</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Like a butterfly</td>
                                    <td>Boxing</td>
                                    <td>9:00 AM - 11:00 AM</td>
                                    <td>Aaron Chapman</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Mind &amp; Body</td>
                                    <td>Yoga</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Adam Stewart</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Crit Cardio</td>
                                    <td>Gym</td>
                                    <td>9:00 AM - 10:00 AM</td>
                                    <td>Aaron Chapman</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Wheel Pose Full Posture</td>
                                    <td>Yoga</td>
                                    <td>7:00 AM - 8:30 AM</td>
                                    <td>Donna Wilson</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Playful Dancer's Flow</td>
                                    <td>Yoga</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Donna Wilson</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Zumba Dance</td>
                                    <td>Dance</td>
                                    <td>5:00 PM - 7:00 PM</td>
                                    <td>Donna Wilson</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Cardio Blast</td>
                                    <td>Gym</td>
                                    <td>5:00 PM - 7:00 PM</td>
                                    <td>Randy Porter</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Pilates Reformer</td>
                                    <td>Gym</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Randy Porter</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Supple Spine and Shoulders</td>
                                    <td>Yoga</td>
                                    <td>6:30 AM - 8:00 AM</td>
                                    <td>Randy Porter</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Yoga for Divas</td>
                                    <td>Yoga</td>
                                    <td>9:00 AM - 11:00 AM</td>
                                    <td>Donna Wilson</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Virtual Cycle</td>
                                    <td>Gym</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Randy Porter</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Like a butterfly</td>
                                    <td>Boxing</td>
                                    <td>9:00 AM - 11:00 AM</td>
                                    <td>Aaron Chapman</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Mind &amp; Body</td>
                                    <td>Yoga</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Adam Stewart</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Crit Cardio</td>
                                    <td>Gym</td>
                                    <td>9:00 AM - 10:00 AM</td>
                                    <td>Aaron Chapman</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Wheel Pose Full Posture</td>
                                    <td>Yoga</td>
                                    <td>7:00 AM - 8:30 AM</td>
                                    <td>Donna Wilson</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Playful Dancer's Flow</td>
                                    <td>Yoga</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Donna Wilson</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Zumba Dance</td>
                                    <td>Dance</td>
                                    <td>5:00 PM - 7:00 PM</td>
                                    <td>Donna Wilson</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Cardio Blast</td>
                                    <td>Gym</td>
                                    <td>5:00 PM - 7:00 PM</td>
                                    <td>Randy Porter</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Pilates Reformer</td>
                                    <td>Gym</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Randy Porter</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Supple Spine and Shoulders</td>
                                    <td>Yoga</td>
                                    <td>6:30 AM - 8:00 AM</td>
                                    <td>Randy Porter</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Yoga for Divas</td>
                                    <td>Yoga</td>
                                    <td>9:00 AM - 11:00 AM</td>
                                    <td>Donna Wilson</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Virtual Cycle</td>
                                    <td>Gym</td>
                                    <td>8:00 AM - 9:00 AM</td>
                                    <td>Randy Porter</td>
                                    <td>20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default PointTable;