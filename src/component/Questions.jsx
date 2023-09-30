import React from 'react'
import { questions } from '../data'
import Question from './Question'


const Questions = ({handleShowResult , setScore}) => {


  //function to handle score from child "Question"
    const handleScore=(newscore)=>{
      setScore(newscore)
    }
  return (
    <div>
        <h1> React Quiz</h1>
        <Question questions={questions} handleScore={handleScore} handleShowResult={handleShowResult}/>
        
    </div>
  )
}

export default Questions