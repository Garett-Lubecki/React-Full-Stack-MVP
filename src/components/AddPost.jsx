import {useState} from 'react'
import './addPost.css'

const AddPost = () => {

    const [textQuestion, setTextQuestion] = useState('')
    const [textAnswer, setTextAnswer] = useState('')

    const handleQuestion  = (e) => {
            setTextQuestion(e.target.value)
        }

    const handleAnswer = (e) => {
        setTextAnswer(e.target.value)
    }

    const handlePost = () => {
        console.log(textAnswer, textQuestion)
        async function postRequest () {
            try {
                const response = await fetch(`http://localhost:8000/questions`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({question: textQuestion, answer: textAnswer})
                }) 
            const jsonData = await response.json()
            }
            catch(err){
                console.log(err)
            }
        }
        postRequest()
    }

    return (
        <form id='postForm'>
            <input type="text" placeholder="Question Here" id="inputQuestion" onChange={handleQuestion} value={textQuestion}/>
            <input type = "text" placeholder="Answer Here" id="indputAnswer" onChange={handleAnswer} value={textAnswer}/>
            <button id="addPostButton" type="submit" onClick={handlePost}> Add Question </button>
        </form>
    )
}

export default AddPost