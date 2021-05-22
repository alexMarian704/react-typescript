import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
                {answers.map(answer =>(
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:answer}} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;
