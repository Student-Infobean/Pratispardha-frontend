import carouselImage1 from '../images/3468697.jpg'
import carousel from '../images/Carousel2.jpg'
import carousel2 from '../images/7282469.jpg'
function Carousel(){
    return <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="10000">
    <div className="overlay"></div>
    <img src={carouselImage1} className="d-lg-block w-100 image-responsive " style={{maxHeight: '550px', overflowX:'hidden', objectFit: 'cover'}} alt="..."/>
      
      <div className="carousel-caption d-none d-md-block " style={{position : 'absolute', top : 100, left : 0}}>
      
        <h5 style={{position : 'absolute', color : 'white', top : 130, left : 100, fontSize: '2.5rem'}}>Bringing out the best in each</h5>
        <p style={{position : 'absolute', color : 'white', top : 200, left : 100, fontSize: '1.5rem', textAlign : 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className="overlay"></div>
    <img src={carousel} className="d-lg-block w-100 image-responsive " style={{maxHeight: '550px', overflowX:'hidden', objectFit: 'cover'}} alt="..."/>
      
      <div className="carousel-caption d-none d-md-block " style={{position : 'absolute', top : 100, left : 0}}>
      
        <h5 style={{position : 'absolute', color : 'white', top : 130, left : 100, fontSize: '2.5rem'}}>Bringing out the best in each</h5>
        <p style={{position : 'absolute', color : 'white', top : 200, left : 100, fontSize: '1.5rem', textAlign : 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="overlay"></div>
    <img src={carousel2} className="d-lg-block w-100 image-responsive " style={{maxHeight: '550px', overflowX:'hidden', objectFit: 'cover'}} alt="..."/>
      
      <div className="carousel-caption d-none d-md-block " style={{position : 'absolute', top : 100, left : 0}}>
      
        <h5 style={{position : 'absolute', color : 'white', top : 130, left : 100, fontSize: '2.5rem'}}>Bringing out the best in each</h5>
        <p style={{position : 'absolute', color : 'white', top : 200, left : 100, fontSize: '1.5rem', textAlign : 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
}

export default Carousel