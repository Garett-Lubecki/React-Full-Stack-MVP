import {useState, useEffect} from 'react'
import Button from './Button'
import FlashCard from './FlashCard'


const Questions = ({quiz}) => {
    const [button, setButton] = useState(true)
    const [cardNumber, setcardNumber] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(null)

    useEffect(() => {
        setCurrentQuestion(quiz[cardNumber]);
      }, [cardNumber, quiz]);

    if(button) {
        return <Button quiz={quiz} setButton={setButton}/>
    } else{
        return <FlashCard  currentQuestion = {currentQuestion} quiz={quiz} setcardNumber = {setcardNumber} setCurrentQuestion ={setCurrentQuestion} cardNumber={cardNumber}/>
    }



}

export default Questions