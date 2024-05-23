import { useEffect, useReducer, useRef } from 'react'
import playerImage from '../images/player.png'
import { useState } from 'react';
import passportImage from '../images/Player.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlayers } from '../redux-config/AllPlayerSlice';
import axios from 'axios';
import WebApi from './Webapi';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'

const style = `
.img-container {
    position : relative;
    width: 100%;
    height: 30rem; 
    overflow: hidden;
  }

  .img {
    hieght : 100%;
    width : 100%;
    object-fit : cover;
  }
  .pl-heading{
    position :absolute;
    top : 10rem;
    left : 34rem;
    color : white;
    font-size: 6rem;
  }
  .t-input{
    border : none ;
    border-bottom : 1px solid black;
    margin-left : 20rem;
}
input[type="radio"] {
    display: none;
    margin-right: 4rem; /* Adjust spacing between radio buttons */
}
label{
    
}

.filter-box{
    height : 1150px;
    position : sticky;
    top : 4rem;
    
    box-shadow: 0 1px 1rem -4px #000;
    border-radius: 6px;
}
.radio-container{
    float : right;
}
.styleinput{
    margin-left: 2rem;
    margin-top : 1rem;
    border : 1px solid black;
    color : black;
}
.styleinput:hover{
    color : white;
    background-color : black;
}
.contents{
    margin-top : 5rem;
}
.card-container {
    width: 100%;
    height: 400px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
  
  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
  }
  
  .card .front-content p {
    font-size: 32px;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
  }
  
  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: linear-gradient(-45deg,#1cc6e3 0%, #020338 100%);
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    pointer-events: none;
    transform: translateX(-96%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }
  
  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }
  
  .card:hover .content {
    transform: translateY(0);
  }
  
  .card:hover .front-content {
    transform: translateX(-30%);
  }
  
  .card:hover .front-content p {
    opacity: 0;
  }
  .handinput{
    margin-left : 1rem;
    display : inline-block;
  }
  .check{
    margin-left : 8rem;
  }
`

