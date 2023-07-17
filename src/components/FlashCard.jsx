import { useState } from "react"
import FrontFlashCard from "./FrontFlashCard"
import BackFlashCard from "./BackFlashCard"


const FlashCard = ({setButton, setcardNumber, question,  cardNumber, quizLength, setCurrentQuestion, quiz, currentQuestion}) => {
    const [faceOfCard, setFaceOfCard] = useState (true)
    if(faceOfCard) {
        return <FrontFlashCard setFaceOfCard={setFaceOfCard} question={question} currentQuestion = {currentQuestion}/>
    } else {
        return <BackFlashCard  quiz={quiz} setCurrentQuestion ={setCurrentQuestion} setFaceOfCard ={setFaceOfCard} setButton={setButton} setcardNumber ={setcardNumber} question ={question} cardNumber={cardNumber} quizLength ={quizLength} currentQuestion = {currentQuestion}/>
    }


}

export default FlashCard    