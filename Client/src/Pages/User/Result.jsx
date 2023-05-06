import React, { useContext } from 'react'
import { QuizContext } from '../../redux/QuizContext.js';
import {useNavigate} from 'react-router-dom';

export default function Result() {
    const navigate = useNavigate();
    const { correct, setExit, setStart, quizzCount ,setCorrect} = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
        setCorrect(0)
    }
    
    const back = () => {
        navigate('/user/oders')
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>{correct} are correct out of {quizzCount}</h2>
                <button onClick={playAgain} className='border border-orange-500 p-3 text-2xl rounded'>Play agian</button>
                <button onClick={back} className='border border-orange-500 p-3 text-2xl rounded'>Back to Learing</button>
            </div>
        </div>
    )
}
