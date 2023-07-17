
import './frontFlashCard.css'

const FrontFlashCard = ({setFaceOfCard, question, currentQuestion}) => {
    function handleClick () {
        setFaceOfCard(false)
    }
    return (
        <div className="flashCard" onClick={handleClick}>
            {currentQuestion.question}
        </div>
    )
}

export default FrontFlashCard