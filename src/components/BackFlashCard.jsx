import { useState, useEffect } from "react";

const BackFlashCard = ({question, currentQuestion, setcardNumber, setFaceOfCard, setButton, cardNumber, quizLength, setCurrentQuestion, quiz}) => {
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
            <button type="submit" onClick={handleRestart}> Study Some More? </button>
        </div>
    } else {
        return <div className="flashCard">
        <div> {currentQuestion.answer} </div>
        <button type="submit" onClick={handleClick}> Next Question </button>
        </div>

    }

}

export default BackFlashCard