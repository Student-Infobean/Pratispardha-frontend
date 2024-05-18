import { useDispatch, useSelector } from 'react-redux';
import Player from '../images/Player.jpg'
import { useEffect } from 'react';
import { getAllPlayers } from '../redux-config/AllPlayerSlice';
function BestPlayer() {
    let {playerList} = useSelector((store) =>store.AllPlayers);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPlayers());
    },[]);
    
      const style = `
      .container {
        width: 90%;
        margin: auto;
      }
      
      .cards-container {
        display: flex;
        border-radius: 6px;
        color: #333;
        background: #eee;
        padding: 1rem;
        box-shadow: 0 0 1rem #000 outset;
        overflow-x: auto;
        position: relative;
        
        &::-webkit-scrollbar {
          display: none;
        }
      }
      
      .card {
        flex: 1 0 250px;
        box-shadow: 0 1px 1rem -4px #000;
        background: #fff;
        margin: 1rem;
        overflow: hidden;
        border-radius: 6px;
        cursor: pointer;
        transition: all 250ms ease-in-out;
        
        img {
          width: 250px;
          height: 250px;
          object-fit: center;
        }
        
        &:hover {
          box-shadow: 0 4px 1rem -4px #000;
          transform: translateY(-3px);
        }
      }
      
      .card-content {
        
        padding-top : 1rem;
      }
      
      @media screen and (max-width: 625px) {
        .container {
          width: 100%
        }
        
        .cards-container {
          padding: .5rem;
        }
        
        .card {
          margin: .5rem;
        }
        .playerContainer{
          margin-top : 2rem;
        }
      }
      `
      const baseUrl = 'http://localhost:3000/images';
      return <>
      
            <div className="container playerContainer">
                <h2 style={{ textAlign: 'center',color : '#0068A3' }} className='mt-lg-5 mb-lg-5 mt-sm-5 mb-sm-3 text-align-center  '>Our Best Players</h2>
                <div className="cards-container">
                {playerList.map((card, index) => (
                  
                <div className="card" key={index}>
                <img src={Player} alt={card.alt || 'Image'} />
                <div className="card-content">
                  <h5 className='ms-sm-4 text-center'>{card.name}</h5>
                  <h4 className='ms-sm-4 text-center mt-lg-3'>{card.playerType}</h4>
                </div>
              </div>
        ))}
            </div> 
            </div>
            <style>{style}</style>
            {console.log(playerList)}
      </>
}

export default BestPlayer;
