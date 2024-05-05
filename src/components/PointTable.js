import Header from "./Header";
import view from "../images/create.jpg"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Api from "./Webapi";
function PointTable() {
    const [myData, setmyData] = useState([]);
    const selectInput = useRef();
    const [selectedTournament, setSelectedTournament] = useState(null);
    useEffect(() => {
        axios.get(Api.getAllTournaments).then((response) => {
            setmyData(response.data.tournaments);
            savetournament(response.data.tournaments)
        }).catch((error) => console.log("Server error", error));
    }, []);
    const savetournament = (myData) => {
        sessionStorage.setItem("tournament", JSON.stringify(myData))
    }
    const handleTournamentChange = (e) => {
        const value = e.target.value;
        const [name, _id] = value.split('|'); // Split the value to get name and id
        setSelectedTournament({ name, _id });
        console.log(name + " " + _id);
    };
    console.log(selectedTournament);
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
                <div className="ms-5">
                    <h1 >TEAM RATINGS</h1>
                    <p className="fs-5">All Tournaments</p>
                    <select class="form-select w-25" onChange={handleTournamentChange} aria-label="Default select example">
                        <option> Select</option>
                        {myData.map((data, index) => {
                            return <option value={`${data.name}|${data._id}`}>{new Date() <= new Date(data.endDate) ? data.name : ''}</option>
                        })}
                    </select>
                </div>
                {selectedTournament == null || selectedTournament === "All Tournaments" ? <div className="col-lg-12 mt-5">
                    <div class="table-responsive" style={{ position: "relative", height: "700px" }}>
                        <table class="table  mb-0">
                            <thead style={{ backgroundColor: "#393939", position: "sticky", top: "0" }}>
                                <tr>
                                    <th scope="col">S.NO.</th>
                                    <th scope="col">TEAM NAME</th>
                                    <th scope="col">ADDRESS</th>
                                    <th scope="col">START DATE</th>
                                    <th scope="col">END DATE</th>
                                    <th scope="col">NRR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData.map((data, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.name.toUpperCase()}</td>
                                        <td>{data.address.toUpperCase()}</td>
                                        <td>{data.startDate.slice(0, 10).toUpperCase()}</td>
                                        <td>{data.endDate.slice(0, 10).toUpperCase()}</td>
                                        <td>{data.tournamentTeams}</td>
                                    </tr>

                                })}
                            </tbody>
                        </table>
                    </div>
                </div> : <div className="col-lg-12 mt-5">
                    <div class="table-responsive" style={{ position: "relative", height: "700px" }}>
                        <table class="table  mb-0">
                            <thead style={{ backgroundColor: "#393939", position: "sticky", top: "0" }}>
                                <tr>
                                    <th scope="col">POS</th>
                                    <th scope="col">TEAM</th>
                                    <th scope="col">P</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">NRR</th>
                                    <th scope="col">PTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData.find(tournament => tournament._id === selectedTournament.id)?.tournamentTeams.map((team, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{team.teamId.name}</td> 
                                        {/* Add other team data here */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>}
            </div>
        </div >
    </>
}
export default PointTable;