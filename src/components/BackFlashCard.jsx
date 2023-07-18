import { useState, useEffect } from "react";
import './backFlashCard.css'

const BackFlashCard = ({currentQuestion, setcardNumber, setFaceOfCard, cardNumber, setCurrentQuestion, quiz}) => {
    function handleClick() {
        setcardNumber(++cardNumber)
        console.log(`Quiz lenght ${quiz.length} and Current Card ${cardNumber}`)
        if(quiz.length === cardNumber){
            return 
        } 
        console.log(cardNumber)
        setCurrentQuestion(quiz[cardNumber++]);
        setFaceOfCard(true)
    }

    function handleRestart () {
        setcardNumber(0)
        setCurrentQuestion(quiz[0])
        setFaceOfCard(true)
    }
    if(quiz.length === cardNumber){
        return <div>
            <button id ="againBtn"type="submit" onClick={handleRestart}> Study Some More? </button>
        </div>
    } else {
        return <div class="flashCard">
        <div class="answer">{currentQuestion.answer}</div>
        <button type="submit" class="nextButton" onClick={handleClick}>Next Question</button>
      </div>

    }

}

export default BackFlashCard