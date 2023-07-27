import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();



export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [quizzCount, setQuizzCount] = useState(0);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    const [courseId, setCourseId] = useState("");
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit,courseId, setCourseId ,quizzCount, setQuizzCount,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };