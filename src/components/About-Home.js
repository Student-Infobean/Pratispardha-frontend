import { useEffect } from 'react';
import AboutImage from '../images/About1.jpg'
import AboutImage2 from '../images/About2.jpg'


const cssImages = `
  .images {
    position: relative;
  }
  .text{
    margin-left: 2.8rem
  }
  .sub-image2 {
    position: absolute;
    top: 200px;
    right: 0px;
    border: 5px solid white;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .images{
        width: 50%;
        position: relative;
  
    }
      .sub-image1{
        width: 100%;
        height: 100%;
        
      }
      .sub-image2{
        position: absolute;
        height : 150px;
        top : 100px;
        left  : 250px;
      }
      .text{
         margin-left : 5rem
      }
  }
  @media (max-width: 767.98px) {
    .images{
      width: 100%;
      position: relative;
   }
    .sub-image1{
        margin-left : 1rem;
      width: 80%;
    }
    .sub-image2{
      height : 9rem;
      top : 100px ;
      position: absolute;
      right : 1rem
    }
    .text{
        margin-top : 5.5rem
     }
  }
`;
function About(){

  
    return <>
        <div className="container">
            <div className="text-center mt-4" style={{color : '#0068A3'}}>
                    <h2>About Us</h2>
            </div>
            <div className="row mt-5">
                <div className="col-lg-7 col-md-7 col-sm-12 images " data-aos='zoom-out' >
                    <img src={AboutImage} className='image-responsive sub-image1' alt='...'></img>
                    <img src={AboutImage2} className='image-responsive sub-image2'  alt='..'></img>
                </div>
                <div className='col-lg-4 col-md-5 col-sm-12 text' style={{color : '#0068A3'}} data-aos='zoom-out'>
                    <h2 className='mt-sm-5'>We Play as a team, We win as Team</h2>
                    <hr className='mt-lg-5 w-75' style={{color: 'red'}}/>
                    <p className='text-dark mt-lg-5'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum Iusto Minima Quo, Recusandae Perspiciatis Aspernatur, Rerum Tempora Vitae Aperiam Enim, Dicta Maxime? Eum Repellat Velit Perspiciatis Eligendi Rerum Voluptate Repellendus.</p>
                    <button className='btn btn-danger mt-lg-5'>Read more</button>
                </div>
            </div>
        </div>
        
        <style>{cssImages}</style>
    </>
}
export default About;