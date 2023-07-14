import {useState} from 'react'
import Button from './Button'



const Questions = ({quiz}) => {
    const [button, setButton] = useState(true)
    if(button) {
        return <Button quiz={quiz} setButton={setButton}/>
    } else{
        console.log(quiz)
        return <h1> outside button</h1>
    }



}

export default Questions