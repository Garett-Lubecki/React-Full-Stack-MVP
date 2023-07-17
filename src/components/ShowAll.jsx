import {useState, useEffect} from 'react'
import SingleQuestion from "./SingeQuestion"



const ShowAll = ({quiz, setQuiz}) => {
    const URL = 'http://localhost:8000/questions'
    useEffect(() =>{
        const getData = async () => {
        try{
                const result = await fetch(URL)
                const data = await result.json()
                setQuiz(data)
              }
         catch (err){
            console.log(err.message)
        }
        }

        getData()

      }, [])
    return quiz.map( (question) => (
        <SingleQuestion key={question.question_id} question = {question} setQuiz={setQuiz}/>
    ))
    
}

export default ShowAll