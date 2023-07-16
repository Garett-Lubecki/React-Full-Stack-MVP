import { useState, useEffect } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import AddPost from './components/AddPost'

function App() {
  
  const [quiz, setQuiz] = useState([])
  const URL = 'https://flash-cards.onrender.com/questions' //'http://localhost:8000/questions'
  const typesOfPages = ['Questions', 'Show All', 'Post']
  const [currentPage, setPage] = useState('Questions')
  const [displayPost, setDisplayPost] = useState(false)


    useEffect(() =>{
      const getData = async () => {
        const result = await fetch(URL)
        const data = await result.json()
        setQuiz(data)
      }
      getData()
    }, [])

  return (
    <>
      <NavigationBar setPage={setPage} displayPost={displayPost} setDisplayPost={setDisplayPost}/>
      {displayPost && <AddPost />}
      <MainPage quiz={quiz} currentPage ={currentPage}/>
      <Footer />
    </>
  )
}

export default App
