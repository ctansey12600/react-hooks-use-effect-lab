import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  //This state holds an array with content of
  // {id: 1, prompt: 'What special prop should always be included for lists of elements?'
  // , answers: Array(4), correctIndex: 2}
  const [questions, setQuestions] = useState(quiz);
  //This needs to go up by 1 each time that the answer is correct so that the answer changes
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  //This needs to increase by 1 each time the answer is correct
  const [score, setScore] = useState(0);
  //This line takes in the array of question and finds the first id that matches the state of 1
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  console.log("Questions:", questions)
  console.log("CurrentQuestionId:", currentQuestionId)
  console.log("Score:", score)
  console.log("Current Question:", currentQuestion)

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
