import player from '../images/Player1.png'
import tournament from '../images/Trophy.png'
import member from '../images/group.webp'
function EntityInfo(){
    const style = `
        .box-info{
            border : 1px solid grey;
            border-radius: 30px 10px;
            box-shadow: 5px 5px #888888;
        }
        .adjust-text{
            width : 8rem;
            height  : 3rem;
            float : right
        }
    `
    return <>
    <div className="container border mt-lg-5">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-2 m-5 box-info  p-3 mb-5">
                <img src={player} className='w-25 mt-4 float-start '></img>
                <h3 className='mt-3 me-5 float-end'>1024</h3>
                <h2 className='adjust-text'>Players</h2>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-2 m-5 box-info  p-3 mb-5">
                <img src={tournament} className='w-25 mt-4 float-start '></img>
                <h3 className='mt-3 me-5 float-end'>20+</h3>
                <h2 className='adjust-text'>contest</h2>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-2 m-5 box-info  p-3 mb-5">
                <img src={member} className='w-25 mt-4 float-start '></img>
                <h3 className='mt-3 me-5 float-end'>10+</h3>
                <h2 className='adjust-text'>members</h2>
            </div>
        </div>
    </div>
    <style>{style}</style>
    </>
}
export default EntityInfo;