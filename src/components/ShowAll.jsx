
import SingleQuestion from "./SingeQuestion"
const ShowAll = ({quiz}) => {
    return quiz.map( (question) => (
        <SingleQuestion key={question.question_id} question = {question}/>
    ))
    
}

export default ShowAll