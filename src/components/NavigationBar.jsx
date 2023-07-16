
import './NavigationBar.css'

const NavigationBar = ({setPage, displayPost, setDisplayPost}) => {
    //set state to render home screen on click
    function handleHome () {
        setPage('Questions')
    }
    function handleShowAll () {
        setPage('Show All')
    }

    function handlePost () {
        setDisplayPost(!displayPost)
    }
    return (
        <>
        <nav id='navigationBar'>
            <div id='homeBTN' className="navigationButtons" onClick={handleHome}> 
                <a href="#"><b>Flash Cards</b></a>
            </div>
            
            <div id="navigationLinks">
                <ul id = 'navigationList'>
                    <li id="showAll" className="navButtons" onClick={handleShowAll}>
                        <a href='#'> All Questions </a>
                    </li>
                    <li id="showPost" className="navButtons" onClick={handlePost}>
                        <a href='#'> Add Question</a>
                    </li>
                </ul>
            </div>
        </nav>  
    </>
    )
}

export default NavigationBar