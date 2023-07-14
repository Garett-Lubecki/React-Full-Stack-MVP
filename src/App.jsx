import { useState, useEffect } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'

function App() {
  
  const [quiz, setQuiz] = useState([])
  const URL = 'http://localhost:8000/questions'

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
      <NavigationBar />
      <MainPage quiz={quiz}/>
      <Footer />
    </>
  )
}

export default App
