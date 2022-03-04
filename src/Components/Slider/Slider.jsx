import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import './Slider.css'

function Slider() {

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn"); 
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numerOfSlides = slides.length;
    var slideNumber = 0;
    
    nextBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;
        if(slideNumber > (numerOfSlides - 1)){
            slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    })

    prevBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber--;
        if(slideNumber < 0){
            slideNumber = numerOfSlides - 1;
        }
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    })

    var playSlider;
    var repeater = () =>{
        playSlider = setInterval(function() {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
    
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });
    
            slideNumber++;
            if(slideNumber > (numerOfSlides - 1)){
                slideNumber = 0;
            }
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        }, 4000);    
    }
    repeater();

    slider.addEventListener("mouseover", () =>{
        clearInterval(playSlider);  
    })

    slider.addEventListener("mouseout", () => {
        repeater();
    })
  }, [])

  return (
    <div className='principal'>
        <div className="slider">
            <div className="slide active">
                <img src={process.env.PUBLIC_URL + "/images/slider1.jpeg"} alt="" />
                <div className="info">
                    <h2>IMAGEN 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat.</p>
                </div>
            </div>

            <div className="slide">
                <img src={process.env.PUBLIC_URL + "/images/slider2.jpeg"} alt="" />
                <div className="info">
                    <h2>IMAGEN 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat.</p>
                </div>
            </div>

            <div className="slide">
                <img src={process.env.PUBLIC_URL + "/images/slider3.jpeg"} alt="" />
                <div className="info">
                    <h2>IMAGEN 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat.</p>
                </div>
            </div>

            <div className="slide">
                <img src={process.env.PUBLIC_URL + "/images/slider4.jpeg"} alt="" />
                <div className="info">
                    <h2>IMAGEN 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat.</p>
                </div>
            </div>
            <div className="navigation">
                <FontAwesomeIcon icon={faChevronLeft} className='prev-btn' />
                <FontAwesomeIcon icon={faChevronRight} className='next-btn' />
            </div>
            <div className="navigation-visibility">
                <div className="slide-icon active"></div>
                <div className="slide-icon"></div>
                <div className="slide-icon"></div>
                <div className="slide-icon"></div>
            </div>
        </div>
    </div>
  )
}

export default Slider