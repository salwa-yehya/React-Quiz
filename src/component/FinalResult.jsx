import React from 'react'
import { questions } from '../data'

const FinalResult = ({score}) => {
  return (
    <div className='final-results'>
        <h1> Final Result</h1>
        <h2> {score} out of {questions.length} - (
            {(score / questions.length) * 100}%) </h2>
    </div>
  )
}

export default FinalResult