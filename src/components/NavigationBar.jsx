
import './NavigationBar.css'

const NavigationBar = () => {
    //set state to render home screen on click
    
    return (
        <>
        <nav id='navigationBar'>
            <div id='homeBTN' className="navigationButtons"> 
                <a href="#"><b>Flash Cards</b></a>
            </div>
            
            <div id="navigationLinks">
                <ul id = 'navigationList'>
                    <li id="showAll" className="navButtons">
                        <a href='#'> All Questions </a>
                    </li>
                    <li id="showPost" className="navButtons">
                        <a href='#'> Add Question</a>
                    </li>
                </ul>
            </div>
        </nav>  
    </>
    )
}

export default NavigationBar