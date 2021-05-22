import QuestionCard from "./components/QuestionCars";
import { array } from './utils'

export type Question = {
    categori:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;
}

export type QuestionState = Question & { answers: string[]};

export enum difficulty {
    EASY= "easy",
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuiz = async (amount : number , difficulty:difficulty) =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question:Question)=>(
         {
            ...question,
            answer:array([...question. incorrect_answers, question.correct_answer])
         }   
    ))
}