import Questions from './Questions'
import {useState} from 'react'

const MainPage = ({quiz}) => {
    const typesOfPages = ['Questions', 'Show All', 'Post']

    const [currentPage, setPage] = useState('Questions')
    if(currentPage === 'Questions') {
        return <Questions quiz={quiz}/>
    }
}

export default MainPage