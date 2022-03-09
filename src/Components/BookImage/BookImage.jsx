import React, { useEffect } from 'react'
import './BookImage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const BookImage = () => {

  useEffect(() => {
    const prevBtn = document.querySelector('#prev-btn')
    const nextBtn = document.querySelector('#next-btn')
    const book = document.querySelector('#book')
    const paper1 = document.querySelector('#p1')
    const paper2 = document.querySelector('#p2')
    const paper3 = document.querySelector('#p3')

    prevBtn.addEventListener("click", goPrevPage)
    nextBtn.addEventListener("click", goNextPage)

    let currentLocation = 1
    let numOfPapers = 3
    let maxLocation = numOfPapers + 1

    function openBook(){
        book.style.transform = "translateX(50%)"
        prevBtn.style.transform = "translateX(-180px)"
        nextBtn.style.transform = "translateX(180px)"
    }

    function closeBook(isAtBeginning){

        if(isAtBeginning){
            book.style.transform = "translateX(0%)"
        }else{
            book.style.transform = "translateX(100%)"
        }    
        prevBtn.style.transform = "translateX(0)"
        nextBtn.style.transform = "translateX(0)"
    }

    function goNextPage(){
        if(currentLocation < maxLocation){
            switch(currentLocation){
                case 1:
                    openBook()
                    paper1.classList.add("flipped")
                    paper1.style.zIndex = 1
                    break
                case 2:
                    paper2.classList.add("flipped")
                    paper2.style.zIndex = 2
                    break
                case 3:
                    paper3.classList.add("flipped")
                    paper3.style.zIndex = 3
                    closeBook(false)
                    break
                default:
                    throw new Error("unkown state")
            }
            currentLocation++
        }
    }

    function goPrevPage(){
        if(currentLocation > 1){
            switch(currentLocation){
                case 2:
                    closeBook(true)
                    paper1.classList.remove("flipped")
                    paper1.style.zIndex = 3
                    break
                case 3:
                    paper2.classList.remove("flipped")
                    paper2.style.zIndex = 2
                    break
                case 4:
                    openBook()
                    paper3.classList.remove("flipped")
                    paper3.style.zIndex = 1
                    break
                default:
                    throw new Error("unkown state")
            }
            currentLocation--
        }
    }

  }, [])
    
  return (
    <>
        <div className="bookContainer">
            <button id="prev-btn">
                <FontAwesomeIcon icon={faCircleArrowLeft} style={{fontSize: 50, color: 'gray', transition: 'transform 0.5s' }} />
            </button>

            <div className="book" id="book">
                <div className="paper" id="p1">
                    <div className="front">
                        <div id="f1" className="front-content">
                            <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                        </div>
                    </div>
                    <div className="back">
                        <div id="b1" className="back-content">
                        <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                        </div>
                    </div>
                </div>

                <div className="paper" id="p2">
                    <div className="front">
                        <div id="f2" className="front-content">
                        <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                        </div>
                    </div>
                    <div className="back">
                        <div id="b2" className="back-content">
                        <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                        </div>
                    </div>
                </div>

                <div className="paper" id="p3">
                    <div className="front">
                        <div id="f3" className="front-content">
                        <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                        </div>
                    </div>
                    <div className="back">
                        <div id="b3" className="back-content">
                        <img src={process.env.PUBLIC_URL + "images/willow2Transparent.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <button id="next-btn">
                <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize: 50, color: 'gray', transition: 'transform 0.5s'}} />
            </button>
        </div>
    </>
  )
}

export default BookImage