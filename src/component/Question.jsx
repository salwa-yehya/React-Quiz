import React, { useState } from "react";

const Question = ({ questions , handleScore , handleShowResult}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
 

   function CheckAnswer(isCorrect){
    // Increment the score if the answer is correct
       if(isCorrect){
        handleScore((prevScore)=> prevScore + 1)
          }
         if(currentQuestion +1 < questions.length){
            setCurrentQuestion(currentQuestion+1)
         }else{
            handleShowResult()
         }
       
   }
  return (
    <div className="question-card">
      <h2>
        Question {currentQuestion} out of {questions.length}
      </h2>
      {/* questions is array ,  reach spicfic question by its index [] using useState*/}
      <h3 className="question-text">{questions[currentQuestion].text}</h3>
      {/* List of possible answers  */}

      <ul>
        {questions[currentQuestion].options.map((option) => {
          return <li 
          key={option.id}
          onClick={()=>CheckAnswer(option.isCorrect)}
          >
            {option.text}
          </li>
        })}
      </ul>
    </div>
  );
};

export default Question;
