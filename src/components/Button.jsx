

const Button = ({quiz, setButton}) => {
    const handleClick = () => {
        setButton(false)
    }

    return (
        <div>
        <button type="submit" onClick={handleClick}> Start Quiz
        </button>
        </div>
    )

}

export default Button