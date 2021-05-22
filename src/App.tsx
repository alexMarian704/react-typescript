import React , {useState} from 'react';
import { fetchQuiz } from './api';
import QuestionCard from './components/QuestionCars';
import {difficulty} from './api'

const TOTAL = 10;

function App() {
  const [loading , setLoading] = useState(false);
  const [question , setQuestion] = useState([]);
  const [number , setNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState([])
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true); 

  console.log(fetchQuiz(TOTAL , difficulty.EASY))

  const startTrivia = async()=>{

  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion = () =>{

  }

  return (
    <div className="App">
      <h1>Quiz app</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading..</p>
      {/* <QuestionCard 
        questionNr={number+1}
        totalQuestion={TOTAL}
        question={question[number].question}
        answers={question[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
