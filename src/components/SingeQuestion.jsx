import './SingleQuestion.css'

const SingleQuestion = ({question}) => {
    return (
        <div className="singleQuestion" > 
            <div className="singleQ_Question"> 
                {question.question}
            </div>
            <div className="singleQ_Answer">
                {question.answer}
            </div>
        </div>
    )
}

export default SingleQuestion