import { useDispatch, useSelector } from 'react-redux'
import iplImage from '../images/tour2.jpg'
import worldCup from '../images/tour1.jpg'
import { useEffect, useRef } from 'react'
import { filterName, filterTournament, getTournament } from '../redux-config/TournamentSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Footer from './Footer'
function Events() {
    const style = `
    .tournament-container {
        background-color : rgba(0, 0, 0, 1.2);
        width: 100%;
        height: 30rem; /* Adjust the height as needed */
        overflow: hidden;
        position: relative;
    }
    
    .tournament-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
        background-color : rgba(0, 0, 0, 0.9);
    }
    .tour{
        position : absolute;
        top : 55%;
        left : 50%;
        font-size:4.5vw;
        // background-color : rgba(0, 0, 0, 0.5);
        transform : translate(-50%, -50%);
    }
    .t-input{
        border : none ;
        border-bottom : 2px solid ;
        border-radius:10px;
    }
    .t-dates{
        margin-left: 1rem;
        position : absolute;
        top : 2rem;
        left : 6rem;
    }
    .t-duration{
        position : absolute;
        top : 2rem;
        left : 9rem;

    }
    .t-name{
        margin-left : 5.5rem;
        margin-top : -0.8rem;
    }
    .t-address{
        margin-left : 5.5rem;
    }
    .t-info{
        margin-left : 5.5rem;
    }
    .t-prize{
        margin-left : 5.5rem;
        
    }
    .teamCards{
        display: flex;
    overflow: hidden;
    transition: transform 0.3s;
    }
    .teamCards:hover{
        transform:translateY(-30px);
    }
    @media only screen and (max-width: 576px) {
        .tournament-container {
            background-color : rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 14rem; 
            overflow: hidden;
            position: relative;
            
        }
        .tournament-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            
        }
        .tour{
            position : absolute;
            width : 80%;
            top : 75%;
            left : 50%;
            transform : translate(-50%, -50%);
            
        }
        .container{
            margin-top  : 1.8rem
        }
        .drop{
            margin-top  : 1.2rem
        }
        #tour{
            display:none;
        }
    }
    `
    let { tournamentList, filtertounament } = useSelector((store) => store.Tournament);
    let dispatch = useDispatch();
    let searchInput = useRef();
    let sortInput = useRef();
    let navigate = useNavigate();
    let handleTournamentSearch = () => {
        let keyword = searchInput.current.value;
        dispatch(filterName(keyword));

    }
    const sortTournament = () => {
        let keyword = sortInput.current.value;
        dispatch(filterTournament(keyword))
    }
    const handleParticipate = () => {
        toast.success('Clicked')
    }
    useEffect(() => {
        dispatch(getTournament());
    }, []);
    return <>
        <ToastContainer />
        <div className="container-fluid p-0">
            <div className="tournament-container">
                <img src={worldCup} className='' />
                <h2 className='text-white tour'>Upcoming tournament</h2>
            </div>
        </div>
        <div className='container mt-lg-5 mt-sm-3'>
            <div className='d-flex justify-content-center'>
                <div className=' d-flex  t-input' style={{ width: "25vw" }}>
                    <i className="fa fa-search ms-2 mt-3" style={{ color: "grey", fontSize: "25px" }} />
                    <input type='text' className='form-control fs-4 border-0 me-1 ' ref={searchInput} placeholder='Search for Events' onChange={handleTournamentSearch} />
                </div>
                <div className='text-center mt-1'>
                    <select className=' mb-2 ms-4 text-center fs-5 drop  border-0 p-2 rounded bg-warning text-light' ref={sortInput} onChange={sortTournament}>
                        <option value='Upcoming'>Upcoming</option>
                        <option value='Current'>Current</option>
                        <option value='Completed'>Completed</option>
                    </select>
                </div>
            </div>
            {tournamentList.map((item, index) => <div className='row mt-lg-5 border teamCards mb-3' style={{ borderRadius: "30px", background: "linear-gradient(45deg,#ffff,#0B60B0)" }} key={index} data-aos='zoom-in-right'>
                <div className='col-lg-7 position-relative '>
                    <h3 className='d-inline-block  mt-lg-4'>{new Date(item.deadline).getDate()}<br />{new Date(item.deadline).toLocaleDateString('en-US', { month: 'long' })}</h3>
                    <i class="fa fa-calendar ms-2 border t-dates" aria-hidden="true"></i><small className='t-duration ms-lg-1'>{new Date(item.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(item.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</small>
                    <h1 className='fw-normal text-uppercase  t-name'>{item.name}</h1>
                    <h3 className='fw-normal text-capitalize t-address'>{item.address}</h3>
                    <p className=' mt-lg-4 t-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ligula condimentum tincidunt, arcu orci laoreet massa, nec sagittis elit urna in diam. Sed consectetur dolor non nulla porttitor,…</p>
                    <h2 className='fw-normal t-prize'>Winning Price : <h2 className='text-danger d-inline-block'>{item.firstPrize + item.secondPrize + item.thirdPrize}</h2></h2>
                    {new Date(item.startDate) > new Date() ? <div className='text-center mt-lg-3 mb-lg-2'>
                        {item && item.deadline && (
                            new Date(item.deadline) > new Date() ? (
                                <button className="btn btn-warning" onClick={handleParticipate}>
                                    Participate
                                </button>
                            ) : null
                        )}
                    </div> : ""}

                </div>
                <div className='col-lg-5 d-flex justify-content-center align-items-center' >
                    <img id='tour' src={iplImage} className='w-75' onClick={() => navigate(`/event-info/${item._id}`)}></img>

                </div>
            </div>)}
        </div>
        <Footer />
        <style>{style}</style>
    </>
}
export default Events;