function Players(){
  
    let dispatch = useDispatch();
    const [height, setHeight] = useState(150);
    const [type, setType] = useState(null);
    const { filteredList } = useSelector((store) => store.AllPlayers);
    const [selectedBattingHand, setSelectedBattingHand] = useState([]);
    const [selectedBattingPosition, setSelectedBattingPosition] = useState([]);
    const [selectedArmType, setSelectedArmType] = useState([]);
    const [selectedBowlerType, setSelectedBowlerType] = useState([]);
    const [searchInput, setSearchInput] = useState(null);
    const [age , setAge] = useState(40);

    const player = JSON.parse(sessionStorage.getItem('current-user'));
    const navigate = useNavigate()
    const playerId = player._id;
    const teamCaptain = player.team?.captain;
      
    useEffect(() => {
        dispatch(getAllPlayers());
    }, []);
    
    const hanndleAllrounder = (value, category) => {
        if (category === 'battingStyle') {
            const newBattingHand = selectedBattingHand.includes(value.toLowerCase())
                ? selectedBattingHand.filter(hand => hand !== value.toLowerCase())
                : [...selectedBattingHand, value.toLowerCase()];
                console.log(newBattingHand);
            setSelectedBattingHand(newBattingHand);
        } else if (category === 'role') {
            const newBattingPosition = selectedBattingPosition.includes(value.toLowerCase())
                ? selectedBattingPosition.filter(position => position !== value.toLowerCase())
                : [...selectedBattingPosition, value.toLowerCase()];
            setSelectedBattingPosition(newBattingPosition);
        } else if (category === 'armType') {
            const newArmTypes = selectedArmType.includes(value.toLowerCase())
                ? selectedArmType.filter(type => type !== value.toLowerCase())
                : [...selectedArmType, value.toLowerCase()];
            setSelectedArmType(newArmTypes);
        } else if (category === 'bowlerType') {
            const newBowlerTypes = selectedBowlerType.includes(value.toLowerCase())
                ? selectedBowlerType.filter(type => type !== value.toLowerCase())
                : [...selectedBowlerType, value.toLowerCase()];
            setSelectedBowlerType(newBowlerTypes);
        }
    };
    
    const filterAllRounder = () => {

        return filteredList.filter(player => {
            const isAgeAvailable = !age || player.age <= age*1;
            const ptyle =  !type ||   player.playerType.toLowerCase() == type?.toLowerCase() ;
            const isHeight = player.height >=height;
            const isBattingHandMatch = selectedBattingHand.length === 0 || selectedBattingHand.includes(player.playingStyle?.battingHand.toLowerCase());
            const isBattingPositionMatch = selectedBattingPosition.length === 0 || selectedBattingPosition.includes(player.playingStyle?.battingPosition.toLowerCase());
            const isArmTypeMatch = selectedArmType.length === 0 || selectedArmType.includes(player.playingStyle?.bowlingArm.toLowerCase());
            const isBowlerTypeMatch = selectedBowlerType.length === 0 || selectedBowlerType.includes(player.playingStyle?.bowlingStyle.toLowerCase());
            return isAgeAvailable && ptyle && isHeight && isBattingHandMatch && isBattingPositionMatch && isArmTypeMatch && isBowlerTypeMatch;
        });
    };
    const handleSendRequest = async (playerId) =>{
    
        let player = JSON.parse(sessionStorage.getItem('current-user'));
        console.log(player.team)
        try {
                let response = await axios.post(WebApi.sendRequestToPlayer, {playerId, teamId : player.team?._id});
                console.log('clicked')
                toast.success(response.data.result)
        } catch (error) {
            console.log(error)
            toast.success("error found")
        }
    }
    const handleSearch = (event) =>{
        event.target.value ? setSearchInput(event.target.value) : setSearchInput(null);
    }
    const filterName = () =>{
        return filteredList.filter((player) => player.name.toLowerCase().includes(searchInput.toLowerCase()));
    }

    const handleResetFilters = () => {
        setType(null);
        setSelectedBattingHand([]);
        setSelectedBattingPosition([]);
        setSelectedArmType([]);
        setSelectedBowlerType([]);
        setSearchInput(null);
    };


    const baseUrl = 'http://localhost:3000/images/';
    return <>
    <ToastContainer/>
        <div className="container-fluid">
            
            <div className="img-container">
            <div className='overlay'></div>
                <img src={playerImage} className='img'  alt='...'></img>
                <h1 className='pl-heading'>All Players</h1>
            </div>  
        </div>
        <div className='container mt-lg-5 mt-sm-3'>
            <input type='text' className='form-control t-input text-center fs-5 w-50 mb-lg-4 '   placeholder='Search for Players'  onChange={handleSearch}/>
            
            <div className='row  contents'>
               <div className='col-lg-4  filter-box'>
                    <div className='text-center mt-lg-3'>
                            <i class="fa fa-filter fs-3"  aria-hidden="true"></i>
                            <span className='ms-lg-2 fs-3'>Filters</span><br/>
                            <h5 className='float-start mt-lg-3 ms-lg-3'>Select PlayerType</h5>
                            <div class="radio-container mt-lg-2">
                                    <input type="radio" id="Batsman"  name='type' value="Batsman"  onChange={(event) =>setType(event.target.value)}/>
                                    <label for="Batsman" className='styleinput btn'>Batsman</label>

                                    <input type="radio" id="Bowler"  name='type' value="Bowler"  onChange={(event) =>setType(event.target.value)}/>
                                    <label for="Bowler" className='styleinput btn'>Bowler</label>

                                    <input type="radio" id="allrounder"  name='type'  value="All-rounder" onChange={(event) =>setType(event.target.value)}/>
                                    <label for="allrounder" className='styleinput btn'><i className="fa-solid fa-cricket-bat-ball"></i>Allrounder</label>

                                    <input type="radio" id="wicketkeeper" name='type' value="Wicketkeeper"  onChange={(event) =>setType(event.target.value)}/>
                                    <label for="wicketkeeper" className='styleinput btn'>Wicket Keeper</label>

                                    <label className='styleinput btn' onClick={handleResetFilters}>Reset</label>
                                    <hr></hr>
                            </div>
                            
                            <input type="range" id="volume" className='w-75 mt-lg-3' name="volume" min="150"  max="200" onInput={(event) => setHeight(event.target.value)}/>
                            <h5 className='heightValue'>Height : {height}</h5>
                            <hr/>
                            <input type='number' placeholder='Enter Prefered age' onChange={(event) => setAge(event.target.value)}/>
                            <hr/>

                    </div>
                    <div className='allrounder mb-lg-5' >
                            <h5 className='mt-lg-2 ms-lg-3' >Select Batting Hand</h5><br/>
                                    <label for='rightHand' className='handinput'>Right Hand Bat</label>
                                    <input type='checkBox' value='Right Hand Bat' id='rightHand'  className='check' onChange={() =>hanndleAllrounder('Right', 'battingStyle')}/> <br/>
                                    
                                    <label for='leftHand' className='handinput'>left Hand Bat</label>
                                    <input type='checkBox' value='left Hand Bat' id='leftHand' style={{marginLeft : '8.9rem'}} onChange={() =>hanndleAllrounder('Left', 'battingStyle')}/>
                                    
                                    <hr/>
                                    <div className='mt-lg-4'>
                                    <h5 className='float-start ms-3' >Select Batting Position</h5><br/><br/>
                                        <label for='opener' className='handinput'>Top Order</label>
                                        <input type='checkbox' value='Opener' id='opener' style={{marginLeft : '10rem'}} onChange={() =>hanndleAllrounder('opener', 'role')}/><br></br>
                                        <label for='middle' className='handinput'>Middle Order</label>
                                        <input type='checkbox' value='middle' id='opener' style={{marginLeft : '8.5rem'}}  onChange={() =>hanndleAllrounder('middle', 'role')}/><br></br>
                                        <label for='finisher' className='handinput'>Finisher</label>
                                        <input type='checkbox' value='Opener' id='opener' style={{marginLeft : '11rem'}}  onChange={() => hanndleAllrounder('finisher', 'role')}/><br></br>
                                        <hr/>
                                    </div>
                                    <div className='mt-lg-2'>
                                    <h5 className='float-start ms-3' >Select Bowling Arm</h5><br/><br/>
                                            <label for='leftArm' className='handinput'>Left Arm Bowl</label>
                                            <input type='checkBox' value='left arm' id='leftArm' style={{marginLeft : '8rem'}} onChange={() => hanndleAllrounder('left', 'armType')}/><br/>
                                            <label for='rightArm' className='handinput'>Right Arm Bowl</label>
                                            <input type='checkBox' value='Right arm' id='rightArm' style={{marginLeft : '7.3rem'}} onChange={() => hanndleAllrounder('right', 'armType')}/>
                                            
                                        <hr/>
                                            <div className=''>
                                                    <h5 className='float-start ms-3' >Select Bowling Speed</h5><br/><br/>
                                                    <label for='pacer' className='handinput'>fast Bowler</label>
                                                    <input type='checkbox' value='pacer' id='pacer' style={{marginLeft : '9.2rem'}} onChange={() => hanndleAllrounder('pacer', 'bowlerType')}/><br/>
                                                    <label for='spinner' className='handinput'>Spin Bowler</label>
                                                    <input type='checkbox' value='spinner' id='spinner' style={{marginLeft : '8.8rem'}} onChange={() => hanndleAllrounder('spinner', 'bowlerType')}/>
                                                    <hr/>
                                            </div>
                                            <div className=''>
                                            <h5 className='float-start ms-3' >Select Bowling Style</h5><br/><br/>
                                                    <label for='leg-spinner' className='ms-1'>Leg Spinner</label>
                                                    <input type='checkbox' value='leg-spinner' id='leg-spinner' style={{marginLeft : '9.3rem'}} onChange={() => hanndleAllrounder('leg-spinner', 'bowlerType')}/><br/>
                                                    <label for='off-spinner' className='ms-1'>Off Spinner</label>
                                                    <input type='checkbox' value='off-spinner' id='off-spinner' style={{marginLeft : '9.5rem'}}onChange={() => hanndleAllrounder('off-spinner', 'bowlerType')}/><br/>
                                                    <label for='chinaman' className='ms-1'>Chinaman</label>
                                                    <input type='checkbox' value='chinaman' id='chinaman'style={{marginLeft : '10.1rem'}} onChange={() => hanndleAllrounder('chinaman', 'bowlerType')}/><br/>
                                                    <label for='Mystry-spinner' className='ms-1'>Mystry Spinner</label>
                                                    <input type='checkbox' value='Mystry-spinner' id='Mystry-spinner'style={{marginLeft : '8rem'}}onChange={() => hanndleAllrounder('mystry-spinner', 'bowlerType')}/>
                                                    <hr/>
                                            </div>
                                        </div>
                            </div>
                </div>
                <div className='col-lg-7 offset-1'>
                            <div className='row mt-lg-2 '>
                                
                                {(searchInput ? filterName() : filterAllRounder()).map((player, index) => <div className='col-lg-5 text-center cards offset-1 mt-lg-2 mb-lg-3' key={index} data-aos='zoom-in'>
                                <div class="card-container">
                        <div class="card">
                            <div class="front-content">
                                <p><img onClick={() =>navigate(`/getplayerinfo/${player._id}`)} src={baseUrl+player.image} alt="" style={{ height: "18rem", width: "15rem", objectFit : 'cover' }} />
                                    <center><h3 className='mt-lg-4'>{player.name}</h3></center>
                                </p>
                            </div>
                            <div class="content" >
                                <p className="heading mt-2">{player.name}</p>
                                <p>{player.playerType}</p>
                                <p>Age : {player.age} Height : {player.height}</p>
                                <p></p>
                                {/* <p>{player.stats.totalMatches}</p> */}
                                    </div>
                                
                        </div>
                    </div>
                    {playerId==teamCaptain ? <button className='btn mt-lg-2' onClick={() =>handleSendRequest(player.id)}  style={{width:"96%",background: "linear-gradient(-45deg,#1cc6e3 0%, #020338 100%) ", border : 'none'}}>Request</button> : ""}
                     </div>)}
                            </div>
                </div>

            </div>  
        </div>
        <Footer/>
        <style>{style}</style>
        
    </>
}

export default Players;

