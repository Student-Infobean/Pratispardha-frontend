import { useEffect, useReducer, useRef } from 'react'
import playerImage from '../images/player.png'
import { useState } from 'react';
import passportImage from '../images/Player.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlayers } from '../redux-config/AllPlayerSlice';
import axios from 'axios';
import WebApi from './Webapi';
import { ToastContainer, toast } from 'react-toastify';


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
    top : 22rem;
    left : 41rem;
    color : white;

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
    height : 36rem;
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
`

function Players(){
  
    let dispatch = useDispatch();
    const [type, setType] = useState('All');
    const { filteredList } = useSelector((store) => store.AllPlayers);
    const [selectedBattingStyles, setSelectedBattingStyles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedArmTypes, setSelectedArmTypes] = useState([]);
    const [selectedBowlerTypes, setSelectedBowlerTypes] = useState([]);

    const [selectedBattingHand, setSelectedBattingHand] = useState([]);
    const [selectedBattingPosition, setSelectedBattingPosition] = useState([]);
    const [selectedArmType, setSelectedArmType] = useState([]);
    const [selectedBowlerType, setSelectedBowlerType] = useState([]);
    
    useEffect(() => {
        dispatch(getAllPlayers());
        
    }, []);
    
    
    const [playerCategory, setPlayerCategory] = useReducer((state, action)=>{

                    state = action.payload;
                    return [...state];
                
    }, [])
    const handlePlayerType = async  (event) =>{
        try {
            
            setType(event.target.value);
            console.log(event.target.value)
            let playerByType = await axios.get(`${WebApi.retriveByStyle}/${event.target.value}`)
            setPlayerCategory({action : 'category', payload : playerByType.data.result});
            console.log(playerByType)
        } catch (error) {
            console.log(error)
        }
        
    }

    

    const filterPlayers = () => {
        return playerCategory.filter(player => {
            const isBattingStyleMatch = selectedBattingStyles.length === 0 || selectedBattingStyles.includes(player.playingStyle?.battingHand.toLowerCase());
            console.log(selectedBattingStyles)
            console.log(player.playingStyle?.battingHand.toLowerCase());
            const isRoleMatch = selectedRoles.length === 0 || selectedRoles.includes(player.playingStyle?.battingPosition.toLowerCase());
            return isBattingStyleMatch && isRoleMatch;
        });
    };
    console.log(filterPlayers())

    const handleCheckboxChange = (value, category) => {
        if (category === 'battingStyle') {
            const newStyles = selectedBattingStyles.includes(value.toLowerCase())
                ? selectedBattingStyles.filter(style => style !== value.toLowerCase())
                : [...selectedBattingStyles, value.toLowerCase()];
                console.log(newStyles)
            setSelectedBattingStyles(newStyles);
        } else if (category === 'role') {
            const newRoles = selectedRoles.includes(value.toLowerCase())
                ? selectedRoles.filter(role => role !== value.toLowerCase())
                : [...selectedRoles, value.toLowerCase()];
                
            setSelectedRoles(newRoles);
        }
        
    };

    const handleBowlerChange = (value, category) => {
        if (category === 'armType') {
            const newArmTypes = selectedArmTypes.includes(value.toLowerCase())
                ? selectedArmTypes.filter(type => type !== value.toLowerCase())
                : [...selectedArmTypes, value.toLowerCase()];
            setSelectedArmTypes(newArmTypes);
        } else if (category === 'bowlerType') {
            const newBowlerTypes = selectedBowlerTypes.includes(value.toLowerCase())
                ? selectedBowlerTypes.filter(type => type !== value.toLowerCase())
                : [...selectedBowlerTypes, value.toLowerCase()];
                console.log(newBowlerTypes)
            setSelectedBowlerTypes(newBowlerTypes);
        }
    };
    const filterBowler = () => {
        
        
        return playerCategory.filter(player => {
            const isArmTypeMatch = selectedArmTypes.length === 0 || selectedArmTypes.includes(player.playingStyle?.bowlingArm.toLowerCase());
            const isBowlerTypeMatch = selectedBowlerTypes.length === 0 || selectedBowlerTypes.includes(player.playingStyle?.bowlingStyle.toLowerCase());
            return isArmTypeMatch && isBowlerTypeMatch;
        });
    };
    
    const hanndleAllrounder = (value, category) => {
        if (category === 'battingStyle') {
            const newBattingHand = selectedBattingHand.includes(value.toLowerCase())
                ? selectedBattingHand.filter(hand => hand !== value.toLowerCase())
                : [...selectedBattingHand, value.toLowerCase()];
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
        console.log(selectedBattingHand)
        console.log(selectedBattingHand.includes(playerCategory[0]?.playingStyle?.battingHand.toLowerCase()))
        return playerCategory.filter(player => {
            const isBattingHandMatch = selectedBattingHand.length === 0 || selectedBattingHand.includes(player.playingStyle?.battingHand.toLowerCase());
            const isBattingPositionMatch = selectedBattingPosition.length === 0 || selectedBattingPosition.includes(player.playingStyle?.battingPosition.toLowerCase());
            const isArmTypeMatch = selectedArmType.length === 0 || selectedArmType.includes(player.playingStyle?.bowlingArm.toLowerCase());
            const isBowlerTypeMatch = selectedBowlerType.length === 0 || selectedBowlerType.includes(player.playingStyle?.bowlingStyle.toLowerCase());
            return isBattingHandMatch && isBattingPositionMatch && isArmTypeMatch && isBowlerTypeMatch;
        });
    };

    
    const handleSendRequest = async (playerId) =>{
    
        let player = JSON.parse(sessionStorage.getItem('current-user'));
        console.log(player.team)
        try {
                let response = await axios.post(WebApi.sendRequestToPlayer, {playerId, teamId : player.team});
                console.log('clicked')
                toast.success(response.data.result)
        } catch (error) {
            console.log(error)
            toast.success("error found")
        }
    }
    const baseUrl = 'http://localhost:3000/images/';
    return <>
    <ToastContainer/>
        <div className="container-fluid">
            
            <div className="img-container">
            <div className='overlay'></div>
                <img src={playerImage} className='img'  alt='...'></img>
                <h2 className='pl-heading'>All Players</h2>
            </div>
        </div>
        <div className='container mt-lg-5 mt-sm-3'>
            <input type='text' className='form-control t-input text-center fs-5 w-50 mb-lg-4 '   placeholder='Search for Players'  />
            <div class="radio-container mt-lg-2">
                                    <input type="radio" id="Batsman"  name='type' value="Batsman"  onChange={handlePlayerType}/>
                                    <label for="Batsman" className='styleinput btn'>Batsman</label>

                                    <input type="radio" id="Bowler"  name='type' value="Bowler"  onChange={handlePlayerType}/>
                                    <label for="Bowler" className='styleinput btn'>Bowler</label>

                                    <input type="radio" id="allrounder"  name='type'  value="Allrounder" onChange={handlePlayerType}/>
                                    <label for="allrounder" className='styleinput btn'><i className="fa-solid fa-cricket-bat-ball"></i>Allrounder</label>

                                    <input type="radio" id="wicketkeeper" name='type' value="Wicketkeeper"  onChange={handlePlayerType}/>
                                    <label for="wicketkeeper" className='styleinput btn'>Wicket Keeper</label>
            </div>
            <div className='row  contents'>
               <div className='col-lg-4  filter-box'>
                    <div className='text-center mt-lg-3'>
                            <i class="fa fa-filter fs-3"  aria-hidden="true"></i>
                            <span className='ms-lg-2 fs-3'>Filters</span><br/>
                            
                            <input type="range" id="volume" className='w-75 mt-lg-3' name="volume" min="150" defaultValue='150' max="200"/>
                            {/* <p className='heightValue'>Height : {height}</p> */}

                    </div>
                    {type=='Batsman' ? <div className='batsman mb-lg-5'>
                                    <input type='checkBox' value='Right Hand Bat' id='rightHand' className='ms-5' onChange={() => handleCheckboxChange('Right', 'battingStyle')}  />
                                    <label for='rightHand' className='ms-1'>Right Hand Bat</label>
                                    <input type='checkBox' value='left Hand Bat' id='leftHand' className='ms-5' onChange={() => handleCheckboxChange('Left', 'battingStyle')} />
                                    <label for='leftHand' className='ms-1'>left Hand Bat</label> <br></br>

                                    <div className='text-center mt-lg-5'>
                                        <input type='checkbox' value='Opener' id='opener' onChange={() => handleCheckboxChange('opener', 'role')}/>
                                        <label for='opener' className='ms-1'>Top Order</label><br/>
                                        <input type='checkbox' value='middle' id='middle'className='mt-4'  onChange={() => handleCheckboxChange('middle', 'role')} />
                                        <label for='middle' className='ms-1'>Middle Order</label><br/>
                                        <input type='checkbox' value='finisher' id='finisher'className='mt-4'  onChange={() => handleCheckboxChange('finisher', 'role')}/>
                                        <label for='finisher' className='ms-1'>Finisher</label>
                                    </div>

                            </div> : type=='Bowler' ?  
                            
                            <div className='bowler mb-lg-5'>
                                    <input type='checkBox' value='left arm' id='leftArm' className='ms-5' onChange={() =>handleBowlerChange('left', 'armType')}/>
                                    <label for='leftArm' className='ms-1 me-4'>Left Arm Bowl</label>
                                    <input type='checkBox' value='Right arm' id='rightArm' className='ms-5' onChange={() =>handleBowlerChange('right', 'armType')}/>
                                    <label for='rightArm' className='ms-1'>Right Arm Bowl</label> <br></br>

                                    <div className='mt-lg-4'>
                                            <input type='checkbox' value='pacer' id='pacer' className='ms-5'onChange={() => handleBowlerChange('pacer', 'bowlerType')}/>
                                            <label for='pacer' className='ms-1 me-5'>fast Bowler</label>
                                            <input type='checkbox' value='spinner' id='spinner' className='ms-5' onChange={() => handleBowlerChange('spinner', 'bowlerType')}/>
                                            <label for='spinner' className='ms-1'>Spin Bowler</label>
                                    </div>
                                    <div className='mt-lg-3 text-center'>
                                            <input type='checkbox' value='leg-spinner' id='leg-spinner' onChange={() => handleBowlerChange('leg-spinner', 'bowlerType')}/>
                                            <label for='leg-spinner' className='ms-1'>Leg Spinner</label><br/>
                                            <input type='checkbox' value='off-spinner' id='off-spinner' className='mt-2'onChange={() => handleBowlerChange('off-spinner', 'bowlerType')}/>
                                            <label for='off-spinner' className='ms-1'>Off Spinner</label><br/>
                                            <input type='checkbox' value='chinaman' id='chinaman' className='mt-2'onChange={() => handleBowlerChange('chinaman-spinner', 'bowlerType')}/>
                                            <label for='chinaman' className='ms-1'>Chinaman</label><br/>
                                            <input type='checkbox' value='Mystry-spinner' id='Mystry-spinner'className='mt-2' onChange={() => handleBowlerChange('mystry-spinner', 'bowlerType')}/>
                                            <label for='Mystry-spinner' className='ms-1'>Mystry Spinner</label>
                                    </div>
                            </div> : type=="Wicketkeeper" ? 
                                    <div className='batsman mb-lg-5'>
                                    <input type='checkBox' value='Right Hand Bat' id='rightHand' className='ms-5' onChange={() => handleBowlerChange('Right', 'battingStyle')}/>
                                    <label for='rightHand' className='ms-1'>Right Hand Bat</label>
                                    <input type='checkBox' value='left Hand Bat' id='leftHand' className='ms-5' onChange={() => handleBowlerChange('Left', 'battingStyle')}/>
                                    <label for='leftHand' className='ms-1'>left Hand Bat</label> <br></br>

                                    <div className='text-center mt-lg-5'>
                                        <input type='checkbox' value='Opener' id='opener' onChange={() => handleCheckboxChange('opener', 'role')}/>
                                        <label for='opener' className='ms-1'>Top Order</label><br/>
                                        <input type='checkbox' value='middle' id='middle'className='mt-4' onChange={() => handleCheckboxChange('middle', 'role')}/>
                                        <label for='middle' className='ms-1'>Middle Order</label><br/>
                                        <input type='checkbox' value='finisher' id='finisher'className='mt-4' onChange={() => handleCheckboxChange('finisher', 'role')}/>
                                        <label for='finisher' className='ms-1'>Finisher</label>
                                    </div>

                            </div>
                            : <div className='allrounder mb-lg-5'>
                                    <input type='checkBox' value='Right Hand Bat' id='rightHand' className='ms-5' onChange={() =>hanndleAllrounder('Right', 'battingStyle')}/>
                                    <label for='rightHand' className='ms-1'>Right Hand Bat</label>
                                    <input type='checkBox' value='left Hand Bat' id='leftHand' className='ms-5'onChange={() =>hanndleAllrounder('Left', 'battingStyle')}/>
                                    <label for='leftHand' className='ms-1'>left Hand Bat</label> <br></br>

                                    <div className='text-center mt-lg-5'>
                                        <input type='checkbox' value='Opener' id='opener' onChange={() =>hanndleAllrounder('opener', 'role')}/>
                                        <label for='opener' className='ms-1'>Top Order</label><br/>
                                        <input type='checkbox' value='middle' id='opener'className='mt-4' onChange={() =>hanndleAllrounder('middle', 'role')}/>
                                        <label for='middle' className='ms-1'>Middle Order</label><br/>
                                        <input type='checkbox' value='Opener' id='opener'className='mt-4'  onChange={() => hanndleAllrounder('finisher', 'role')}/>
                                        <label for='finisher' className='ms-1'>Finisher</label>
                                    </div>
                                    <div className='mt-lg-2'>
                                            <input type='checkBox' value='left arm' id='leftArm' className='ms-5'onChange={() => hanndleAllrounder('left', 'armType')}/>
                                            <label for='leftArm' className='ms-1 me-4'>Left Arm Bowl</label>
                                            <input type='checkBox' value='Right arm' id='rightArm' className='ms-5'onChange={() => hanndleAllrounder('right', 'armType')}/>
                                            <label for='rightArm' className='ms-1'>Right Arm Bowl</label> <br></br>

                                            <div className='mt-lg-4'>
                                                    <input type='checkbox' value='pacer' id='pacer' className='ms-5'onChange={() => hanndleAllrounder('pacer', 'bowlerType')}/>
                                                    <label for='pacer' className='ms-1 me-5'>fast Bowler</label>
                                                    <input type='checkbox' value='spinner' id='spinner' className='ms-5'onChange={() => hanndleAllrounder('spinner', 'bowlerType')}/>
                                                    <label for='spinner' className='ms-1'>Spin Bowler</label>
                                            </div>
                                            <div className='mt-lg-3 text-center'>
                                                    <input type='checkbox' value='leg-spinner' id='leg-spinner'onChange={() => hanndleAllrounder('leg-spinner', 'bowlerType')}/>
                                                    <label for='leg-spinner' className='ms-1'>Leg Spinner</label><br/>
                                                    <input type='checkbox' value='off-spinner' id='off-spinner' className='mt-2'onChange={() => hanndleAllrounder('off-spinner', 'bowlerType')}/>
                                                    <label for='off-spinner' className='ms-1'>Off Spinner</label><br/>
                                                    <input type='checkbox' value='chinaman' id='chinaman' className='mt-2'onChange={() => hanndleAllrounder('chinaman-spinner', 'bowlerType')}/>
                                                    <label for='chinaman' className='ms-1'>Chinaman</label><br/>
                                                    <input type='checkbox' value='Mystry-spinner' id='Mystry-spinner'className='mt-2'onChange={() => hanndleAllrounder('mystry-spinner', 'bowlerType')}/>
                                                    <label for='Mystry-spinner' className='ms-1'>Mystry Spinner</label>
                                            </div>
                                        </div>
                            </div>}
                </div>
                <div className='col-lg-7 offset-1'>
                            <div className='row mt-lg-2 '>
                                
                                {(type=="Bowler" ? filterBowler() : type=='Allrounder' ?  filterAllRounder() : type=="All" ? filteredList : filterPlayers()).map((player, index) => <div className='col-lg-5 text-center cards offset-1 mt-lg-2 mb-lg-3' key={index}>
                                <div class="card-container">
                        <div class="card">
                            <div class="front-content">
                                <p><img src={passportImage} alt="" style={{ height: "18rem", width: "15rem" }} />
                                    <center><h3 className='mt-lg-4'>{player.name}</h3></center>
                                </p>
                                {console.log(player)}
                            </div>
                            <div class="content">
                                <p className="heading mt-2">{player.name}</p>
                                <p>{player.playerType}</p>
                                <p>Age : {player.age} Height : {player.height}</p>
                                {/* <p>{player.stats.totalMatches}</p> */}
                                    </div>
                                
                        </div>
                    </div>
                    <button className='btn mt-lg-2' onClick={() =>handleSendRequest(player.id)}  style={{width:"96%",background: "linear-gradient(-45deg,#1cc6e3 0%, #020338 100%) ", border : 'none'}}>Request</button>
                     </div>)}
                            </div>
                </div>

            </div>  
        </div>
        <style>{style}</style>
        {/* <PlayerFilter/> */}
    </>
}

export default Players;

