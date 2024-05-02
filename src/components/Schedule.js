import React, { useState, useEffect } from 'react';
import ScheduleImage from '../images/Screenshot 2024-04-10 170424.png';
import image from '../images/7282469.jpg';

function Schedule() {

    

const style = `
    
.slide-container{
    position: relative;
    width: 80%;
    height: 350px;
    border: 3px solid #ede6d6;
    box-shadow: 0 0 8px 2px rgba(0,0,0,0.2);
    
}
.slide-container .slides{
    width: 100%;
    height: calc(100% - 40px);
    position: relative;
    overflow: hidden;
}
.slide-container .slides img{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
}
.slide-container .slides img:not(.active){
    top: 0;
    left: -100%;
}
span.next, span.prev{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 14px;
    color: #eee;
    font-size: 24px;
    font-weight: bold;
    transition: 0.5s;
    border-radius: 3px;
    user-select: none;
    cursor: pointer;
    z-index: 1;
}
span.next{
    right: 20px;
}
span.prev{
    left: 20px;
}
span.next:hover, span.prev:hover{
    background-color: #ede6d6;
    opacity: 0.8;
    color: #222;
} 
.dotsContainer{
    position: absolute;
    bottom: 5px;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
}
.dotsContainer .dot{
    width: 15px;
    height: 15px;
    margin: 0px 2px;
    border: 3px solid #bbb;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.6s ease;
}
.dotsContainer .active{
    background-color: #555;
}

@keyframes next1{
    from{
        left: 0%
    }
    to{
        left: -100%;
    }
}
@keyframes next2{
    from{
        left: 100%
    }
    to{
        left: 0%;
    }
}

@keyframes prev1{
    from{
        left: 0%
    }
    to{
        left: 100%;
    }
}
@keyframes prev2{
    from{
        left: -100%
    }
    to{
        left: 0%;
    }
    
}

@media only screen and (max-width: 576px) {
        .ts-container{
            margin-top :2rem
        }
        .slide-container{
            width : 90%;
            margin-left : 0.8rem;
        }
        .slide-container .slides img {
            width: 100%; /* Ensure images take full width on smaller screens */
            height: 100%; /* Maintain aspect ratio */
            object-fit: contain; /* Prevent image distortion */
        }
        
}
`
    const [counter, setCounter] = useState(0);

    const slideNext = () => {
        setCounter((prevCounter) => (prevCounter === slideImages.length - 1 ? 0 : prevCounter + 1));
    };


    const slidePrev = () => {
        setCounter((prevCounter) => (prevCounter === 0 ? slideImages.length - 1 : prevCounter - 1));
    };

    
    useEffect(() => {
        const interval = setInterval(slideNext, 3000);
        return () => clearInterval(interval);
    }, []);

    // Function to handle indicator click
    const switchImage = (index) => {
        setCounter(index);
    };

    // Array of image sources
    const images = [ScheduleImage, image, ScheduleImage, image];

    // JSX for rendering images and indicators
    const slideImages = images.map((src, index) => (
        <img key={index} src={src} className={index === counter ? 'active' : ''} alt={`Slide ${index + 1} image-responsive image-fluid`} />
    ));

    const dots = images.map((_, index) => (
        <div
            key={index}
            className={`dot ${index === counter ? 'active' : ''}`}
            onClick={() => switchImage(index)}
        ></div>
    ));

    return <>
        <div className="container ts-container d-flex justify-content-center align-items-center flex-column">
            <h2 className="mt-lg-4 text-center mb-lg-4 " style={{ color: '#0068A3' }}>
                Tournament Schedule
            </h2>
            <div className="slide-container">
                <div className="slides">{slideImages}</div>
                <div className="buttons">
                    <span className="next" onClick={slideNext}>
                        &#10095;
                    </span>
                    <span className="prev" onClick={slidePrev}>
                        &#10094;
                    </span>
                </div>
                <div className="dotsContainer">{dots}</div>
            </div>
        </div>
        <style>{style}</style>
    </>
}

export default Schedule;
