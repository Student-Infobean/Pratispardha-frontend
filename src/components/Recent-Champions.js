import bgImagee from '../images/pexels-aalekh-deval-9153468.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getTournament } from '../redux-config/TournamentSlice'
import { useEffect } from 'react'
import imagercb from '../images/rcb.webp'
import imagecsk from '../images/csk.png'
import imagemi from '../images/Mumbai-Indians-Logo-PNG.png'
const css = `
    .t-item{
        height : 420px
    }
    .backgroundImagee {
        background-image: url(${bgImagee});
        background-attachment: fixed;
        background-size: cover;
        height : auto
    }
    
    @media (max-width: 767.98px) {
        background-image: url(${bgImagee});
        background-attachment: fixed;
        background-size: cover;

      }
      @media only screen and (max-width: 576px) {
        .upcoming{
            margin-top : 2rem;
            padding-top : 1.2rem;
            font-size : 1.5rem
        }
        .t-item{
            width : 80%;
            margin: 1.8rem;
            height : 330px
        }
        .start{
            margin-top : 1rem
        }
        .t-name{
            margin-top : -0.8rem
        }
      }
`
function RecentChampion(){
    let {tournamentList, isLoading} = useSelector((store) => store.Tournament);
    // tournamentList = tournamentList.sort((a, b) => new Date(a.deadLine) - new Date(b.deadLine));
        let  tournaments =  [...tournamentList]
        tournaments = tournaments.length > 3 ?tournaments.splice(0, 3) : tournaments ;
        let dispatch = useDispatch();
        useEffect(() =>{
                dispatch(getTournament());
                
        },[])

    
    return <>
        <div className="container-fluid mt-sm-5" >
       
       <div className=' backgroundImagee  mt-md-5 ' >
       
           <h1 className='text-center text-white pt-lg-4 pt-md-3 upcoming' >Recent Champion</h1>
           <div className='row d-flex justify-content-center'>
               {tournaments.map((item, index) =><div className='mt-lg-3 m-lg-4 col-lg-3 col-md-3 mt-md-3 m-md-3 mt-sm-4 m-sm-5 col-sm-10 t-item' key={index} style={{backgroundColor : 'rgba(0, 0, 0, 0.5)'}}>
                       <h5 className='text-white text-center mt-lg-4 mt-md-3 mt-sm-3 start'>{item.name}</h5>
                       <div className='h-50 text-center'>
                           <img src={index ? index==1 ? imagecsk : imagemi :imagercb} className='h-75 mt-lg-4 mt-sm-4'/>
                       </div>
                       <h5 className='text-center text-white t-name'>Team Name</h5>
                       <h5 className='text-white text-center mt-lg-4 mt-sm-4'>Prize won : 20000</h5>

               </div>)}
           </div>
           
       </div>
   </div>
   <style>{css}</style>
    </>
}
export default RecentChampion;