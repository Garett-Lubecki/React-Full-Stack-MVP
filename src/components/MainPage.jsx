import Questions from './Questions'
import {useState} from 'react'
import './MainPage.css'

const MainPage = ({quiz}) => {
    const typesOfPages = ['Questions', 'Show All', 'Post']
    const [currentPage, setPage] = useState('Questions')
    
    if(currentPage === 'Questions') {
        return <div className = 'mainPageQuestions'>
            <Questions quiz={quiz}/>
            </div>
    }
}

export default MainPage