import React from "react";
import {useState} from "react";
import { IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";


function Slider({slides}){
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(slides)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const sliderStyle = {
        height: "100%",
        position: "relative",
    };

    const imgUrl = slides[currentIndex];
    const slideStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "25px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: 'url(' + imgUrl + ')',
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left : "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right : "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }
    
    return(
    <div className="slider" style={sliderStyle}>
        <div className='left-arrow' style={leftArrowStyles} onClick={goToPrevious}>&#10094;</div>
        <div className='right-arrow' style={rightArrowStyles} onClick={goToNext}>&#10095;</div>
        <div className="slide" style={slideStyle}></div>
    </div>
    )
}

export default Slider