import React from "react";
import {useState} from "react";

//mise en place du slider
function Slider({slides}){
    // Importation des images via la variable slides
    const [currentIndex, setCurrentIndex] = useState(0);
    // Mise en place d'un état pour les slides 
    console.log(slides.length)
    var left ='';
    var right = '';
    // Condition de style si il n'y a qu'une ou plusieurs images 
    if(slides.length === 1){
        left = 'left-arrow' + ' hidden'
        right = 'right-arrow' + ' hidden'
    }else{
        left = 'left-arrow'
        right = 'right-arrow'
    }

    // Fonction précédant du carroussel
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    // Fonction suivant du carroussel
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    // Style du slider
    const sliderStyle = {
        height: "100%",
        position: "relative",
    };

    //Récupération de l'url de l'images 
    const imgUrl = slides[currentIndex];

    // Style des slides
    const slideStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "25px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: 'url(' + imgUrl + ')',
    };

    //Style flèche gauche
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

     //Style flèche droite
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
        <div className={left} style={leftArrowStyles} onClick={goToPrevious}>&#10094;</div>
        <div className={right} style={rightArrowStyles} onClick={goToNext}>&#10095;</div>
        <div className="slide" style={slideStyle}></div>
    </div>
    )
}

export default Slider