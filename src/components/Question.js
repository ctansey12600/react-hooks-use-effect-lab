//When the Question component renders, create a side effect using 
//useEffect and use setTimeout to run a callback function after 1 second.

// Inside the callback function for setTimeout, use the setTimeRemaining 
//function to decrease the amount of time remaining by 1 every 1 second.

// When timeRemaining hits 0, do the following:

// reset timeRemaining back to 10 seconds, so our next question will have 
// a fresh timer; and call the onAnswered callback prop with a value of false 
// (onAnswered(false)), to trigger some behavior in the App component.

// You should also use the cleanup function for useEffect to clean up 
// after the timeout function.

import React, { useState, useEffect } from 'react';

//question prop is an object that holds an id, prompt, answers, correectIndex(postion of answer)
//onAnswered takes in an agruement only if the answer is correct

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if(timeRemaining > 0){
      const timer = setTimeout(() => {setTimeRemaining(() => timeRemaining - 1)}, 1000)
      return () => clearTimeout(timer)
    }else{
      setTimeRemaining(10)
      onAnswered(false)
    }
  }, [timeRemaining]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10)
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {/* answers is an array that holds the option of possible answers  */}
      {answers.map((answer, index) => {
        // a value for isCorrect will be set if the index equals the correctIndex, if this value
        // is sent, the score will go up, if no value saved, the score will not go up
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
