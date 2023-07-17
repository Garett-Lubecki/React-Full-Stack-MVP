import Questions from './Questions'
import ShowAll from './ShowAll'
import {useState} from 'react'
import './MainPage.css'

const MainPage = ({quiz, currentPage, setQuiz}) => {

    if(currentPage === 'Questions') {
        return <div className = 'mainPageQuestions'>
            <Questions quiz={quiz}/>
            </div>
    }
    if(currentPage === 'Show All') {
        return <div className='allQuestions'> 
            <ShowAll quiz={quiz} setQuiz ={setQuiz}/>
        </div>
    }
}

export default MainPage