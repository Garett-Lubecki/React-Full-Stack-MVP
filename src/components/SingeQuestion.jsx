import './SingleQuestion.css';
import { useState, useEffect } from 'react';

const SingleQuestion = ({ question, setQuiz }) => {
  const [edit, setEdit] = useState(false);
  const [textQuestion, setTextQuestion] = useState(question.question || '');
  const [textAnswer, setTextAnswer] = useState(question.answer || '');

  const handleQuestion = (e) => {
    setTextQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setTextAnswer(e.target.value);
  };

  const handleSwitch = (e) => {
    setEdit(!edit);
  };
  const handleDelete = async () => {
    try {
        console.log(textAnswer, textQuestion);
        const response = await fetch(`https://react-mvp-buuv.onrender.com/questions/${question.question_id}`, {
          method: 'DELETE'
        })
        const jsonData = await response.json();
        setQuiz((prevQuiz) => prevQuiz.filter((q) => q.question_id !== question.question_id));
      } catch (err) {
        console.log(err);
      }
  }

  const handleUpdate = async () => {
    try {
      console.log(textAnswer, textQuestion);
      const response = await fetch(`https://react-mvp-buuv.onrender.com/questions/${question.question_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: textQuestion, answer: textAnswer }),
      });
      const jsonData = await response.json();
      console.log(jsonData);

      setEdit(!edit);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch('https://react-mvp-buuv.onrender.com/questions');
        const data = await result.json();
        setQuiz(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getData();
  }, [setQuiz, edit]);

  if (edit) {
    console.log('here');

    return (
      <div className="singleQuestion">
        <form id="updateForm">
          <input type="text" placeholder="Update Question Here" id="inputQuestion" onChange={handleQuestion} value={textQuestion} />
          <input type="text" placeholder="Update Answer Here" id="inputAnswer" onChange={handleAnswer} value={textAnswer} />
        </form>
        <button id="updatePostButton" type="submit" onClick={handleUpdate}>
            Update Question
          </button>
        <button id="edit" type="submit" onClick={handleSwitch}>
          Edit Question
        </button>
      </div>
    );
  } else {
    return (
      <div className="singleQuestion">
        <div className="singleQ_Question">{question.question}</div>
        <div className="singleQ_Answer">{question.answer}</div>
        <button id="edit" type="submit" onClick={handleSwitch}>
          Edit Question
        </button>
        <button id="delete" type="submit" onClick={handleDelete}>
          Delete Question
        </button>
      </div>
    );
  }
};

export default SingleQuestion;