import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Api from './Webapi';
import axios from "axios";
import iplImage from '../images/12973395.jpg'
const style = `
    .rules{
        
        width : 70%;
        margin-left : 10rem;
    }
`
function EventInfo(){
    
    const params = useParams();
    let [tournament, dispatch] = useReducer((state, action) =>{
        if(action.type=="success"){
            state = action.payload;
            console.log(state);
            return {...state}
        }
        else
            console.log(action.payload)
    },null)

    useEffect(()=>{
        console.log('Loaded')
        getTournament();
    },[params.eventId]);
    
    const getTournament = async () =>{
        try{
            console.log('Sachin')
            dispatch({type : 'success', payload : (await axios.get(Api.getSingleTournament+'/'+params.eventId)).data.tournaments})
        }
        catch(error){
            dispatch({type : 'error', payload : error});
        }
    }
    const handleParticipate = async () =>{
        try {
            
            
        } catch (error) {
            
        }
    }
    return <>
    {console.log(tournament)}
        {tournament &&
        <div className="container">
            <h2 className="text-center mt-lg-5 ">{tournament.name}</h2>
            <div className="text-center mt-lg-5">
                <i class="fa fa-calendar border" aria-hidden="true"></i>
                <small className='t-duration ms-lg-3'>{new Date(tournament.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(tournament.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</small>        
            </div>
            <h3 className='fw-normal text-center mt-lg-5'>Winning Price : <h3 className='text-success d-inline-block'>{tournament.firstPrize+tournament.secondPrize+tournament.thirdPrize}</h3></h3>
            <div className="text-center mt-lg-5">
                <img src={iplImage} alt="..." className="image-fluid w-50"/>
            </div>  
            {/* <div className="prize">
                    <h2>First Prize : {tournament.firstPrize}</h2>
                    <h2>Second Prize : {tournament.secondPrize}</h2>
                    <h2>thrid Prize : {tournament.thirdPrize}</h2>
            </div> */}
            <div className="rules mt-lg-5">
                <h3 className="mb-lg-4 text-center">Rules</h3>
                <ul className="list-group">
                    <li class="list-group-item"> Participants must meet age and skill level requirements as specified for the tournament category.</li>
                    <li class="list-group-item">Only registered players or teams are eligible to compete.</li>
                    <li class="list-group-item">All participants must register within the specified deadline to be considered for the tournament.</li>
                    <li class="list-group-item">Entry fees, if applicable, must be paid in full prior to the registration deadline.</li>
                    <li class="list-group-item">Match times, venues, and any potential changes will be posted on the tournament website and communicated to participants.
                    </li>
                    <li class="list-group-item">Participants are expected to conduct themselves with sportsmanship and respect towards opponents, officials, and spectators.
                    </li>
                    <li class="list-group-item">Cheating, unsportsmanlike behavior, or harassment of any kind will not be tolerated and may result in disqualification.
                    </li>
                    <li class="list-group-item">Participants must adhere to any equipment or attire requirements specified for their sport or game.
                    </li>
                    <li class="list-group-item">Decisions made by tournament officials are final and binding.
                    </li>
                    <li class="list-group-item">In the event of tournament cancellation or postponement, registered participants will be notified promptly, and entry fees may be refunded or credited towards a future event, at the discretion of the organizers.</li>
                </ul>
            </div> 
            
            <div className="row mt-lg-5 d-flex justify-content-center">
                <div className="col-lg-3 col-md-3 col-sm-6 ms-lg-5">
                    <h4>Details</h4>
                    <strong>Start</strong>
                    <p>{new Date(tournament.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <strong>End</strong>
                    <p>{new Date(tournament.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <strong>DeadLine</strong>
                    <p>{new Date(tournament.deadLine).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <strong>Entry fee</strong>
                    <p>{tournament.entryFees} RS.</p>
                    <strong>Format</strong>
                    <p>{tournament.format} overs</p>
                    <strong>First Prize</strong>
                    <p>{tournament.firstPrize}</p>
                    <strong>Second Prize</strong>
                    <p>{tournament.secondPrize}</p>
                    <strong>Third Prize</strong>
                    <p>{tournament.thirdPrize}</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <h4>Organiser Info</h4>
                    <strong>name</strong>
                    <p>{tournament.organiserId.name}</p>
                    <strong>Phone</strong>
                    <p>{tournament.organiserId.mobile}</p>
                    <strong>Email</strong>
                    <p>{tournament.organiserId.email}</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <h4>Venue</h4>
                    <strong>Address</strong>
                    <p>{tournament.address}</p>
                    <strong>Phone</strong>
                    <p>{tournament.organiserId.mobile}</p>
                </div>
            </div>
        <div className="text-center">
        {tournament && tournament.deadLine && (
            new Date(tournament.deadLine) > new Date() ? (
                <button className="btn btn-secondary" onClick={handleParticipate}>
                    Participate
                </button>
            ) : null
        )}
        </div>
        </div>}
        <style>{style}</style>
    </>
}
export default EventInfo;