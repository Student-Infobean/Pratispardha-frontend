import Header from "./Header";
import PlayerInfo from "../images/pexels-aalekh-deval-9153468.jpg";
import playercrsl1 from "../images/viewAll.jpg";
import playercrsl2 from "../images/player.png";

import { useEffect, useRef, useState } from "react";
import Webapi from "./Webapi";
import axios from "axios";
import Footer from "./Footer";
import { useParams } from "react-router-dom";



function PlayerInformation() {
    const player = sessionStorage.getItem("current-user");
    const params = useParams();
    const id = params.playerId;
    const playerData = JSON.parse(player);
    const [playerInfo, setPlayerInfo] = useState(null);
    const [playerPerInfo, setPlayerPerInfo] = useState(null);
    const [Stats, setStats] = useState(null);
    const [ShowUpadtePlayer, setShowUpdatePlayer] = useState(false);
    const [battingPosition, setBattingPosition] = useState('');
    const [battingHand, setBattingHand] = useState('');
    const [bowlingStyle, setBowlingStyle] = useState('');
    const [bowlingArm, setBowlingArm] = useState('');
    useEffect(() => {
        // Check if id is not null
        getPlayerInfo().then(() => console.log("success")).catch((err) => console.log(err));
    }, []);
    const getPlayerInfo = async () => {
        // let id = playerData?._id; // Optional chaining to handle null playerData
        // console.log(id);
        try {
            let response = await axios.get(Webapi.getPlayerInfo + `/${id}`);
            //console.log(response.data.result);
            setPlayerPerInfo(response.data.result);
            
            setPlayerInfo(response.data.result.playingStyle);
            setStats(response.data.result.stats);
        } catch (err) {
            console.log(err);
            console.log("something went wrong");
        }
    }
    

    const handleUpdate = () => {
        setShowUpdatePlayer(true);
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        console.log('Batting Position:', battingPosition);
        console.log('Batting Hand:', battingHand);
        console.log('Bowling Style:', bowlingStyle);
        console.log('Bowling Arm:', bowlingArm);
        let playerId = playerPerInfo?._id;
        console.log(battingHand + " " + bowlingArm + " " + battingPosition + " " + bowlingStyle + " " + playerId);
        console.log(Webapi.addPlayingStyle)
        let response = await axios.post(Webapi.addPlayingStyle, { playerId, battingHand, bowlingArm, battingPosition, bowlingStyle });
        setPlayerInfo(response.data.playingStyle);
        console.log(response.data.message);
        window.alert(response.data.message);
    }
    // getPlayerInfo(id).then((result)=>console.log(result._id)).catch((err)=>console.log(err));
    const handleBattingStyleChange = (e) => {
        e.preventDefault();
        setBattingPosition(e.target.textContent.toLowerCase());
    };

    const handleBattingHandChange = (e) => {
        e.preventDefault();
        setBattingHand(e.target.textContent.toLowerCase());
    };

    const handleBowlingStyleChange = (e) => {
        e.preventDefault();
        setBowlingStyle(e.target.textContent.toLowerCase());
    };

    const handleBowlingArmChange = (e) => {
        e.preventDefault();
        setBowlingArm(e.target.textContent.toLowerCase());
    };
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={playercrsl2} className="d-block w-100" alt="..." style={{ width: '450px', height: '450px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={PlayerInfo} className="d-block w-100" alt="..." style={{ width: '450px', height: '450px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={playercrsl1} className="d-block w-100" alt="..." style={{ width: '450px', height: '450px', objectFit: 'cover' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr/>
            {playerData &&
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-1 bg-dark text-white text-center" >
                                    <img src={`http://localhost:3000/images/${playerData.image}`} className="img-fluid rounded" alt="Player" />
                                </div>
                                <div className="card-body fs-1 bg-light text-white text-center">
                                    <button type="button" onClick={handleUpdate} class="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title={playerInfo?.battingHand ? "You ve already added play style":"Add your play style"}>Add Playing Style</button>
                                </div>
                                {ShowUpadtePlayer && !playerInfo?.battingHand && <div className="card-body fs-1 bg-light text-white text-center">
                                    <form onSubmit={handleEdit}>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="battingStyleDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                Batting Position
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="battingStyleDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={handleBattingStyleChange}>Opener</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBattingStyleChange}>Middle</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBattingStyleChange}>Finisher</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="battingHandDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                Batting Hand
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="battingHandDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={handleBattingHandChange}>Right</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBattingHandChange}>Left</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="bowlingStyleDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                Bowling Style
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="bowlingStyleDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={handleBowlingStyleChange}>Pacer</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBowlingStyleChange}>Leg-Spinner</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBowlingStyleChange}>Off-Spinner</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBowlingStyleChange}>Chinaman</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBowlingStyleChange}>Mystry-Spinner</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="bowlingArmDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                Bowling Arm
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="bowlingArmDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={handleBowlingArmChange}>Right</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={handleBowlingArmChange}>Left</a></li>
                                            </ul>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>}
                            </div>
                        </div>
                        <div className="col-md-6 ms-5">
                            <div className="card mb-3 shadow-sm" style={{ borderTop: '4px solid red', borderLeft: '4px solid red ' }}>
                                <div className="card-body fs-1 bg-dark text-white text-center">Player Information</div>
                            </div>
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-2">Player Name</div>
                                <div className="card-body fs-4">{playerPerInfo?.name}</div>
                            </div>
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-2">Age</div>
                                <div className="card-body fs-4">{playerPerInfo?.age}</div>
                            </div>
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-2">Mobile</div>
                                <div className="card-body fs-4">{playerPerInfo?.mobile}</div>
                            </div>
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-2">Batting Style</div>
                                <div className="card-body fs-4">{playerInfo && playerInfo.battingHand}</div>
                            </div>
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-2">Bowling Style</div>
                                <div className="card-body fs-4">{playerInfo && playerInfo.bowlingStyle}</div>
                            </div>
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-2">Height</div>
                                <div className="card-body fs-4">{playerPerInfo?.height}</div>
                            </div>
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body fs-2">Team</div>
                                <div className="card-body fs-4">--</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <hr />
            <div className="container">
                <table className="table rounded table-shadow table-hover table-bordered" style={{ height: '70px', borderTop: '4px solid red', borderLeft: '4px solid red ' }}>
                    <thead className="table-dark" >
                        <tr className="fs-4 text-center" style={{ height: '70px' }}>
                            <th scope="col">Matches</th>
                            <th scope="col">Runs Scored</th>
                            <th scope="col">Wickets Catches</th>
                            <th scope="col">Catches </th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        <tr className="fs-4 text-center" style={{ height: '70px' }}>
                            <td>{Stats && Stats.totalMatches}</td>
                            <td>{Stats && Stats.totalRuns}</td>
                            <td>{Stats && Stats.totalRuns}</td>
                            <td>{Stats && Stats.totalRuns}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <Footer/>
        </>
    );
}

export default PlayerInformation;
