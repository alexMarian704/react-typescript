import React, { useState } from 'react';
import { fetchQuiz } from './api';
import QuestionCard from './components/QuestionCars';
import { QuestionState, difficulty } from './api'
import { GlobalStyle , Wrapper } from './App.styles'

const TOTAL = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(question)

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuiz(
      TOTAL,
      difficulty.EASY
    )

    setQuestion(newQuestions);
    setScore(0)
    setUserAnswers([])
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if(!gameOver){
        const answer = e.currentTarget.value;
        const correct = question[number].correct_answer === answer;
        if(correct)
          setScore(score + 1)
        const answerObject = {
          question:question[number].question,
          answer,
          correct,
          correctAnswer:question[number].correct_answer,
        }
        setUserAnswers(prev => [...prev , answerObject])
      }
  }

  const nextQuestion = () => {
        const nextQuestion = number + 1;
        if(nextQuestion === TOTAL){
          setGameOver(true)
        }else{
          setNumber(nextQuestion);
        }
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
    <div className="App">
      <h1>Quiz app</h1>
      {(gameOver === true || userAnswers.length === TOTAL) && <button className="start" onClick={startTrivia}>
        Start
      </button>}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading..</p>}
      {(!loading && !gameOver) && <QuestionCard
        questionNr={number + 1}
        totalQuestion={TOTAL}
        question={question[number].question}
        answers={question[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL - 1 &&
        <button className="next" onClick={nextQuestion}>Next</button>
      }
    </div>
    </Wrapper>
    </>
  );
}

export default App;
