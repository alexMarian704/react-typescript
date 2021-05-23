import React from 'react'
import { AnswerObject } from '../App'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestion }) => {
    return (
        <div>
            <h1>Question card</h1>
            <p className="numver">Question:{questionNr}/{totalQuestion}</p>
            <p dangerouslySetInnerHTML={{__html:question}} />
            <div>
                {answers.map((answer , i:number) =>(
                    <div key={i}>
                        <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                            <span dangerouslySetInnerHTML={{__html:answer}} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;
